const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function scrapeHuntflow() {
  const outputDir = './huntflow-data';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  console.log('Navigating to huntflow.ru...');
  await page.goto('https://huntflow.ru/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  
  // Wait for animations to settle
  await page.waitForTimeout(2000);

  // 1. Full page screenshot
  console.log('Taking full page screenshot...');
  await page.screenshot({ 
    path: path.join(outputDir, '01-full-page.png'), 
    fullPage: true 
  });

  // 2. Viewport screenshots at different scroll positions
  console.log('Taking scroll screenshots...');
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const viewportHeight = 900;
  let scrollPosition = 0;
  let screenshotIndex = 1;

  while (scrollPosition < pageHeight) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollPosition);
    await page.waitForTimeout(500); // Wait for scroll animations
    await page.screenshot({ 
      path: path.join(outputDir, `02-scroll-${String(screenshotIndex).padStart(2, '0')}.png`)
    });
    scrollPosition += viewportHeight * 0.8; // Overlap for context
    screenshotIndex++;
  }

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  // 3. Extract HTML structure
  console.log('Extracting HTML structure...');
  const htmlContent = await page.content();
  fs.writeFileSync(path.join(outputDir, '03-full-html.html'), htmlContent);

  // 4. Extract sections and their structure
  console.log('Extracting section structure...');
  const sections = await page.evaluate(() => {
    const result = [];
    const allSections = document.querySelectorAll('section, [class*="section"], header, footer, nav');
    
    allSections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      result.push({
        index,
        tagName: section.tagName,
        className: section.className,
        id: section.id,
        position: { top: rect.top + window.scrollY, height: rect.height },
        innerHTML: section.innerHTML.substring(0, 2000), // First 2000 chars
        computedStyle: {
          backgroundColor: getComputedStyle(section).backgroundColor,
          padding: getComputedStyle(section).padding,
          margin: getComputedStyle(section).margin,
        }
      });
    });
    
    return result;
  });
  fs.writeFileSync(path.join(outputDir, '04-sections.json'), JSON.stringify(sections, null, 2));

  // 5. Extract all CSS (including animations)
  console.log('Extracting CSS and animations...');
  const cssData = await page.evaluate(() => {
    const styles = [];
    const animations = [];
    
    // Get all stylesheets
    for (const sheet of document.styleSheets) {
      try {
        const rules = sheet.cssRules || sheet.rules;
        for (const rule of rules) {
          if (rule.type === CSSRule.KEYFRAMES_RULE) {
            animations.push({
              name: rule.name,
              keyframes: rule.cssText
            });
          }
        }
      } catch (e) {
        // Cross-origin stylesheets can't be accessed
      }
    }

    // Get inline styles with transitions/animations
    const animatedElements = document.querySelectorAll('[style*="transition"], [style*="animation"], [class*="animate"], [class*="motion"]');
    animatedElements.forEach(el => {
      const computed = getComputedStyle(el);
      styles.push({
        className: el.className,
        transition: computed.transition,
        animation: computed.animation,
        transform: computed.transform,
      });
    });

    return { animations, animatedStyles: styles };
  });
  fs.writeFileSync(path.join(outputDir, '05-css-animations.json'), JSON.stringify(cssData, null, 2));

  // 6. Extract color palette
  console.log('Extracting color palette...');
  const colors = await page.evaluate(() => {
    const colorSet = new Set();
    const elements = document.querySelectorAll('*');
    
    elements.forEach(el => {
      const style = getComputedStyle(el);
      if (style.color) colorSet.add(style.color);
      if (style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)') {
        colorSet.add(style.backgroundColor);
      }
    });
    
    return [...colorSet];
  });
  fs.writeFileSync(path.join(outputDir, '06-colors.json'), JSON.stringify(colors, null, 2));

  // 7. Extract typography
  console.log('Extracting typography...');
  const typography = await page.evaluate(() => {
    const fonts = new Set();
    const textStyles = [];
    
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');
    headings.forEach(el => {
      const style = getComputedStyle(el);
      fonts.add(style.fontFamily);
      
      if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)) {
        textStyles.push({
          tag: el.tagName,
          text: el.textContent?.substring(0, 100),
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          lineHeight: style.lineHeight,
          fontFamily: style.fontFamily,
          color: style.color,
          letterSpacing: style.letterSpacing,
        });
      }
    });
    
    return { fonts: [...fonts], textStyles };
  });
  fs.writeFileSync(path.join(outputDir, '07-typography.json'), JSON.stringify(typography, null, 2));

  // 8. Extract layout structure (grid, flexbox)
  console.log('Extracting layout structure...');
  const layout = await page.evaluate(() => {
    const layouts = [];
    const containers = document.querySelectorAll('[class*="container"], [class*="wrapper"], [class*="grid"], [class*="flex"]');
    
    containers.forEach(el => {
      const style = getComputedStyle(el);
      layouts.push({
        className: el.className,
        display: style.display,
        gridTemplateColumns: style.gridTemplateColumns,
        gridGap: style.gap,
        flexDirection: style.flexDirection,
        justifyContent: style.justifyContent,
        alignItems: style.alignItems,
        maxWidth: style.maxWidth,
        padding: style.padding,
      });
    });
    
    return layouts;
  });
  fs.writeFileSync(path.join(outputDir, '08-layout.json'), JSON.stringify(layout, null, 2));

  // 9. Extract navigation structure
  console.log('Extracting navigation...');
  const navigation = await page.evaluate(() => {
    const nav = document.querySelector('header, nav, [class*="header"], [class*="nav"]');
    if (!nav) return null;
    
    const links = nav.querySelectorAll('a');
    return {
      html: nav.outerHTML,
      links: [...links].map(a => ({
        text: a.textContent?.trim(),
        href: a.href,
        className: a.className
      }))
    };
  });
  fs.writeFileSync(path.join(outputDir, '09-navigation.json'), JSON.stringify(navigation, null, 2));

  // 10. Extract hero section specifically
  console.log('Extracting hero section...');
  const hero = await page.evaluate(() => {
    // Look for hero-like sections
    const heroSelectors = ['[class*="hero"]', '[class*="banner"]', 'section:first-of-type', 'main > div:first-child'];
    
    for (const selector of heroSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        const rect = el.getBoundingClientRect();
        return {
          html: el.outerHTML,
          className: el.className,
          height: rect.height,
          style: {
            background: getComputedStyle(el).background,
            padding: getComputedStyle(el).padding,
          }
        };
      }
    }
    return null;
  });
  fs.writeFileSync(path.join(outputDir, '10-hero.json'), JSON.stringify(hero, null, 2));

  // 11. Extract buttons and CTAs
  console.log('Extracting buttons...');
  const buttons = await page.evaluate(() => {
    const btns = document.querySelectorAll('button, [class*="btn"], [class*="button"], a[class*="cta"]');
    return [...btns].slice(0, 20).map(btn => {
      const style = getComputedStyle(btn);
      return {
        text: btn.textContent?.trim(),
        className: btn.className,
        backgroundColor: style.backgroundColor,
        color: style.color,
        borderRadius: style.borderRadius,
        padding: style.padding,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        border: style.border,
        boxShadow: style.boxShadow,
        transition: style.transition,
      };
    });
  });
  fs.writeFileSync(path.join(outputDir, '11-buttons.json'), JSON.stringify(buttons, null, 2));

  // 12. Extract images and visual assets
  console.log('Extracting images...');
  const images = await page.evaluate(() => {
    const imgs = document.querySelectorAll('img, [class*="image"], svg');
    return [...imgs].slice(0, 30).map(img => ({
      tagName: img.tagName,
      src: img.src || img.getAttribute('src'),
      alt: img.alt,
      className: img.className,
      width: img.offsetWidth,
      height: img.offsetHeight,
    }));
  });
  fs.writeFileSync(path.join(outputDir, '12-images.json'), JSON.stringify(images, null, 2));

  // 13. Page structure summary
  console.log('Creating structure summary...');
  const summary = await page.evaluate(() => {
    const main = document.querySelector('main') || document.body;
    const children = main.children;
    
    return {
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content,
      sectionsCount: document.querySelectorAll('section').length,
      structure: [...children].map((child, i) => ({
        index: i,
        tagName: child.tagName,
        className: child.className?.substring(0, 100),
        id: child.id,
        height: child.offsetHeight,
        firstHeading: child.querySelector('h1, h2, h3')?.textContent?.substring(0, 80)
      }))
    };
  });
  fs.writeFileSync(path.join(outputDir, '13-structure-summary.json'), JSON.stringify(summary, null, 2));

  await browser.close();
  console.log('\n✅ Data extraction complete! Files saved to:', outputDir);
  console.log('\nFiles created:');
  fs.readdirSync(outputDir).forEach(file => console.log('  -', file));
}

scrapeHuntflow().catch(console.error);

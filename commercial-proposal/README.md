# Коммерческое предложение WorkHere

Эта директория содержит материалы коммерческого предложения для продукта WorkHere.

## Файлы

- `workhere-proposal.md` — исходный текст КП в формате Markdown
- `WorkHere_Commercial_Proposal.pdf` — готовый PDF-файл
- `generate_pdf.py` — скрипт для генерации PDF из Markdown
- `requirements.txt` — зависимости Python

## Перегенерация PDF

Если нужно обновить PDF после изменений в `workhere-proposal.md`:

```bash
cd commercial-proposal
pip install -r requirements.txt
python3 generate_pdf.py
```

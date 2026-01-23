'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MascotProps {
  size?: number;
  className?: string;
  animate?: boolean;
  variant?: 'float' | 'bounce' | 'spin' | 'wave' | 'crazy';
}

export default function Mascot({ 
  size = 200, 
  className = '', 
  animate = true,
  variant = 'float'
}: MascotProps) {
  
  const animations = {
    float: {
      y: [-10, 10, -10],
      rotate: [-3, 3, -3],
    },
    bounce: {
      y: [-20, 0, -20],
      scale: [1, 1.05, 1],
    },
    spin: {
      rotate: [0, 360],
    },
    wave: {
      rotate: [-10, 10, -10],
      x: [-5, 5, -5],
    },
    crazy: {
      y: [-15, 15, -15],
      rotate: [-8, 8, -8],
      scale: [1, 1.1, 1, 1.1, 1],
    },
  };

  const transitions: Record<string, { duration: number; repeat: number; ease: "easeInOut" | "linear" }> = {
    float: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    bounce: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    spin: { duration: 8, repeat: Infinity, ease: "linear" },
    wave: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    crazy: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  };

  // Base64 encoded mascot image (blue cat astronaut with laptop)
  const mascotDataUrl = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY2F0Qm9keSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2QkE1RDciLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNEE5MEM3Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJoZWxtZXQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRThGNEZGIiBzdG9wLW9wYWNpdHk9IjAuOSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNCOEQ0RjAiIHN0b3Atb3BhY2l0eT0iMC43Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJzdWl0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y4RjhGOCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFMEUwRTAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InRhaWwiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzZCQTVENyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzg3Q0VFQiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNBREQ4RTYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIyIiBkeT0iNCIgc3RkRGV2aWF0aW9uPSI2IiBmbG9vZC1jb2xvcj0iIzAwMCIgZmxvb2Qtb3BhY2l0eT0iMC4xNSIvPgogICAgPC9maWx0ZXI+CiAgPC9kZWZzPgoKICA8IS0tIE91dGVyIHdoaXRlIHN0aWNrZXIgYm9yZGVyIC0tPgogIDxlbGxpcHNlIGN4PSIxMDAiIGN5PSIxMDUiIHJ4PSI5MiIgcnk9Ijk1IiBmaWxsPSJ3aGl0ZSIgZmlsdGVyPSJ1cmwoI3NoYWRvdykiLz4KICAKICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCwgMTApIj4KICAgIDwhLS0gVGFpbCAtLT4KICAgIDxwYXRoIGQ9Ik0xNDUsMTMwIFExNzAsMTIwIDE3NSw5NSBRMTY1LDcwIDE1MCw4MCBRMTM1LDkwIDE0MCwxMTAgWiIgZmlsbD0idXJsKCN0YWlsKSIvPgogICAgPHBhdGggZD0iTTE1MCwxMDUgUTE2MCwxMDAgMTY1LDkwIiBzdHJva2U9IiNBREQ4RTYiIHN0cm9rZS13aWR0aD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAKICAgIDwhLS0gQm9keSBzdWl0IC0tPgogICAgPGVsbGlwc2UgY3g9IjkwIiBjeT0iMTIwIiByeD0iNDUiIHJ5PSI1MCIgZmlsbD0idXJsKCNzdWl0KSIvPgogICAgCiAgICA8IS0tIFN1aXQgc3RyaXBlcyAtLT4KICAgIDxwYXRoIGQ9Ik01NSwxMDAgUTkwLDk1IDEyNSwxMDAiIHN0cm9rZT0iI0QwRDBEMCIgc3Ryb2tlLXdpZHRoPSIyLjUiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik01OCwxMTUgUTkwLDExMCAxMjIsMTE1IiBzdHJva2U9IiNEMEQwRDAiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBkPSJNNjIsMTMwIFE5MCwxMjUgMTE4LDEzMCIgc3Ryb2tlPSIjRDBEMEQwIiBzdHJva2Utd2lkdGg9IjIuNSIgZmlsbD0ibm9uZSIvPgogICAgPHBhdGggZD0iTTY4LDE0NSBROTASMTQ1IDExMiwxNDUiIHN0cm9rZT0iI0QwRDBEMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+CiAgICAKICAgIDwhLS0gTmVjayByaW5nIC0tPgogICAgPGVsbGlwc2UgY3g9IjkwIiBjeT0iNzUiIHJ4PSIzMCIgcnk9IjgiIGZpbGw9IiM0MDUwNjAiLz4KCiAgICA8IS0tIEhlbG1ldCBnbGFzcyAtLT4KICAgIDxjaXJjbGUgY3g9IjkwIiBjeT0iNTAiIHI9IjQyIiBmaWxsPSJ1cmwoI2hlbG1ldCkiLz4KICAgIDxlbGxpcHNlIGN4PSI3NSIgY3k9IjM1IiByeD0iMTgiIHJ5PSIxMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNCIvPgoKICAgIDwhLS0gQ2F0IGhlYWQgLS0+CiAgICA8ZWxsaXBzZSBjeD0iOTAiIGN5PSI1MiIgcng9IjMwIiByeT0iMjYiIGZpbGw9InVybCgjY2F0Qm9keSkiLz4KICAgIAogICAgPCEtLSBFYXJzIC0tPgogICAgPHBhdGggZD0iTTYyLDM1IEw1MywxMCBMNzIsMjggWiIgZmlsbD0idXJsKCNjYXRCb2R5KSIvPgogICAgPHBhdGggZD0iTTExOCwzNSBMMTI3LDEwIEwxMDgsMjggWiIgZmlsbD0idXJsKCNjYXRCb2R5KSIvPgogICAgPHBhdGggZD0iTTY0LDMzIEw1OCwxNSBMNzAsMjkgWiIgZmlsbD0iI0ZGQTBBMCIgb3BhY2l0eT0iMC41Ii8+CiAgICA8cGF0aCBkPSJNMTE2LDMzIEwxMjIsMTUgTDExMCwyOSBaIiBmaWxsPSIjRkZBMEEwIiBvcGFjaXR5PSIwLjUiLz4KCiAgICA8IS0tIEV5ZXMgLS0+CiAgICA8ZWxsaXBzZSBjeD0iNzUiIGN5PSI0OCIgcng9IjkiIHJ5PSIxMSIgZmlsbD0id2hpdGUiLz4KICAgIDxlbGxpcHNlIGN4PSIxMDUiIGN5PSI0OCIgcng9IjkiIHJ5PSIxMSIgZmlsbD0id2hpdGUiLz4KICAgIDxjaXJjbGUgY3g9Ijc3IiBjeT0iNDkiIHI9IjYiIGZpbGw9IiMyRDM3NDgiLz4KICAgIDxjaXJjbGUgY3g9IjEwNyIgY3k9IjQ5IiByPSI2IiBmaWxsPSIjMkQzNzQ4Ii8+CiAgICA8Y2lyY2xlIGN4PSI3OSIgY3k9IjQ3IiByPSIyLjUiIGZpbGw9IndoaXRlIi8+CiAgICA8Y2lyY2xlIGN4PSIxMDkiIGN5PSI0NyIgcj0iMi41IiBmaWxsPSJ3aGl0ZSIvPgoKICAgIDwhLS0gTm9zZSAtLT4KICAgIDxlbGxpcHNlIGN4PSI5MCIgY3k9IjU4IiByeD0iMyIgcnk9IjIiIGZpbGw9IiNGRjlGOUYiLz4KICAgIAogICAgPCEtLSBNb3V0aCAtLT4KICAgIDxwYXRoIGQ9Ik04NCw2MyBROTAsNjggOTYsNjMiIHN0cm9rZT0iIzRBOTBDNyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KCiAgICA8IS0tIFdoaXNrZXJzIC0tPgogICAgPGcgc3Ryb2tlPSIjNEE5MEM3IiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC41Ij4KICAgICAgPGxpbmUgeDE9IjUwIiB5MT0iNTIiIHgyPSI2NSIgeTI9IjU1Ii8+CiAgICAgIDxsaW5lIHgxPSI0OCIgeTE9IjU4IiB4Mj0iNjQiIHkyPSI1OCIvPgogICAgICA8bGluZSB4MT0iNTAiIHkxPSI2NCIgeDI9IjY1IiB5Mj0iNjEiLz4KICAgICAgPGxpbmUgeDE9IjEzMCIgeTE9IjUyIiB4Mj0iMTE1IiB5Mj0iNTUiLz4KICAgICAgPGxpbmUgeDE9IjEzMiIgeTE9IjU4IiB4Mj0iMTE2IiB5Mj0iNTgiLz4KICAgICAgPGxpbmUgeDE9IjEzMCIgeTE9IjY0IiB4Mj0iMTE1IiB5Mj0iNjEiLz4KICAgIDwvZz4KCiAgICA8IS0tIEFybXMgLS0+CiAgICA8ZWxsaXBzZSBjeD0iNDUiIGN5PSIxMTAiIHJ4PSIxMiIgcnk9IjIwIiBmaWxsPSJ1cmwoI3N1aXQpIi8+CiAgICA8ZWxsaXBzZSBjeD0iMTM1IiBjeT0iMTEwIiByeD0iMTIiIHJ5PSIyMCIgZmlsbD0idXJsKCNzdWl0KSIvPgogICAgCiAgICA8IS0tIFBhd3MgLS0+CiAgICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjEyOCIgcj0iMTAiIGZpbGw9InVybCgjY2F0Qm9keSkiLz4KICAgIDxjaXJjbGUgY3g9IjE0MCIgY3k9IjEyOCIgcj0iMTAiIGZpbGw9InVybCgjY2F0Qm9keSkiLz4KCiAgICA8IS0tIExhcHRvcCAtLT4KICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKC0xNSwgNjAsIDE0MCkiPgogICAgICA8IS0tIFNjcmVlbiAtLT4KICAgICAgPHJlY3QgeD0iMjAiIHk9IjEwNSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzJEMzc0OCIvPgogICAgICA8cmVjdCB4PSIyNCIgeT0iMTA5IiB3aWR0aD0iNDciIGhlaWdodD0iMzIiIHJ4PSIyIiBmaWxsPSIjMTg5MGZmIi8+CiAgICAgIAogICAgICA8IS0tIFNjcmVlbiBjb250ZW50IC0tPgogICAgICA8cmVjdCB4PSIyOCIgeT0iMTE0IiB3aWR0aD0iMjIiIGhlaWdodD0iMyIgcng9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjgiLz4KICAgICAgPHJlY3QgeD0iMjgiIHk9IjEyMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMiIHJ4PSIxIiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC42Ii8+CiAgICAgIDxyZWN0IHg9IjI4IiB5PSIxMjYiIHdpZHRoPSIyNyIgaGVpZ2h0PSIzIiByeD0iMSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNyIvPgogICAgICA8cmVjdCB4PSIyOCIgeT0iMTMyIiB3aWR0aD0iMTgiIGhlaWdodD0iMyIgcng9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjUiLz4KICAgICAgCiAgICAgIDwhLS0gQmFzZSAtLT4KICAgICAgPHBhdGggZD0iTTE1LDE0NSBMODAsMTQ1IEw4NSwxNTggTDEwLDE1OCBaIiBmaWxsPSIjMkQzNzQ4Ii8+CiAgICA8L2c+CgogICAgPCEtLSBDb2xsYXIgYmFkZ2UgLS0+CiAgICA8Y2lyY2xlIGN4PSI5MCIgY3k9IjgyIiByPSI2IiBmaWxsPSIjMTg5MGZmIi8+CiAgICA8dGV4dCB4PSI5MCIgeT0iODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjciIGZvbnQtd2VpZ2h0PSJib2xkIj5XPC90ZXh0PgogIDwvZz4KPC9zdmc+`;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <motion.div
        animate={animate ? animations[variant] : undefined}
        transition={transitions[variant]}
        className="w-full h-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mascotDataUrl}
          alt="WorkHere Mascot"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </motion.div>
      
      {/* Sparkle effects around mascot */}
      {animate && variant === 'crazy' && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#1890ff] rounded-full"
              style={{
                left: `${20 + (i * 12)}%`,
                top: `${10 + (i * 15) % 80}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
}

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const lines = [
  '$ npm run mareeha --cute',
  '> resolving creativity@latest...',
  '> drawing pixels by hand...',
  '> compiling good vibes...',
  '> done in 0.9s ✓',
]

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 380)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setVisible(false), 500)
    return () => clearTimeout(t)
  }, [lineIndex])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] bg-ink flex items-center justify-center px-6"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="font-mono text-mint text-sm sm:text-base w-full max-w-md">
            {lines.slice(0, lineIndex + 1).map((line, i) => (
              <p key={i} className="mb-1">
                {line}
                {i === lineIndex && <span className="animate-pulse">▌</span>}
              </p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

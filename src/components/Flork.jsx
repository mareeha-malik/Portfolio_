import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import flork from '../assets/Flork1.svg'
const LINES = [
  "don't poke me",
  "...ok one more time",
  "i live here now",
  "10/10 portfolio btw",
  "shh i'm doodling",
  "ctrl+s your work",
  "you can drag me, you know",
  "hire her, she's cool",
  "okay but gently",
  "i see you scrolling",
  "this is my house now",
  "rate my portfolio 11/10",
  "stop. ok continue",
  "i'm load-bearing, be careful",
]

const PARTY_LINES = ["ok that's a party now 🎉", "WE CELEBRATING 🎊", "you found the secret!! 🥳"]

const CONFETTI_COLORS = ['#FF6FA0', '#3A5BFF', '#FFD23F', '#BFEFC0', '#20201C']

// The flork meme sticker — bobs forever, watches the cursor, can be dragged
// around, and on click cycles through one-liners (plus a confetti easter
// egg every 5th poke). Drawn as inline SVG, no asset needed.
export default function Flork({ className = '', size = 64 }) {
  const [open, setOpen] = useState(false)
  const [lineIndex, setLineIndex] = useState(0)
  const [currentLine, setCurrentLine] = useState(LINES[0])
  const [poked, setPoked] = useState(false)
  const [blink, setBlink] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [pupil, setPupil] = useState({ x: 0, y: 0 })
  const svgRef = useRef(null)
  const pokeCount = useRef(0)

  // eyes quietly follow the cursor anywhere on the page
  useEffect(() => {
    function handleMove(e) {
      const el = svgRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy) || 1
      const max = 2.4
      setPupil({ x: (dx / dist) * max, y: (dy / dist) * max })
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  // occasional, slightly random blinking so it feels alive
  useEffect(() => {
    let timeout
    const scheduleBlink = () => {
      timeout = setTimeout(() => {
        setBlink(true)
        setTimeout(() => setBlink(false), 140)
        scheduleBlink()
      }, 2600 + Math.random() * 2800)
    }
    scheduleBlink()
    return () => clearTimeout(timeout)
  }, [])

  const handleClick = () => {
    pokeCount.current += 1
    const isParty = pokeCount.current % 5 === 0

    setCurrentLine(
      isParty ? PARTY_LINES[Math.floor(Math.random() * PARTY_LINES.length)] : LINES[lineIndex]
    )
    setLineIndex((i) => (i + 1) % LINES.length)
    setOpen(true)
    setPoked(true)
    setTimeout(() => setPoked(false), 500)

    if (isParty) {
      setConfetti(true)
      setTimeout(() => setConfetti(false), 900)
    }
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.15}
      dragConstraints={{ left: -120, right: 120, top: -100, bottom: 140 }}
      whileDrag={{ scale: 1.15, rotate: 0, zIndex: 30 }}
      className={`absolute z-20 select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [-6, -10, -6] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow border-2 border-ink rounded-xl px-3 py-1.5 font-hand text-sm whitespace-nowrap shadow-[3px_3px_0_rgba(32,32,28,0.2)]"
            >
              {currentLine}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3 h-3 bg-yellow border-r-2 border-b-2 border-ink rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* confetti burst — only appears every 5th poke */}
        <AnimatePresence>
          {confetti && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 14 }).map((_, i) => {
                const angle = (i / 14) * Math.PI * 2
                const dist = 36 + Math.random() * 28
                return (
                  <motion.span
                    key={i}
                    className="absolute left-1/2 top-1/2 w-[7px] h-[7px] rounded-sm"
                    style={{ background: CONFETTI_COLORS[i % CONFETTI_COLORS.length] }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
                    animate={{
                      x: Math.cos(angle) * dist,
                      y: Math.sin(angle) * dist - 12,
                      opacity: 0,
                      scale: 0.4,
                      rotate: 180,
                    }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                  />
                )
              })}
            </div>
          )}
        </AnimatePresence>

        <motion.svg
          ref={svgRef}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          animate={poked ? { rotate: [0, -10, 10, -6, 0] } : {}}
          onClick={handleClick}
          width={size}
          height={size}
          viewBox="0 0 220 240"
          fill="none"
          className="cursor-pointer"
          title="poke flork (or drag it around)"
        >
          <path
            d="M30 110 C30 50 60 15 110 15 C165 15 195 55 195 105 C195 150 185 175 175 195"
            stroke="#20201C"
            strokeWidth="9"
            strokeLinecap="round"
            fill="white"
          />
          <path
            d="M28 112 C20 150 22 190 35 222"
            stroke="#20201C"
            strokeWidth="9"
            strokeLinecap="round"
            fill="white"
          />

          {/* eyes — pupils track the cursor, lids blink */}
          <motion.g animate={{ scaleY: blink ? 0.1 : 1 }} transition={{ duration: 0.08 }} style={{ originY: '78px' }}>
            <circle cx="120" cy="78" r="6" fill="white" stroke="#20201C" strokeWidth="1.5" />
            <circle cx="120" cy="78" r="3.5" fill="#20201C" style={{ transform: `translate(${pupil.x}px, ${pupil.y}px)` }} />
          </motion.g>
          <motion.g animate={{ scaleY: blink ? 0.1 : 1 }} transition={{ duration: 0.08 }} style={{ originY: '75px' }}>
            <circle cx="150" cy="75" r="6" fill="white" stroke="#20201C" strokeWidth="1.5" />
            <circle cx="150" cy="75" r="3.5" fill="#20201C" style={{ transform: `translate(${pupil.x}px, ${pupil.y}px)` }} />
          </motion.g>

          <line x1="95" y1="108" x2="178" y2="100" stroke="#20201C" strokeWidth="7" strokeLinecap="round" />
          <line x1="70" y1="170" x2="105" y2="205" stroke="#20201C" strokeWidth="9" strokeLinecap="round" />
          <line x1="140" y1="165" x2="110" y2="205" stroke="#20201C" strokeWidth="9" strokeLinecap="round" />
          <circle cx="108" cy="210" r="14" fill="#C8966B" />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}

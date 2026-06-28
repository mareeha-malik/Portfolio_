import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COLORS = ['#20201C', '#FF6FA0', '#3A5BFF', '#FFD23F', '#BFEFC0']

// A full-page freehand sketchpad. Mounted once at the app root (outside the
// route switcher) so the canvas — and anything drawn on it — persists no
// matter which page you're on. Toggle with the floating pencil button;
// while it's off, the canvas lets every click/scroll pass straight through.
export default function DrawingOverlay() {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const drawing = useRef(false)
  const [active, setActive] = useState(false)
  const [color, setColor] = useState(COLORS[0])
  const [size, setSize] = useState(5)
  const [hasStrokes, setHasStrokes] = useState(false)

  const setupCanvas = useCallback((preserve) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const prevData = preserve ? canvas.toDataURL() : null

    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctxRef.current = ctx

    if (prevData) {
      const img = new Image()
      img.onload = () => ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
      img.src = prevData
    }
  }, [])

  useEffect(() => {
    setupCanvas(false)
    const onResize = () => setupCanvas(true)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [setupCanvas])

  const getPos = (e) => {
    const t = e.touches?.[0]
    return { x: t ? t.clientX : e.clientX, y: t ? t.clientY : e.clientY }
  }

  const start = (e) => {
    if (!active) return
    drawing.current = true
    const { x, y } = getPos(e)
    ctxRef.current.beginPath()
    ctxRef.current.moveTo(x, y)
    setHasStrokes(true)
  }

  const move = (e) => {
    if (!active || !drawing.current) return
    const { x, y } = getPos(e)
    const ctx = ctxRef.current
    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const end = () => (drawing.current = false)

  const clearCanvas = () => {
    const canvas = canvasRef.current
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height)
    setHasStrokes(false)
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 z-40 ${active ? 'pointer-events-auto cursor-crosshair touch-none' : 'pointer-events-none'}`}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={end}
        onPointerLeave={end}
      />

      {/* mini toolbar — only shown while draw mode is on */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="fixed bottom-24 right-5 sm:right-8 z-[60] bg-white border-[3px] border-ink rounded-2xl p-3 sm:p-4 shadow-[5px_5px_0_rgba(32,32,28,0.2)] flex flex-col gap-3"
          >
            <p className="font-mono text-[10px] text-ink/50 text-center">doodle mode</p>
            <div className="flex items-center gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  aria-label={`Use color ${c}`}
                  className={`w-6 h-6 rounded-full border-2 transition-transform ${
                    color === c ? 'border-ink scale-110' : 'border-ink/20'
                  }`}
                  style={{ background: c }}
                />
              ))}
            </div>
            <input
              type="range"
              min="2"
              max="16"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-32 accent-pink"
              aria-label="Brush size"
            />
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={clearCanvas}
                disabled={!hasStrokes}
                className="flex-1 font-mono text-[11px] border-2 border-ink rounded-full px-3 py-1.5 hover:bg-ink hover:text-cream transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                clear
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setActive(false)}
                className="flex-1 font-mono text-[11px] border-2 border-ink rounded-full px-3 py-1.5 bg-yellow hover:bg-ink hover:text-cream transition-colors"
              >
                done
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* the toggle */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setActive((a) => !a)}
        aria-label={active ? 'Stop drawing' : 'Draw anywhere on the page'}
        title={active ? 'Stop drawing' : 'Draw anywhere on the page'}
        className={`fixed bottom-5 right-5 sm:right-8 z-[60] w-14 h-14 rounded-full border-[3px] border-ink flex items-center justify-center text-2xl shadow-[4px_4px_0_rgba(32,32,28,0.25)] transition-colors ${
          active ? 'bg-pink text-cream' : 'bg-yellow text-ink'
        }`}
      >
        {active ? '✕' : '✏️'}
      </motion.button>
    </>
  )
}

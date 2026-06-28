import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import Flork1 from '../assets/Flork1.svg'
import Flork2 from '../assets/Flork2.svg'
import Flork3 from '../assets/Flork3.svg'
import Flork4 from '../assets/Flork4.svg'
import Flork5 from '../assets/Flork5.svg'

// Flork that runs across the WHOLE screen (not just the bottom strip),
// popping message bubbles as it goes. "Catch me if you can" — it sprints
// to a random spot anywhere on the page, pauses, then bolts again.

const FLORK_POSES = [Flork1, Flork2, Flork3, Flork4, Flork5]

const BUBBLE_MSGS = [
  "catch me if u can! 🏃",
  "too slow!! hehe",
  "hire her already!",
  "boo! did i scare you?",
  "i live here now",
  "10/10 portfolio btw",
  "zoom zoom zoom",
  "this is my house",
  "almost caught me!",
  "nope nope nope",
  "u can't catch me 😈",
  "ok fine i'll stop. jk",
]

export default function PeekFlork() {
  const [xPct, setXPct] = useState(90)
  const [yPct, setYPct] = useState(85)
  const [direction, setDirection] = useState(-1) // -1 = going left, 1 = going right
  const [bubble, setBubble] = useState(null)
  const [fleeing, setFleeing] = useState(false)
  const [caught, setCaught] = useState(false)
  const [poseIndex, setPoseIndex] = useState(0)
  const msgIdxRef = useRef(0)
  const timerRef = useRef(null)
  const runTimerRef = useRef(null)

  const showBubble = useCallback((msg) => {
    setBubble(msg)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setBubble(null), 2200)
  }, [])

  const sprintToNewSpot = useCallback(() => {
    // pick a random position hugging the LEFT or RIGHT margin of the page
    // (outside the centered content column) so it never sits on top of text
    const newX = direction < 0
      ? 2 + Math.random() * 9   // hug left edge: 2–11%
      : 89 + Math.random() * 9  // hug right edge: 89–98%
    const newY = 15 + Math.random() * 70 // anywhere from just below the nav to near the bottom

    setXPct(newX)
    setYPct(newY)
    setDirection((d) => -d)
    setFleeing(true)
    setPoseIndex((i) => (i + 1) % FLORK_POSES.length)

    // pop a bubble mid-run
    const msg = BUBBLE_MSGS[msgIdxRef.current % BUBBLE_MSGS.length]
    msgIdxRef.current += 1
    setTimeout(() => {
      showBubble(msg)
      setFleeing(false)
    }, 600)

    // schedule next sprint
    clearTimeout(runTimerRef.current)
    runTimerRef.current = setTimeout(sprintToNewSpot, 4000 + Math.random() * 5000)
  }, [direction, showBubble])

  useEffect(() => {
    runTimerRef.current = setTimeout(sprintToNewSpot, 3000)
    return () => {
      clearTimeout(runTimerRef.current)
      clearTimeout(timerRef.current)
    }
  }, []) // eslint-disable-line

  const handleHover = () => {
    if (caught) return
    // flork runs away on hover, to the opposite edge of the page
    const newX = xPct < 50
      ? 89 + Math.random() * 9
      : 2 + Math.random() * 9
    const newY = 15 + Math.random() * 70
    setXPct(newX)
    setYPct(newY)
    setDirection(newX < 50 ? 1 : -1)
    setFleeing(true)
    setPoseIndex((i) => (i + 1) % FLORK_POSES.length)
    showBubble("HEY that's cheating!! 😤")
    setTimeout(() => setFleeing(false), 500)
    clearTimeout(runTimerRef.current)
    runTimerRef.current = setTimeout(sprintToNewSpot, 5000)
  }

  const handleClick = (e) => {
    e.stopPropagation()
    setCaught(true)
    showBubble("ok ok you got me 😅 now let me go!")
    setTimeout(() => setCaught(false), 1800)
    // still bolts after being caught
    setTimeout(handleHover, 400)
  }

  const facingLeft = direction < 0 || xPct < 50

  return (
    <motion.div
      className="fixed z-40 pointer-events-none hidden sm:block"
      animate={{ left: `${xPct}%`, top: `${yPct}%` }}
      transition={
        fleeing
          ? { type: 'spring', stiffness: 220, damping: 18 }
          : { type: 'spring', stiffness: 70, damping: 20 }
      }
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        {/* Speech bubble */}
        <AnimatePresence>
          {bubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 4 }}
              className="absolute -top-14 left-1/2 -translate-x-1/2 bg-yellow border-2 border-ink rounded-2xl px-3 py-2 font-hand text-sm whitespace-nowrap shadow-[3px_3px_0_rgba(32,32,28,0.2)] z-50"
            >
              {bubble}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-[7px] w-3 h-3 bg-yellow border-r-2 border-b-2 border-ink rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* The flork — cycles through your 5 SVG poses as it runs around */}
        <motion.div
          onMouseEnter={handleHover}
          onClick={handleClick}
          className="cursor-pointer"
          animate={
            fleeing
              ? { rotate: [0, -12, 12, -6, 0], y: [0, -10, 0] }
              : caught
              ? { rotate: [0, 10, -10, 5, 0] }
              : { y: [0, -4, 0] }
          }
          transition={
            fleeing
              ? { duration: 0.5 }
              : caught
              ? { duration: 0.4 }
              : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
          }
          title="catch me if you can!"
        >
          <img
            src={FLORK_POSES[poseIndex]}
            alt="Flork"
            draggable={false}
            width={58}
            height={72}
            style={{
              width: 58,
              height: 72,
              transform: facingLeft ? 'scaleX(-1)' : 'none',
              filter: 'drop-shadow(2px 3px 0 rgba(32,32,28,0.18))',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

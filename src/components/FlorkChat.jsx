import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { florkChat } from '../data/content'

// A tiny static flork avatar — same character as Flork.jsx but without
// drag/cursor-tracking, just a calm head for chat bubbles. `tint` swaps
// the headband-ish stroke color so the two speakers read as different.
function MiniFlork({ tint = '#20201C', flip = false }) {
  return (
    <svg width="40" height="40" viewBox="0 0 220 240" fill="none" style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
      <path
        d="M30 110 C30 50 60 15 110 15 C165 15 195 55 195 105 C195 150 185 175 175 195"
        stroke="#20201C"
        strokeWidth="9"
        strokeLinecap="round"
        fill="white"
      />
      <path d="M28 112 C20 150 22 190 35 222" stroke="#20201C" strokeWidth="9" strokeLinecap="round" fill="white" />
      <circle cx="120" cy="78" r="6" fill="white" stroke="#20201C" strokeWidth="1.5" />
      <circle cx="120" cy="78" r="3.5" fill="#20201C" />
      <circle cx="150" cy="75" r="6" fill="white" stroke="#20201C" strokeWidth="1.5" />
      <circle cx="150" cy="75" r="3.5" fill="#20201C" />
      <line x1="95" y1="108" x2="178" y2="100" stroke="#20201C" strokeWidth="7" strokeLinecap="round" />
      <line x1="70" y1="170" x2="105" y2="205" stroke="#20201C" strokeWidth="9" strokeLinecap="round" />
      <line x1="140" y1="165" x2="110" y2="205" stroke="#20201C" strokeWidth="9" strokeLinecap="round" />
      <circle cx="108" cy="210" r="14" fill="#C8966B" />
      {/* little headband to tell the two apart */}
      <path d="M70 50 Q110 30 155 52" stroke={tint} strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export default function FlorkChat() {
  return (
    <ScrollReveal className="max-w-md mx-auto mb-16">
      <p className="font-hand text-ink/40 text-base text-center mb-3">a totally real conversation</p>
      <div className="rounded-2xl border-[3px] border-ink bg-white p-4 sm:p-5 shadow-[5px_5px_0_rgba(32,32,28,0.12)] flex flex-col gap-3">
        {florkChat.map((msg, i) => {
          const isMe = msg.from === 'me'
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isMe ? 16 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className={`flex items-end gap-2 w-fit max-w-[85%] ${
                isMe ? 'flex-row-reverse self-end' : 'self-start'
              }`}
            >
              <div className="shrink-0">
                <MiniFlork tint={isMe ? '#FF6FA0' : '#3A5BFF'} flip={isMe} />
              </div>
              <div
                className={`font-hand text-base leading-snug px-3.5 py-2.5 rounded-2xl border-2 border-ink ${
                  isMe ? 'bg-pink-soft rounded-br-sm' : 'bg-blue-soft rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          )
        })}
      </div>
    </ScrollReveal>
  )
}

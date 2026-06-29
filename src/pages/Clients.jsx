import { motion } from 'framer-motion'
import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { ExternalLinkIcon } from '../components/Icons'
import { clients, florkChat } from '../data/content'
import { StarDoodle, HeartDoodle, WaveDoodle, CrossDoodle } from '../components/Doodles'
import FlorkMe from '../assets/Flork1.svg'
import FlorkClient from '../assets/Flork3.svg'

const FILTERS = [
  { key: 'all', label: 'all' },
  { key: 'design', label: 'design' },
  { key: 'dev', label: 'dev' },
]

// Full-width conversation — no container box, screen-wide bubbles
function FullWidthChat() {
  return (
    <section className="w-full bg-cream/60 border-y-2 border-ink/10 py-10 px-5 sm:px-12 my-10">
      <p className="font-hand text-ink/40 text-base text-center mb-8">✦ a totally real conversation ✦</p>
      <div className="max-w-3xl mx-auto flex flex-col gap-5">
        {florkChat.map((msg, i) => {
          const isMe = msg.from === 'me'
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isMe ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-end gap-3 ${isMe ? 'flex-row-reverse self-end' : 'self-start'}`}
            >
              {/* Flork avatars — "me" and "client" get their own poses */}
              <img
                src={isMe ? FlorkMe : FlorkClient}
                alt={isMe ? 'Flork (me)' : 'Flork (client)'}
                className="shrink-0 w-12 h-12 object-contain"
                style={{
                  transform: isMe ? 'scaleX(-1)' : 'none',
                  filter: 'drop-shadow(2px 3px 0 rgba(32,32,28,0.15))',
                }}
              />
              <div
                className={`font-hand text-base sm:text-lg px-5 py-3 rounded-2xl border-[2.5px] border-ink max-w-[70%] sm:max-w-[80%] shadow-[3px_3px_0_rgba(32,32,28,0.1)] ${
                  isMe
                    ? 'bg-pink-soft rounded-br-sm'
                    : 'bg-blue-soft rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default function Clients() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? clients : clients.filter((c) => c.tags.includes(filter))

  return (
    <PageTransition>
      {/* Header */}
      <section className="relative px-5 sm:px-8 max-w-5xl mx-auto pt-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <StarDoodle className="absolute top-4 right-[8%]" size={26} color="#FFD23F" delay={0} />
          <HeartDoodle className="absolute top-16 left-[4%]" size={20} delay={0.5} />
          <CrossDoodle className="absolute bottom-0 right-[20%]" size={16} color="#3A5BFF" delay={0.8} />
        </div>
        <ScrollReveal>
          <p className="font-mono text-xs text-pink mb-2">{'// people who trusted me with their thing'}</p>
          <h1 className="font-display text-[clamp(2rem,7vw,4rem)] leading-tight">
            Clients &amp; <span className="text-pink">kind words.</span>
          </h1>
          <p className="font-body text-ink/70 mt-3 max-w-xl">
            Real briefs, real brands, real "can you make the logo bigger" feedback.
          </p>
          <WaveDoodle className="mt-4" color="#FF6FA0" width={80} />
        </ScrollReveal>
      </section>

      {/* Full-width flork conversation */}
      <FullWidthChat />

      {/* filter chips */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mb-8">
        <div className="flex gap-2 justify-center">
          {FILTERS.map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`font-mono text-xs sm:text-sm px-4 py-2 rounded-full border-2 border-ink transition-colors ${
                filter === f.key ? 'bg-pink text-white' : 'bg-white text-ink/50 hover:text-ink'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* client cards — smaller, tighter grid */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((c, i) => (
            <ScrollReveal key={c.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ rotate: 0, y: -4 }}
                style={{ background: c.color, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                className="tape relative rounded-xl border-[2.5px] border-ink p-5 shadow-[4px_4px_0_rgba(32,32,28,0.12)] h-full flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className={`font-mono text-[10px] px-2 py-0.5 rounded-full border-[1.5px] border-ink ${
                        t === 'design' ? 'bg-pink-soft' : 'bg-blue-soft'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="font-hand text-base leading-snug text-ink flex-1">"{c.quote}"</p>
                {c.project && (
                  <p className="font-mono text-[10px] text-ink/50 mt-2">{c.project}</p>
                )}
                <div className="flex items-center justify-between mt-3">
                  <p className="font-mono text-[11px] text-ink/60">
                    — {c.name}, {c.role}
                  </p>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 w-7 h-7 rounded-full border-2 border-ink flex items-center justify-center bg-white hover:bg-ink hover:text-white transition-colors"
                    >
                      <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

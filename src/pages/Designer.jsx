import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { DoodleScatter, StarDoodle, HeartDoodle, WaveDoodle, CircleDoodle, SparkDoodle } from '../components/Doodles'
import { logoImages, shirtImages, socialPosts, clientReviews } from '../data/content'

export default function Designer() {
  const shirtsToShow = shirtImages.slice(0, 8)
  const [activePost, setActivePost] = useState(null)

  return (
    <PageTransition>
      <section className="relative px-5 sm:px-8 max-w-6xl mx-auto pt-8">
        <DoodleScatter variant="pink" />

        <ScrollReveal>
          <p className="font-mono text-xs text-pink mb-2">{'// the designer side'}</p>
          <h1 className="font-display text-[clamp(2rem,7vw,4rem)] leading-tight">
            Things I drew, <span className="text-pink">on purpose.</span>
          </h1>
          <p className="font-body text-ink/70 mt-3 max-w-xl">
            Logos, posters and apparel — sketch, refine, ship.
          </p>
          <WaveDoodle className="mt-4" color="#FF6FA0" width={80} />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-col items-center my-10">
          <DoodleIllustration />
          <p className="font-hand text-ink/40 text-base mt-2">
            psst — hit the ✏️ in the corner to doodle on literally any page
          </p>
        </ScrollReveal>
      </section>

      {/* LOGOS */}
      <section className="px-5 sm:px-8 max-w-6xl mx-auto mt-16">
        <SectionLabel num="01" title="Logos" hint="small marks, big personality" />
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3 sm:gap-4 mt-6">
          {logoImages.map((src, i) => (
            <ScrollReveal key={src} delay={(i % 6) * 0.04}>
              <motion.div
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                style={{ rotate: ((i % 5) - 2) * 2.4 }}
                className="aspect-square rounded-xl border-[3px] border-ink bg-white overflow-hidden flex items-center justify-center p-2"
              >
                <img src={src} alt={`Logo design ${i + 1}`} className="w-full h-full object-contain" loading="lazy" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SOCIAL / AD POSTS — masonry catalog with a lightbox */}
      <section className="px-5 sm:px-8 max-w-6xl mx-auto mt-24">
        <SectionLabel num="02" title="Ad & Social Posts" hint="scroll-stopping, hopefully" />
        <div className="mt-10 mb-4 [column-fill:_balance] sm:columns-2 md:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {socialPosts.map((p, i) => (
            <ScrollReveal key={p.id} delay={(i % 6) * 0.06} className="break-inside-avoid">
              <motion.button
                type="button"
                onClick={() => setActivePost(p)}
                whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
                style={{ background: p.color, rotate: (i % 2 === 0 ? -1 : 1) * 1.5 }}
                className="group relative w-full rounded-2xl border-[3px] border-ink overflow-hidden shadow-[5px_5px_0_rgba(32,32,28,0.18)] text-left block"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-auto block"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-ink/85 backdrop-blur-sm px-3 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-mono text-[10px] text-pink uppercase tracking-wide">{p.category}</p>
                  <p className="font-display text-cream text-sm leading-snug">{p.title}</p>
                </div>
                {/* corner peek tag, always visible */}
                <span className="absolute top-2 left-2 bg-cream border-2 border-ink rounded-full px-2.5 py-0.5 font-mono text-[10px] text-ink/70 shadow-[2px_2px_0_rgba(32,32,28,0.15)]">
                  {p.category}
                </span>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
        <p className="font-mono text-[11px] text-ink/40 text-center mt-2">
          {'// tap any post for a closer look'}
        </p>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg sm:max-w-xl w-full rounded-2xl border-[3px] border-ink bg-cream overflow-hidden shadow-[8px_8px_0_rgba(32,32,28,0.3)] max-h-[88vh] flex flex-col"
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-cream border-2 border-ink flex items-center justify-center font-display text-ink hover:bg-pink hover:text-cream transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="overflow-y-auto">
                <img src={activePost.img} alt={activePost.title} className="w-full h-auto block" />
                <div className="p-4 sm:p-5">
                  <p className="font-mono text-xs text-pink uppercase tracking-wide">{activePost.category}</p>
                  <p className="font-display text-lg sm:text-xl mt-1">{activePost.title}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHIRTS */}
      <section className="px-5 sm:px-8 max-w-6xl mx-auto mt-16">
        <SectionLabel num="03" title="Shirts" hint="wearable design" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {shirtsToShow.map((src, i) => (
            <ScrollReveal key={src} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6, rotate: 0 }}
                style={{ rotate: i % 2 === 0 ? -3 : 3 }}
                className="aspect-[3/4] rounded-2xl border-[3px] border-ink bg-white overflow-hidden p-3"
              >
                <img src={src} alt={`T-shirt design ${i + 1}`} className="w-full h-full object-contain" loading="lazy" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section className="px-5 sm:px-8 max-w-6xl mx-auto mt-24 mb-20">
        <SectionLabel num="04" title="Kind words" hint="from actual humans" />
        <div className="grid sm:grid-cols-2 gap-8 mt-10">
          {clientReviews.map((r, i) => (
            <ScrollReveal key={r.id} delay={i * 0.07}>
              <motion.div
                whileHover={{ rotate: 0, y: -4 }}
                style={{ background: r.color, rotate: i % 2 === 0 ? -2 : 2 }}
                className="tape relative rounded-md border-[3px] border-ink p-6 shadow-[5px_5px_0_rgba(32,32,28,0.15)]"
              >
                <p className="font-hand text-lg leading-snug text-ink">"{r.quote}"</p>
                <p className="font-mono text-xs text-ink/60 mt-4">— {r.name}, {r.role}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

function SectionLabel({ num, title, hint }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-pink text-sm">{num}</span>
      <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
      <span className="font-hand text-ink/40 text-base hidden sm:inline">— {hint}</span>
    </div>
  )
}

function DoodleIllustration() {
  return (
    <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
      <rect x="20" y="120" width="180" height="8" rx="4" fill="#20201C" />
      <circle cx="110" cy="55" r="34" stroke="#20201C" strokeWidth="3" fill="#FFE1EC" />
      <circle cx="98" cy="50" r="2.5" fill="#20201C" />
      <circle cx="122" cy="50" r="2.5" fill="#20201C" />
      <path d="M98 65 Q110 72 122 65" stroke="#20201C" strokeWidth="2.5" fill="none" />
      <path d="M76 90 L110 89 L144 90 L140 120 L80 120 Z" stroke="#20201C" strokeWidth="3" fill="#FFD23F" />
      <line x1="76" y1="90" x2="55" y2="112" stroke="#20201C" strokeWidth="4" strokeLinecap="round" />
      <line x1="144" y1="90" x2="165" y2="108" stroke="#20201C" strokeWidth="4" strokeLinecap="round" />
      <path d="M165 108 L172 112" stroke="#FF6FA0" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { techStack, designTools } from '../data/content'
import { TECH_ICONS, DESIGN_ICONS } from '../components/Icons'
import { StarDoodle, SparkDoodle, WaveDoodle, DiamondDoodle, ArrowDoodle } from '../components/Doodles'

// Broader things that don't fit neatly into a "tool" card, shown as a quiet
// inline line under the grid instead of more chips.
const DESIGN_EXTRA = ['Logo Design', 'Poster / Print', 'Apparel Design', 'Brand Systems', 'Illustration']
const DEV_EXTRA = ['REST APIs', 'Responsive Layouts', 'Component Architecture', 'Performance Basics', 'Git History (mostly clean)']

const MODES = {
  design: {
    label: '🎨 Design',
    accent: '#fe4985',
    accentClass: 'text-pink',
    tagline: 'sketch first, trust the computer second',
    tools: designTools,
    icons: DESIGN_ICONS,
    extra: DESIGN_EXTRA,
  },
  dev: {
    label: '💻 Dev',
    accent: '#3A5BFF',
    accentClass: 'text-blue',
    tagline: 'ship it, then make it not break',
    tools: techStack,
    icons: TECH_ICONS,
    extra: DEV_EXTRA,
  },
}

export default function Skills() {
  const [mode, setMode] = useState('design')
  const active = MODES[mode]

  return (
    <PageTransition>
      {/* HERO + TOGGLE */}
      <section className="relative px-5 sm:px-8 max-w-5xl mx-auto pt-8 pb-4">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <StarDoodle className="absolute top-6 right-[10%]" size={26} color="#FFD23F" delay={0} />
          <SparkDoodle className="absolute top-20 left-[5%]" size={20} color="#FF6FA0" delay={0.4} />
          <DiamondDoodle className="absolute bottom-0 right-[20%]" size={22} delay={0.9} />
        </div>

        <ScrollReveal>
          <p className="font-mono text-xs text-blue mb-2">{'// what I bring to the table'}</p>
          <h1 className="font-display text-[clamp(2rem,7vw,4rem)] leading-tight">
            Two modes. <span className={active.accentClass}>One brain.</span>
          </h1>
          <p className="font-body text-ink/70 mt-3 max-w-xl">
            Flip the switch — same person, completely different toolbox.
          </p>
          <WaveDoodle className="mt-3" color={active.accent} width={70} />
        </ScrollReveal>

        {/* MODE TOGGLE — sliding pill switch */}
        <div className="mt-7 inline-flex items-center bg-white border-[3px] border-ink rounded-full p-1.5 shadow-[4px_4px_0_rgba(32,32,28,0.15)]">
          {Object.entries(MODES).map(([key, m]) => (
            <button
              key={key}
              onClick={() => setMode(key)}
              className={`relative px-5 sm:px-7 py-2.5 rounded-full font-display text-sm sm:text-base transition-colors duration-200 ${
                mode === key ? 'text-cream' : 'text-ink/55 hover:text-ink'
              }`}
            >
              {mode === key && (
                <motion.span
                  layoutId="skillsModePill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: m.accent }}
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <span className="relative z-10">{m.label}</span>
            </button>
          ))}
        </div>
        <p className="font-hand text-ink/40 text-base mt-3">{active.tagline}</p>
      </section>

      {/* TOOL GRID — uniform sticker tiles, icon badge up top, calm card below */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
          >
            {active.tools.map((t, i) => {
              const Icon = active.icons[t.icon]
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -5, rotate: 0 }}
                  style={{ rotate: i % 2 === 0 ? -1.2 : 1.2 }}
                  className="rounded-2xl border-[2.5px] border-ink bg-cream p-4 flex flex-col items-center text-center gap-2.5 shadow-[3px_3px_0_rgba(32,32,28,0.12)] transition-shadow hover:shadow-[5px_5px_0_rgba(32,32,28,0.18)]"
                >
                  <div
                    className="w-12 h-12 rounded-full border-[2px] border-ink/10 flex items-center justify-center shrink-0"
                    style={{ background: t.color }}
                  >
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  <div>
                    <p className="font-display text-sm leading-tight">{t.name}</p>
                    <p className="font-hand text-ink/45 text-xs mt-0.5">{t.note}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <ScrollReveal>
          <p className="font-mono text-xs text-ink/40 mt-6 text-center sm:text-left flex flex-wrap items-center gap-x-2 gap-y-1 justify-center sm:justify-start">
            <span className="text-ink/60">also comfortable with:</span>
            {active.extra.map((e, i) => (
              <span key={e}>
                {e}
                {i < active.extra.length - 1 && <span className="text-ink/25 mx-1.5">·</span>}
              </span>
            ))}
          </p>
        </ScrollReveal>
      </section>

      {/* CROSS-OVER NOTE */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 font-hand text-ink/40 text-sm sm:text-base">
            <ArrowDoodle size={28} color={active.accent} />
            <span>
              {mode === 'design'
                ? "switch to dev — same person, very different tab group open"
                : "switch to design — somehow involves way more Pinterest tabs"}
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* MARQUEES — both stacks always scrolling, smaller, for the full picture */}
      <div className="mt-10">
        <section className="border-y-2 border-ink/10 bg-cream overflow-hidden py-4">
          <motion.div
            className="flex items-center gap-8 font-mono text-xs text-ink/40 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
          >
            {[...techStack, ...techStack].map((t, i) => {
              const Icon = TECH_ICONS[t.icon]
              return (
                <span key={i} className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  {t.name}
                </span>
              )
            })}
          </motion.div>
        </section>
        <section className="overflow-hidden py-4">
          <motion.div
            className="flex items-center gap-8 font-mono text-xs text-ink/40 whitespace-nowrap"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
          >
            {[...designTools, ...designTools].map((t, i) => {
              const Icon = DESIGN_ICONS[t.icon]
              return (
                <span key={i} className="flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4" />}
                  {t.name}
                </span>
              )
            })}
          </motion.div>
        </section>
      </div>

      {/* SOFT SKILLS */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-12 mb-24">
        <ScrollReveal>
          <div className="rounded-2xl border-[3px] border-ink bg-ink p-6 sm:p-8 font-mono text-cream/80 text-sm">
            <p className="text-mint mb-3">{'// also good at:'}</p>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>taking a vague "make it pop" and actually knowing what that means</li>
              <li>turning client feedback into revisions without 14 follow-up calls</li>
              <li>shipping the same week I start, not the same month</li>
            </ul>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  )
}

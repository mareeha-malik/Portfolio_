import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { skills, techStack, designTools } from '../data/content'
import { TECH_ICONS, DESIGN_ICONS } from '../components/Icons'
import { StarDoodle, SparkDoodle, WaveDoodle, DiamondDoodle } from '../components/Doodles'

const DESIGN_COLORS = ['#FFE1EC', '#BFEFC0', '#FFD23F', '#E3E8FF', '#FFE1EC']

export default function Skills() {
  return (
    <PageTransition>
      <section className="relative px-5 sm:px-8 max-w-5xl mx-auto pt-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <StarDoodle className="absolute top-6 right-[10%]" size={26} color="#FFD23F" delay={0} />
          <SparkDoodle className="absolute top-20 left-[5%]" size={20} color="#FF6FA0" delay={0.4} />
          <DiamondDoodle className="absolute bottom-0 right-[20%]" size={22} delay={0.9} />
        </div>
        <ScrollReveal>
          <p className="font-mono text-xs text-blue mb-2">{'// what I bring to the table'}</p>
          <h1 className="font-display text-[clamp(2rem,7vw,4rem)] leading-tight">
            Skills, <span className="text-pink">sorted by vibe.</span>
          </h1>
          <p className="font-body text-ink/70 mt-3 max-w-xl">
            A little bit design, a little bit dev — same person, two toolkits.
          </p>
          <WaveDoodle className="mt-3" color="#3A5BFF" width={70} />
        </ScrollReveal>
      </section>

      {/* DESIGN SKILLS */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-14">
        <ScrollReveal>
          <h2 className="font-display text-2xl sm:text-3xl text-pink">Design</h2>
          <p className="font-hand text-ink/40 text-lg mt-1 mb-6">things I sketch before I trust a computer with them</p>
        </ScrollReveal>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {skills.design.map((s, i) => (
            <ScrollReveal key={s} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4, rotate: 0, scale: 1.05 }}
                style={{ background: DESIGN_COLORS[i % DESIGN_COLORS.length], rotate: i % 2 === 0 ? -2 : 2 }}
                className="rounded-full border-[3px] border-ink px-5 py-2.5 font-display text-sm sm:text-base shadow-[3px_3px_0_rgba(32,32,28,0.15)]"
              >
                {s}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* DESIGN TOOLS — moving banner strip, same style as the homepage tech marquee */}
      <section className="border-y-2 border-ink/10 bg-cream overflow-hidden py-5 mb-2 mt-2">
        <motion.div
          className="flex items-center gap-10 font-mono text-sm text-ink/50 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...designTools, ...designTools].map((t, i) => {
            const Icon = DESIGN_ICONS[t.icon]
            return (
              <span key={i} className="flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5" />}
                {t.name}
              </span>
            )
          })}
        </motion.div>
      </section>

      {/* DEV SKILLS / STACK — with real icons */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-16 mb-10">
        <ScrollReveal>
          <h2 className="font-display text-2xl sm:text-3xl text-blue">Development</h2>
          <p className="font-hand text-ink/40 text-lg mt-1 mb-6">tools i actually open every day</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {techStack.map((t, i) => {
            const Icon = TECH_ICONS[t.icon]
            return (
              <ScrollReveal key={t.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6, rotate: 0, scale: 1.06 }}
                  style={{ background: t.color, rotate: i % 2 === 0 ? -3 : 3 }}
                  className="rounded-2xl border-[3px] border-ink p-4 text-center shadow-[4px_4px_0_rgba(32,32,28,0.15)] flex flex-col items-center"
                >
                  {Icon && <Icon className="w-9 h-9" />}
                  <p className="font-display text-sm mt-2">{t.name}</p>
                  <p className="font-hand text-ink/50 text-xs mt-1">{t.note}</p>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* SOFT SKILLS */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-4 mb-24">
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

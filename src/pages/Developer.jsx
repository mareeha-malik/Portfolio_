import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { devProjects, techStack } from '../data/content'
import { GithubIcon, ExternalLinkIcon, TECH_ICONS } from '../components/Icons'
import { DoodleScatter, StarDoodle, SparkDoodle, WaveDoodle } from '../components/Doodles'

const typedLine = "console.log('hi, I build things too 👩‍💻')"

export default function Developer() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      setTyped(typedLine.slice(0, i))
      i++
      if (i > typedLine.length) clearInterval(t)
    }, 35)
    return () => clearInterval(t)
  }, [])

  return (
    <PageTransition>
      {/* terminal hero */}
      <section className="relative px-5 sm:px-8 max-w-5xl mx-auto pt-8">
        <DoodleScatter variant="blue" />
        <ScrollReveal>
          <div className="rounded-2xl border-[3px] border-ink bg-ink overflow-hidden relative z-10">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-cream/10">
              <span className="w-3 h-3 rounded-full bg-pink inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow inline-block" />
              <span className="w-3 h-3 rounded-full bg-mint inline-block" />
              <span className="font-mono text-xs text-cream/40 ml-3">zsh — mareeha</span>
            </div>
            <div className="p-6 sm:p-8 font-mono text-sm sm:text-base">
              <p className="text-mint">{'> '}{typed}<span className="animate-pulse">▌</span></p>
              <p className="text-cream/40 mt-4 text-xs sm:text-sm">
                {'// also fluent in React, Tailwind, and explaining bugs to rubber ducks'}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-[clamp(2rem,7vw,3.6rem)] mt-10">
            The <span className="text-blue">developer</span> half.
          </h1>
          <p className="font-body text-ink/70 mt-3 max-w-xl">
            Same brain that sketches logos also writes components. Here's what's shipped.
          </p>
          <WaveDoodle className="mt-3" color="#3A5BFF" width={70} />
        </ScrollReveal>
      </section>

      {/* project cards — smaller, tighter */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-12 mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {devProjects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-xl border-[2.5px] border-ink bg-ink overflow-hidden flex flex-col shadow-[5px_5px_0_rgba(32,32,28,0.18)]"
              >
                {/* smaller thumbnail */}
                <div className="aspect-[16/9] bg-blue-soft flex items-center justify-center overflow-hidden">
                  {p.img ? (
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-ink/30">
                      <span className="text-2xl">🖼️</span>
                      <span className="font-mono text-[9px]">screenshot soon</span>
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1 bg-ink text-cream">
                  <h3 className="font-display text-base leading-snug">{p.title}</h3>
                  <p className="font-body text-cream/60 text-xs mt-1 line-clamp-2">{p.desc}</p>

                  <div className="flex gap-1.5 mt-3 flex-wrap">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[9px] border border-cream/20 text-mint px-2 py-0.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-mono text-[9px] text-cream/30">{p.file}</span>
                    <div className="flex gap-1.5">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full border-[1.5px] border-cream/30 flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
                        title="GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full border-[1.5px] border-cream/30 flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
                        title="Live site"
                      >
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* tech stack — with real icons */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-4 mb-24">
        <ScrollReveal>
          <h2 className="font-display text-2xl sm:text-3xl">The stack</h2>
          <p className="font-hand text-ink/40 text-lg mt-1 mb-6">tools i actually open every day</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {techStack.map((t, i) => {
            const Icon = TECH_ICONS[t.icon]
            return (
              <ScrollReveal key={t.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -5, rotate: 0, scale: 1.06 }}
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
    </PageTransition>
  )
}

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import { siteInfo, techMarquee, heroModes } from "../data/content";
import { DoodleScatter, StarDoodle, HeartDoodle, SparkDoodle, WaveDoodle, CircleDoodle } from "../components/Doodles";
import { TECH_ICONS } from "../components/Icons";

// Staggered hero animations
const heroContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// What I do cards — replace the two duplicate blocks
const WHAT_I_DO = [
  {
    emoji: "🎨",
    title: "Design",
    color: "bg-pink-soft",
    border: "border-pink",
    accent: "text-pink",
    items: ["Logo & Brand Identity", "Poster & Print Design", "Apparel & Merch", "Illustration & Doodles"],
    link: "/designer",
    cta: "See design work →",
  },
  {
    emoji: "💻",
    title: "Code",
    color: "bg-blue-soft",
    border: "border-blue",
    accent: "text-blue",
    items: ["React Web Apps", "Tailwind & Motion", "E-commerce Stores", "Mobile with React Native"],
    link: "/developer",
    cta: "See dev work →",
  },
  {
    emoji: "✨",
    title: "Both",
    color: "bg-[#FFF3C4]",
    border: "border-yellow",
    accent: "text-[#B8860B]",
    items: ["Full brand → website", "Design system → build", "One brain, two modes", "No briefing two people"],
    link: "/clients",
    cta: "See client work →",
  },
]

export default function Home() {
  const [modeIndex, setModeIndex] = useState(0);
  const mode = heroModes[modeIndex];
  const accentText = mode.accent === "pink" ? "text-pink" : "text-blue";
  const accentBorder = mode.accent === "pink" ? "border-pink" : "border-blue";

  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative px-5 sm:px-8 pt-8 sm:pt-12 max-w-5xl mx-auto overflow-hidden">
        {/* Background doodles */}
        <DoodleScatter variant="default" />

        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-[auto,1fr] gap-8 sm:gap-12 items-center relative z-10"
        >
          {/* Photo */}
          <motion.div variants={heroItemVariants} className="flex justify-center sm:justify-start">
            <motion.div
              initial={{ rotate: -4 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="relative bg-white p-3 pb-6 rounded-sm border-[3px] border-ink shadow-[7px_7px_0_rgba(32,32,28,0.2)] w-[200px] sm:w-[240px]"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow/80 border border-ink/10 rounded-sm rotate-[-2deg] shadow-sm" />
              <div className="aspect-[4/5] bg-cream border-2 border-dashed border-ink/30 flex items-center justify-center overflow-hidden rounded-sm">
                {siteInfo.avatar ? (
                  <img src={siteInfo.avatar} alt={siteInfo.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-ink/40 px-3 text-center">
                    <span className="text-4xl">🖼️</span>
                    <span className="font-mono text-[10px]">drop avatar in src/assets</span>
                  </div>
                )}
              </div>
              <p className="font-hand text-center text-lg mt-3">that's me, hi 👋</p>
              {/* little star doodle on photo */}
              <StarDoodle className="absolute -top-5 -right-5" size={22} color="#FFD23F" />
            </motion.div>
          </motion.div>

          {/* Text + toggle */}
          <div>
            <motion.p variants={heroItemVariants} className="font-mono text-xs sm:text-sm text-ink/50 mb-2">
              {"<npm run dreams />"}
            </motion.p>
            <motion.h1
  variants={heroItemVariants}
  className="font-combo text-[clamp(2.8rem,7vw,5rem)] leading-[1.05] text-ink"
>
  Hi, I'm{" "}
  <motion.span
    initial={{ color: "#20201C" }}
    animate={{ color: ["#20201C", "#FF6FA0", "#3A5BFF", "#20201C"] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    }}
  >
    {siteInfo.name.split(" ")[0]}
  </motion.span>
  .
</motion.h1>
            <motion.p variants={heroItemVariants} className="font-hand text-2xl sm:text-3xl text-pink mt-2">
              {siteInfo.tagline}
            </motion.p>

            {/* mode toggle pills */}
            <motion.div variants={heroItemVariants} className="flex gap-2 mt-6">
              {heroModes.map((m, i) => (
                <motion.button
                  key={m.key}
                  onClick={() => setModeIndex(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`font-mono text-xs sm:text-sm px-4 py-2 rounded-full border-2 border-ink transition-colors flex items-center gap-1.5 ${
                    i === modeIndex
                      ? `${m.bg} ${m.accent === "pink" ? "text-pink" : "text-blue"}`
                      : "bg-white text-ink/50 hover:text-ink"
                  }`}
                >
                  <span>{m.emoji}</span> {m.label}
                </motion.button>
              ))}
            </motion.div>

            {/* swapping mode card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mode.key}
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 rounded-2xl border-[3px] border-ink ${mode.bg} p-5`}
              >
                <p className={`font-mono text-sm ${accentText}`}>{mode.blurb}</p>
                <Link
                  to={mode.cta.to}
                  className={`inline-flex items-center gap-2 font-display text-sm mt-3 border-2 ${accentBorder} rounded-full px-4 py-1.5 bg-white hover:-translate-y-0.5 transition-transform`}
                >
                  {mode.cta.label} →
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* WHAT I DO section — replaces the two big repeating blocks */}
      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-20 mb-8">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <WaveDoodle color="#FF6FA0" width={60} />
            <p className="font-mono text-xs text-ink/40">{'// what I actually do'}</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-ink mb-8">
            What I do <span className="text-pink"></span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {WHAT_I_DO.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, rotate: 0 }}
                style={{ rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                className={`${card.color} rounded-2xl border-[3px] ${card.border} p-6 h-full flex flex-col shadow-[5px_5px_0_rgba(32,32,28,0.12)]`}
              >
                <span className="text-4xl mb-3">{card.emoji}</span>
                <h3 className={`font-display text-2xl ${card.accent} mb-3`}>{card.title}</h3>
                <ul className="flex-1 space-y-1.5 mb-5">
                  {card.items.map((item) => (
                    <li key={item} className="font-body text-sm text-ink/70 flex items-center gap-2">
                      <span className="text-[10px] opacity-60">✦</span> {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to={card.link}
                  className={`inline-flex items-center gap-1 font-mono text-xs ${card.accent} border-2 ${card.border} rounded-full px-3 py-1.5 bg-white/60 hover:bg-white transition-colors self-start`}
                >
                  {card.cta}
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* tech marquee */}
      <section className="border-y-2 border-ink/10 bg-cream overflow-hidden py-5 mb-4 mt-8">
        <motion.div
          className="flex items-center gap-10 font-mono text-sm text-ink/50 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        >
          {[...techMarquee, ...techMarquee].map((t, i) => {
            const Icon = TECH_ICONS[t.icon]
            return (
              <span key={i} className="flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5" />}
                {t.name}
              </span>
            )
          })}
        </motion.div>
      </section>
    </PageTransition>
  );
}

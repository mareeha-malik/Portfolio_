import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ScrollReveal from "../components/ScrollReveal";
import { hobbies } from "../data/content";

export default function Hobbies() {
  return (
    <PageTransition>
      <section className="px-5 sm:px-8 max-w-5xl mx-auto pt-8">
        <ScrollReveal>
          <p className="font-mono text-xs text-ink/50 mb-2">
            {"// outside the screen"}
          </p>
          <h1 className="font-display text-[clamp(2rem,7vw,3.6rem)]">
            What I do <span className="text-pink">off duty.</span>
          </h1>
          <p className="font-body text-ink/70 mt-3 max-w-xl">
            Every photo tells a tiny story. Some are about achievements, some
            about peaceful mornings, and others are just reminders to slow down
            and enjoy the little things. This is my life beyond the laptop.
          </p>
        </ScrollReveal>
      </section>

      <section className="px-5 sm:px-8 max-w-5xl mx-auto mt-14 mb-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-6 place-items-center">
        {hobbies.map((h, i) => (
          <ScrollReveal key={h.id} delay={i * 0.06}>
            <motion.div
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 10 }}
              style={{ rotate: h.rotate }}
              className="bg-white p-3 pb-8 rounded-sm border-[3px] border-ink shadow-[6px_6px_0_rgba(32,32,28,0.18)] w-[150px] sm:w-[180px]"
            >
              <div className="aspect-square bg-cream border-2 border-dashed border-ink/30 flex items-center justify-center overflow-hidden">
                {h.image ? (
                  <img
                    src={h.image}
                    alt={h.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    className="text-5xl select-none"
                    title="photo coming soon"
                  >
                    {h.emoji}
                  </motion.span>
                )}
              </div>
              <p className="font-hand text-center text-lg mt-3">{h.label}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </section>
    </PageTransition>
  );
}

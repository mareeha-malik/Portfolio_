import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { siteInfo } from '../data/content'
import { StarDoodle, HeartDoodle, SparkDoodle, WaveDoodle, DiamondDoodle, CircleDoodle, CrossDoodle, ArrowDoodle } from '../components/Doodles'

const SOCIALS_ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  Behance: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.998 13c-.106-1.479-1.064-2.27-2.27-2.27-1.339 0-2.22.942-2.388 2.27h4.658zM7.706 11.333c.91-.212 2.228-.72 2.228-2.41 0-2.54-2.086-3.423-4.337-3.423H0v12H5.71c2.237 0 4.794-.682 4.794-3.663 0-1.806-.994-2.334-2.798-2.504zM2.828 7.5h2.44c.72 0 1.664.131 1.664 1.348 0 .973-.765 1.348-1.664 1.348H2.828V7.5zm2.44 7.5H2.828v-2.696H5.27c1.021 0 1.964.391 1.964 1.348C7.234 14.718 6.512 15 5.268 15z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.74.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.08.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageTransition>
      <div className="relative min-h-screen overflow-hidden">
        {/* Scattered doodles all around */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <StarDoodle className="absolute top-16 left-[5%]" size={30} color="#FFD23F" delay={0} />
          <HeartDoodle className="absolute top-32 right-[8%]" size={26} color="#FF6FA0" delay={0.3} />
          <SparkDoodle className="absolute top-56 left-[12%]" size={22} color="#3A5BFF" delay={0.6} />
          <CircleDoodle className="absolute bottom-48 right-[6%]" size={34} color="#BFEFC0" delay={0.9} />
          <CrossDoodle className="absolute bottom-32 left-[8%]" size={20} color="#FF6FA0" delay={1.1} />
          <DiamondDoodle className="absolute top-44 right-[25%]" size={24} delay={0.4} />
          <StarDoodle className="absolute bottom-60 right-[15%]" size={20} color="#3A5BFF" delay={0.7} />
          <HeartDoodle className="absolute bottom-20 left-[20%]" size={18} color="#FFD23F" delay={1.4} />
          <ArrowDoodle className="absolute top-36 left-[40%]" size={40} color="#FF6FA0" />
        </div>

        <section className="relative z-10 max-w-xl mx-auto px-5 sm:px-8 pt-10 pb-24">
          {/* Animated header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10"
          >
            {/* Big bouncy envelope */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block mb-6"
            >
              <BlobEnvelope />
            </motion.div>

            <h1 className="font-display text-[clamp(2.8rem,10vw,5rem)] leading-[1]">
              Say hi{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block text-pink"
              >
                :)
              </motion.span>
            </h1>
            <p className="font-hand text-xl text-ink/60 mt-3">
              got a logo idea? a project? or just wanna chat table tennis?
            </p>
            <WaveDoodle className="mx-auto mt-4" color="#FF6FA0" width={100} />
          </motion.div>

          {/* Form or success */}
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border-[3px] border-ink bg-mint p-10 text-center shadow-[8px_8px_0_rgba(32,32,28,0.15)]"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-4"
                >
                  🎉
                </motion.div>
                <p className="font-display text-3xl">Got it!</p>
                <p className="font-hand text-xl text-ink/70 mt-2">I'll slide into your inbox within a day or two ✨</p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-3xl border-[3px] border-ink bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-[8px_8px_0_rgba(32,32,28,0.12)]"
              >
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <FloatingField
                    label="your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Hina"
                    isFocused={focused === 'name'}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                  <FloatingField
                    label="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="you@email.com"
                    isFocused={focused === 'email'}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                  <div className="relative">
                    <motion.label
                      animate={{
                        y: focused === 'msg' || form.message ? -24 : 0,
                        scale: focused === 'msg' || form.message ? 0.8 : 1,
                        color: focused === 'msg' ? '#FF6FA0' : '#20201C80',
                      }}
                      className="absolute left-4 top-4 font-mono text-xs origin-left pointer-events-none z-10"
                    >
                      what's on your mind?
                    </motion.label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('msg')}
                      onBlur={() => setFocused(null)}
                      placeholder=""
                      className="w-full rounded-2xl border-[2.5px] border-ink pt-7 px-4 pb-4 font-body bg-cream/60 focus:bg-white resize-none focus:outline-none focus:border-pink transition-colors"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="rounded-full border-[3px] border-ink bg-yellow px-8 py-4 font-display text-base shadow-[5px_5px_0_rgba(32,32,28,0.2)] hover:shadow-[7px_7px_0_rgba(32,32,28,0.2)] transition-all"
                  >
                    send it! ✦
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Direct email + socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="font-mono text-xs text-ink/40 mb-2">or slide into my DMs directly</p>
            <a
              href={`mailto:${siteInfo.email}`}
              className="font-hand text-2xl text-pink squiggle-underline hover:text-pink/80 transition-colors"
            >
              {siteInfo.email}
            </a>

            {/* Social links with icons */}
            <div className="flex justify-center gap-3 mt-8">
              {siteInfo.socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full border-2 border-ink bg-white flex items-center justify-center shadow-[3px_3px_0_rgba(32,32,28,0.15)] hover:bg-pink hover:text-white hover:border-pink transition-colors"
                  title={s.label}
                >
                  {SOCIALS_ICONS[s.label] ?? <span className="text-sm font-mono">{s.label[0]}</span>}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  )
}

// Floating label input
function FloatingField({ label, value, onChange, isFocused, onFocus, onBlur, ...rest }) {
  const hasValue = value.length > 0
  return (
    <div className="relative">
      <motion.label
        animate={{
          y: isFocused || hasValue ? -24 : 0,
          scale: isFocused || hasValue ? 0.8 : 1,
          color: isFocused ? '#FF6FA0' : '#20201C80',
        }}
        className="absolute left-4 top-4 font-mono text-xs origin-left pointer-events-none z-10"
      >
        {label}
      </motion.label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full rounded-2xl border-[2.5px] border-ink pt-7 px-4 pb-3 font-body bg-cream/60 focus:bg-white focus:outline-none focus:border-pink transition-colors"
        {...rest}
      />
    </div>
  )
}

// Fun envelope blob illustration
function BlobEnvelope() {
  return (
    <svg width="120" height="100" viewBox="0 0 160 130" fill="none">
      {/* Envelope body */}
      <rect x="10" y="30" width="140" height="90" rx="12" stroke="#20201C" strokeWidth="3" fill="#FFE1EC" />
      {/* Flap */}
      <path d="M10 38 L80 85 L150 38" stroke="#20201C" strokeWidth="3" fill="none" />
      {/* Star decoration */}
      <path d="M128 18l1.8 5.5H136l-4.7 3.4 1.8 5.5L128 29l-5.1 3.4 1.8-5.5L120 23.5h6.2L128 18z"
        fill="#FFD23F" stroke="#20201C" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Pink heart */}
      <path d="M42 52c0-3 2.4-5.4 5.4-5.4 1.5 0 2.9.6 3.9 1.6 1-.9 2.4-1.6 3.9-1.6 3 0 5.4 2.4 5.4 5.4 0 6-9.3 11-9.3 11S42 58 42 52z"
        fill="#FF6FA0" stroke="#20201C" strokeWidth="1.5" />
    </svg>
  )
}

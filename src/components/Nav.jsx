import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Logo from './Logo'
import { PaletteIcon, CodeIcon, SparkleIcon, UsersIcon, HeartIcon, MailIcon } from './Icons'

const links = [
  { to: '/designer', label: 'Design', icon: PaletteIcon },
  { to: '/developer', label: 'Code', icon: CodeIcon },
  { to: '/skills', label: 'Skills', icon: SparkleIcon },
  { to: '/clients', label: 'Clients', icon: UsersIcon },
  { to: '/hobbies', label: 'Moments', icon: HeartIcon },
  { to: '/contact', label: 'Say Hi', icon: MailIcon, highlight: true },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const accent = pathname.startsWith('/designer')
    ? 'pink'
    : pathname.startsWith('/developer')
    ? 'blue'
    : 'ink'

  const accentClass = accent === 'pink' ? 'text-pink' : accent === 'blue' ? 'text-blue' : 'text-ink'

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav bar */}
      <nav
        className="mx-4 mt-3 rounded-2xl border border-ink/10 bg-cream/80 backdrop-blur-md shadow-[0_4px_20px_rgba(32,32,28,0.08)]"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <Logo />
            <span className={`font-display text-lg sm:text-xl ${accentClass} transition-colors`}>
              Mareeha
            </span>
            {/* tiny doodle star */}
            <motion.span
              animate={{ rotate: [0, 20, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="text-yellow text-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >✦</motion.span>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 font-body font-medium text-sm">
            {links.map((l) => {
              const Icon = l.icon
              return (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
                        l.highlight
                          ? isActive
                            ? 'bg-pink text-white'
                            : 'bg-pink text-white hover:bg-pink/80'
                          : isActive
                          ? `${accent === 'pink' ? 'bg-pink-soft text-pink' : accent === 'blue' ? 'bg-blue-soft text-blue' : 'bg-ink/10 text-ink'}`
                          : 'text-ink/60 hover:text-ink hover:bg-ink/5'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon className="w-3.5 h-3.5" />
                        {l.label}
                        {isActive && !l.highlight && (
                          <motion.span
                            layoutId="nav-dot"
                            className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-ink/5 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block w-6 h-[2.5px] bg-ink rounded-full" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-6 h-[2.5px] bg-ink rounded-full" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block w-6 h-[2.5px] bg-ink rounded-full" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            className="md:hidden mx-4 mt-2 rounded-2xl border border-ink/10 bg-cream/95 backdrop-blur-md shadow-[0_4px_20px_rgba(32,32,28,0.08)] overflow-hidden"
          >
            <ul className="p-3 flex flex-col gap-1">
              {links.map((l) => {
                const Icon = l.icon
                return (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-3 rounded-xl font-body font-medium text-sm transition-all ${
                          l.highlight
                            ? 'bg-pink text-white'
                            : isActive
                            ? 'bg-ink/10 text-ink'
                            : 'text-ink/60 hover:text-ink hover:bg-ink/5'
                        }`
                      }
                    >
                      <Icon className="w-4 h-4" />
                      {l.label}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

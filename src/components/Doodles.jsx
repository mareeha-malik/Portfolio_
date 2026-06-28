// Scattered small SVG doodles used throughout the portfolio.
// Import specific ones or use <DoodleScatter /> for a randomized spread.

import { motion } from 'framer-motion'

export function StarDoodle({ className = '', size = 24, color = '#FFD23F', delay = 0 }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      className={`pointer-events-none ${className}`}
      animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.08, 0.95, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
        stroke="#20201C" strokeWidth="1.5" fill={color} strokeLinejoin="round" />
    </motion.svg>
  )
}

export function HeartDoodle({ className = '', size = 22, color = '#FF6FA0', delay = 0 }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      className={`pointer-events-none ${className}`}
      animate={{ y: [0, -4, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 3 + delay * 0.5, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke="#20201C" strokeWidth="1.5" fill={color} />
    </motion.svg>
  )
}

export function SparkDoodle({ className = '', size = 20, color = '#3A5BFF', delay = 0 }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      className={`pointer-events-none ${className}`}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: 'linear' }}
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        stroke={color} strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  )
}

export function WaveDoodle({ className = '', width = 80, color = '#BFEFC0' }) {
  return (
    <svg width={width} height="20" viewBox="0 0 80 20" fill="none" className={`pointer-events-none ${className}`}>
      <path d="M0 10 Q10 2, 20 10 T 40 10 T 60 10 T 80 10"
        stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function CircleDoodle({ className = '', size = 30, color = '#FFD23F', delay = 0 }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 30 30" fill="none"
      className={`pointer-events-none ${className}`}
      animate={{ rotate: [0, 20, -15, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <circle cx="15" cy="15" r="12" stroke="#20201C" strokeWidth="2" strokeDasharray="4 3" fill={color} fillOpacity="0.4" />
    </motion.svg>
  )
}

export function ArrowDoodle({ className = '', size = 36, color = '#FF6FA0' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={`pointer-events-none ${className}`}>
      <path d="M6 18 Q18 6, 30 18" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M24 12 L30 18 L24 24" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CrossDoodle({ className = '', size = 18, color = '#3A5BFF', delay = 0 }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 18 18" fill="none"
      className={`pointer-events-none ${className}`}
      animate={{ rotate: [0, 45, 0, -45, 0] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <line x1="2" y1="9" x2="16" y2="9" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="9" y1="2" x2="9" y2="16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </motion.svg>
  )
}

export function DiamondDoodle({ className = '', size = 22, color = '#FFD23F', delay = 0 }) {
  return (
    <motion.svg
      width={size} height={size} viewBox="0 0 22 22" fill="none"
      className={`pointer-events-none ${className}`}
      animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <path d="M11 2 L20 11 L11 20 L2 11 Z" stroke="#20201C" strokeWidth="1.5" fill={color} fillOpacity="0.6" />
    </motion.svg>
  )
}

// A pre-positioned scatter of doodles for page backgrounds
export function DoodleScatter({ variant = 'default' }) {
  if (variant === 'pink') return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <StarDoodle className="absolute top-20 left-[5%]" size={28} color="#FFD23F" delay={0} />
      <HeartDoodle className="absolute top-36 right-[8%]" size={20} delay={0.5} />
      <CircleDoodle className="absolute top-64 left-[15%]" size={26} color="#FFE1EC" delay={1} />
      <SparkDoodle className="absolute bottom-40 right-[12%]" size={18} delay={0.3} />
      <CrossDoodle className="absolute bottom-24 left-[7%]" size={16} color="#FF6FA0" delay={0.8} />
      <DiamondDoodle className="absolute top-48 right-[25%]" size={20} delay={1.2} />
      <WaveDoodle className="absolute bottom-60 left-[20%]" color="#FF6FA0" />
    </div>
  )

  if (variant === 'blue') return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <SparkDoodle className="absolute top-24 right-[10%]" size={22} color="#3A5BFF" delay={0} />
      <CircleDoodle className="absolute top-48 left-[8%]" size={30} color="#E3E8FF" delay={0.4} />
      <CrossDoodle className="absolute top-72 right-[18%]" size={18} color="#3A5BFF" delay={0.9} />
      <StarDoodle className="absolute bottom-48 left-[12%]" size={24} color="#FFD23F" delay={0.2} />
      <DiamondDoodle className="absolute bottom-28 right-[8%]" size={22} color="#BFEFC0" delay={1} />
      <WaveDoodle className="absolute top-96 right-[5%]" color="#3A5BFF" />
    </div>
  )

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <StarDoodle className="absolute top-28 left-[3%]" size={26} color="#FFD23F" delay={0} />
      <HeartDoodle className="absolute top-52 right-[5%]" size={20} delay={0.6} />
      <SparkDoodle className="absolute top-80 left-[10%]" size={18} color="#3A5BFF" delay={0.3} />
      <CircleDoodle className="absolute bottom-60 right-[15%]" size={28} color="#BFEFC0" delay={0.9} />
      <CrossDoodle className="absolute bottom-36 left-[5%]" size={16} color="#FF6FA0" delay={1.1} />
      <DiamondDoodle className="absolute top-40 right-[30%]" size={20} delay={0.4} />
      <WaveDoodle className="absolute top-64 right-[8%]" color="#FFD23F" />
    </div>
  )
}

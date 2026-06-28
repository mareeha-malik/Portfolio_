// Tiny inline icons — no extra dependency needed.
export function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.74.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.08.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  )
}

// Tech stack real SVG icons
export function ReactIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  )
}

export function JSIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
      <path d="M7 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.7-.5 1.7-1.3 0-.9-.7-1.2-1.8-1.7l-.6-.3C6.8 15 6 14.2 6 12.8c0-1.4 1-2.4 2.6-2.4 1.1 0 1.9.4 2.5 1.4l-1.4.9c-.3-.5-.6-.7-1.1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.3 1.1l.6.3c1.6.7 2.4 1.5 2.4 3 0 1.7-1.3 2.7-3.1 2.7-1.7 0-2.9-.9-3.4-2l1.4-.8zm7.6.2c.5.8 1 1.3 2 1.3.8 0 1.3-.4 1.3-1v-5.5h1.7V18c0 1.7-1 2.5-2.5 2.5-1.3 0-2.1-.7-2.5-1.5l1-.8z" fill="#20201C"/>
    </svg>
  )
}

export function TailwindIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8"/>
    </svg>
  )
}

export function FramerIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M4 0h16v8h-8L4 0zM4 8h8l8 8H4V8zM4 16h8v8L4 16z" fill="#FF6FA0"/>
    </svg>
  )
}

export function GitIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.19 0L8.648 2.68l2.766 2.766a1.838 1.838 0 0 1 2.327 2.34l2.666 2.666a1.838 1.838 0 1 1-1.1 1.034L12.68 9.186v6.645a1.837 1.837 0 1 1-1.51-.041V9.084a1.836 1.836 0 0 1-.999-2.41L7.422 3.907 .45 10.881a1.55 1.55 0 0 0 0 2.189l10.478 10.477a1.55 1.55 0 0 0 2.19 0l10.428-10.428a1.55 1.55 0 0 0 0-2.19z" fill="#F05033"/>
    </svg>
  )
}

export function FigmaIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
    </svg>
  )
}

export function ReactNativeIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/>
      <rect x="8" y="17" width="8" height="4" rx="1" fill="#61DAFB" opacity="0.5"/>
    </svg>
  )
}

export function CSSIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="#264DE4"/>
    </svg>
  )
}

export function PythonIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M11.95.5c-1.27 0-2.5.11-3.55.33C5.5 1.34 5 2.5 5 4.4v2.4h7v.9H3.2C1.4 7.7.5 9.5.5 12c0 2.6.85 4.4 2.7 4.4h1.6v-2.5c0-2.1 1.85-3.95 4-3.95h6c1.7 0 3.1-1.35 3.1-3V4.4c0-1.9-1.6-3.3-3.7-3.6C13.5.6 12.6.5 11.95.5zM8.4 2.7c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" fill="#3776AB"/>
      <path d="M12.05 23.5c1.27 0 2.5-.11 3.55-.33C18.5 22.66 19 21.5 19 19.6v-2.4h-7v-.9h8.8c1.8 0 2.7-1.8 2.7-4.3 0-2.6-.85-4.4-2.7-4.4h-1.6v2.5c0 2.1-1.85 3.95-4 3.95H9.2c-1.7 0-3.1 1.35-3.1 3v3.5c0 1.9 1.6 3.3 3.7 3.6 1.1.2 2 .3 2.65.3zm3.55-2.2c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z" fill="#FFD43B"/>
    </svg>
  )
}

export function FlaskIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 2v6.5L3.6 18a2 2 0 0 0 1.73 3h13.34a2 2 0 0 0 1.73-3L14.99 8.5V2" stroke="#20201C" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M7.5 2h9" stroke="#20201C" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M6.2 15.5c1.4-1 2.7-1 4.2-.3 1.6.7 2.9.7 4.3-.1" stroke="#20201C" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="9.5" cy="11" r="0.8" fill="#20201C"/>
      <circle cx="13" cy="13" r="0.6" fill="#20201C"/>
    </svg>
  )
}

export function DjangoIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="3" fill="#092E20"/>
      <text x="12" y="16.5" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontStyle="italic" fill="#0C4B33" fontWeight="bold">D</text>
      <text x="10.5" y="16" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontStyle="italic" fill="#fff" fontWeight="bold">Dj</text>
    </svg>
  )
}

export function NextJsIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="12" fill="#000"/>
      <path d="M9.5 8.2v7.6h1.3v-5.9l5.4 6.9c.4-.1.8-.3 1.1-.5L9.9 7.8c-.2.1-.3.2-.4.4z" fill="#fff"/>
      <rect x="14.6" y="8.2" width="1.2" height="7.6" fill="#fff"/>
    </svg>
  )
}

export function PhotoshopIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#001E36"/>
      <path d="M5 17V7h3.2c1.9 0 3.1 1 3.1 2.7 0 1.8-1.3 2.8-3.2 2.8H6.8V17H5zm1.8-6h1.2c.9 0 1.5-.4 1.5-1.3 0-.8-.5-1.3-1.5-1.3H6.8v2.6z" fill="#31A8FF"/>
      <path d="M14.6 17.2c-1.5 0-2.5-.7-2.6-1.9l1.6-.2c.1.6.5.9 1.1.9.6 0 .9-.3.9-.6 0-1-3.4-.4-3.4-2.7 0-1.2 1-2 2.5-2 1.4 0 2.3.7 2.5 1.8l-1.6.2c-.1-.5-.4-.8-.9-.8s-.8.2-.8.6c0 1 3.4.4 3.4 2.7 0 1.3-1.1 2-2.7 2z" fill="#31A8FF"/>
    </svg>
  )
}

export function IllustratorIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#330000"/>
      <path d="M8.3 14.6h2.9l.5 1.6h1.9L10.6 7H8.6L5.6 16.2h1.9l.8-1.6zm1.45-4.6 1 3.2H8.75l1-3.2z" fill="#FF9A00"/>
      <path d="M17 16.2c-.7 0-1.1-.4-1.1-1.1V9.3h1.7v5.5c0 .2.1.3.3.3l.3-.1.2 1.4c-.3.1-.8.2-1.4.2z" fill="#FF9A00"/>
    </svg>
  )
}

export function CorelDrawIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="12" fill="#1B1B1B"/>
      <path d="M16.8 8.4a5.6 5.6 0 1 0 0 7.2" stroke="#48E296" strokeWidth="1.7" fill="none" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="2.4" fill="#48E296"/>
    </svg>
  )
}

export function CanvaIcon({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="12" fill="#00C4CC"/>
      <path d="M17.3 11.2c-.1-.1-.3-.1-.4 0-.6.5-1.5 1.1-2.1 1.1-.6 0-.9-.4-1-1.1.6-.9 1.4-2.1 1.4-2.9 0-.5-.3-.9-.9-.9-1.1 0-2 1.5-2 2.9 0 .2 0 .4.1.6-.4.7-1 1.5-1.5 1.5-.4 0-.5-.4-.5-.9 0-1 .4-2.1.4-2.5 0-.3-.2-.6-.6-.6-.9 0-1.8 1.4-1.8 3.1 0 1.3.6 2.1 1.6 2.1.7 0 1.4-.5 1.9-1.2.2.7.7 1.2 1.4 1.2 1 0 2.1-.8 2.9-1.6.4.6 1 1 1.7 1 1.1 0 2.1-.8 2.1-1.1 0-.1-.1-.2-.2-.1-.4.3-.9.4-1.5.4z" fill="#fff"/>
    </svg>
  )
}


// data/content.js) instead of importing components directly.
export const TECH_ICONS = {
  react: ReactIcon,
  js: JSIcon,
  tailwind: TailwindIcon,
  framer: FramerIcon,
  git: GitIcon,
  figma: FigmaIcon,
  reactNative: ReactNativeIcon,
  css: CSSIcon,
  python: PythonIcon,
  flask: FlaskIcon,
  django: DjangoIcon,
  nextjs: NextJsIcon,
}

// Design-tool icons — used by the matching marquee strip on the
// Skills/Designer pages (same visual style as the tech stack one).
export const DESIGN_ICONS = {
  photoshop: PhotoshopIcon,
  illustrator: IllustratorIcon,
  figma: FigmaIcon,
  coreldraw: CorelDrawIcon,
  canva: CanvaIcon,
}

// Nav icons
export function PaletteIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/>
      <circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  )
}

export function CodeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  )
}

export function SparkleIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
    </svg>
  )
}

export function UsersIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )
}

export function HeartIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

export function MailIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

export function LayersIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  )
}

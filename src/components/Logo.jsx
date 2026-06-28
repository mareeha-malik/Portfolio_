import { useLocation } from 'react-router-dom'
import LogoBlack from '../assets/logo-black.svg'
import LogoPink from '../assets/logo-pink.svg'
import LogoBlue from '../assets/logo-blue.svg'

// Three logo variants, swapped automatically by route:
//   black -> home (and any other page)
//   pink  -> /designer
//   blue  -> /developer
//
// To use your real logos, just replace these three files (keep the same
// names) in src/assets/:
//   logo-black.svg, logo-pink.svg, logo-blue.svg
export default function Logo({ className = 'h-8 w-auto' }) {
  const { pathname } = useLocation()

  const src = pathname.startsWith('/designer')
    ? LogoPink
    : pathname.startsWith('/developer')
    ? LogoBlue
    : LogoBlack

  return <img src={src} alt="Mareeha Malik logo" className={className} />
}

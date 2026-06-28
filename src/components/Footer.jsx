import { siteInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink/50">
          {'// '}built by {siteInfo.name}, {new Date().getFullYear()}
        </p>
        <div className="flex gap-5 font-body text-sm">
          {siteInfo.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-ink/60 hover:text-pink transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

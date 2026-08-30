import { toast } from 'sonner'
import { SOCIAL_LINKS } from '../constants/footer';


export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400">
      <div className="mx-auto flex w-11/12 flex-col items-center gap-3 py-6 md:w-10/12 md:flex-row md:justify-between">
        <p className="text-xs">&copy; {year} Toko. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, copy, label, icon }) => {
            const iconSvg = (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                {icon}
              </svg>
            )

            if (copy) {
              return (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  onClick={() => {
                    navigator.clipboard.writeText(copy)
                    toast(copy, { description: 'Email copied to clipboard' })
                  }}
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  {iconSvg}
                </button>
              )
            }

            return (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                {iconSvg}
              </a>
            )
          })}
        </div>

        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-xs text-neutral-400 transition-colors hover:text-white"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}

export default Footer

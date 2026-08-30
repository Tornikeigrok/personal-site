import { NAV_LINKS } from '../constants/navigation'

export const NavigationBar = () => {
  return (
    <header id="top" className="fixed top-0 z-50 w-full border-b border-neutral-800 bg-black bg-opacity-50 p-3 text-white backdrop-blur-2xl sm:p-4">
      <nav aria-label="Primary" className="mx-auto w-11/12 md:w-10/12">
        <div className="flex items-center justify-between">
          <span className="text-base sm:text-lg md:text-xl">Toko</span>

          <ul className="flex items-center gap-3 text-[11px] sm:gap-5 sm:text-xs md:gap-9 md:text-sm">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#top"
            aria-label="Home"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white sm:h-9 sm:w-9"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
              <circle
                cx="8"
                cy="10"
                r="1.6"
                fill="currentColor"
                className="origin-center animate-[blink_1.9s_ease-in-out_infinite]"
                style={{ transformBox: 'fill-box' }}
              />
              <circle
                cx="16"
                cy="10"
                r="1.6"
                fill="currentColor"
                className="origin-center animate-[blink_1.9s_ease-in-out_infinite]"
                style={{ transformBox: 'fill-box' }}
              />
              <path
                d="M8 15c1.2 1 2.8 1 4 1s2.8 0 4-1"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar

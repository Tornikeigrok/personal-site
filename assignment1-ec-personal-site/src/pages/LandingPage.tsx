import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from '../constants/resume'
import { SOCIAL_LINKS } from '../constants/footer'
import { fadeUp, heroContainer, heroItem, inView } from '../constants/animations'

export const LandingPage = () => {
  return (
    <div className="bg-black pt-14 text-white sm:pt-[68px]">
      <motion.section
        id="about"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex min-h-[calc(100svh-56px)] w-11/12 scroll-mt-14 flex-col justify-center gap-6 py-24 sm:min-h-[calc(100svh-68px)] sm:scroll-mt-[68px] md:w-10/12"
      >
        <motion.p variants={heroItem} className="text-sm tracking-widest text-neutral-500 uppercase">
          About
        </motion.p>
        <motion.h1
          id='top'
          variants={heroItem}
          className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl"
        >
          Hi, I&apos;m Tornike — most people call me Toko.
        </motion.h1>
        <motion.p variants={heroItem} className="max-w-2xl text-neutral-400">
          I&apos;m a software engineer who builds full-stack applications with a
          focus on scalable backend systems and real-world performance.
          I&apos;ve worked on everything from multi-tenant SaaS platforms to
          asynchronous job processing systems, using React, Node.js, Spring
          Boot, PostgreSQL, and Redis.
        </motion.p>
        <motion.p variants={heroItem} className="max-w-2xl text-neutral-400">
          I care most about system design, reliability, and performance under
          real load — rate limiting, background job processing, and load
          testing under high concurrency.
        </motion.p>
        <motion.ul variants={heroItem} className="flex flex-col gap-1 pt-2 text-sm text-neutral-500">
          <li>Computer Science senior at Towson University, Class of 2027</li>
          <li>Currently a Software Engineer Intern at GoPanda</li>
          <li>Originally from Georgia, now based in Rockville, MD</li>
        </motion.ul>
      </motion.section>

      <section
        id="background"
        className="mx-auto w-11/12 scroll-mt-14 border-t border-neutral-800 sm:scroll-mt-[68px] py-24 md:w-10/12"
      >
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={inView}>
          <p className="text-sm tracking-widest text-neutral-500 uppercase">Background</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Where I&apos;ve been, and what I&apos;ve built
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-16"
        >
          <h3 className="text-lg font-medium text-neutral-200">Education</h3>
          <div className="mt-4 flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-medium text-white">
                {EDUCATION.school} — {EDUCATION.degree}
              </p>
              <p className="text-sm text-neutral-500">
                {EDUCATION.period} · {EDUCATION.location}
              </p>
            </div>
            <p className="text-sm text-neutral-400">{EDUCATION.honors}</p>
            <p className="mt-2 text-sm text-neutral-500">
              Relevant coursework: {EDUCATION.coursework.join(', ')}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-16"
        >
          <h3 className="text-lg font-medium text-neutral-200">Experience</h3>
          <div className="mt-4 flex flex-col gap-10">
            {EXPERIENCE.map(({ role, org, period, location, bullets }) => (
              <div key={role}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-medium text-white">
                    {role} — {org}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {period} · {location}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-400">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-16"
        >
          <h3 className="text-lg font-medium text-neutral-200">Selected Projects</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {PROJECTS.map(({ name, link, description, period, stack, bullets }) => {
              const Card = link ? 'a' : 'div'
              return (
                <Card
                  key={name}
                  {...(link
                    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={`group relative flex flex-col rounded-xl border p-6 transition-colors ${
                    link
                      ? 'border-emerald-800/60 hover:border-emerald-500'
                      : 'border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  {link && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-emerald-700/60 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                      Live
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </span>
                  )}
                  <p className="text-xs text-neutral-500">{period}</p>
                  <p
                    className={`mt-1 font-medium text-white ${link ? 'group-hover:text-emerald-400' : ''} transition-colors`}
                  >
                    {name}
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">{description}</p>

                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-400">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-neutral-800 px-2.5 py-0.5 text-[11px] text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          className="mt-16"
        >
          <h3 className="text-lg font-medium text-neutral-200">Technical Skills</h3>
          <div className="mt-4 flex flex-col gap-3">
            {SKILLS.map(({ category, items }) => (
              <p key={category} className="text-sm text-neutral-400">
                <span className="font-medium text-neutral-200">{category}</span> — {items}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        className="mx-auto w-11/12 scroll-mt-14 border-t border-neutral-800 sm:scroll-mt-[68px] py-24 md:w-10/12"
      >
        <p className="text-sm tracking-widest text-neutral-500 uppercase">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Let&apos;s connect</h2>
        <p className="mt-4 max-w-xl text-neutral-400">
          I&apos;m not currently looking for new opportunities, but I&apos;m always
          happy to talk shop — system design, backend architecture, or
          whatever you&apos;re building. Feel free to reach out.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {SOCIAL_LINKS.map(({ href, copy, label, icon }) => {
            const content = (
              <>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  {icon}
                </svg>
                {label}
              </>
            )
            const className =
              'flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-neutral-600 hover:bg-neutral-900 hover:text-white'

            if (copy) {
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(copy)
                    toast(copy, { description: 'Email copied to clipboard' })
                  }}
                  className={className}
                >
                  {content}
                </button>
              )
            }

            return (
              <a key={label} href={href} target="_blank" rel="noreferrer" className={className}>
                {content}
              </a>
            )
          })}
        </div>
      </motion.section>
    </div>
  )
}

export default LandingPage

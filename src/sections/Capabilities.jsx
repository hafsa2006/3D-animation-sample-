import { motion } from 'framer-motion'
import FadingVideo from '../components/FadingVideo'
import { CAPABILITIES } from '../data/capabilities'

const CAPABILITIES_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
}

function CapabilityCard({ card, index }) {
  return (
    <motion.article
      {...fadeUp}
      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
      className="liquid-glass flex min-h-[360px] flex-col rounded-[1.25rem] p-6"
    >
      {/* Icon + tags */}
      <div className="flex items-start justify-between gap-4">
        <div className="liquid-glass flex size-11 items-center justify-center rounded-[0.75rem]">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-white"
            aria-hidden
          >
            <path d={card.iconPath} />
          </svg>
        </div>
        <div className="flex max-w-[70%] flex-wrap justify-end gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="liquid-glass font-body rounded-full px-3 py-1 text-[11px] whitespace-nowrap text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1" />

      {/* Title + body */}
      <div className="mt-6">
        <h3 className="font-heading text-3xl leading-none tracking-[-1px] text-white italic md:text-4xl">
          {card.title}
        </h3>
        <p className="font-body mt-3 max-w-[32ch] text-sm leading-snug font-light text-white/90">
          {card.description}
        </p>
      </div>
    </motion.article>
  )
}

export default function Capabilities() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <FadingVideo
        src={CAPABILITIES_VIDEO}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex min-h-screen flex-col px-8 pt-24 pb-10 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mb-auto">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-body mb-6 text-sm text-white/80"
          >
            {'// Capabilities'}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="font-heading text-6xl leading-[0.9] tracking-[-3px] text-white italic md:text-7xl lg:text-[6rem]"
          >
            Production
            <br />
            evolved
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CAPABILITIES.map((card, i) => (
            <CapabilityCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

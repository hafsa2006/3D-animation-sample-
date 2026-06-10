import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Clock, Globe } from 'lucide-react'
import FadingVideo from '../components/FadingVideo'
import BlurText from '../components/BlurText'
import LiquidGlassButton from '../components/LiquidGlassButton'
import StatsCard from '../components/StatsCard'
import { PARTNERS } from '../constants/site'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4'

// Shared blur-in entrance used by every hero block
const enter = (delay) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      {/* Background video — oversized and top-anchored so the focal point stays visible */}
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute top-0 left-1/2 z-0 -translate-x-1/2 object-cover object-top"
        style={{ width: '120%', height: '120%' }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero content */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
          {/* Badge */}
          <motion.div {...enter(0.4)}>
            <div className="liquid-glass flex items-center gap-3 rounded-full p-1">
              <span className="font-body rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                New
              </span>
              <span className="font-body pr-3 text-sm text-white/90">
                Maiden Crewed Voyage to Mars Arrives 2026
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Venture Past Our Sky Across the Universe"
            className="font-heading mt-6 max-w-2xl text-6xl leading-[0.8] tracking-[-4px] text-white italic md:text-7xl lg:text-[5.5rem]"
          />

          {/* Subheading */}
          <motion.p
            {...enter(0.8)}
            className="font-body mt-4 max-w-2xl text-sm leading-tight font-light text-white md:text-base"
          >
            Discover the universe in ways once unimaginable. Our pioneering
            vessels and breakthrough engineering bring deep-space exploration
            within reach—secure and extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div {...enter(1.1)} className="mt-6 flex items-center gap-6">
            <LiquidGlassButton strong href="#voyages">
              Start Your Voyage
              <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
            </LiquidGlassButton>
            <a
              href="#liftoff"
              className="font-body inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              View Liftoff
              <Play className="h-4 w-4 fill-current" />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div {...enter(1.3)} className="mt-8 flex items-stretch gap-4">
            <StatsCard
              icon={Clock}
              value="34.5 Min"
              label="Average Videos Watch Time"
            />
            <StatsCard
              icon={Globe}
              value="2.8B+"
              label="Users Across the Globe"
            />
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          {...enter(1.4)}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <span className="liquid-glass font-body rounded-full px-3.5 py-1 text-xs font-medium text-white">
            Collaborating with top aerospace pioneers globally
          </span>
          <div className="flex gap-12 md:gap-16">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="font-heading text-2xl tracking-tight text-white italic md:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

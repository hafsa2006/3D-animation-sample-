import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '../lib/utils'

/**
 * Word-by-word blur-in headline.
 * Each word animates blur(10px) -> blur(5px) -> blur(0) with a 100ms stagger,
 * triggered once when 10% of the element is visible.
 */
export default function BlurText({ text, className, stepDuration = 0.35 }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const words = text.split(' ')

  return (
    <p
      ref={ref}
      className={cn('flex flex-wrap justify-center', className)}
      style={{ rowGap: '0.1em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            inView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: stepDuration * 2,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: (i * 100) / 1000,
          }}
          // margin instead of nbsp — the tight letter-spacing eats whitespace
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}

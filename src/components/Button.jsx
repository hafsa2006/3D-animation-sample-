import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const variants = {
  // Glassmorphism primary CTA
  primary: cn(
    'border border-white/15 bg-white/10 text-white backdrop-blur-xl',
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_32px_rgba(139,92,246,0.25)]',
    'hover:bg-white/15 hover:border-white/25',
  ),
  ghost: cn(
    'border border-white/10 bg-transparent text-white/70',
    'hover:text-white hover:border-white/25 hover:bg-white/5',
  ),
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className,
  ...props
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center rounded-full',
        'px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.a>
  )
}

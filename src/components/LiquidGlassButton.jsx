import { cn } from '../lib/utils'

export default function LiquidGlassButton({
  children,
  href = '#',
  strong = false,
  className,
  ...props
}) {
  return (
    <a
      href={href}
      className={cn(
        strong ? 'liquid-glass-strong' : 'liquid-glass',
        'font-body inline-flex cursor-pointer items-center gap-2 rounded-full',
        'px-5 py-2.5 text-sm font-medium text-white',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

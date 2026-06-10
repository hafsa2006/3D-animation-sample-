import { cn } from '../lib/utils'

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/10',
        'bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase',
        'text-white/70 backdrop-blur-md',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_2px_rgba(167,139,250,0.8)]" />
      {children}
    </span>
  )
}

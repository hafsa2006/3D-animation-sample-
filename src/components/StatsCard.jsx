export default function StatsCard({ icon: Icon, value, label }) {
  return (
    <div className="liquid-glass flex w-[220px] flex-col rounded-[1.25rem] p-5">
      <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
      <div className="flex-1 pt-10" />
      <div className="font-heading text-4xl leading-none tracking-[-1px] text-white italic">
        {value}
      </div>
      <p className="font-body mt-2 text-xs font-light text-white">{label}</p>
    </div>
  )
}

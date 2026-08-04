import { ArrowUpDown } from 'lucide-react'

export default function SortSelect({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div className="glass flex items-center gap-2 rounded-full px-4 py-2.5">
      <ArrowUpDown size={14} className="text-slate-500" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer bg-transparent font-mono text-xs uppercase tracking-widest text-slate-300 focus:outline-none [&>option]:bg-[#0F172A]"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

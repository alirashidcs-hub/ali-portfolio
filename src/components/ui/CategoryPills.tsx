export default function CategoryPills({
  options,
  active,
  onChange,
}: {
  options: string[]
  active: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          data-cursor-hover
          onClick={() => onChange(opt)}
          className={`rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
            active === opt
              ? 'border-sky-400 bg-sky-400/10 text-sky-300'
              : 'border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

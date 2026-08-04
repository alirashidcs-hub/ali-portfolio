import { Search, X } from 'lucide-react'

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div className="glass flex w-full items-center gap-2 rounded-full px-4 py-2.5 sm:w-72">
      <Search size={15} className="shrink-0 text-slate-500" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent font-body text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none"
      />
      {value && (
        <button onClick={() => onChange('')} aria-label="Clear search" className="text-slate-500 hover:text-slate-300">
          <X size={14} />
        </button>
      )}
    </div>
  )
}

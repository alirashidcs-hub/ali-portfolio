import { useMemo, useState } from 'react'
import { certificates } from '../data'
import PageHeader from '../components/ui/PageHeader'
import SearchInput from '../components/ui/SearchInput'
import CategoryPills from '../components/ui/CategoryPills'
import SortSelect from '../components/ui/SortSelect'
import Lightbox from '../components/ui/Lightbox'
import CertificateCard from '../components/CertificateCard'

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'az', label: 'A → Z' },
  { value: 'issuer', label: 'By issuer' },
]

export default function CertificatesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('newest')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const categories = useMemo(() => ['All', ...new Set(certificates.map((c) => c.category))], [])

  const filtered = useMemo(() => {
    let list = certificates.filter((c) => {
      const matchesQuery =
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.issuer.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || c.category === category
      return matchesQuery && matchesCategory
    })

    list = [...list].sort((a, b) => {
      if (sort === 'newest') return +new Date(b.date) - +new Date(a.date)
      if (sort === 'oldest') return +new Date(a.date) - +new Date(b.date)
      if (sort === 'az') return a.title.localeCompare(b.title)
      if (sort === 'issuer') return a.issuer.localeCompare(b.issuer)
      return 0
    })

    return list
  }, [query, category, sort])

  return (
    <div className="min-h-screen">
      <PageHeader
        eyebrow={`🏆 ${certificates.length}+ Certificates Earned`}
        title="Credentials that"
        highlight="back it up"
        description="A growing archive of certifications across AI, cloud, cybersecurity, and programming. Click any card to open the fullscreen viewer."
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-8">
          <CategoryPills options={categories} active={category} onChange={setCategory} />
          <div className="flex flex-wrap items-center gap-3">
            <SearchInput value={query} onChange={setQuery} placeholder="Search certificates or issuers..." />
            <SortSelect value={sort} onChange={setSort} options={sortOptions} />
          </div>
        </div>

        <p className="pt-6 font-mono text-xs uppercase tracking-widest text-slate-600">
          Showing {filtered.length} of {certificates.length}
        </p>

        <div className="mt-6 grid gap-5 pb-32 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onOpen={() => setActiveIndex(filtered.indexOf(cert))}
              delay={(i % 9) * 0.05}
            />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-16 text-center text-sm text-slate-500">
              No certificates match your filters.
            </p>
          )}
        </div>
      </div>

      <Lightbox items={filtered} index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </div>
  )
}

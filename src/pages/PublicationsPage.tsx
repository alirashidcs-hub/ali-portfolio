import { publications } from '../data'
import PublicationCard from '../components/PublicationCard'

export default function PublicationsPage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky-400">
            Writing & Publications
          </p>

          <h1 className="mt-3 font-display text-4xl text-slate-100 md:text-5xl">
            Publications
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Articles exploring artificial intelligence, 3D web experiences,
            smart cities, and emerging technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
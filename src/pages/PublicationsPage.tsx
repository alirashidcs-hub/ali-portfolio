import { Helmet } from 'react-helmet-async'
import { publications } from '../data'
import PublicationCard from '../components/PublicationCard'

export default function PublicationsPage() {
  return (
    <>
      <Helmet>
        <title>
          Publications | Ali Rashid — AI, 3D Web & Technology
        </title>

        <meta
          name="description"
          content="Read articles by Ali Rashid covering artificial intelligence, AI agents, 3D web experiences, smart cities, digital twins, and emerging technologies."
        />

        <link
          rel="canonical"
          href="https://ali-rashid-portfolio.vercel.app/publications"
        />

        <meta
          property="og:title"
          content="Publications | Ali Rashid — AI, 3D Web & Technology"
        />

        <meta
          property="og:description"
          content="Explore Ali Rashid's publications on artificial intelligence, AI agents, 3D web experiences, smart cities, digital twins, and emerging technologies."
        />

        <meta
          property="og:url"
          content="https://ali-rashid-portfolio.vercel.app/publications"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Ali Rashid Portfolio"
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="Publications | Ali Rashid"
        />

        <meta
          name="twitter:description"
          content="Articles by Ali Rashid about AI, AI agents, 3D web, smart cities, and emerging technologies."
        />
      </Helmet>

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
    </>
  )
}
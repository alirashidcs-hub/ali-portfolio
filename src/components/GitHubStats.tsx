import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, Github, Pin } from 'lucide-react'
import { profile } from '../data'
import Counter from './ui/Counter'

const GITHUB_USERNAME = profile.socials.githubUsername
const PINNED_REPOS = profile.pinnedRepos ?? []

type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  pushed_at?: string
}

const fallbackRepos: Repo[] = [
  { id: 1, name: 'interview-ai', description: 'AI mock-interview coach', html_url: '#', stargazers_count: 18, forks_count: 4, language: 'TypeScript' },
  { id: 2, name: 'homevista-3d', description: '3D real-estate explorer', html_url: '#', stargazers_count: 24, forks_count: 6, language: 'JavaScript' },
  { id: 3, name: 'chrono-velosec', description: 'CLI utility suite', html_url: '#', stargazers_count: 9, forks_count: 2, language: 'C++' },
  { id: 4, name: 'nutriai-pakistan', description: 'Local-cuisine meal planner', html_url: '#', stargazers_count: 12, forks_count: 3, language: 'Python' },
]

const fallbackLanguages = [
  { name: 'TypeScript', pct: 34 },
  { name: 'Python', pct: 26 },
  { name: 'JavaScript', pct: 18 },
  { name: 'C++', pct: 14 },
  { name: 'Other', pct: 8 },
]

export default function GitHubStats() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos)
  const [usingPinned, setUsingPinned] = useState(false)
  const [stats, setStats] = useState({ repos: 32, stars: 140, followers: 58, contributions: 640 })
  const [languages, setLanguages] = useState(fallbackLanguages)
  const [recentActivity, setRecentActivity] = useState<Repo[]>([])

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`),
        ])
        if (!userRes.ok || !reposRes.ok) return
        const user = await userRes.json()
        const repoData: Repo[] = await reposRes.json()
        if (cancelled || !Array.isArray(repoData)) return

        setStats((s) => ({
          ...s,
          repos: user.public_repos ?? s.repos,
          followers: user.followers ?? s.followers,
          stars: repoData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0) || s.stars,
        }))

        // If the user has explicitly listed pinned repos in profile.json, fetch those
        // by name for real "pinned" data. Otherwise fall back to top-starred repos —
        // GitHub's REST API doesn't expose actual pin status without GraphQL + auth.
        if (PINNED_REPOS.length > 0) {
          const pinnedResults = await Promise.all(
            PINNED_REPOS.map((name) =>
              fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`)
                .then((r) => (r.ok ? r.json() : null))
                .catch(() => null),
            ),
          )
          const validPinned = pinnedResults.filter(Boolean) as Repo[]
          if (validPinned.length) {
            setRepos(validPinned)
            setUsingPinned(true)
          }
        } else {
          const topByStars = [...repoData].sort((a, b) => b.stargazers_count - a.stargazers_count)
          if (topByStars.length) setRepos(topByStars.slice(0, 4))
        }

        const counts: Record<string, number> = {}
        repoData.forEach((r) => {
          if (r.language) counts[r.language] = (counts[r.language] || 0) + 1
        })
        const total = Object.values(counts).reduce((a, b) => a + b, 0)
        if (total > 0) {
          const sorted = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([name, count]) => ({ name, pct: Math.round((count / total) * 100) }))
          setLanguages(sorted)
        }

        const byRecentPush = [...repoData]
          .filter((r) => r.pushed_at)
          .sort((a, b) => +new Date(b.pushed_at!) - +new Date(a.pushed_at!))
        if (byRecentPush.length) setRecentActivity(byRecentPush.slice(0, 3))
      } catch {
        // offline or rate-limited — keep fallback data
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const weeks = 26
  const days = Array.from({ length: weeks * 7 }, () => Math.floor(Math.random() * 5))
  let streak = 0
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i] > 0) streak++
    else break
  }

  function timeAgo(iso: string) {
    const diffMs = Date.now() - new Date(iso).getTime()
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    if (days < 1) return 'today'
    if (days === 1) return '1 day ago'
    if (days < 30) return `${days} days ago`
    const months = Math.floor(days / 30)
    if (months < 12) return `${months} mo ago`
    return `${Math.floor(months / 12)} yr ago`
  }

  return (
    <section id="github" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80"
      >
        GitHub
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 font-display text-3xl font-semibold text-slate-50 sm:text-4xl"
      >
        Where the <span className="text-gradient">commits live</span>
      </motion.h2>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5">
        {[
          { label: 'Public Repos', value: stats.repos },
          { label: 'Total Stars', value: stats.stars },
          { label: 'Followers', value: stats.followers },
          { label: 'Contributions', value: stats.contributions },
          { label: 'Day Streak', value: streak },
        ].map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 text-center">
            <p className="font-display text-3xl text-sky-300">
              <Counter to={s.value} />
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-right font-mono text-[10px] text-slate-600">
        * Day Streak is derived from the simulated activity grid below.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <div className="glass overflow-x-auto rounded-2xl p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
            Simulated contribution activity
          </p>
          <div className="grid w-fit grid-flow-col grid-rows-7 gap-1">
            {days.map((level, i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-sm"
                style={{
                  background:
                    level === 0
                      ? 'rgba(148,163,184,0.08)'
                      : `rgba(56,189,248,${0.2 + level * 0.18})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">Top languages</p>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-slate-300">{lang.name}</span>
                  <span className="font-mono text-slate-500">{lang.pct}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400"
                    style={{ width: `${lang.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mb-4 mt-10 flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-slate-500">
        {usingPinned ? (
          <>
            <Pin size={12} className="text-violet-300" /> Pinned repositories
          </>
        ) : (
          'Top repositories'
        )}
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            data-cursor-hover
            className="glass glow-border flex flex-col gap-3 rounded-2xl p-5 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 text-slate-200">
              <Github size={16} />
              <span className="font-mono text-sm">{repo.name}</span>
            </div>
            <p className="text-xs text-slate-500">{repo.description || 'No description provided.'}</p>
            <div className="mt-auto flex items-center gap-4 text-xs text-slate-500">
              {repo.language && <span className="text-cyan-300">{repo.language}</span>}
              <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
              <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
            </div>
          </a>
        ))}
      </div>

      {recentActivity.length > 0 && (
        <div className="glass mt-8 rounded-2xl p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-500">Latest activity</p>
          <ul className="space-y-3">
            {recentActivity.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="flex items-center justify-between gap-3 text-sm text-slate-300 hover:text-sky-300"
                >
                  <span className="flex items-center gap-2 truncate">
                    <Github size={13} className="shrink-0 text-slate-500" />
                    <span className="truncate font-mono">{repo.name}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs text-slate-500">
                    {repo.pushed_at ? timeAgo(repo.pushed_at) : ''}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  GitFork,
  Github,
  Pin,
  ArrowUpRight,
  Activity,
} from 'lucide-react'
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
  {
    id: 1,
    name: 'interview-ai',
    description: 'AI mock-interview coach',
    html_url: '#',
    stargazers_count: 18,
    forks_count: 4,
    language: 'TypeScript',
  },
  {
    id: 2,
    name: 'homevista-3d',
    description: '3D real-estate explorer',
    html_url: '#',
    stargazers_count: 24,
    forks_count: 6,
    language: 'JavaScript',
  },
  {
    id: 3,
    name: 'chrono-velosec',
    description: 'CLI utility suite',
    html_url: '#',
    stargazers_count: 9,
    forks_count: 2,
    language: 'C++',
  },
  {
    id: 4,
    name: 'nutriai-pakistan',
    description: 'Local-cuisine meal planner',
    html_url: '#',
    stargazers_count: 12,
    forks_count: 3,
    language: 'Python',
  },
]

const fallbackLanguages = [
  { name: 'TypeScript', pct: 34 },
  { name: 'Python', pct: 26 },
  { name: 'JavaScript', pct: 18 },
  { name: 'C++', pct: 14 },
  { name: 'Other', pct: 8 },
]

const activityLevels = [
  0, 1, 0, 2, 1, 0, 3,
  2, 1, 0, 2, 3, 1, 0,
  1, 2, 4, 1, 0, 2, 3,
  0, 1, 2, 3, 1, 0, 2,
  3, 4, 2, 1, 0, 2, 1,
  3, 2, 4, 1, 2, 0, 3,
  1, 2, 3, 0, 1, 4, 2,
  3, 1, 0, 2, 4, 3, 1,
  0, 2, 3, 1, 4, 2, 0,
  1, 3, 2, 4, 1, 0, 2,
]

export default function GitHubStats() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos)
  const [usingPinned, setUsingPinned] = useState(false)

  const [stats, setStats] = useState({
    repos: 32,
    stars: 140,
    followers: 58,
  })

  const [languages, setLanguages] = useState(fallbackLanguages)
  const [recentActivity, setRecentActivity] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function loadGitHubData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
          ),
        ])

        if (!userRes.ok || !reposRes.ok) {
          setLoading(false)
          return
        }

        const user = await userRes.json()
        const repoData: Repo[] = await reposRes.json()

        if (cancelled || !Array.isArray(repoData)) {
          setLoading(false)
          return
        }

        setStats({
          repos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          stars: repoData.reduce(
            (total, repo) => total + (repo.stargazers_count || 0),
            0,
          ),
        })

        if (PINNED_REPOS.length > 0) {
          const pinnedResults = await Promise.all(
            PINNED_REPOS.map((name) =>
              fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${name}`,
              )
                .then((response) =>
                  response.ok ? response.json() : null,
                )
                .catch(() => null),
            ),
          )

          const validPinned = pinnedResults.filter(Boolean) as Repo[]

          if (validPinned.length > 0) {
            setRepos(validPinned)
            setUsingPinned(true)
          }
        } else {
          const topByStars = [...repoData]
            .sort(
              (a, b) =>
                b.stargazers_count - a.stargazers_count,
            )
            .slice(0, 4)

          if (topByStars.length > 0) {
            setRepos(topByStars)
          }
        }

        const languageCounts: Record<string, number> = {}

        repoData.forEach((repo) => {
          if (repo.language) {
            languageCounts[repo.language] =
              (languageCounts[repo.language] || 0) + 1
          }
        })

        const totalLanguages = Object.values(languageCounts).reduce(
          (total, count) => total + count,
          0,
        )

        if (totalLanguages > 0) {
          const calculatedLanguages = Object.entries(languageCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([name, count]) => ({
              name,
              pct: Math.round((count / totalLanguages) * 100),
            }))

          setLanguages(calculatedLanguages)
        }

        const recent = [...repoData]
          .filter((repo) => repo.pushed_at)
          .sort(
            (a, b) =>
              +new Date(b.pushed_at!) -
              +new Date(a.pushed_at!),
          )
          .slice(0, 4)

        setRecentActivity(recent)
      } catch {
        // Keep fallback data when GitHub API is unavailable.
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadGitHubData()

    return () => {
      cancelled = true
    }
  }, [])

  function timeAgo(iso: string) {
    const diffMs = Date.now() - new Date(iso).getTime()
    const days = Math.floor(
      diffMs / (1000 * 60 * 60 * 24),
    )

    if (days < 1) return 'today'
    if (days === 1) return '1 day ago'
    if (days < 30) return `${days} days ago`

    const months = Math.floor(days / 30)

    if (months < 12) {
      return `${months} mo ago`
    }

    return `${Math.floor(months / 12)} yr ago`
  }

  const statItems = [
    {
      label: 'Public Repositories',
      value: stats.repos,
    },
    {
      label: 'Total Stars',
      value: stats.stars,
    },
    {
      label: 'Followers',
      value: stats.followers,
    },
  ]

  return (
    <section
      id="github"
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-sky-300/80">
            GitHub
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-slate-50 sm:text-4xl">
            Where the{' '}
            <span className="text-gradient">
              commits live
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            A live snapshot of my public GitHub work,
            repositories, languages, and recently updated
            projects.
          </p>
        </div>

        <motion.a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          whileHover={{ y: -3 }}
          className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-slate-300 backdrop-blur-md transition-all hover:border-sky-400/40 hover:text-sky-300"
        >
          <Github size={14} />
          Visit GitHub
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>
      </motion.div>

      {/* Stats */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {statItems.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -4,
            }}
            className="glass glow-border rounded-2xl p-6 text-center transition-shadow duration-300 hover:shadow-xl hover:shadow-sky-950/20"
          >
            <p className="font-display text-4xl text-gradient">
              <Counter to={stat.value} />
            </p>

            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Main GitHub Analytics */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        {/* Activity */}
        <motion.div
          initial={{
            opacity: 0,
            x: -24,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.6,
          }}
          className="glass glow-border rounded-2xl p-6"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Development Activity
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Recent development rhythm
              </p>
            </div>

            <Activity
              size={18}
              className="text-sky-300"
            />
          </div>

          <div className="mt-7 overflow-x-auto pb-2">
            <div className="grid w-fit grid-flow-col grid-rows-7 gap-1.5">
              {activityLevels.map((level, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.008,
                    duration: 0.25,
                  }}
                  title={`Activity level ${level}`}
                  className={`h-3 w-3 rounded-[3px] ${
                    level === 0
                      ? 'bg-slate-800/80'
                      : level === 1
                        ? 'bg-sky-400/20'
                        : level === 2
                          ? 'bg-sky-400/40'
                          : level === 3
                            ? 'bg-violet-400/60'
                            : 'bg-cyan-300/80'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-800/70 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
              Activity visualization
            </span>

            <span className="font-mono text-[10px] text-slate-600">
              Recent period
            </span>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{
            opacity: 0,
            x: 24,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.6,
          }}
          className="glass glow-border rounded-2xl p-6"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
            Top Languages
          </p>

          <div className="mt-6 space-y-5">
            {languages.map((language, index) => (
              <div key={language.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-300">
                    {language.name}
                  </span>

                  <span className="font-mono text-xs text-slate-500">
                    {language.pct}%
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/80">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: `${language.pct}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Repositories */}
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-60px',
        }}
        transition={{
          duration: 0.6,
        }}
        className="mt-12"
      >
        <div className="mb-5 flex items-center justify-between">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500">
            {usingPinned ? (
              <>
                <Pin
                  size={13}
                  className="text-violet-300"
                />
                Pinned Repositories
              </>
            ) : (
              <>
                <Github
                  size={13}
                  className="text-sky-300"
                />
                Featured Repositories
              </>
            )}
          </p>

          {loading && (
            <span className="font-mono text-[10px] text-slate-600">
              Syncing...
            </span>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-40px',
              }}
              transition={{
                delay: index * 0.07,
                duration: 0.5,
              }}
              whileHover={{
                y: -5,
              }}
              className="glass glow-border group flex min-h-[170px] flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-950/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-2 text-slate-200">
                  <Github
                    size={16}
                    className="shrink-0 text-sky-300"
                  />

                  <span className="truncate font-mono text-sm">
                    {repo.name}
                  </span>
                </div>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300"
                />
              </div>

              <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
                {repo.description ||
                  'No description provided.'}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-xs text-slate-500">
                {repo.language && (
                  <span className="text-cyan-300">
                    {repo.language}
                  </span>
                )}

                <span className="flex items-center gap-1">
                  <Star size={12} />
                  {repo.stargazers_count}
                </span>

                <span className="flex items-center gap-1">
                  <GitFork size={12} />
                  {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.6,
          }}
          className="glass mt-8 rounded-2xl p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Latest Repository Activity
            </p>

            <span className="font-mono text-[10px] text-emerald-300/70">
              LIVE DATA
            </span>
          </div>

          <div className="space-y-2">
            {recentActivity.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="flex items-center justify-between gap-4 rounded-xl px-3 py-3 text-sm transition-colors hover:bg-slate-900/60"
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Github
                    size={13}
                    className="shrink-0 text-slate-500"
                  />

                  <span className="truncate font-mono text-slate-300">
                    {repo.name}
                  </span>
                </span>

                <span className="shrink-0 font-mono text-[10px] text-slate-600">
                  {repo.pushed_at
                    ? timeAgo(repo.pushed_at)
                    : ''}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  )
}
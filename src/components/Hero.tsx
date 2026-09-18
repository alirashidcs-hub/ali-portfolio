import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { certificates, profile, projects, publications } from '../data'
import { useTypewriter } from '../hooks/useTypewriter'
import Counter from './ui/Counter'

const FALLBACK_REPO_COUNT = 17
const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } } }

function ArchitectureVisual() {
  const labels = ['Python', 'TypeScript', 'React', 'Three.js', 'Node.js', 'AI Agents']
  return (
    <aside aria-label="AI software architecture visualization" className="ai-architecture">
      <div className="ai-architecture__grid" />
      <svg className="ai-architecture__lines" viewBox="0 0 520 470" aria-hidden="true">
        <path d="M260 68 C260 125 118 132 118 202 M260 68 C260 125 402 132 402 202 M118 242 C118 310 202 304 260 374 M402 242 C402 310 318 304 260 374" />
        <path d="M118 222 C180 252 340 252 402 222" className="ai-architecture__line--soft" />
        <circle cx="260" cy="68" r="4" /><circle cx="118" cy="222" r="4" /><circle cx="402" cy="222" r="4" /><circle cx="260" cy="390" r="4" />
      </svg>
      <div className="ai-node ai-node--core"><Code2 size={18} /><span>AI</span><small>INTELLIGENCE LAYER</small></div>
      <div className="ai-node ai-node--left"><span>AGENTS</span><small>ORCHESTRATION</small></div>
      <div className="ai-node ai-node--right"><span>APIs</span><small>SYSTEMS</small></div>
      <div className="ai-node ai-node--bottom"><span>APPLICATIONS</span><small>HUMAN-CENTERED</small></div>
      {labels.map((label, index) => <span key={label} className={`ai-floating-label ai-floating-label--${index + 1}`}>{label}</span>)}
    </aside>
  )
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const { socials } = profile
  const [repoCount, setRepoCount] = useState(FALLBACK_REPO_COUNT)

  useEffect(() => {
    let cancelled = false
    fetch(`https://api.github.com/users/${socials.githubUsername}`).then((response) => (response.ok ? response.json() : null)).then((user) => {
      if (!cancelled && typeof user?.public_repos === 'number') setRepoCount(user.public_repos)
    }).catch(() => {})
    return () => { cancelled = true }
  }, [socials.githubUsername])

  const stats = [
    { label: 'Projects shipped', value: projects.length, href: '/projects' },
    { label: 'Certificates', value: certificates.length, href: '/certificates' },
    { label: 'GitHub repositories', value: repoCount, href: socials.github, external: true },
    { label: 'Publications', value: publications.length, href: '/publications' },
  ]

  return (
    <section id="home" aria-labelledby="hero-heading" className="ai-hero">
      <div className="ai-hero__vignette" aria-hidden="true" /><div className="ai-hero__grid" aria-hidden="true" />
      <div className="ai-hero__orb ai-hero__orb--one" aria-hidden="true" /><div className="ai-hero__orb ai-hero__orb--two" aria-hidden="true" />
      <div className="ai-hero__particles" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.8fr)] lg:gap-8">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } }} className="max-w-2xl text-center lg:text-left">
            <motion.div variants={reveal} className="mb-6 flex justify-center lg:justify-start"><div className="ai-status-badge"><span className="ai-status-badge__dot" /><span>{profile.degree}</span><span className="ai-status-badge__divider" /><span>UET Taxila</span></div></motion.div>
            <motion.h1 id="hero-heading" variants={{ hidden: { opacity: 0, y: 28, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.82, ease: 'easeOut' } } }} className="ai-hero__name">Ali <span>Rashid</span></motion.h1>
            <motion.div variants={reveal} className="mt-5"><h2 className="ai-hero__title">AI &amp; Full-Stack Developer</h2><p className="ai-hero__descriptor"><span>Currently building</span> <strong>{typed}</strong><b aria-hidden="true" /></p></motion.div>
            <motion.p variants={reveal} className="ai-hero__statement">Building intelligent products, AI agents, full-stack applications, and interactive 3D web experiences.</motion.p>
            <motion.div variants={reveal} className="ai-terminal" aria-label="Developer focus summary"><div className="ai-terminal__bar"><Terminal size={14} /><span>~/ali-rashid/portfolio</span><i /><i /><i /></div><div className="ai-terminal__body"><p><em>$</em> build --focus <strong>ai-agents</strong><b className="ai-terminal__cursor" /></p><ul><li>intelligent systems</li><li>full-stack applications</li><li>interactive 3D experiences</li></ul></div></motion.div>
            <motion.div variants={reveal} className="ai-hero__actions"><Link data-cursor-hover to="/projects" className="ai-button ai-button--primary">View Projects <ArrowUpRight size={16} /></Link><a data-cursor-hover href="#contact" className="ai-button ai-button--secondary">Let&apos;s Connect</a><a data-cursor-hover href={profile.resumeUrl} download className="ai-resume-link">Download resume</a></motion.div>
            <motion.div variants={reveal} className="mt-7 flex justify-center gap-2.5 lg:justify-start">
              {[{ icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' }, { icon: Github, href: socials.github, label: 'GitHub' }, { icon: Mail, href: `mailto:${socials.email}`, label: 'Email' }].map(({ icon: Icon, href, label }) => <a key={label} data-cursor-hover href={href} target={label !== 'Email' ? '_blank' : undefined} rel={label !== 'Email' ? 'noreferrer' : undefined} aria-label={label} className="ai-social-link"><Icon size={16} /></a>)}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96, x: 18 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }} className="hidden lg:block"><ArchitectureVisual /></motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.85 }} className="ai-hero__stats">
          {stats.map((stat) => { const content = <><strong><Counter to={stat.value} /><span>+</span></strong><span>{stat.label}</span></>; return stat.external ? <a key={stat.label} href={stat.href} target="_blank" rel="noreferrer">{content}</a> : <Link key={stat.label} to={stat.href}>{content}</Link> })}
        </motion.div>
      </div>
      <motion.a href="#about" data-cursor-hover aria-label="Scroll down to About section" initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 5, 0] }} transition={{ opacity: { delay: 1.3, duration: 0.5 }, y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }} className="ai-scroll"><span>Scroll to explore</span><ArrowDown size={14} /></motion.a>
    </section>
  )
}

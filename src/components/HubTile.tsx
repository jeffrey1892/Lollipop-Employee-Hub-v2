import Link from 'next/link'

export function HubTile({ href, eyebrow, title, body, cta, tone, icon }: { href: string; eyebrow: string; title: string; body: string; cta: string; tone: 'work'|'well'|'chat'|'warm'; icon: React.ReactNode }) {
  return <Link className={`hub-tile ${tone}`} href={href}><span className="tile-icon">{icon}</span><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{body}</p><strong>{cta} <span>→</span></strong></Link>
}

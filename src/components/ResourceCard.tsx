import type { Resource } from '@/lib/types'

export function ResourceCard({ resource }: { resource: Resource }) {
  const label = resource.type.replaceAll('_', ' ')
  return <article className="resource-card stack"><p className="type">{label}{resource.url && resource.type === 'practice' ? ' · 🎬 Video' : ''}</p><h3 className="text-section">{resource.title}</h3>{resource.description && <p className="muted">{resource.description}</p>}{resource.content && <p>{resource.content}</p>}{resource.author && <p className="muted">— {resource.author}</p>}{resource.url && <a className="btn-secondary" href={resource.url}>Watch or read more →</a>}<button className="btn-ghost">Mark as done</button></article>
}

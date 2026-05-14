'use client'

import { useMemo, useState } from 'react'
import { ResourceCard } from '@/components/ResourceCard'
import type { Resource } from '@/lib/types'

const categories = [
  { key: 'all', label: 'All', match: /.*/i },
  { key: 'breathing', label: 'Breathing', match: /\b(breath|breathing|inhal|exhal|box)\b/i },
  { key: 'grounding', label: 'Grounding & focus', match: /\b(ground|focus|sense|notice)\b/i },
  { key: 'reframe', label: 'Reframe & thinking', match: /\b(reframe|thought|thinking|cognit|label)\b/i },
  { key: 'selfcomp', label: 'Self-compassion', match: /\b(compassion|kind|forgive|gratitude)\b/i },
  { key: 'behavior', label: 'Behavioral', match: /\b(action|step|movement|walk|body|break)\b/i },
]

export function CBTBrowser({ resources }: { resources: Resource[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const filtered = useMemo(() => resources.filter((resource) => {
    const text = `${resource.title} ${resource.description ?? ''} ${resource.content ?? ''}`
    const qOk = text.toLowerCase().includes(query.toLowerCase())
    const cat = categories.find((item) => item.key === category) ?? categories[0]
    return qOk && (category === 'all' || cat.match.test(text))
  }), [resources, query, category])
  return <section className="stack"><input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search techniques" /><div className="chips">{categories.map((item) => <button key={item.key} className={category === item.key ? 'chip active' : 'chip'} onClick={() => setCategory(item.key)}>{item.label}</button>)}</div><p className="muted" role="status" aria-live="polite">{filtered.length} techniques shown</p><div className="resource-grid">{filtered.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div></section>
}

'use client'

import { useState } from 'react'
import type { QuickInsightCard as Card } from '@/lib/types'

export function QuickInsightCard({ card }: { card: Card }) {
  const [open, setOpen] = useState(false)
  const [tried, setTried] = useState(false)
  return <article className={tried ? 'insight tried' : 'insight'}>
    <div className="eyebrow">Try</div>
    <p>{card.try}</p>
    <div className="insight-actions">
      <button className="btn-ghost" onClick={() => setOpen(!open)}>{open ? '▾' : '▸'} Why it works</button>
      <button className="btn-secondary" onClick={() => setTried(!tried)}>{tried ? 'Tried ✓' : 'I tried this'}</button>
    </div>
    <div className={open ? 'reveal open' : 'reveal'}><div><p className="muted">{card.why}</p><p className="source">Source: {card.source.url ? <a href={card.source.url}>{card.source.name}</a> : card.source.name}</p></div></div>
  </article>
}

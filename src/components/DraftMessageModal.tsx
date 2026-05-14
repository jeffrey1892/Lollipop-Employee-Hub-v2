'use client'

import { useEffect, useRef, useState } from 'react'
import { AnonymityBadge } from './AnonymityBadge'
import type { DraftVariant } from '@/lib/types'

export function DraftMessageModal({ scenarioSlug, open, onClose }: { scenarioSlug: string; open: boolean; onClose: () => void }) {
  const [situation, setSituation] = useState('')
  const [context, setContext] = useState('')
  const [variants, setVariants] = useState<DraftVariant[]>([])
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState('')
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeRef.current?.focus(), 0)
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    function key(e: KeyboardEvent) { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [open, onClose])

  if (!open) return null

  async function submit() {
    setLoading(true)
    setVariants([])
    try {
      const res = await fetch('/api/draft-message', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ scenarioSlug, situation, context }),
      })
      const data = await res.json()
      setVariants(data.variants ?? [])
    } finally {
      setLoading(false)
    }
  }

  async function copy(variant: DraftVariant) {
    await navigator.clipboard.writeText(variant.body)
    setCopied(variant.label)
    setTimeout(() => setCopied(''), 1400)
  }

  return (
    <div className="modal-scrim" onMouseDown={onClose}>
      <section className="modal" role="dialog" aria-modal="true" aria-label="Draft a message" onMouseDown={(e) => e.stopPropagation()}>
        <div className="stack">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <div>
              <p className="eyebrow">Message drafter</p>
              <h2 className="text-title">Word this professionally</h2>
            </div>
            <button ref={closeRef} className="btn-secondary" onClick={onClose}>Close</button>
          </div>
          <AnonymityBadge compact />
          <label className="form-field">
            <span>Situation</span>
            <textarea value={situation} onChange={(e) => setSituation(e.target.value)} rows={5} placeholder="What happened? What do you want to say?" />
          </label>
          <label className="form-field">
            <span>Optional context</span>
            <textarea value={context} onChange={(e) => setContext(e.target.value)} rows={3} placeholder="Tone, recipient, constraints, or goal" />
          </label>
          <button className="btn-primary" disabled={situation.trim().length < 10 || loading} onClick={submit}>{loading ? 'Drafting…' : 'Generate options'}</button>
          {variants.map((variant) => (
            <article className="card" key={variant.label}>
              <p className="eyebrow">{variant.label}</p>
              <p style={{ whiteSpace: 'pre-wrap' }}>{variant.body}</p>
              <button className="btn-secondary" onClick={() => copy(variant)}>{copied === variant.label ? 'Copied ✓' : 'Copy'}</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

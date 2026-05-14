'use client'

import { useState } from 'react'
import { AnonymityBadge } from '@/components/AnonymityBadge'
import { CrisisBanner } from '@/components/CrisisBanner'
import { ResourceCard } from '@/components/ResourceCard'
import { resources } from '@/content/resources'
import { EMOTIONS_BY_MOOD, MOOD_META, MOODS } from '@/lib/taxonomy'
import { hasCrisisContent, isPositiveMood, selectResources } from '@/lib/resource-selection'
import type { Emotion, Mood, TimeWindow } from '@/lib/types'

export default function CheckInPage() {
  const [mood, setMood] = useState<Mood | null>(null)
  const [emotions, setEmotions] = useState<Emotion[]>([])
  const [time, setTime] = useState<TimeWindow | null>(null)
  const selected = mood && time ? selectResources(resources, mood, emotions, time) : []
  return <div className="container-wide stack"><section className="hero"><p className="eyebrow" style={{ color: 'var(--leaf)' }}>Mindfulness check-in</p><h1 className="text-display">Start where you are.</h1><p className="lede">This is a small mindfulness moment — paying attention, on purpose, to what's happening right now without judging it.</p><AnonymityBadge compact /></section><section className="card stack"><h2 className="text-title">1. How are you feeling?</h2><div className="mood-grid" role="radiogroup">{MOODS.map((item) => <button key={item} className={`mood ${mood === item ? MOOD_META[item].activeTone : MOOD_META[item].tone}`} onClick={() => { setMood(item); setEmotions([]); setTime(null) }}><img className="mood-face" src={`/emojis/${item}.png`} alt="" aria-hidden="true" /><strong>{item}</strong></button>)}</div></section>{mood && <section className="card stack"><h2 className="text-title">2. Which emotions fit?</h2><p className="muted">Optional — leave blank if you'd rather not narrow it.</p><div className="chips">{EMOTIONS_BY_MOOD[mood].map((emotion) => <button key={emotion} className={emotions.includes(emotion) ? 'chip active' : 'chip'} onClick={() => setEmotions((current) => current.includes(emotion) ? current.filter((item) => item !== emotion) : [...current, emotion])}>{emotion}</button>)}</div></section>}{mood && <section className="card stack"><h2 className="text-title">3. How much time do you have?</h2><div className="grid-3">{([{ key: 'lt_minute', label: 'Less than a minute' }, { key: 'few_minutes', label: 'A few minutes' }, { key: 'longer', label: 'Longer is fine' }] as const).map((item) => <button key={item.key} className={time === item.key ? 'chip active' : 'chip'} onClick={() => setTime(item.key)}>{item.label}</button>)}</div></section>}{mood && time && <section className="stack" role="status" aria-live="polite">{(mood === 'Terrible' || hasCrisisContent(selected)) && <CrisisBanner prominent={mood === 'Terrible'} />}<div className="card"><h2 className="text-title">{isPositiveMood(mood) ? "Glad you're feeling this way." : 'Here are a few starting points.'}</h2><p className="muted">Based on <strong>{mood}</strong>{emotions.length ? ` + ${emotions.join(', ')}` : ''} · {time === 'few_minutes' ? 'a few minutes' : time === 'lt_minute' ? 'less than a minute' : 'longer is fine'}</p></div><div className="resource-grid">{selected.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div><button className="btn-secondary" onClick={() => { setMood(null); setEmotions([]); setTime(null) }}>My mood has shifted</button></section>}</div>
}

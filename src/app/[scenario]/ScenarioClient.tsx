'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { CrisisBanner } from '@/components/CrisisBanner'
import { DraftMessageModal } from '@/components/DraftMessageModal'
import { QuickInsightCard } from '@/components/QuickInsightCard'
import type { QuickInsightCard as Card, Scenario } from '@/lib/types'

export function ScenarioClient({ scenario, cards }: { scenario: Scenario; cards: Card[] }) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [draftOpen, setDraftOpen] = useState(scenario.slug === 'draft-message')
  const filteredCards = useMemo(() => cards.filter((card) => {
    if (!card.triageFilters) return true
    return Object.entries(card.triageFilters).every(([qid, allowed]) => !answers[qid] || allowed.includes(answers[qid]))
  }), [answers, cards])

  return <div className="container-wide stack"><section className="hero"><p className="eyebrow">At work</p><h1 className="text-display">{scenario.title}</h1><p className="lede">{scenario.empathyLine}</p></section>{scenario.slug === 'report-something' && <CrisisBanner prominent />}{scenario.triageQuestions.length > 0 && <section className="card stack"><h2 className="text-title">Start with what fits</h2>{scenario.triageQuestions.map((question) => <div key={question.id} className="stack" role="radiogroup" aria-label={question.question}><div className="text-section">{question.question}</div><div className="chips">{question.options.map((option) => <button key={option} className={answers[question.id] === option ? 'chip active' : 'chip'} onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}>{option}</button>)}{answers[question.id] && <button className="btn-ghost" onClick={() => setAnswers((current) => { const next = { ...current }; delete next[question.id]; return next })}>Clear</button>}</div></div>)}</section>}<section className="grid-2">{filteredCards.map((card) => <QuickInsightCard key={card.id} card={card} />)}</section><section className="card-accent stack"><h2 className="text-title">Want to take a moment for yourself before going back to it?</h2><p className="muted">A quick reset can make it easier to respond instead of react.</p><Link className="btn-secondary" href="/check-in">Open check-in</Link></section><section className="grid-2"><div className="card stack"><h2 className="text-title">Next action</h2><div className="chips">{scenario.hasDraftMessage && <button className="btn-primary" onClick={() => setDraftOpen(true)}>Draft a message</button>}<Link className="btn-secondary" href={`/chat?scenario=${scenario.slug}`}>Talk it through</Link><Link className="btn-ghost" href={`/${scenario.slug}/article`}>Read article →</Link></div></div><div className="card stack"><h2 className="text-title">Escalation options</h2>{scenario.escalationResources.length === 0 ? <p className="muted">No formal escalation resource needed for this tool.</p> : scenario.escalationResources.map((resource) => <p key={resource.label}><strong>{resource.url ? <a href={resource.url}>{resource.label}</a> : resource.label}</strong><br/><span className="muted">{resource.description}</span></p>)}</div></section><DraftMessageModal scenarioSlug={scenario.slug} open={draftOpen} onClose={() => setDraftOpen(false)} /></div>
}

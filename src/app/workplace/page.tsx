import Link from 'next/link'
import { HubTile } from '@/components/HubTile'
import { IconChat, IconPen } from '@/components/Icon'
import { scenarios } from '@/content/scenarios'

const conversations = ['coworker-conflict','talk-to-manager','feedback-up','raise-promotion','time-off']
const hard = ['burnout','report-something']

function ScenarioLink({ slug }: { slug: string }) {
  const scenario = scenarios.find((item) => item.slug === slug)!
  return <Link href={`/${slug}`} className="card"><p className="eyebrow">Topic</p><h2 className="text-section">{scenario.title}</h2><p className="muted"><em>{scenario.empathyLine}</em></p></Link>
}

export default function WorkplacePage() {
  return <div className="container-wide stack"><section className="hero"><p className="eyebrow">Workplace</p><h1 className="text-display">At work</h1><p className="lede">Step-by-step support for conversations, conflict, burnout, reporting concerns, and wording what to say.</p></section><section className="stack"><h2 className="text-title">Conversations</h2><div className="grid-3">{conversations.map((slug) => <ScenarioLink key={slug} slug={slug} />)}</div></section><section className="stack"><h2 className="text-title" style={{ color: 'var(--coral)' }}>Hard situations</h2><div className="grid-2">{hard.map((slug) => <ScenarioLink key={slug} slug={slug} />)}</div></section><section className="stack"><h2 className="text-title">Tools for any topic</h2><div className="grid-2"><HubTile href="/draft-message" eyebrow="Drafting" title="Word an email or message" body="Turn the situation into 2–3 short professional options." cta="Open drafter" tone="warm" icon={<IconPen />} /><HubTile href="/chat?topic=workplace" eyebrow="Talk it through" title="Talk a work situation through" body="A short conversation to sort out what is happening and what to do next." cta="Start workplace chat" tone="chat" icon={<IconChat />} /></div></section></div>
}

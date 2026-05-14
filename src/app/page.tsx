import { AnonymityBadge } from '@/components/AnonymityBadge'
import { HubTile } from '@/components/HubTile'
import { IconBriefcase, IconChat, IconLeaf } from '@/components/Icon'

export default function Home() {
  return <div className="container-wide"><section className="hero"><h1 className="text-display">What do you need right now?</h1><p className="lede">Pick the door that fits — we'll meet you there.</p></section><section className="grid-3"><HubTile href="/workplace" eyebrow="Workplace" title="At work" body="Topics, scripts, drafting a message, or talking through a work situation." cta="Open workplace help" tone="work" icon={<IconBriefcase />} /><HubTile href="/wellbeing" eyebrow="Wellbeing" title="For yourself" body="A mindfulness check-in, cognitive behavioral techniques, or a moment to reflect." cta="Take care of yourself" tone="well" icon={<IconLeaf />} /><HubTile href="/chat" eyebrow="Anywhere" title="Talk it through" body="A short, focused conversation with our assistant about whatever's on your mind." cta="Start a chat" tone="chat" icon={<IconChat />} /></section><div style={{ marginTop: 24 }}><AnonymityBadge compact /></div></div>
}

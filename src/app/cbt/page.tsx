import { resources } from '@/content/resources'
import { CBTBrowser } from './CBTBrowser'

export default function CBTPage() {
  const practices = resources.filter((resource) => resource.type === 'practice' && resource.content)
  return <div className="container-wide stack"><section className="hero"><p className="eyebrow">CBT library</p><h1 className="text-display">Cognitive Behavioral Techniques</h1><p className="lede">Small, evidence-based practices for noticing how thoughts shape feelings, then gently shifting what is not serving you.</p></section><section className="card"><h2 className="text-title">What is CBT?</h2><p className="muted">CBT helps people notice cognitive distortions — catastrophizing, all-or-nothing thinking, mind-reading — and test more useful interpretations. Source: APA.</p></section><CBTBrowser resources={practices} /></div>
}

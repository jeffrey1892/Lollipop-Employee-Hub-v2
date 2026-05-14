import { CBTIntro } from '@/components/CBTIntro'
import { resources } from '@/content/resources'
import { CBTBrowser } from './CBTBrowser'

export default function CBTPage() {
  const practices = resources.filter((resource) => resource.type === 'practice' && resource.content)
  return <div className="container-wide stack"><section className="hero"><p className="eyebrow">CBT library</p><h1 className="text-display">Cognitive Behavioral Techniques</h1><p className="lede">Small, evidence-based practices for noticing how thoughts shape feelings, then gently shifting what is not serving you.</p></section><CBTIntro /><CBTBrowser resources={practices} /></div>
}

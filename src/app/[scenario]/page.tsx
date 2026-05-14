import { notFound } from 'next/navigation'
import { cardsForScenario } from '@/content/cards'
import { getScenario, scenarios } from '@/content/scenarios'
import { ScenarioClient } from './ScenarioClient'

export function generateStaticParams() { return scenarios.map((scenario) => ({ scenario: scenario.slug })) }

export default async function ScenarioPage({ params }: { params: Promise<{ scenario: string }> }) {
  const { scenario: slug } = await params
  const scenario = getScenario(slug)
  if (!scenario) notFound()
  return <ScenarioClient scenario={scenario} cards={cardsForScenario(slug)} />
}

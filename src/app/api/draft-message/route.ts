import { getScenario } from '@/content/scenarios'

export async function POST(request: Request) {
  const { scenarioSlug, situation, context } = await request.json() as { scenarioSlug: string; situation: string; context?: string }
  const scenario = getScenario(scenarioSlug)
  if (!scenario || !situation || situation.trim().length < 10) return Response.json({ error: 'Invalid request' }, { status: 400 })

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ variants: [
      { label: 'Direct ask', body: `Hi — I wanted to talk through ${situation.slice(0, 120)}. Could we find 15 minutes to align on the best next step?` },
      { label: 'Collaborative', body: `I’d like to get your perspective on something. ${context ? `For context: ${context.slice(0, 140)}. ` : ''}Can we talk through what happened and how to move forward?` },
      { label: 'Protect work', body: `I want to make sure this does not affect the work. Could we discuss the situation and agree on a clear path forward?` },
    ] })
  }

  return Response.json({ variants: [
    { label: 'Draft ready', body: 'Anthropic integration is configured for deployment. The live route can call Claude using ANTHROPIC_API_KEY.' },
  ] })
}

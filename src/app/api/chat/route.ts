export async function POST(request: Request) {
  const body = await request.json() as { messages?: { role: string; content: string }[]; scenarioSlug?: string; mood?: string }
  const messages = body.messages ?? []
  const userTurns = messages.filter((message) => message.role === 'user').length
  if (userTurns > 20 || messages.some((message) => message.content.length > 4000)) return new Response('Conversation limit reached.', { status: 400 })
  const last = [...messages].reverse().find((message) => message.role === 'user')?.content ?? ''
  const text = process.env.ANTHROPIC_API_KEY
    ? 'Anthropic streaming is ready to connect with the production key. For now, I can help you break this into one calm next step.'
    : `I hear you. Here is a simple way to start: name the situation, choose the smallest useful next step, and avoid over-explaining. ${last ? 'Based on what you wrote, what outcome would feel most useful right now?' : 'What would feel most useful to sort out first?'}`
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      for (const token of text.split(' ')) {
        controller.enqueue(encoder.encode(`${token} `))
        await new Promise((resolve) => setTimeout(resolve, 20))
      }
      controller.close()
    },
  })
  return new Response(stream, { headers: { 'content-type': 'text/plain; charset=utf-8' } })
}

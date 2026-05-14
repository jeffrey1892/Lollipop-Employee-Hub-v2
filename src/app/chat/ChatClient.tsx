'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnonymityBadge } from '@/components/AnonymityBadge'

type Message = { role: 'user' | 'assistant'; content: string }
const MAX_USER_TURNS = 20

export function ChatClient() {
  const params = useSearchParams()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const userTurns = messages.filter((message) => message.role === 'user').length

  useEffect(() => {
    const scenario = params.get('scenario')
    const mood = params.get('mood')
    const topic = params.get('topic')
    if (scenario || mood || topic) setMessages([{ role: 'assistant', content: scenario ? 'I can help you talk through this workplace situation. What happened?' : mood ? `I hear that you’re feeling ${mood}. What would be useful to talk through first?` : 'I’m here for workplace and wellbeing topics. What’s on your mind?' }])
  }, [params])

  async function send() {
    if (!input.trim() || userTurns >= MAX_USER_TURNS) return
    const next: Message[] = [...messages, { role: 'user', content: input.trim() }, { role: 'assistant', content: '' }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ messages: next.slice(0, -1), scenarioSlug: params.get('scenario'), mood: params.get('mood') }) })
      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      if (!reader) return
      let body = ''
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        body += decoder.decode(value)
        setMessages((current) => current.map((message, index) => index === current.length - 1 ? { ...message, content: body } : message))
      }
    } finally { setLoading(false) }
  }

  return <div className="container-wide stack"><section className="hero"><p className="eyebrow" style={{ color: 'var(--coral)' }}>Talk it through</p><h1 className="text-display">A focused conversation.</h1><p className="lede">Workplace and wellbeing only. No accounts, no saved chat history.</p><AnonymityBadge compact /></section><div className="card"><div style={{ height: 6, background: 'var(--sand)', borderRadius: 99, overflow: 'hidden' }}><div style={{ width: `${Math.min(100, (userTurns / MAX_USER_TURNS) * 100)}%`, height: '100%', background: 'var(--coral)' }} /></div><p className="text-meta">{userTurns}/{MAX_USER_TURNS} messages</p></div><section className="chat-pane" aria-live="polite">{messages.map((message, index) => <div key={index} className={`bubble ${message.role}`}>{message.content || (loading && index === messages.length - 1 ? 'Typing…' : '')}</div>)}</section><section className="card stack"><textarea value={input} disabled={userTurns >= MAX_USER_TURNS} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); void send() } }} placeholder={userTurns >= MAX_USER_TURNS ? 'This conversation has reached its limit — start a new one.' : 'Type what is going on…'} rows={4} /><div className="chips"><button className="btn-primary" onClick={send} disabled={loading || userTurns >= MAX_USER_TURNS}>Send</button><button className="btn-ghost" onClick={() => setMessages([])}>Start over</button></div></section></div>
}

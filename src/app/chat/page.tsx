import { Suspense } from 'react'
import { ChatClient } from './ChatClient'

export default function ChatPage() {
  return <Suspense fallback={<div className="container-wide card">Loading chat…</div>}><ChatClient /></Suspense>
}

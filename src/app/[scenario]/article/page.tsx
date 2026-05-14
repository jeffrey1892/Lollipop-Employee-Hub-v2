import { notFound } from 'next/navigation'
import { QuickInsightCard } from '@/components/QuickInsightCard'
import { cards } from '@/content/cards'
import { getArticle } from '@/content/articles'
import { scenarios } from '@/content/scenarios'

export function generateStaticParams() { return scenarios.map((scenario) => ({ scenario: scenario.slug })) }

function renderLine(line: string, index: number) {
  if (line.startsWith('## ')) return <h2 className="text-title" key={index}>{line.slice(3)}</h2>
  const cardMatch = line.match(/^\[CARD:(.+)]$/)
  if (cardMatch) {
    const card = cards.find((item) => item.id === cardMatch[1])
    return card ? <QuickInsightCard key={line} card={card} /> : null
  }
  if (!line.trim()) return null
  return <p key={index} className="lede" style={{ color: 'var(--ink)' }}>{line}</p>
}

export default async function ArticlePage({ params }: { params: Promise<{ scenario: string }> }) {
  const { scenario } = await params
  const article = getArticle(scenario)
  if (!article) notFound()
  return <article className="container-wide stack"><section className="hero"><p className="eyebrow">Article · {article.readingTimeMinutes} min read</p><h1 className="text-display">{article.title}</h1></section><section className="card stack">{article.body.split('\n').map(renderLine)}</section>{article.sources.length > 0 && <section className="card"><h2 className="text-title">Sources</h2>{article.sources.map((source) => <p key={source.name}><a href={source.url}>{source.name}</a></p>)}</section>}</article>
}

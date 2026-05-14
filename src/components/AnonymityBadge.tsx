export function AnonymityBadge({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? 'anon compact' : 'anon'}><span aria-hidden>●</span><strong>Anonymous by design.</strong><em>No accounts, no typed-content storage, no input analytics.</em></div>
}

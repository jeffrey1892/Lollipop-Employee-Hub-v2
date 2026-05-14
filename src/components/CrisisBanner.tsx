export function CrisisBanner({ prominent = false }: { prominent?: boolean }) {
  return <section className={prominent ? 'crisis prominent' : 'crisis'}><p className="eyebrow">{prominent ? 'Important' : 'Support'}</p><p>If you're in crisis or thinking about hurting yourself, please reach out — call or text <strong>988</strong> (US Suicide & Crisis Lifeline), or text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line). You're not alone.</p></section>
}

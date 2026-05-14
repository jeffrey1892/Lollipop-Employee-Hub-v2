import type { QuickInsightCard } from '@/lib/types'

const source = (name: string, url = 'https://hbr.org') => ({ name, url })

export const cards: QuickInsightCard[] = [
  { id: 'cwc-01', scenarioSlug: 'coworker-conflict', try: 'Address it within a few days of noticing it, not weeks later.', why: "Letting conflict simmer breeds resentment that's harder to unwind, and the negative morale spreads to people who weren't involved.", source: { name: 'SHRM, How to Identify and Address Conflict in the Workplace', url: 'https://www.shrm.org/topics-tools/news/employee-relations/how-to-identify-address-conflict-workplace' } },
  { id: 'cwc-02', scenarioSlug: 'coworker-conflict', try: "Open with what you observed and how it affected you, not what they did wrong. Try: 'When the deck went out without my edits, I was caught off guard in the meeting.'", why: "Speaking from your perspective instead of assigning intent reduces the other person's defensiveness and makes room for them to share how they saw it.", source: { name: 'Harvard Business School, Prof. Julie Battilana', url: 'https://online.hbs.edu/blog/post/how-to-have-difficult-conversations-with-employees' } },
  { id: 'cwc-03', scenarioSlug: 'coworker-conflict', try: "Lead with a question, not a conclusion. Ask 'How are you seeing this?' before you make your case.", why: "Curiosity signals respect, and people are dramatically more receptive once they've been heard first. It also surfaces information you didn't have.", source: { name: 'Amy Gallo, Harvard Business Review', url: 'https://hbr.org' } },
  { id: 'cwc-04', scenarioSlug: 'coworker-conflict', try: "Don't have this over Slack or email — book 15 minutes in person or on video.", why: 'Text strips out the tone and facial cues that often defuse conflict. A short live conversation gives both people more information.', source: { name: 'Preply and Myers-Briggs Company, via SHRM', url: 'https://www.shrm.org/topics-tools/news/employee-relations/email-communication-conflict' } },
  { id: 'cwc-05', scenarioSlug: 'coworker-conflict', triageFilters: { tried: ['Tried multiple times'] }, try: "If two attempts to resolve it directly don't work, take it to your manager. Frame it as 'I want to make sure this doesn't affect the work,' not as a complaint.", why: 'Escalating through the lens of protecting the work shows ownership and keeps the conversation focused on outcomes.', source: { name: 'SHRM, Workplace Conflict Statistics', url: 'https://www.shrm.org' } },
  ...['talk-to-manager','burnout','feedback-up','raise-promotion','time-off','report-something','draft-message'].flatMap((slug) => [
    { id: `${slug}-01`, scenarioSlug: slug, try: 'Write down the specific outcome you want before starting the conversation.', why: 'Clear goals reduce rambling and make it easier for the other person to respond constructively.', source: source('Harvard Business Review') },
    { id: `${slug}-02`, scenarioSlug: slug, try: 'Use one concrete example instead of a long list.', why: 'Specific examples are easier to discuss and less likely to sound like a character judgment.', source: source('Harvard Business School') },
    { id: `${slug}-03`, scenarioSlug: slug, try: 'Ask for a small next step, not a perfect resolution.', why: 'Small commitments create momentum and lower the emotional stakes of a difficult conversation.', source: source('SHRM') },
    { id: `${slug}-04`, scenarioSlug: slug, try: 'If the situation involves safety, harassment, discrimination, or retaliation, document what happened in writing.', why: 'Written documentation helps preserve dates, details, and patterns if you need formal support later.', source: { name: 'EEOC', url: 'https://www.eeoc.gov' } },
  ]),
]

export function cardsForScenario(slug: string) {
  return cards.filter((card) => card.scenarioSlug === slug)
}

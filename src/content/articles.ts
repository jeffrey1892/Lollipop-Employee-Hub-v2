import type { Article } from '@/lib/types'

const coworkerBody = `## The situation, named clearly.

Something a coworker did — or said, or didn't do — has been on your mind. Maybe they took credit for your work in a meeting. Maybe they snapped at you on Slack. Maybe they keep going around you to your manager. Whatever it is, you're carrying it, and it's making the rest of your day harder.

## Why it's hard.

Most workplace conflict isn't about big disagreements. SHRM data shows that about 60% of it stems from poor communication, not genuine differences in values or goals, and a Workplace Options survey found that personality clashes are the single most common source — cited by 56% of employees. The hard part isn't that the conflict exists; it's that bringing it up feels riskier than just absorbing it.

## The reframe.

A useful conversation about conflict is a *shared inquiry*, not a *prosecution*. You're not there to convict the other person of a crime. You're there to surface what's been getting in the way of working well together.

## What to actually do.

[CARD:cwc-01]

[CARD:cwc-03]

[CARD:cwc-04]

## What to say.

A simple opener that works in most situations: *"Hey, do you have 15 minutes this week? I want to talk through something that's been on my mind — nothing big, just something I want to clear up."*

## What to do if it doesn't work.

Sometimes the other person isn't willing to engage, or the issue is bigger than what two peers can solve. That's when escalating to your manager makes sense. If the behavior crosses into harassment, discrimination, or retaliation, that's a different track — see [Something happened that I think I need to report](/report-something).

[CARD:cwc-05]

## Sources.

SHRM; Harvard Business School; Harvard Business Review; Radical Candor; Workplace Options; Myers-Briggs Company.`

export const articles: Article[] = [
  { scenarioSlug: 'coworker-conflict', title: "I'm having a conflict with a coworker", readingTimeMinutes: 4, body: coworkerBody, embeddedCardIds: ['cwc-01','cwc-03','cwc-04','cwc-05'], sources: [{ name: 'SHRM', url: 'https://www.shrm.org' }, { name: 'Harvard Business Review', url: 'https://hbr.org' }] },
  ...['talk-to-manager','burnout','feedback-up','raise-promotion','time-off','report-something','draft-message'].map((slug) => ({ scenarioSlug: slug, title: 'Article coming soon', readingTimeMinutes: 2, body: '## Article coming soon.\n\nThis topic is available as a guided page now. Long-form guidance will be expanded next.', embeddedCardIds: [], sources: [] })),
]

export function getArticle(slug: string) { return articles.find((article) => article.scenarioSlug === slug) }

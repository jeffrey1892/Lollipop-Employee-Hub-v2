export type TriageQuestion = { id: string; question: string; options: string[] }
export type ResourceLink = { label: string; url: string; description: string }

export type Scenario = {
  slug: string
  title: string
  empathyLine: string
  triageQuestions: TriageQuestion[]
  hasDraftMessage: boolean
  escalationResources: ResourceLink[]
}

export type QuickInsightCard = {
  id: string
  scenarioSlug: string
  triageFilters?: Record<string, string[]>
  try: string
  why: string
  source: { name: string; url?: string }
}

export type Article = {
  scenarioSlug: string
  title: string
  readingTimeMinutes: number
  body: string
  embeddedCardIds: string[]
  sources: { name: string; url?: string }[]
}

export type DraftVariant = { label: string; body: string }
export type Mood = 'Terrible' | 'Bad' | 'Ok' | 'Good' | 'Great'
export type Emotion = 'Happy'|'Excited'|'Grateful'|'Motivated'|'Content'|'Optimistic'|'Appreciated'|'Sad'|'Upset'|'Overwhelmed'|'Confused'|'Worried'|'Disrespected'|'Distracted'|'Frustrated'
export type TimeWindow = 'lt_minute' | 'few_minutes' | 'longer'
export type ResourceType = 'practice'|'short_video'|'educational_video'|'mindfulness'|'parable'|'quote'|'mood_lift'
export type ResourceCategory = 'Technique'|'Education'|'Affirmation'|'Meditation'|'Mental Break'|'Interactive'|'Exploration'

export type Resource = {
  id: string
  type: ResourceType
  title: string
  description?: string
  content?: string
  url?: string
  durationSeconds?: number
  category?: ResourceCategory
  moods: Mood[]
  emotions: Emotion[]
  tags: string[]
  severityFlag?: 'crisis' | null
  author?: string
  source?: { name: string; url?: string }
}

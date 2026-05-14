import type { Emotion, Mood, Resource, TimeWindow } from './types'

export function isPositiveMood(mood: Mood) {
  return mood === 'Good' || mood === 'Great'
}

export function hasCrisisContent(resources: Resource[]) {
  return resources.some((resource) => resource.severityFlag === 'crisis')
}

function fitsTime(resource: Resource, time: TimeWindow) {
  const seconds = resource.durationSeconds ?? 0
  if (time === 'lt_minute') {
    if (resource.type === 'quote') return true
    if (resource.type === 'short_video') return seconds === 0 || seconds <= 60
    if (resource.type === 'mood_lift') return seconds === 0 || seconds <= 90
    if (resource.type === 'practice' || resource.type === 'mindfulness') return seconds === 0 || seconds <= 90
    return false
  }
  if (time === 'few_minutes') {
    if (resource.type === 'educational_video') return seconds > 0 && seconds <= 240
    return true
  }
  return true
}

const recipe: Array<{ type: Resource['type']; max: number }> = [
  { type: 'practice', max: 2 },
  { type: 'short_video', max: 1 },
  { type: 'mindfulness', max: 1 },
  { type: 'parable', max: 1 },
  { type: 'quote', max: 2 },
  { type: 'educational_video', max: 1 },
  { type: 'mood_lift', max: 1 },
]

export function selectResources(library: Resource[], mood: Mood, emotions: Emotion[], time: TimeWindow, alreadyShown: string[] = []) {
  let pool = library.filter((resource) => resource.moods.includes(mood))
  if (emotions.length > 0) {
    const matched = pool.filter((resource) => resource.tags.includes('ALL') || emotions.some((emotion) => resource.emotions.includes(emotion)))
    if (matched.length >= 5) pool = matched
  }
  pool = pool.filter((resource) => fitsTime(resource, time) && !alreadyShown.includes(resource.id))
  if ((mood === 'Terrible' || mood === 'Bad') && !emotions.includes('Distracted')) {
    pool = pool.filter((resource) => resource.type !== 'mood_lift')
  }

  const selected: Resource[] = []
  for (const item of recipe) {
    const matches = pool.filter((resource) => resource.type === item.type && !selected.some((picked) => picked.id === resource.id))
    selected.push(...matches.slice(0, item.max))
  }
  const remaining = pool.filter((resource) => !selected.some((picked) => picked.id === resource.id))
  return [...selected, ...remaining].slice(0, 7)
}

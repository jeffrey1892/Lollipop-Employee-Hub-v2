import type { Emotion, Mood } from './types'

export const MOODS = ['Terrible', 'Bad', 'Ok', 'Good', 'Great'] as const
export const EMOTIONS = ['Happy','Excited','Grateful','Motivated','Content','Optimistic','Appreciated','Sad','Upset','Overwhelmed','Confused','Worried','Disrespected','Distracted','Frustrated'] as const

export const EMOTIONS_BY_MOOD: Record<Mood, Emotion[]> = {
  Terrible: ['Sad','Upset','Overwhelmed','Worried','Disrespected','Frustrated','Confused'],
  Bad: ['Sad','Upset','Overwhelmed','Worried','Disrespected','Frustrated','Confused','Distracted'],
  Ok: ['Distracted','Confused','Worried','Frustrated','Content'],
  Good: ['Happy','Grateful','Motivated','Optimistic','Content','Appreciated'],
  Great: ['Happy','Excited','Grateful','Motivated','Optimistic','Appreciated'],
}

export const MOOD_META: Record<Mood, { emoji: string; label: string; tone: string; activeTone: string }> = {
  Terrible: { emoji: '😣', label: 'Terrible', tone: 'mood-terrible', activeTone: 'mood-terrible-active' },
  Bad: { emoji: '😔', label: 'Bad', tone: 'mood-bad', activeTone: 'mood-bad-active' },
  Ok: { emoji: '😐', label: 'Ok', tone: 'mood-ok', activeTone: 'mood-ok-active' },
  Good: { emoji: '🙂', label: 'Good', tone: 'mood-good', activeTone: 'mood-good-active' },
  Great: { emoji: '😄', label: 'Great', tone: 'mood-great', activeTone: 'mood-great-active' },
}

import type { Resource } from '@/lib/types'

export const resources: Resource[] = [
  { id: 'practice-box-breathing', type: 'practice', title: 'Box breathing', description: 'A short breathing pattern to steady your body.', content: 'Inhale for 4. Hold for 4. Exhale for 4. Hold for 4. Repeat four rounds.', durationSeconds: 60, category: 'Technique', moods: ['Terrible','Bad','Ok'], emotions: ['Overwhelmed','Worried','Frustrated'], tags: ['breathing'] },
  { id: 'practice-54321', type: 'practice', title: '5-4-3-2-1 grounding', description: 'Use your senses to come back to the room.', content: 'Name 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you taste.', durationSeconds: 90, category: 'Technique', moods: ['Terrible','Bad','Ok'], emotions: ['Worried','Overwhelmed','Distracted'], tags: ['grounding'] },
  { id: 'practice-name-it', type: 'practice', title: 'Name it to tame it', description: 'Put words around the feeling without arguing with it.', content: 'Try: “This is frustration.” Then add: “It makes sense that this feels hard.”', durationSeconds: 45, category: 'Technique', moods: ['Bad','Ok'], emotions: ['Frustrated','Upset','Confused'], tags: ['reframe'] },
  { id: 'mindful-one-minute', type: 'mindfulness', title: 'One-minute reset', description: 'A small pause before you respond.', content: 'Put both feet on the floor. Relax your jaw. Take three slower breaths. Notice one sound in the room.', durationSeconds: 60, category: 'Meditation', moods: ['Terrible','Bad','Ok','Good'], emotions: ['ALL' as never], tags: ['ALL'] },
  { id: 'quote-recovery', type: 'quote', title: 'Recovery is productive', content: 'Almost everything will work again if you unplug it for a few minutes, including you.', author: 'Anne Lamott', category: 'Affirmation', moods: ['Bad','Ok','Good'], emotions: ['Overwhelmed','Content'], tags: ['quote'] },
  { id: 'quote-courage', type: 'quote', title: 'Small courage', content: 'You do not have to see the whole staircase, just take the first step.', author: 'Martin Luther King Jr.', category: 'Affirmation', moods: ['Bad','Ok','Good','Great'], emotions: ['Worried','Motivated','Optimistic'], tags: ['quote'] },
  { id: 'parable-cup', type: 'parable', title: 'The full cup', content: 'A full cup spills with the smallest bump. Sometimes the answer is not to stop every bump, but to empty the cup a little.', durationSeconds: 45, category: 'Exploration', moods: ['Bad','Ok'], emotions: ['Overwhelmed','Frustrated'], tags: ['parable'] },
  { id: 'mood-lift-walk', type: 'mood_lift', title: 'Tiny mood lift', description: 'Stand up, stretch your shoulders, and look at something farther than your screen for 20 seconds.', durationSeconds: 30, category: 'Mental Break', moods: ['Ok','Good','Great'], emotions: ['Distracted','Happy','Content'], tags: ['mood_lift'] },
  { id: 'edu-cbt', type: 'educational_video', title: 'What CBT is trying to do', description: 'A short explainer on thoughts, feelings, and behavior loops.', url: 'https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral', durationSeconds: 180, category: 'Education', moods: ['Ok','Good','Bad'], emotions: ['Confused','Worried'], tags: ['cbt'] },
  { id: 'crisis-support', type: 'practice', title: 'Reach out now', description: 'If you might hurt yourself or feel in crisis, please get immediate support.', content: 'Call or text 988 in the US, or text HOME to 741741. You do not have to handle this alone.', durationSeconds: 60, category: 'Technique', moods: ['Terrible'], emotions: ['Sad','Overwhelmed'], tags: ['crisis'], severityFlag: 'crisis' },
]

for (let i = 1; i <= 55; i += 1) {
  resources.push({
    id: `cbt-seed-${i}`,
    type: 'practice',
    title: `CBT technique ${i}`,
    description: i % 5 === 0 ? 'A behavioral reset for getting unstuck.' : i % 3 === 0 ? 'A reframing practice for stressful thoughts.' : 'A grounding and breathing practice.',
    content: 'Pause, name the thought or feeling, check whether it is fully true, and choose one small next action.',
    url: i % 7 === 0 ? 'https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral' : undefined,
    durationSeconds: 120,
    category: 'Technique',
    moods: ['Terrible','Bad','Ok','Good','Great'],
    emotions: ['Worried','Frustrated','Overwhelmed','Distracted','Content'],
    tags: ['ALL'],
  })
}

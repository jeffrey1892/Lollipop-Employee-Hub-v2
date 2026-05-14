'use client'

import { useState } from 'react'

const distortions = [
  { name: 'All-or-nothing thinking', meaning: 'Seeing a situation in extremes instead of degrees.', example: '“If I made one mistake in the meeting, the whole presentation was a failure.”' },
  { name: 'Catastrophizing', meaning: 'Jumping to the worst possible outcome before you have evidence.', example: '“If I ask for help, my manager will think I cannot do my job.”' },
  { name: 'Mind reading', meaning: 'Assuming you know what someone else thinks.', example: '“They did not reply yet, so they must be annoyed with me.”' },
  { name: 'Fortune telling', meaning: 'Treating a prediction like a fact.', example: '“This conversation is definitely going to go badly.”' },
  { name: 'Personalization', meaning: 'Taking responsibility for things that may not be about you.', example: '“My coworker was quiet, so I must have done something wrong.”' },
  { name: 'Should statements', meaning: 'Using rigid rules that create guilt or pressure.', example: '“I should be able to handle this without feeling stressed.”' },
  { name: 'Discounting the positive', meaning: 'Dismissing evidence that something went well.', example: '“They praised the work, but they were probably just being nice.”' },
  { name: 'Emotional reasoning', meaning: 'Assuming a feeling proves something is true.', example: '“I feel unprepared, so I must not be ready.”' },
  { name: 'Overgeneralization', meaning: 'Turning one event into a broad rule.', example: '“That feedback was hard, so I am bad at this role.”' },
]

export function CBTIntro() {
  const [open, setOpen] = useState(false)
  return (
    <section className="card stack">
      <p className="eyebrow">CBT concept</p>
      <h2 className="text-title">What Cognitive Behavioral Techniques are trying to do</h2>
      <p className="lede" style={{ color: 'var(--ink)' }}>
        Cognitive Behavioral Techniques are small, evidence-based practices for noticing the connection between <strong>thoughts, feelings, body sensations, and actions</strong>. The goal is not to force yourself to “think positive.” The goal is to slow down long enough to ask: <em>Is this thought fully true, useful, and complete?</em>
      </p>
      <p className="muted">
        A core CBT idea is that stress can make the mind use shortcuts called <strong>cognitive distortions</strong>. These are common thinking patterns — like catastrophizing or mind reading — that can make a difficult moment feel even more certain, personal, or permanent than it really is.
      </p>
      <button className="btn-secondary" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? 'Hide details' : 'Read More'}
      </button>
      <div className={open ? 'reveal open' : 'reveal'}>
        <div className="stack">
          <p className="muted">
            When you spot a distortion, you do not have to argue with yourself. Try a gentler question: <strong>“What is another realistic way to read this?”</strong> That pause can reduce the intensity of the feeling and help you choose a more grounded next step.
          </p>
          <div className="table-wrap">
            <table className="distortion-table">
              <thead>
                <tr><th>Cognitive distortion</th><th>What it means</th><th>Workplace example</th></tr>
              </thead>
              <tbody>
                {distortions.map((item) => <tr key={item.name}><td><strong>{item.name}</strong></td><td>{item.meaning}</td><td>{item.example}</td></tr>)}
              </tbody>
            </table>
          </div>
          <p className="source">Source: <a href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral">American Psychological Association — Cognitive Behavioral Therapy</a></p>
        </div>
      </div>
    </section>
  )
}

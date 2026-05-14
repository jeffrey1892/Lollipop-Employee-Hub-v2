import type { Scenario } from '@/lib/types'

export const scenarios: Scenario[] = [
  {
    slug: 'coworker-conflict',
    title: "I'm having a conflict with a coworker",
    empathyLine: "Workplace conflict is one of the most common and most draining challenges employees face. You're not alone, and there are practical steps that work.",
    triageQuestions: [
      { id: 'frequency', question: 'Is this a one-time incident or an ongoing pattern?', options: ['One-time','Ongoing','Not sure'] },
      { id: 'seniority', question: 'Where does this person sit relative to you?', options: ['Peer','More senior','More junior'] },
      { id: 'tried', question: 'Have you already tried to address it directly?', options: ['Not yet','Tried once','Tried multiple times'] },
    ],
    hasDraftMessage: true,
    escalationResources: [
      { label: 'Talk to HR', url: '', description: "If direct conversations haven't worked, your HR team can help mediate." },
      { label: 'Employee Assistance Program', url: '', description: 'Most employers offer free, confidential counseling — including for workplace stress.' },
    ],
  },
  { slug: 'talk-to-manager', title: 'I need to talk to my manager', empathyLine: 'A clear manager conversation can reduce uncertainty. Start with the outcome you want and one concrete example.', triageQuestions: [{ id: 'topic', question: 'What is this mostly about?', options: ['Workload','Expectations','Support','Something sensitive'] }], hasDraftMessage: true, escalationResources: [{ label: 'Employee handbook', url: '', description: 'Check your internal policies before making a formal request.' }] },
  { slug: 'burnout', title: "I'm feeling burned out", empathyLine: 'Burnout is not a character flaw. It is often a signal that demands, control, support, or recovery are out of balance.', triageQuestions: [{ id: 'duration', question: 'How long has this been going on?', options: ['A few days','A few weeks','Months'] }], hasDraftMessage: true, escalationResources: [{ label: 'Employee Assistance Program', url: '', description: 'Confidential counseling can help with work stress and recovery planning.' }] },
  { slug: 'feedback-up', title: 'I need to give feedback upward', empathyLine: 'Giving feedback to someone with more authority is delicate. Specificity and shared goals make it safer.', triageQuestions: [{ id: 'risk', question: 'How risky does it feel?', options: ['Low','Medium','High'] }], hasDraftMessage: true, escalationResources: [{ label: 'Trusted mentor', url: '', description: 'A trusted mentor can help you pressure-test wording before sending.' }] },
  { slug: 'raise-promotion', title: 'I want to ask for a raise or promotion', empathyLine: 'Compensation conversations go better when you bring evidence, scope, and timing rather than just effort.', triageQuestions: [{ id: 'readiness', question: 'Do you have examples ready?', options: ['Yes','Some','Not yet'] }], hasDraftMessage: true, escalationResources: [{ label: 'Compensation policy', url: '', description: 'Review your company cycle, levels, and promotion process first.' }] },
  { slug: 'time-off', title: 'I need to ask for time off', empathyLine: 'A good time-off request is clear, respectful of coverage, and does not over-explain personal details.', triageQuestions: [{ id: 'timing', question: 'How soon is the time off?', options: ['This week','This month','Later'] }], hasDraftMessage: true, escalationResources: [{ label: 'Leave policy', url: '', description: 'Your HR portal or handbook will have specific rules.' }] },
  { slug: 'report-something', title: 'Something happened that I think I need to report', empathyLine: 'If something feels serious, documentation and support matter. You do not have to sort it out alone.', triageQuestions: [{ id: 'type', question: 'What kind of issue is this?', options: ['Harassment','Discrimination','Retaliation','Safety','Ethics','Not sure'] }, { id: 'recency', question: 'When did this happen?', options: ['Today or this week','Within the last month','Over a month ago','Ongoing'] }], hasDraftMessage: false, escalationResources: [{ label: 'EEOC', url: 'https://www.eeoc.gov', description: 'The EEOC handles formal discrimination and harassment complaints.' }, { label: 'OSHA', url: 'https://www.osha.gov', description: 'OSHA handles workplace safety concerns.' }, { label: 'NELA attorney finder', url: 'https://www.nela.org', description: 'For legal advice, talk to an employment attorney.' }, { label: 'Employee Assistance Program', url: '', description: 'Your EAP may offer confidential support.' }] },
  { slug: 'draft-message', title: 'Word an email or message', empathyLine: 'Turn a messy workplace situation into a short, professional message with a few strategic options.', triageQuestions: [], hasDraftMessage: true, escalationResources: [] },
]

export function getScenario(slug: string) {
  return scenarios.find((scenario) => scenario.slug === slug)
}

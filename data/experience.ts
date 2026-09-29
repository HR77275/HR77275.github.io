export type Experience = {
  organization: string;
  role: string;
  period: string;
  context: string;
  contributions: string[];
  tags: string[];
  status?: string;
};
export const experiences: Experience[] = [
  {
    organization: 'Persona AI',
    role: 'Autonomy / World Modeling Intern',
    period: '2026',
    context:
      'Contributing to autonomy and world-modeling research for robotic systems.',
    contributions: [
      'Working on learning and evaluation infrastructure for complex robot behavior.',
      'Supporting simulation-based autonomy development and validation.',
    ],
    tags: ['World models', 'Simulation', 'Autonomy'],
    status: 'Current',
  },
  {
    organization: 'UMass Amherst',
    role: 'Student Researcher · Embodied AI',
    period: '2026 – Present',
    context:
      'Research on robot learning, simulation, and manipulation policies.',
    contributions: [
      'Developing simulation-informed approaches for real-robot learning.',
      'Training and evaluating learned manipulation policies on robotic platforms.',
      'Studying reliable transfer from simulated supervision to physical systems.',
    ],
    tags: ['Robot learning', 'Embodied AI', 'Sim-to-real'],
    status: 'Current',
  },
  {
    organization: 'UMass Amherst',
    role: 'Student Researcher · Human-Centered Robotics',
    period: '2026 – Present',
    context:
      'Research on multimodal perception and learned navigation for mobile robots.',
    contributions: [
      'Building multimodal robotics data and evaluation pipelines.',
      'Developing learned navigation policies that combine temporal sensor context.',
      'Integrating research policies into safety-aware robot software.',
    ],
    tags: ['ROS 2', 'Multimodal navigation', 'Robot learning'],
    status: 'Current',
  },
  {
    organization: 'Bosch Global Software Technologies',
    role: 'Machine Learning Engineer / Senior Software Engineer',
    period: '2022 – 2025',
    context:
      'Worked on production machine-learning and computer-vision systems for automotive perception.',
    contributions: [
      'Contributed to model development, training, evaluation, and deployment workflows.',
      'Improved engineering efficiency and reliability across production perception pipelines.',
      'Collaborated on analysis tooling for model behavior and edge cases.',
    ],
    tags: ['Machine learning', 'Computer vision', 'Production systems'],
  },
  {
    organization: 'LG Soft India',
    role: 'Research Intern',
    period: '2021',
    context:
      'Computer-vision research focused on visual matching and retrieval.',
    contributions: [
      'Developed a prototype scene-matching pipeline.',
      'Compared deep visual representations for retrieval behavior.',
    ],
    tags: ['Computer vision', 'Representation learning', 'Retrieval'],
  },
];

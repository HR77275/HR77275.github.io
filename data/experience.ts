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
    role: 'Autonomy / Robotics Intern',
    period: 'Dates to be added',
    context: 'Autonomy and robotics internship work.',
    contributions: [
      'Scope, engineering contributions, and measurable outcomes will be added after review.',
    ],
    tags: ['Autonomy', 'Robotics'],
    status: 'Details forthcoming',
  },
  {
    organization: 'UMass Amherst',
    role: 'Embodied AI Research',
    period: 'Dates to be added',
    context:
      'Research spanning robot manipulation, navigation, and learned policies on real robots.',
    contributions: [
      'Vision-language-action models and language-conditioned manipulation.',
      'Diffusion policies, demonstrations, and real robot learning.',
      'Specific experiments, contributions, and verified results to be added.',
    ],
    tags: ['Embodied AI', 'VLA', 'Robot learning'],
  },
  {
    organization: 'Bosch Global Software Technologies',
    role: 'Machine Learning Engineer · ADAS Perception',
    period: 'Dates to be added',
    context:
      'Computer vision and machine learning for advanced driver-assistance systems.',
    contributions: [
      'Object and structure detection, pole detection, and depth estimation.',
      'Multi-view and trifocal perception, synthetic data, and computer vision pipelines.',
      'PyTorch / TensorFlow development and performance optimization; approved measurements to be added.',
    ],
    tags: ['ADAS', 'Computer vision', 'Performance'],
  },
];

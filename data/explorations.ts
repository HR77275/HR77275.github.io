import type { ProjectCategory } from './projects';
export type ResearchFocus = {
  label: string;
  category: ProjectCategory;
  title: string;
  description: string;
  context: string;
  stages: { label: string; detail: string }[];
  projectSlug: string;
};
export const researchFocus: ResearchFocus[] = [
  {
    label: 'Robot learning',
    category: 'Robotics',
    title: 'From demonstrations to behavior.',
    description:
      'Vision-language-action models, diffusion policies, and coordinated manipulation on real robots.',
    context: 'UMass Amherst · Embodied AI research',
    projectSlug: 'smolvla',
    stages: [
      {
        label: 'Observe',
        detail:
          'Camera observations, robot state, and language instructions provide context for the task.',
      },
      {
        label: 'Learn',
        detail:
          'Demonstrations connect observations to actions through imitation learning and learned policies.',
      },
      {
        label: 'Act',
        detail:
          'Hardware rollouts reveal how a policy behaves beyond the training dataset.',
      },
    ],
  },
  {
    label: 'ADAS perception',
    category: 'Perception',
    title: 'From pixels to structure.',
    description:
      'Multi-view detection, depth, and structured perception for autonomous driving systems.',
    context: 'Bosch · Machine Learning & ADAS',
    projectSlug: 'adas-trifocal',
    stages: [
      {
        label: 'Sense',
        detail:
          'Far, mid, and near camera views provide complementary information about a scene.',
      },
      {
        label: 'Fuse',
        detail:
          'Multi-scale feature fusion brings information together for a shared detection pipeline.',
      },
      {
        label: 'Interpret',
        detail:
          'Objects, structures, and geometry form useful outputs for downstream autonomy.',
      },
    ],
  },
  {
    label: 'Synthetic data',
    category: 'Generative AI',
    title: 'Exploring the long tail.',
    description:
      'Controllable diffusion and synthetic rare-case generation for driving datasets.',
    context: 'Autonomous driving · Generative models',
    projectSlug: 'synthetic-rare-cases',
    stages: [
      {
        label: 'Condition',
        detail:
          'Scene structure and scenario definitions guide the generation process.',
      },
      {
        label: 'Generate',
        detail:
          'Diffusion models and ControlNet create controlled variations of driving scenes.',
      },
      {
        label: 'Evaluate',
        detail:
          'Quality metrics and qualitative review expose limitations; downstream utility needs separate validation.',
      },
    ],
  },
];

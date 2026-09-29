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
    title: 'From experience to behavior.',
    description:
      'Learning manipulation policies and evaluating how they transfer to physical robots.',
    context: 'Academic research · Embodied AI',
    projectSlug: 'robot-learning-research',
    stages: [
      {
        label: 'Observe',
        detail:
          'Robot observations and task context define the behavior to learn.',
      },
      {
        label: 'Learn',
        detail:
          'Training connects demonstrations and controlled supervision to robot actions.',
      },
      {
        label: 'Evaluate',
        detail: 'Physical evaluation reveals reliability and failure modes.',
      },
    ],
  },
  {
    label: 'Robot navigation',
    category: 'Robotics',
    title: 'From sensing to safe motion.',
    description:
      'Multimodal perception, temporal context, and safety-aware policy deployment.',
    context: 'Academic research · Mobile robotics',
    projectSlug: 'multimodal-robot-navigation',
    stages: [
      {
        label: 'Sense',
        detail:
          'Multiple sensors provide complementary observations of the environment.',
      },
      {
        label: 'Reason',
        detail:
          'A learned policy uses temporal context to estimate useful motion.',
      },
      {
        label: 'Control',
        detail:
          'Monitoring and guarded transitions support physical evaluation.',
      },
    ],
  },
  {
    label: 'Visual perception',
    category: 'Perception',
    title: 'From images to useful matches.',
    description:
      'Learned visual representations for matching, retrieval, and behavior analysis.',
    context: 'Computer vision · Representation learning',
    projectSlug: 'visual-scene-matching',
    stages: [
      {
        label: 'Represent',
        detail: 'Visual encoders transform scenes into comparable features.',
      },
      {
        label: 'Compare',
        detail: 'Similarity measures rank candidate scenes for retrieval.',
      },
      {
        label: 'Inspect',
        detail:
          'False-match analysis exposes limitations and guides iteration.',
      },
    ],
  },
];

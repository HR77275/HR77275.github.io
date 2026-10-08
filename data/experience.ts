export type Experience = {
  organization: string;
  role: string;
  period: string;
  location: string;
  employmentType: string;
  context: string;
  contributions: string[];
  tags: string[];
  status?: string;
};

export const experiences: Experience[] = [
  {
    organization: 'Persona AI',
    role: 'Autonomy / World Modeling Intern',
    period: 'Sep 2026 - Present',
    location: 'Houston, TX, USA',
    employmentType: 'Internship',
    context:
      'Contributing to simulation and world-modeling workflows for robotic autonomy, with work spanning environment understanding, behavior evaluation, and repeatable experimentation.',
    contributions: [
      'Set up and evaluated NVIDIA Isaac Sim and NVIDIA Cosmos workflows for simulation-based autonomy research.',
      'Reproduced simulation benchmarks and supported experiments involving robot behavior, scene understanding, and environment modeling.',
      'Supported evaluation workflows connecting perception, prediction, task reasoning, and robot-skill behavior.',
    ],
    tags: ['World models', 'Isaac Sim', 'NVIDIA Cosmos', 'Robot autonomy'],
    status: 'Current',
  },
  {
    organization: 'Embodied AGI Lab, UMass Amherst',
    role: 'Student Researcher - Robot Learning',
    period: 'Jul 2026 - Present',
    location: 'Amherst, MA, USA',
    employmentType: 'Research',
    context:
      'Developing simulation-informed robot-learning methods that connect photorealistic digital twins, learned policies, and physical manipulation.',
    contributions: [
      'Built 3D Gaussian Splatting digital-twin workflows in Genesis to generate controlled supervision for vision-based policy evaluation.',
      'Trained and evaluated VLA and diffusion-based manipulation policies on single-arm and bimanual robot platforms across diverse real-world tasks.',
      'Studied critic and reward signals for offline policy improvement and sim-to-real transfer; detailed results remain withheld while the research is under review.',
    ],
    tags: ['Robot learning', 'VLA policies', 'Digital twins', 'Sim-to-real'],
    status: 'Current',
  },
  {
    organization: 'Human-Centered Robotics Lab, UMass Amherst',
    role: 'Student Researcher - Multimodal Navigation',
    period: 'Jun 2026 - Present',
    location: 'Amherst, MA, USA',
    employmentType: 'Research',
    context:
      'Researching multimodal perception and condition-aware navigation for quadruped robots in real-world environments.',
    contributions: [
      'Built a ROS 2 data pipeline for the Unitree Go2 that time-aligns RGB-D, GPS, IMU, and teleoperation signals for dataset generation and offline evaluation.',
      'Developed learned navigation policies that combine temporal sensor context with condition-aware guidance for safer or faster route selection.',
      'Integrated policy inference into a distributed ROS 2 stack with sensor-freshness checks, telemetry, and guarded controller handoff.',
    ],
    tags: ['ROS 2', 'Unitree Go2', 'Multimodal learning', 'Navigation'],
    status: 'Current',
  },
  {
    organization: 'Bosch Global Software Technologies',
    role: 'Senior Software Engineer',
    period: 'Aug 2022 - Aug 2025',
    location: 'Bangalore, KA, India',
    employmentType: 'Full-time',
    context:
      'Developed machine-learning systems for ADAS perception and 3D scene understanding across autonomous and driver-assistance applications.',
    contributions: [
      'Developed models for depth estimation, traffic-element detection, and 3D reconstruction across near-, mid-, and far-field ranges.',
      'Improved training and data pipelines to increase GPU utilization, shorten experimentation cycles, and use compute more efficiently.',
      'Built end-to-end detection, storage, inspection, and visualization workflows on Azure, including large-scale model analysis with Voxel FiftyOne.',
      'Designed multimodal AI workflows using LLMs and VLMs to support technical-document parsing, retrieval, comparison, and validation.',
    ],
    tags: ['ADAS', 'Computer vision', '3D perception', 'Multimodal AI'],
  },
  {
    organization: 'LG Soft India',
    role: 'Research Intern',
    period: 'May 2021 - Jul 2021',
    location: 'Bangalore, KA, India',
    employmentType: 'Internship',
    context:
      'Developed a learning-based scene-matching system for identifying and comparing applications across devices under changing backgrounds and lighting.',
    contributions: [
      'Built a matching pipeline using Mask R-CNN for instance segmentation and Siamese networks for learned visual similarity.',
      'Collected and curated training data, conducted model-evaluation experiments, and analyzed retrieval errors.',
      'Improved the workflow for more consistent matching under background, appearance, and illumination changes.',
    ],
    tags: ['Mask R-CNN', 'Siamese networks', 'Scene matching'],
  },
];

export const workExperiences = experiences.filter(
  (experience) => experience.employmentType !== 'Research',
);

export const researchExperiences = experiences.filter(
  (experience) => experience.employmentType === 'Research',
);

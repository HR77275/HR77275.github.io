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
      'Working with the Autonomy and World Modeling team on simulation and world-modeling workflows for robotic autonomy.',
    contributions: [
      'Setting up and evaluating NVIDIA Isaac Sim and Cosmos-based workflows for autonomy research.',
      'Reproducing simulation benchmarks and supporting experiments in robot behavior and environment understanding.',
      'Contributing to workflows that connect perception, prediction, task reasoning, and robot-skill evaluation.',
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
      'Worked on ADAS perception with a focus on computer vision, deep learning, and 3D scene understanding for autonomous and driver-assistance systems.',
    contributions: [
      'Developed models for depth estimation, traffic-element detection, and 3D reconstruction across near-, mid-, and far-field perception.',
      'Optimized training pipelines, data loaders, and GPU utilization to accelerate experimentation and reduce compute cost.',
      'Built Azure-based detection, storage, inspection, and visualization workflows using Voxel FiftyOne for model analysis.',
      'Designed agentic multimodal AI workflows using LLMs and VLMs to automate technical-document parsing, retrieval, and comparison.',
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
      'Developed an AI-based scene-matching system for identifying and comparing applications across devices under changing backgrounds and lighting.',
    contributions: [
      'Built a visual-matching pipeline using Mask R-CNN for instance segmentation and Siamese networks for feature-similarity learning.',
      'Collected and curated training data, ran model-evaluation experiments, and analyzed false matches.',
      'Improved the workflow for more consistent retrieval under visual and illumination changes.',
    ],
    tags: ['Mask R-CNN', 'Siamese networks', 'Scene matching'],
  },
];

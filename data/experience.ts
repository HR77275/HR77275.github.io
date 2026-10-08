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
  image?: {
    src: string;
    alt: string;
    position?: string;
  };
};

export const experiences: Experience[] = [
  {
    organization: 'Persona AI',
    role: 'Autonomy / World Modeling Intern',
    period: 'Sep 2026 - Present',
    location: 'Houston, TX, USA',
    employmentType: 'Internship',
    context:
      'I work with the Autonomy and World Modeling team on simulation and world-modeling workflows for robotic autonomy. My responsibilities include setting up and evaluating NVIDIA Isaac Sim and NVIDIA Cosmos workflows, reproducing simulation benchmarks, and supporting experiments involving environment understanding, robot behavior, perception, prediction, and task reasoning.',
    contributions: [
      'Set up and evaluated NVIDIA Isaac Sim and NVIDIA Cosmos workflows for simulation-based autonomy research.',
      'Reproduced simulation benchmarks and supported experiments involving robot behavior, scene understanding, and environment modeling.',
      'Supported evaluation workflows connecting perception, prediction, task reasoning, and robot-skill behavior.',
    ],
    tags: ['World models', 'Isaac Sim', 'NVIDIA Cosmos', 'Robot autonomy'],
    status: 'Current',
    image: {
      src: '/images/experience/persona.webp',
      alt: 'Persona AI robotic hand development environment',
      position: 'center',
    },
  },
  {
    organization: 'Embodied AGI Lab, UMass Amherst',
    role: 'Student Researcher - Robot Learning',
    period: 'Jul 2026 - Present',
    location: 'Amherst, MA, USA',
    employmentType: 'Research',
    context:
      'I develop simulation-informed robot-learning methods that connect photorealistic digital twins, learned policies, and physical manipulation. The work includes building 3D Gaussian Splatting environments in Genesis, evaluating vision-language-action and diffusion-based policies on real robot platforms, and studying supervision and reward signals for offline improvement and sim-to-real transfer.',
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
      'I research multimodal perception and condition-aware navigation for quadruped robots in real-world environments. My work combines synchronized RGB-D, GPS, IMU, and teleoperation data with learned navigation policies, and includes integrating policy inference into a distributed ROS 2 system with monitoring and guarded controller handoff.',
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
      'I worked on machine-learning systems for ADAS perception and 3D scene understanding across autonomous and driver-assistance applications. My work covered depth estimation, traffic-element detection, and 3D reconstruction, together with improvements to training pipelines, data loading, and GPU utilization. I also built Azure-based analysis and visualization workflows using Voxel FiftyOne and contributed to multimodal AI systems for technical-document parsing, retrieval, comparison, and validation.',
    contributions: [
      'Developed models for depth estimation, traffic-element detection, and 3D reconstruction across near-, mid-, and far-field ranges.',
      'Improved training and data pipelines to increase GPU utilization, shorten experimentation cycles, and use compute more efficiently.',
      'Built end-to-end detection, storage, inspection, and visualization workflows on Azure, including large-scale model analysis with Voxel FiftyOne.',
      'Designed multimodal AI workflows using LLMs and VLMs to support technical-document parsing, retrieval, comparison, and validation.',
    ],
    tags: ['ADAS', 'Computer vision', '3D perception', 'Multimodal AI'],
    image: {
      src: '/images/experience/bosch.webp',
      alt: 'Bosch Global Software Technologies brand graphic',
      position: 'center',
    },
  },
  {
    organization: 'LG Soft India',
    role: 'Research Intern',
    period: 'May 2021 - Jul 2021',
    location: 'Bangalore, KA, India',
    employmentType: 'Internship',
    context:
      'I worked on a learning-based scene-matching system for identifying and comparing applications across devices under varying backgrounds and lighting. I developed a matching pipeline using Mask R-CNN for instance segmentation and Siamese networks for learned visual similarity, while also contributing to data collection, model evaluation, error analysis, and improvements in matching consistency.',
    contributions: [
      'Built a matching pipeline using Mask R-CNN for instance segmentation and Siamese networks for learned visual similarity.',
      'Collected and curated training data, conducted model-evaluation experiments, and analyzed retrieval errors.',
      'Improved the workflow for more consistent matching under background, appearance, and illumination changes.',
    ],
    tags: ['Mask R-CNN', 'Siamese networks', 'Scene matching'],
    image: {
      src: '/images/experience/lg-soft-india.jpg',
      alt: 'LG Soft India innovation showcase',
      position: 'center',
    },
  },
];

export const workExperiences = experiences.filter(
  (experience) => experience.employmentType !== 'Research',
);

export const researchExperiences = experiences.filter(
  (experience) => experience.employmentType === 'Research',
);

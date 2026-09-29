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
    period: 'Sep. 2026 – Dec. 2026',
    context:
      'World-modeling and autonomy infrastructure for humanoid robots in industrial manipulation settings.',
    contributions: [
      'Developing model post-training, environment understanding, and autonomy infrastructure for complex industrial manipulation.',
      'Building NVIDIA Isaac Sim and NVIDIA Cosmos 3 workflows for perception, prediction, task reasoning, robot-skill integration, and safety-critical autonomy evaluation.',
    ],
    tags: ['World models', 'Isaac Sim', 'NVIDIA Cosmos 3'],
    status: 'Current',
  },
  {
    organization: 'Embodied AGI Lab · UMass Amherst',
    role: 'Student Researcher',
    period: 'Jul. 2026 – Present',
    context:
      'Real-robot manipulation research advised by Prof. Chuang Gan and mentored by Junyi Cao; work submitted to ICLR 2027.',
    contributions: [
      'Built a 3D Gaussian Splatting digital twin in Genesis, using privileged state and task signals to supervise vision-based critics.',
      'Trained and evaluated SmolVLA, DiT diffusion, Pi0, and Pi0.5 policies across xArm7 and bimanual RM65B platforms on eight real-robot tasks.',
      'Compared digital-twin-derived critic and reward signals with sparse-reward and learned reward-model baselines for offline post-training and sim-to-real transfer.',
    ],
    tags: ['Gaussian Splatting', 'VLA', 'Sim-to-real'],
    status: 'Current',
  },
  {
    organization: 'Human-Centered Robotics Lab · UMass Amherst',
    role: 'Student Researcher',
    period: 'Jun. 2026 – Present',
    context:
      'Multimodal navigation research advised by Prof. Hao Zhang and mentored by Oscar Youngquist.',
    contributions: [
      'Built a Unitree Go2 ROS 2 data pipeline that time-aligns RGB-D, GPS, IMU, and teleoperation commands for dataset generation and offline evaluation.',
      'Developed a classifier-guided navigation policy using temporal sensor encoders, a context transformer, and diffusion and flow-matching models.',
      'Deployed a distributed ROS 2 inference stack with asynchronous encoders, 5 Hz control, freshness checks, telemetry, and guarded controller handoff.',
    ],
    tags: ['Unitree Go2', 'ROS 2', 'Multimodal navigation'],
    status: 'Current',
  },
  {
    organization: 'Bosch Global Software Technologies',
    role: 'Machine Learning Engineer / Senior Software Engineer',
    period: 'Aug. 2022 – Jul. 2025',
    context:
      'Production computer-vision and machine-learning systems for advanced driver-assistance applications.',
    contributions: [
      'Designed a trifocal detection head that fused multi-range camera views, reducing runtime by 35% while improving multi-task stability.',
      'Raised GPU utilization from 30% to 80% by profiling the pole-detection training pipeline and redesigning ground-truth preprocessing.',
      'Built an end-to-end pole-detection pipeline with Python bindings, Azure result storage, and Voxel FiftyOne analysis tooling.',
      'Deployed foundation models for image retrieval on Triton Inference Server for real-time inference.',
    ],
    tags: ['ADAS', 'Computer vision', 'Triton'],
  },
  {
    organization: 'LG Soft India',
    role: 'Research Intern',
    period: 'May 2021 – Jul. 2021',
    context: 'Computer-vision research for scene matching and retrieval.',
    contributions: [
      'Built a scene-matching pipeline with Mask R-CNN segmentation and Siamese-network similarity learning.',
      'Compared CNN and ViT-style embeddings for scene retrieval and false-match analysis.',
    ],
    tags: ['Mask R-CNN', 'Siamese networks', 'Vision transformers'],
  },
];

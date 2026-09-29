export type ProjectCategory = 'Robotics' | 'Perception' | 'Generative AI';
export type Media =
  | {
      type: 'image' | 'gif' | 'diagram';
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    }
  | {
      type: 'video';
      src: string;
      poster?: string;
      alt: string;
      caption?: string;
      autoplay?: boolean;
      captions?: string;
    }
  | {
      type: 'comparison';
      before: string;
      after: string;
      alt: string;
      beforeLabel: string;
      afterLabel: string;
      caption?: string;
    }
  | { type: 'placeholder'; label: string; caption?: string };
export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  technologies: string[];
  featured?: boolean;
  color: string;
  number: string;
  status: 'draft' | 'published';
  metric?: { value: string; label: string };
  cover?: Extract<Media, { type: 'image' | 'gif' | 'diagram' }>;
  diagram: { inputs: string[]; model: string; output: string; note: string };
  architecture?: Media;
  overview: string;
  problem: string;
  approach: string[];
  contribution: string[];
  experiments: string[];
  results: string[];
  demo: Media[];
  technicalDetails?: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'digital-twin-policy-post-training',
    title: 'Digital-Twin Policy Post-Training',
    category: 'Robotics',
    number: '01',
    color: 'sage',
    featured: true,
    status: 'published',
    summary:
      'A 3D Gaussian Splatting digital twin that supplies supervision for vision-based critics and real-robot policy post-training.',
    technologies: ['Gaussian Splatting', 'Genesis', 'Sim-to-real'],
    diagram: {
      inputs: ['Real-robot observations', 'Privileged simulator state'],
      model: 'Digital twin + critic',
      output: 'Policy supervision',
      note: 'Simulation signals for real-robot learning',
    },
    overview:
      'Research in the Embodied AGI Lab at UMass Amherst on using a 3D Gaussian Splatting digital twin in the Genesis simulator to improve real-robot manipulation policies.',
    problem:
      'Real-robot rewards are often sparse and expensive to collect. A simulation-aligned representation can provide denser task and state signals while keeping visual observations close to the target environment.',
    approach: [
      'Build a 3D Gaussian Splatting digital twin of the manipulation environment in Genesis.',
      'Use privileged state and task signals to generate dense and sparse supervision for vision-based critics.',
      'Apply critic and reward signals during offline post-training of manipulation policies.',
    ],
    contribution: [
      'Built the digital-twin environment and its supervision pipeline.',
      'Integrated vision-based critics with real-robot policy evaluation.',
      'Studied policy gains and sim-to-real transfer against alternative reward signals.',
    ],
    experiments: [
      'Compared digital-twin-derived signals with sparse-reward and learned reward-model baselines.',
      'Evaluated policies on real robot manipulation tasks.',
    ],
    results: [
      'Measured policy improvement and sim-to-real transfer across the evaluated manipulation setup.',
      'The associated research was submitted to ICLR 2027; numerical results remain omitted pending public release.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Digital twin and real-robot comparison',
        caption:
          'Add approved simulation and hardware footage after public release.',
      },
    ],
    technicalDetails: [
      'Digital twin: 3D Gaussian Splatting in Genesis.',
      'Supervision: privileged state, task signals, and vision-based critics.',
    ],
    links: [],
  },
  {
    slug: 'robot-policy-evaluation',
    title: 'Generalist Robot Policy Evaluation',
    category: 'Robotics',
    number: '02',
    color: 'forest',
    featured: true,
    status: 'published',
    summary:
      'Training and evaluation of SmolVLA, DiT diffusion, Pi0, and Pi0.5 across single-arm and bimanual robots.',
    technologies: ['SmolVLA', 'DiT', 'Pi0 / Pi0.5', 'LeRobot'],
    metric: { value: '8', label: 'real-robot tasks' },
    diagram: {
      inputs: ['Visual observations', 'Task instructions'],
      model: 'VLA / diffusion policy',
      output: 'Robot action sequence',
      note: 'One evaluation framework across policy families',
    },
    overview:
      'A unified real-robot study spanning vision-language-action and diffusion policy families on the xArm7 and bimanual RM65B platforms.',
    problem:
      'Policy families differ in action generation, conditioning, and deployment behavior, making controlled comparison on real hardware difficult.',
    approach: [
      'Prepare demonstrations and task definitions for single-arm and bimanual manipulation.',
      'Train and evaluate SmolVLA, DiT diffusion, Pi0, and Pi0.5 under a shared task suite.',
      'Analyze policy behavior across eight real-robot manipulation tasks.',
    ],
    contribution: [
      'Trained the evaluated manipulation policies.',
      'Integrated policy inference with xArm7 and bimanual RM65B hardware.',
      'Ran real-robot evaluations and analyzed policy behavior.',
    ],
    experiments: [
      'Eight real-robot manipulation tasks across single-arm and bimanual platforms.',
      'Policy families included VLA and diffusion-based approaches.',
    ],
    results: [
      'Completed comparative real-robot evaluation across four policy families.',
      'Detailed quantitative results remain omitted until the research is publicly released.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Single-arm and bimanual rollouts',
        caption: 'Add approved rollout videos for representative tasks.',
      },
    ],
    links: [],
  },
  {
    slug: 'multimodal-go2-navigation',
    title: 'Multimodal Navigation on Unitree Go2',
    category: 'Robotics',
    number: '03',
    color: 'sand',
    featured: true,
    status: 'published',
    summary:
      'A classifier-guided navigation policy and distributed ROS 2 inference stack for a real Unitree Go2.',
    technologies: ['Unitree Go2', 'ROS 2', 'Diffusion', 'Flow matching'],
    metric: { value: '5 Hz', label: 'policy control' },
    diagram: {
      inputs: ['RGB-D', 'GPS + IMU', 'Teleoperation'],
      model: 'Temporal encoders + context transformer',
      output: 'Future motion commands',
      note: 'Time-aligned multimodal sensing to guarded control',
    },
    overview:
      'Research in the Human-Centered Robotics Lab at UMass Amherst on multimodal data collection, learned navigation, and reliable policy deployment for the Unitree Go2.',
    problem:
      'A real navigation policy must align asynchronous sensors, reason across temporal context, and hand commands to the robot safely despite stale or delayed inputs.',
    approach: [
      'Time-align RGB-D, GPS, IMU, and teleoperation commands in a ROS 2 data pipeline.',
      'Encode temporal sensor histories and fuse them with a context transformer.',
      'Use classifier-guided diffusion and flow-matching models to predict future motion commands.',
    ],
    contribution: [
      'Built the multimodal dataset generation and offline evaluation pipeline.',
      'Developed the classifier-guided navigation policy.',
      'Deployed distributed ROS 2 inference with asynchronous encoders and guarded controller handoff.',
    ],
    experiments: [
      'Offline evaluation on time-aligned multimodal robot data.',
      'On-robot inference at 5 Hz with freshness checks and telemetry.',
    ],
    results: [
      'Deployed the complete policy stack on the real Unitree Go2.',
      'Added freshness checks and guarded control transitions for safer evaluation.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Unitree Go2 navigation rollout',
        caption: 'Add an on-robot video and a synchronized sensor view.',
      },
    ],
    links: [],
  },
  {
    slug: 'adas-trifocal',
    title: 'ADAS Trifocal Perception',
    category: 'Perception',
    number: '04',
    color: 'blue',
    featured: true,
    status: 'published',
    summary:
      'A multi-range camera detection head designed for faster inference and more stable multi-task perception.',
    technologies: ['Multi-view vision', 'Multi-task learning', 'PyTorch'],
    metric: { value: '35%', label: 'runtime reduction' },
    diagram: {
      inputs: ['Far / mid / near views', 'Multi-range features'],
      model: 'Trifocal detection head',
      output: 'Task-specific detections',
      note: 'Shared perception with uncertainty-aware filtering',
    },
    overview:
      'Production ADAS perception work at Bosch that fused multiple camera ranges through a trifocal detection head.',
    problem:
      'Processing multiple camera ranges independently can duplicate computation and introduce instability between related detection tasks.',
    approach: [
      'Fuse multi-range camera views in a shared detection head.',
      'Apply task-specific filtering and uncertainty weighting.',
      'Profile the complete inference path and optimize the model runtime.',
    ],
    contribution: [
      'Designed the trifocal detection head and multi-view fusion strategy.',
      'Implemented task-specific filtering and uncertainty weighting.',
      'Profiled and optimized runtime behavior.',
    ],
    experiments: [
      'Compared the unified head with the prior processing path.',
      'Evaluated runtime and multi-task stability in the internal ADAS pipeline.',
    ],
    results: [
      'Reduced runtime by 35%.',
      'Improved multi-task stability through task-specific filtering and uncertainty weighting.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Approved multi-view perception example',
        caption:
          'Employer imagery is omitted unless approved for public disclosure.',
      },
    ],
    links: [],
  },
  {
    slug: 'pole-detection',
    title: 'Production Pole Detection Pipeline',
    category: 'Perception',
    number: '05',
    color: 'stone',
    status: 'published',
    summary:
      'An end-to-end ADAS pipeline covering GPU-efficient training, fast post-processing, cloud result storage, and visual analysis.',
    technologies: ['PyTorch', 'Python bindings', 'Azure', 'FiftyOne'],
    metric: { value: '30 → 80%', label: 'GPU utilization' },
    diagram: {
      inputs: ['Training data', 'Ground-truth preprocessing'],
      model: 'Multi-task pole detector',
      output: 'Predictions + analysis',
      note: 'Optimized training through deployment analysis',
    },
    overview:
      'Production engineering at Bosch for pole detection, spanning training-pipeline optimization, post-processing, result storage, and edge-case analysis.',
    problem:
      'The training pipeline underused available GPU resources, while post-processing and debugging required a faster, integrated workflow.',
    approach: [
      'Profile the complete training path and isolate preprocessing bottlenecks.',
      'Redesign ground-truth preprocessing for more GPU-efficient multi-task training.',
      'Build Python bindings, Azure-backed result storage, and FiftyOne visualization for analysis.',
    ],
    contribution: [
      'Raised GPU utilization through data and preprocessing changes.',
      'Built the end-to-end pole-detection workflow and faster post-processing bindings.',
      'Integrated cloud result storage and visual edge-case debugging.',
    ],
    experiments: [
      'Profiled data preparation and GPU execution before and after pipeline changes.',
      'Used visual prediction analysis to inspect edge cases.',
    ],
    results: [
      'Increased GPU utilization from 30% to 80%.',
      'Delivered an integrated pipeline for faster post-processing and prediction analysis.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Approved detection visualization',
        caption:
          'Employer data and imagery are omitted unless approved for public disclosure.',
      },
    ],
    links: [],
  },
  {
    slug: 'voice-guided-person-following',
    title: 'Voice-Guided Person-Following Robot',
    category: 'Robotics',
    number: '06',
    color: 'clay',
    status: 'published',
    summary:
      'A ROS 2 autonomy stack that turns voice commands into person-following navigation and manipulation behaviors on a RoboMaster EP.',
    technologies: [
      'ROS 2',
      'RoboMaster EP',
      'Person tracking',
      'Depth estimation',
    ],
    diagram: {
      inputs: ['Voice command', 'Camera + depth'],
      model: 'Intent + tracking + FSM',
      output: 'Navigation / manipulation',
      note: 'Spoken intent to autonomous robot execution',
    },
    overview:
      'A co-authored robotics project that combines voice intent parsing, perception, and finite-state control on a RoboMaster EP.',
    problem:
      'Natural-language commands must become structured, observable robot behaviors while the perception stack maintains a reliable target estimate.',
    approach: [
      'Convert voice commands into structured robot intents.',
      'Track a target using person tracking, depth estimation, and face identity matching.',
      'Gate navigation and manipulation behaviors through a finite-state machine.',
    ],
    contribution: [
      'Developed the ROS 2 robotics stack for autonomous task execution.',
      'Built the target-following perception layer.',
      'Implemented FSM-gated navigation and manipulation and evaluated follow distance from logged depth estimates.',
    ],
    experiments: [
      'Evaluated following behavior using logged depth estimates.',
      'Tested structured voice intents across navigation and manipulation actions.',
    ],
    results: [
      'Integrated voice control, person following, navigation, and manipulation into one robot stack.',
      'Recorded follow-distance behavior for evaluation.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'RoboMaster task demonstration',
        caption: 'Add a short person-following and voice-command video.',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/HR77275/603_Robotics_final_project',
      },
    ],
  },
  {
    slug: 'scene-matching',
    title: 'Scene Matching with Deep Visual Embeddings',
    category: 'Perception',
    number: '07',
    color: 'sage',
    status: 'published',
    summary:
      'Scene segmentation and similarity learning for visual retrieval and false-match analysis.',
    technologies: ['Mask R-CNN', 'Siamese networks', 'Vision transformers'],
    diagram: {
      inputs: ['Scene image', 'Candidate images'],
      model: 'Segmentation + embedding similarity',
      output: 'Ranked scene matches',
      note: 'Structured visual features for retrieval',
    },
    overview:
      'Computer-vision research completed during an internship at LG Soft India, focused on scene matching and visual retrieval.',
    problem:
      'Scene retrieval systems must distinguish visually similar places while reducing false matches caused by background and viewpoint variation.',
    approach: [
      'Segment scene content with Mask R-CNN.',
      'Learn visual similarity using a Siamese network.',
      'Compare CNN and ViT-style embeddings for retrieval behavior.',
    ],
    contribution: [
      'Built the segmentation and similarity-learning pipeline.',
      'Ran comparative embedding experiments.',
      'Analyzed false matches in retrieved scenes.',
    ],
    experiments: [
      'Compared CNN and ViT-style image embeddings.',
      'Inspected retrieval results and false-match patterns.',
    ],
    results: [
      'Delivered a working scene-matching research pipeline.',
      'Established comparative findings across CNN and ViT-style embeddings.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Scene retrieval comparison',
        caption: 'Add a public query-and-results example if available.',
      },
    ],
    links: [],
  },
];

export type ProjectCategory = 'Robotics' | 'Perception' | 'Generative AI';
export type Media =
  | {
      type: 'image' | 'gif' | 'diagram';
      title?: string;
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    }
  | {
      type: 'video';
      title?: string;
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
export type MediaSection = {
  title: string;
  description: string;
  media: Media[];
};

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
  facts?: { label: string; value: string }[];
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
  mediaSections?: MediaSection[];
  technicalDetails?: string[];
  links: { label: string; href: string }[];
};

const robotTaskSuiteMedia: Media[] = [
  {
    type: 'video',
    title: 'Thread Rope',
    src: '/media/manipulation/task-suite/thread-rope.mp4',
    poster: '/media/manipulation/task-suite/thread-rope-poster.webp',
    alt: 'xArm robot demonstrating a thread-rope manipulation task',
    caption: 'Single-arm thread-rope demonstration on the xArm platform.',
  },
  {
    type: 'video',
    title: 'Tie Knot',
    src: '/media/manipulation/task-suite/tie-knot.mp4',
    poster: '/media/manipulation/task-suite/tie-knot-poster.webp',
    alt: 'Bimanual RM65B robot demonstrating a knot-tying task',
    caption: 'Bimanual knot-tying demonstration on the RM65B platform.',
  },
  {
    type: 'video',
    title: 'Hang Mug',
    src: '/media/manipulation/task-suite/hang-mug-xarm.mp4',
    poster: '/media/manipulation/task-suite/hang-mug-xarm-poster.webp',
    alt: 'xArm robot hanging a blue mug on a stand',
    caption: 'Single-arm mug-hanging demonstration on the xArm platform.',
  },
  {
    type: 'video',
    title: 'Stack Blocks',
    src: '/media/manipulation/task-suite/stack-blocks.mp4',
    poster: '/media/manipulation/task-suite/stack-blocks-poster.webp',
    alt: 'Bimanual RM65B robot stacking colored blocks',
    caption: 'Bimanual block-stacking demonstration on the RM65B platform.',
  },
  {
    type: 'video',
    title: 'Place Flower',
    src: '/media/manipulation/task-suite/place-flower-xarm.mp4',
    poster: '/media/manipulation/task-suite/place-flower-xarm-poster.webp',
    alt: 'xArm robot placing a flower into a vase',
    caption: 'Single-arm flower-placement demonstration on the xArm platform.',
  },
  {
    type: 'video',
    title: 'Insert Objects',
    src: '/media/manipulation/task-suite/insert-objects.mp4',
    poster: '/media/manipulation/task-suite/insert-objects-poster.webp',
    alt: 'Bimanual RM65B robot inserting objects into matching fixtures',
    caption: 'Bimanual object-insertion demonstration on the RM65B platform.',
  },
  {
    type: 'video',
    title: 'Hang Towel',
    src: '/media/manipulation/task-suite/hang-towel.mp4',
    poster: '/media/manipulation/task-suite/hang-towel-poster.webp',
    alt: 'xArm robot hanging a towel on a fixture',
    caption: 'Single-arm towel-hanging demonstration on the xArm platform.',
  },
  {
    type: 'video',
    title: 'Sort Objects',
    src: '/media/manipulation/task-suite/sort-objects.mp4',
    poster: '/media/manipulation/task-suite/sort-objects-poster.webp',
    alt: 'Bimanual RM65B robot sorting objects between trays',
    caption: 'Bimanual object-sorting demonstration on the RM65B platform.',
  },
];

const robotRolloutMedia: Media[] = [
  {
    type: 'video',
    title: 'Insert Rope Rollout',
    src: '/media/manipulation/insert-rope.mp4',
    poster: '/media/manipulation/insert-rope-poster.webp',
    alt: 'Robot arm inserting a rope loop onto a horizontal fixture',
    caption:
      'Insert-rope policy rollout from a controlled real-robot evaluation.',
  },
  {
    type: 'video',
    title: 'Place Flower Rollout',
    src: '/media/manipulation/place-flower.mp4',
    poster: '/media/manipulation/place-flower-poster.webp',
    alt: 'Robot arm placing an artificial flower into a vase',
    caption:
      'Place-flower policy rollout from a controlled real-robot evaluation.',
  },
  {
    type: 'video',
    title: 'Hang Cloth Rollout',
    src: '/media/manipulation/hang-cloth.mp4',
    poster: '/media/manipulation/hang-cloth-poster.webp',
    alt: 'Robot arm hanging a cloth on a fixture',
    caption:
      'Hang-cloth policy rollout from a controlled real-robot evaluation.',
  },
  {
    type: 'video',
    title: 'Hang Mug Rollout',
    src: '/media/manipulation/hang-mug.mp4',
    poster: '/media/manipulation/hang-mug-poster.webp',
    alt: 'Robot arm hanging a blue mug on a vertical stand',
    caption: 'Hang-mug policy rollout from a controlled real-robot evaluation.',
  },
];

const go2SetupMedia: Media[] = [
  {
    type: 'image',
    title: 'Payload configuration',
    src: '/media/go2/go2-payload-front.webp',
    alt: 'Front view of a Unitree Go2 with a secured liquid payload',
    caption: 'Front view of the payload-carrying quadruped platform.',
    width: 1350,
    height: 1800,
  },
  {
    type: 'image',
    title: 'Sensor and compute stack',
    src: '/media/go2/go2-sensor-compute.webp',
    alt: 'Top view of the Unitree Go2 sensor and onboard compute setup',
    caption:
      'Sensor and compute integration used for multimodal robot data collection.',
    width: 1350,
    height: 1800,
  },
  {
    type: 'image',
    title: 'Outdoor platform',
    src: '/media/go2/go2-outdoor-platform.webp',
    alt: 'Unitree Go2 configured for an outdoor navigation run',
    caption: 'Outdoor configuration prepared for a controlled navigation run.',
    width: 1350,
    height: 1800,
  },
];

const go2RunMedia: Media[] = [
  {
    type: 'video',
    title: 'Stable-route run',
    src: '/media/go2/go2-safe-route.mp4',
    poster: '/media/go2/go2-safe-route-poster.webp',
    alt: 'RGB and normalized depth views from a stable-route Go2 navigation run',
    caption:
      'Stable-route run with synchronized RGB and normalized depth observations.',
  },
  {
    type: 'video',
    title: 'Faster-route run',
    src: '/media/go2/go2-fast-route.mp4',
    poster: '/media/go2/go2-fast-route-poster.webp',
    alt: 'RGB and normalized depth views from a faster Go2 navigation run',
    caption:
      'Faster-route run with synchronized RGB and normalized depth observations.',
  },
];

export const projects: Project[] = [
  {
    slug: 'robot-learning-research',
    title: 'Digital Twins and Generalist Robot Learning',
    category: 'Robotics',
    number: '01',
    color: 'sage',
    featured: true,
    status: 'published',
    cover: {
      type: 'image',
      src: '/media/manipulation/manipulation-cover.webp',
      alt: 'Robot arm performing a cloth manipulation task in a lab workspace',
      width: 576,
      height: 1024,
    },
    summary:
      'Digital-twin supervision, generalist manipulation policies, and physical evaluation across single-arm and bimanual robots.',
    technologies: [
      '3D Gaussian Splatting',
      'Genesis',
      'VLA policies',
      'Diffusion policies',
      'Real-robot evaluation',
    ],
    facts: [
      {
        label: 'Role',
        value: 'Data collection, policy training, and physical evaluation',
      },
      { label: 'Platforms', value: 'xArm7 and bimanual RM65B' },
      { label: 'Media', value: '12 manipulation demonstrations' },
      { label: 'Status', value: 'Research under review' },
    ],
    diagram: {
      inputs: [
        'Teleoperation data',
        'Digital-twin signals',
        'Robot observations',
      ],
      model: 'VLA and diffusion policies',
      output: 'Manipulation actions',
      note: 'Demonstrations and digital-twin supervision support policy training, offline analysis, and evaluation on physical robots.',
    },
    overview:
      'This research investigates how photorealistic digital twins and privileged simulator signals can support the post-training and evaluation of generalist robot policies. The workflow connects teleoperated demonstrations, a 3D Gaussian Splatting reconstruction, the Genesis simulator, learned critics, and physical manipulation on xArm7 and bimanual RM65B systems.',
    problem:
      'Generalist policies can imitate demonstrations, but limited physical data makes it difficult to evaluate failures, compare reward signals, and improve behavior safely. A digital twin provides controlled state and task information while preserving a visual setting close to the physical workspace.',
    approach: [
      'Collect teleoperated trajectories and structure them into reproducible manipulation datasets.',
      'Build a photorealistic 3D Gaussian Splatting digital twin in Genesis and derive privileged state and task signals.',
      'Train and evaluate SmolVLA, DiT diffusion, Pi0, and Pi0.5 policy families across single-arm and bimanual tasks.',
      'Use physical rollouts and offline analysis to study policy behavior, reward quality, failure modes, and sim-to-real transfer.',
    ],
    contribution: [
      'Built parts of the digital-twin and research data workflow used for policy development.',
      'Collected demonstrations and trained manipulation policies across multiple policy families.',
      'Integrated learned policies with xArm7 and RM65B robot platforms.',
      'Ran physical evaluations and analyzed task completion, recovery behavior, and failure cases.',
    ],
    experiments: [
      'Eight-task manipulation suite spanning rope, knot, mug, block, flower, insertion, towel, and sorting behaviors.',
      'Single-arm and bimanual evaluation to expose different coordination and control challenges.',
      'Four longer policy rollouts for insert-rope, place-flower, hang-cloth, and hang-mug tasks.',
      'Comparisons of sparse task rewards, learned reward models, and digital-twin-derived evaluation signals remain part of ongoing research.',
    ],
    results: [
      'Completed an end-to-end workflow from demonstration collection and digital-twin construction to policy training and physical evaluation.',
      'Evaluated multiple policy families across xArm7 and RM65B hardware using a common task suite.',
      'Quantitative comparisons and paper-specific conclusions remain withheld until the associated research is public.',
    ],
    demo: [...robotTaskSuiteMedia, ...robotRolloutMedia],
    mediaSections: [
      {
        title: 'Manipulation task suite',
        description:
          'Eight demonstrations cover single-arm xArm tasks and bimanual RM65B tasks. Each clip is available directly below.',
        media: robotTaskSuiteMedia,
      },
      {
        title: 'Real-robot policy rollouts',
        description:
          'Four longer rollouts show complete manipulation attempts used during controlled physical evaluation.',
        media: robotRolloutMedia,
      },
    ],
    technicalDetails: [
      'The digital twin combines a 3D Gaussian Splatting scene representation with Genesis-based simulation.',
      'The policy study includes VLA and diffusion-based approaches for visuomotor control.',
      'The task library covers contact-rich, deformable-object, placement, insertion, and bimanual coordination behaviors.',
      'Public media has no audio or embedded metadata. Private datasets, detailed reward definitions, and unpublished measurements are excluded.',
    ],
    links: [],
  },
  {
    slug: 'multimodal-robot-navigation',
    title: 'Adaptive Multimodal Navigation for Unitree Go2',
    category: 'Robotics',
    number: '02',
    color: 'forest',
    featured: true,
    status: 'published',
    cover: {
      type: 'image',
      src: '/media/go2/go2-payload-side.webp',
      alt: 'Unitree Go2 carrying a secured liquid payload during navigation research',
      width: 1800,
      height: 1350,
    },
    summary:
      'A condition-aware navigation system that combines synchronized multimodal data, learned motion prediction, and guarded ROS 2 deployment.',
    technologies: [
      'ROS 2',
      'Unitree Go2',
      'RGB-D',
      'Temporal modeling',
      'Diffusion and flow matching',
    ],
    facts: [
      { label: 'Platform', value: 'Unitree Go2 quadruped' },
      { label: 'Signals', value: 'RGB-D, GPS, IMU, and commands' },
      { label: 'Behavior', value: 'Stable or faster route guidance' },
      { label: 'Deployment', value: 'Distributed ROS 2 inference' },
    ],
    diagram: {
      inputs: ['RGB-D', 'GPS and IMU', 'Robot state and commands'],
      model: 'Temporal multimodal policy',
      output: 'Future motion commands',
      note: 'Time-aligned observations feed a condition-aware policy, then freshness checks and a guarded handoff protect physical execution.',
    },
    overview:
      'This research explores adaptive route selection for a Unitree Go2 quadruped. When the robot carries a liquid payload, the policy favors smoother terrain and stable motion. Without the payload, guidance can favor faster routes and shortcuts across more challenging surfaces.',
    problem:
      'Real-world navigation depends on asynchronous sensors, changing terrain, and the physical condition of the robot. A learned policy must combine these signals over time while the deployment stack detects stale data and prevents unsafe controller transitions.',
    approach: [
      'Record and time-align RGB-D, GPS, IMU, robot state, and teleoperation commands in ROS 2.',
      'Encode temporal sensor context and fuse it with a condition signal that represents the desired route behavior.',
      'Predict future motion commands with generative sequence models based on diffusion and flow matching.',
      'Deploy inference through a distributed ROS 2 system with telemetry, sensor-freshness checks, and guarded controller handoff.',
    ],
    contribution: [
      'Built the multimodal data pipeline and tools for dataset generation and offline evaluation.',
      'Developed and evaluated temporal navigation models with condition-aware guidance.',
      'Integrated asynchronous perception and policy inference into the physical Go2 software stack.',
      'Prepared and ran controlled outdoor evaluations with and without a secured liquid payload.',
    ],
    experiments: [
      'Stable-route trials prioritize smoother ground when the robot carries the payload.',
      'Faster-route trials allow more direct motion when payload constraints are absent.',
      'Offline playback checks temporal alignment and command prediction before physical deployment.',
      'Field runs inspect route choice, command smoothness, sensor freshness, and controller behavior.',
    ],
    results: [
      'Established a complete workflow from synchronized multimodal recording to physical policy execution.',
      'Demonstrated condition-aware route behavior in controlled Go2 navigation runs.',
      'Detailed model comparisons and unpublished measurements remain private while the research continues.',
    ],
    demo: [...go2SetupMedia, ...go2RunMedia],
    mediaSections: [
      {
        title: 'Robot and sensing setup',
        description:
          'The physical platform combines the Go2 base, secured payload fixture, sensing, and onboard compute used during data collection.',
        media: go2SetupMedia,
      },
      {
        title: 'Condition-aware navigation runs',
        description:
          'Two field clips show synchronized RGB and normalized depth views for stable-route and faster-route behavior.',
        media: go2RunMedia,
      },
    ],
    technicalDetails: [
      'ROS 2 manages data capture, asynchronous sensor processing, policy inference, telemetry, and controller integration.',
      'The dataset aligns visual observations with localization, inertial state, robot state, and operator commands.',
      'Temporal encoders and context modeling provide history for future command prediction.',
      'The public videos were trimmed where needed and stripped of audio and metadata.',
    ],
    links: [],
  },
  {
    slug: 'voice-guided-person-following',
    title: 'Voice-Guided Person-Following Robot',
    category: 'Robotics',
    number: '03',
    color: 'sand',
    featured: true,
    status: 'published',
    summary:
      'A public ROS 2 project connecting voice commands, person-following perception, and autonomous robot behaviors.',
    technologies: ['ROS 2', 'RoboMaster EP', 'Person tracking'],
    diagram: {
      inputs: ['Voice command', 'Camera + depth'],
      model: 'Intent + tracking + state machine',
      output: 'Robot behavior',
      note: 'Spoken intent to autonomous execution',
    },
    overview:
      'A co-authored public robotics project combining voice intent, target following, navigation, and manipulation.',
    problem:
      'Natural-language commands must become structured robot actions while perception maintains a reliable target estimate.',
    approach: [
      'Convert voice commands into structured robot intents.',
      'Track a target using visual and depth information.',
      'Coordinate navigation and manipulation with a finite-state controller.',
    ],
    contribution: [
      'Developed parts of the ROS 2 autonomy stack.',
      'Contributed to the target-following perception pipeline.',
      'Implemented and evaluated state-machine-controlled robot behavior.',
    ],
    experiments: [
      'Tested voice-driven navigation and person-following behavior.',
      'Evaluated following behavior using recorded robot data.',
    ],
    results: [
      'Integrated speech, perception, navigation, and manipulation in a working robot demonstration.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Public RoboMaster demonstration',
        caption: 'Add a project video supplied or approved by the team.',
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
    slug: 'visual-scene-matching',
    title: 'Visual Scene Matching',
    category: 'Perception',
    number: '04',
    color: 'blue',
    status: 'published',
    summary:
      'A computer-vision prototype for visual matching and retrieval using learned representations.',
    technologies: ['Computer vision', 'Representation learning', 'Retrieval'],
    diagram: {
      inputs: ['Query scene', 'Candidate images'],
      model: 'Visual representation',
      output: 'Ranked matches',
      note: 'Learned similarity for visual retrieval',
    },
    overview:
      'An internship research prototype focused on matching and retrieving visually related scenes.',
    problem:
      'Visual retrieval systems must identify useful matches despite changes in scene appearance and viewpoint.',
    approach: [
      'Extract learned visual representations from scene images.',
      'Compare similarity-learning approaches for retrieval.',
      'Inspect false matches to understand model behavior.',
    ],
    contribution: [
      'Built a prototype scene-matching workflow.',
      'Compared alternative deep visual representations.',
      'Analyzed retrieval behavior and failure cases.',
    ],
    experiments: [
      'Comparative evaluation of learned image representations.',
      'Qualitative false-match analysis.',
    ],
    results: [
      'Delivered a working research prototype; company data and internal results are not disclosed.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Public scene-matching example',
        caption: 'Add a non-confidential example if available.',
      },
    ],
    links: [],
  },
];

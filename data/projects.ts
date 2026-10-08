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
  {
    type: 'video',
    title: 'Bimanual Object Placement Rollout',
    src: '/media/manipulation/bimanual-object-placement.mp4',
    poster: '/media/manipulation/bimanual-object-placement-poster.webp',
    alt: 'Bimanual RM65B robot placing objects into a bowl during a policy rollout',
    caption:
      'Bimanual object-placement policy rollout on the physical RM65B platform.',
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

const go2CollectedDataMedia: Media[] = [
  {
    type: 'video',
    title: 'Payload-condition data',
    src: '/media/go2/go2-safe-route.mp4',
    poster: '/media/go2/go2-safe-route-poster.webp',
    alt: 'RGB and normalized depth observations collected with the Go2 carrying a payload',
    caption:
      'A sample of synchronized RGB and normalized depth observations recorded during field data collection with the payload attached.',
  },
  {
    type: 'video',
    title: 'No-payload condition data',
    src: '/media/go2/go2-fast-route.mp4',
    poster: '/media/go2/go2-fast-route-poster.webp',
    alt: 'RGB and normalized depth observations collected with the Go2 without a payload',
    caption:
      'A sample of synchronized RGB and normalized depth observations recorded during field data collection without the payload.',
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
    status: 'draft',
    cover: {
      type: 'image',
      src: '/media/manipulation/manipulation-cover.webp',
      alt: 'Robot arm performing a cloth manipulation task in a lab workspace',
      width: 576,
      height: 1024,
    },
    summary:
      'Co-authored research on digital-twin supervision, generalist manipulation policies, and physical evaluation across single-arm and bimanual robots. Currently under review at ICLR.',
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
      { label: 'Media', value: '13 manipulation demonstrations' },
      { label: 'Authorship', value: 'Co-authored research' },
      { label: 'Status', value: 'Currently under review at ICLR' },
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
      'This co-authored research investigates how photorealistic digital twins and privileged simulator signals can support the post-training and evaluation of generalist robot policies. The workflow connects teleoperated demonstrations, a 3D Gaussian Splatting reconstruction, the Genesis simulator, learned critics, and physical manipulation on xArm7 and bimanual RM65B systems.',
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
      'Five longer policy rollouts for insert-rope, place-flower, hang-cloth, hang-mug, and bimanual object-placement tasks.',
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
          'Five longer rollouts show complete manipulation attempts used during controlled physical evaluation.',
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
    status: 'draft',
    cover: {
      type: 'image',
      src: '/media/go2/go2-payload-side.webp',
      alt: 'Unitree Go2 carrying a secured liquid payload during navigation research',
      width: 1800,
      height: 1350,
    },
    summary:
      'Ongoing co-authored research on condition-aware navigation using synchronized multimodal data, learned motion prediction, and a ROS 2 deployment stack.',
    technologies: [
      'ROS 2',
      'Unitree Go2',
      'RGB-D',
      'Temporal modeling',
      'Diffusion and flow matching',
    ],
    facts: [
      { label: 'Authorship', value: 'Co-authored research' },
      { label: 'Platform', value: 'Unitree Go2 quadruped' },
      { label: 'Signals', value: 'RGB-D, GPS, IMU, and commands' },
      { label: 'Conditions', value: 'Payload and no-payload data' },
      { label: 'Status', value: 'Work in progress' },
    ],
    diagram: {
      inputs: ['RGB-D', 'GPS and IMU', 'Robot state and commands'],
      model: 'Temporal multimodal policy',
      output: 'Future motion commands',
      note: 'Time-aligned observations feed a condition-aware policy, then freshness checks and a guarded handoff protect physical execution.',
    },
    overview:
      'This ongoing co-authored research explores adaptive route selection for a Unitree Go2 quadruped. The project studies whether a learned policy can account for the robot condition, including the presence of a liquid payload, when predicting navigation commands.',
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
      'Developed temporal navigation models with condition-aware guidance.',
      'Integrated asynchronous perception and policy inference into the physical Go2 software stack.',
      'Prepared and ran outdoor data-collection sessions with and without a secured liquid payload.',
    ],
    experiments: [
      'Collect synchronized field data under payload and no-payload conditions.',
      'Use the two conditions to study stable and more direct navigation objectives.',
      'Offline playback checks temporal alignment and command prediction before physical deployment.',
      'Planned evaluation will examine route choice, command smoothness, sensor freshness, and controller behavior.',
    ],
    results: [
      'Data collection, model development, and evaluation are still in progress.',
      'No model results or comparative conclusions are reported at this stage.',
    ],
    demo: [...go2SetupMedia, ...go2CollectedDataMedia],
    mediaSections: [
      {
        title: 'Robot and sensing setup',
        description:
          'The physical platform combines the Go2 base, secured payload fixture, sensing, and onboard compute used during data collection.',
        media: go2SetupMedia,
      },
      {
        title: 'Collected navigation data',
        description:
          'These field clips show synchronized RGB and normalized depth observations collected under payload and no-payload conditions. They are dataset examples, not model results.',
        media: go2CollectedDataMedia,
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
      'A public, co-authored ROS 2 system that connects voice intent, person tracking, metric depth estimation, and closed-loop control on a DJI RoboMaster EP.',
    technologies: [
      'ROS 2',
      'RoboMaster EP',
      'Person tracking',
      'Whisper',
      'DeepSORT',
      'Depth Anything V2',
      'PID control',
    ],
    facts: [
      { label: 'Authorship', value: 'Co-authored project' },
      { label: 'Platform', value: 'DJI RoboMaster EP' },
      {
        label: 'Perception',
        value: 'Person detection, tracking, depth, and optional identity',
      },
      {
        label: 'Behaviors',
        value: 'Follow, approach, stop, authorized follow, pickup, and drop',
      },
    ],
    diagram: {
      inputs: ['Voice or text command', 'Camera detections', 'Depth and ToF'],
      model: 'Intent FSM + DeepSORT + depth-guided PID',
      output: 'Chassis and arm/gripper commands',
      note: 'Structured voice intent gates perception-driven following and interaction behaviors through ROS 2.',
    },
    overview:
      'This co-authored course project integrates spoken and text commands with a ROS 2 perception and control stack for the DJI RoboMaster EP. The system can follow the nearest tracked person, approach at a shorter distance, stop on command, optionally restrict following to a recognized person, and run fixed pickup or drop sequences through the robot arm and gripper.',
    problem:
      'Person following requires more than detecting someone in a camera frame. The robot must preserve a target across frames, estimate distance, translate commands into safe operating states, and stop when perception becomes stale or the behavior controller disables motion.',
    approach: [
      'Transcribe microphone input with Whisper or accept text input, then map phrases to follow, authorized-follow, approach, stop, pickup, and drop intents.',
      'Associate RoboMaster person detections across frames with DeepSORT and estimate metric depth with Depth Anything V2, with optional front-ToF correction.',
      'Select the nearest valid track, or an authorized identity when identity filtering is enabled, and regulate distance and image-center error with a PID controller.',
      'Gate chassis motion and arm/gripper sequences through a finite-state machine with stale-data stops, speed limits, and controller deadbands.',
    ],
    contribution: [
      'Co-developed the ROS 2 integration across voice intent, perception, following control, and robot behaviors.',
      'Contributed to the tracked-person and depth pipeline used by the controller.',
      'Integrated state-gated following, approach, stop, pickup, and drop behaviors on the RoboMaster EP.',
    ],
    experiments: [
      'Tested voice and text commands through a local web interface and ROS 2 intent topics.',
      'Ran integrated demonstrations with the live tracking overlay, depth estimate, finite-state transitions, chassis following, and arm/gripper actions.',
      'Added a repeatable follow-distance evaluation protocol based on hold rate, distance error, bias, and command jitter.',
    ],
    results: [
      'Integrated command input, person tracking, depth estimation, state management, and robot control in a working physical demonstration.',
      'The public repository includes the ROS 2 packages, launch configuration, setup instructions, safety gates, and follow-distance evaluation tooling.',
    ],
    demo: [
      {
        type: 'video',
        title: 'Integrated system demonstration',
        src: '/media/robomaster/voice-guided-person-following.mp4',
        poster: '/media/robomaster/voice-guided-person-following-poster.webp',
        alt: 'Voice-guided person-following demonstration with the RoboMaster EP, tracking overlay, and ROS 2 system logs',
        caption:
          'End-to-end demonstration of command input, tracked-person perception, behavior-state transitions, and physical robot operation. The supplied clip is trimmed by four seconds and played at 1.5× speed.',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/HR77275/603_Robotics_final_project',
      },
    ],
  },
];

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
    slug: 'robot-learning-research',
    title: 'Robot Learning Research',
    category: 'Robotics',
    number: '01',
    color: 'sage',
    featured: true,
    status: 'published',
    summary:
      'Research on learned manipulation policies, simulation-informed supervision, and real-robot evaluation.',
    technologies: ['Robot learning', 'Simulation', 'VLA policies'],
    diagram: {
      inputs: ['Robot observations', 'Task context'],
      model: 'Learned policy',
      output: 'Robot actions',
      note: 'From demonstrations and simulation to physical evaluation',
    },
    overview:
      'Ongoing academic research on training and evaluating learned policies for robot manipulation.',
    problem:
      'Robots need policies that can learn from limited experience and remain dependable when transferred to physical systems.',
    approach: [
      'Build reproducible data and evaluation workflows.',
      'Study learned policies across representative manipulation settings.',
      'Use simulation as a controlled environment for development and analysis.',
    ],
    contribution: [
      'Developing research infrastructure for policy training and evaluation.',
      'Integrating learned policies with robotic platforms.',
      'Analyzing behavior and failure modes during physical evaluation.',
    ],
    experiments: [
      'Controlled simulation and real-robot evaluations.',
      'Qualitative and quantitative failure analysis.',
    ],
    results: [
      'Detailed methods and results are withheld until the associated research is public.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Approved robot-learning media',
        caption: 'Only publication-cleared images or videos will be added.',
      },
    ],
    links: [],
  },
  {
    slug: 'multimodal-robot-navigation',
    title: 'Multimodal Robot Navigation',
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
      'A research pipeline for multimodal robot data, learned navigation, and safety-aware deployment.',
    technologies: ['ROS 2', 'Multimodal perception', 'Robot learning'],
    diagram: {
      inputs: ['Visual sensing', 'Robot state', 'Task context'],
      model: 'Navigation policy',
      output: 'Motion commands',
      note: 'Temporal sensor context to guarded robot control',
    },
    overview:
      'Ongoing academic research on multimodal perception and learned navigation for mobile robots.',
    problem:
      'Real robots must combine asynchronous sensing with learned decisions while preserving safe control behavior.',
    approach: [
      'Collect and align multimodal robot observations.',
      'Learn navigation behavior from temporal sensor context.',
      'Integrate policy inference with monitoring and guarded control.',
    ],
    contribution: [
      'Building robotics data and evaluation pipelines.',
      'Developing learned navigation models.',
      'Integrating research software with a physical robot platform.',
    ],
    experiments: [
      'Offline evaluation on recorded robot data.',
      'Controlled physical-robot validation.',
    ],
    results: [
      'Detailed implementation and evaluation results remain private while the research is ongoing.',
    ],
    demo: [
      {
        type: 'image',
        src: '/media/go2/go2-payload-side.webp',
        alt: 'Side view of a Unitree Go2 carrying a secured liquid payload',
        caption:
          'Go2 payload configuration used for condition-aware navigation experiments.',
        width: 1600,
        height: 1200,
      },
      {
        type: 'image',
        src: '/media/go2/go2-payload-front.webp',
        alt: 'Front view of a Unitree Go2 with a secured liquid payload',
        caption: 'Front view of the payload-carrying quadruped platform.',
        width: 1350,
        height: 1800,
      },
      {
        type: 'image',
        src: '/media/go2/go2-sensor-compute.webp',
        alt: 'Top view of the Unitree Go2 sensor and onboard compute setup',
        caption:
          'Sensor and compute integration used for multimodal robot data collection.',
        width: 1350,
        height: 1800,
      },
      {
        type: 'image',
        src: '/media/go2/go2-outdoor-platform.webp',
        alt: 'Unitree Go2 configured for an outdoor navigation run',
        caption:
          'Outdoor configuration prepared for a controlled navigation run.',
        width: 1350,
        height: 1800,
      },
      {
        type: 'video',
        src: '/media/go2/go2-safe-route.mp4',
        poster: '/media/go2/go2-payload-side.webp',
        alt: 'RGB and normalized depth views from a stable-route Go2 navigation run',
        caption:
          'Stable-route run showing synchronized RGB and normalized depth observations. The public clip was trimmed and stripped of audio and metadata.',
      },
      {
        type: 'video',
        src: '/media/go2/go2-fast-route.mp4',
        poster: '/media/go2/go2-outdoor-platform.webp',
        alt: 'RGB and normalized depth views from a faster Go2 navigation run',
        caption:
          'Faster-route run showing synchronized RGB and normalized depth observations. Audio and metadata were removed for publication.',
      },
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

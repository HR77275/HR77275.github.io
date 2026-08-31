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
    slug: 'smolvla',
    title: 'Robot Manipulation with SmolVLA',
    category: 'Robotics',
    number: '01',
    color: 'sage',
    featured: true,
    status: 'draft',
    summary:
      'Language-conditioned manipulation: connecting visual observations, instructions, and actions on real robots.',
    technologies: ['SmolVLA', 'LeRobot', 'PyTorch'],
    diagram: {
      inputs: ['Camera observations', 'Language instruction'],
      model: 'SmolVLA policy',
      output: 'Robot actions',
      note: 'Vision + language → action',
    },
    overview:
      'A project outline for exploring compact vision-language-action policies with LeRobot, from demonstration datasets to training and evaluation on real hardware.',
    problem:
      'Manipulation policies must connect visual context and language intent with executable actions while accounting for observation timing, dataset quality, and hardware constraints.',
    approach: [
      'Organize demonstrations into a consistent observation and action format.',
      'Adapt a SmolVLA policy to a defined set of manipulation tasks.',
      'Evaluate behavior under controlled scene and instruction changes.',
    ],
    contribution: [
      'To document: data collection and preprocessing responsibilities.',
      'To document: model adaptation, training, and hardware integration.',
      'To document: evaluation tooling and failure analysis.',
    ],
    experiments: [
      'Dataset: add tasks, episode counts, and train/evaluation splits.',
      'Training: add model revision, compute, optimization settings, and normalization.',
      'Evaluation: add trial counts, success criteria, and repeatability protocol.',
    ],
    results: [
      'Add verified task success rates and evaluation trial counts.',
      'Include qualitative failure cases and generalization observations.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Robot rollout video',
        caption: 'Add a representative hardware demonstration.',
      },
    ],
    technicalDetails: [
      'Document observation synchronization, action chunking, and control frequency.',
      'Record model, dataset, and code versions for reproducibility.',
    ],
    links: [],
  },
  {
    slug: 'adas-trifocal',
    title: 'ADAS Trifocal Perception',
    category: 'Perception',
    number: '02',
    color: 'forest',
    featured: true,
    status: 'draft',
    summary:
      'A unified detection pipeline that brings far, mid, and near camera views into a shared perception system.',
    technologies: ['Multi-view vision', 'YOLO', 'BiFPN'],
    diagram: {
      inputs: ['Far / mid / near views', 'Camera geometry'],
      model: 'Multi-scale fusion',
      output: 'Unified detections',
      note: 'Three views. One perception pipeline.',
    },
    overview:
      'A draft case study on trifocal ADAS perception, combining multi-view inputs, YOLO-style detection, and BiFPN feature fusion with attention to runtime efficiency.',
    problem:
      'Different camera views provide complementary coverage, but separate processing paths can duplicate computation and complicate cross-view consistency.',
    approach: [
      'Describe far, mid, and near camera input representations.',
      'Document the detection backbone and BiFPN feature fusion.',
      'Profile the complete pipeline to identify runtime bottlenecks.',
    ],
    contribution: [
      'To document: personally implemented model and pipeline changes.',
      'To document: runtime profiling, optimization, and integration ownership.',
      'Include only architecture and details approved for public disclosure.',
    ],
    experiments: [
      'Describe an approved evaluation split and object categories.',
      'Record baseline models, hardware, resolution, and precision.',
      'Specify end-to-end timing methodology.',
    ],
    results: [
      'Runtime improvement: add a verified before/after measurement with units.',
      'Detection quality: add approved metrics and evaluation conditions.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Multi-view detection comparison',
        caption: 'Add approved camera frames or an annotated video.',
      },
    ],
    technicalDetails: [
      'Explain feature alignment and shared computation where disclosure is permitted.',
      'Separate model latency from data loading and post-processing.',
    ],
    links: [],
  },
  {
    slug: 'bimanual-manipulation',
    title: 'Bimanual Robot Manipulation',
    category: 'Robotics',
    number: '03',
    color: 'sand',
    featured: true,
    status: 'draft',
    summary:
      'Coordinated manipulation on the RM65B bimanual platform through imitation learning and VLA policies.',
    technologies: ['RM65B', 'Imitation learning', 'VLA'],
    diagram: {
      inputs: ['Synchronized observations', 'Bimanual demonstrations'],
      model: 'Coordinated policy',
      output: 'Left + right actions',
      note: 'Learning coordinated two-arm behavior',
    },
    overview:
      'An editable outline for bimanual robot learning on the RM65B platform, centered on coordinated demonstrations and learned manipulation policies.',
    problem:
      'Two-arm manipulation introduces synchronization, coupled action spaces, and task dependencies beyond single-arm settings.',
    approach: [
      'Define coordinated tasks and demonstration protocols.',
      'Align observations and joint actions across both arms.',
      'Investigate imitation-learning or VLA policies for coordinated execution.',
    ],
    contribution: [
      'To document: hardware and data-collection integration.',
      'To document: policy development and evaluation responsibility.',
      'To document: synchronization, calibration, and debugging.',
    ],
    experiments: [
      'Record task setup, demonstration quality checks, and trajectory format.',
      'Add the chosen model, training procedure, and evaluation protocol.',
      'Report intervention criteria and hardware safety limits.',
    ],
    results: [
      'Add verified completion rates and trial counts.',
      'Describe coordination failures and recovery behavior.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Coordinated manipulation demo',
        caption: 'Add a video showing both arms and the complete task.',
      },
    ],
    links: [],
  },
  {
    slug: 'diffusion-policy',
    title: 'Diffusion Policy for Robot Manipulation',
    category: 'Robotics',
    number: '04',
    color: 'blue',
    featured: true,
    status: 'draft',
    summary:
      'From demonstrated trajectories to action sequences: studying diffusion-based policies on real hardware.',
    technologies: ['Diffusion policies', 'DiT', 'PyTorch'],
    diagram: {
      inputs: ['Visual observations', 'Robot state'],
      model: 'Diffusion policy',
      output: 'Action sequence',
      note: 'Observation-conditioned trajectory generation',
    },
    overview:
      'A draft project on diffusion-based manipulation policies, including DiT-style model exploration, robot trajectory learning, and hardware evaluation.',
    problem:
      'Demonstrations can contain several valid trajectories. A policy needs to represent this variation while producing actions usable in a real control loop.',
    approach: [
      'Represent demonstrations as observation-conditioned action sequences.',
      'Train or adapt a diffusion-based policy with reproducible data splits.',
      'Evaluate hardware behavior and inference tradeoffs.',
    ],
    contribution: [
      'To document: trajectory processing and model implementation.',
      'To document: training, inference, and hardware integration.',
      'To document: evaluation and experiment analysis.',
    ],
    experiments: [
      'Add dataset composition, normalization, and temporal horizons.',
      'Record diffusion steps, model settings, batch size, and compute.',
      'Measure task outcomes alongside end-to-end inference latency.',
    ],
    results: [
      'Add verified comparisons against a clearly identified baseline.',
      'Include failure cases and inference-versus-control tradeoffs.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Policy rollout and trajectories',
        caption: 'Add a short evaluation video or GIF.',
      },
    ],
    technicalDetails: [
      'Document action chunk execution and replanning frequency.',
      'Separate the training noise schedule from inference settings.',
    ],
    links: [],
  },
  {
    slug: 'pole-detection',
    title: 'Pole Detection Pipeline',
    category: 'Perception',
    number: '05',
    color: 'stone',
    status: 'draft',
    summary:
      'Structured perception from heatmaps to polylines, with multi-scale features and an efficient data pipeline.',
    technologies: ['Heatmaps', 'BiFPN', 'Computer vision'],
    diagram: {
      inputs: ['Camera image', 'Multi-scale features'],
      model: 'Keypoint heatmaps',
      output: 'Pole polylines',
      note: 'Dense predictions → structured geometry',
    },
    overview:
      'A draft case study on heatmap-based pole detection and keypoint-to-polyline reconstruction, with multi-scale features and data-pipeline optimization.',
    problem:
      'Thin structures are difficult to represent across scale and occlusion. Structured outputs also require reliable post-processing.',
    approach: [
      'Create heatmap targets for points along pole structures.',
      'Fuse multi-scale features and decode keypoint predictions.',
      'Reconstruct polylines and profile the data and inference pipelines.',
    ],
    contribution: [
      'To document: target generation and model changes.',
      'To document: decoding and polyline reconstruction.',
      'To document: data-pipeline optimizations and measured effects.',
    ],
    experiments: [
      'Describe approved data splits, annotations, and augmentations.',
      'Define localization and reconstruction metrics.',
      'Record data-loading and inference timing methodology.',
    ],
    results: [
      'Add verified localization and reconstruction measurements.',
      'Add throughput changes with a reproducible baseline.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Heatmaps and reconstructed polylines',
        caption:
          'Add approved input/output examples or a before/after comparison.',
      },
    ],
    links: [],
  },
  {
    slug: 'synthetic-rare-cases',
    title: 'Synthetic Rare-Case Generation',
    category: 'Generative AI',
    number: '06',
    color: 'clay',
    status: 'draft',
    summary:
      'Controllable diffusion for autonomous-driving scenarios that are difficult to capture in real datasets.',
    technologies: ['Diffusion models', 'ControlNet', 'FID'],
    diagram: {
      inputs: ['Scene conditions', 'Driving dataset'],
      model: 'Controlled diffusion',
      output: 'Synthetic scenarios',
      note: 'Controllable generation for dataset coverage',
    },
    overview:
      'A draft project exploring diffusion models and ControlNet for synthetic driving data, with evaluation of visual quality and rare-case coverage.',
    problem:
      'Long-tail road conditions are underrepresented in collected data. Generated samples must preserve structure and be assessed beyond visual plausibility.',
    approach: [
      'Define rare-case scenarios and conditioning signals.',
      'Generate controlled variations with diffusion and ControlNet.',
      'Evaluate distribution-level quality and semantic consistency.',
    ],
    contribution: [
      'To document: conditioning design and data preparation.',
      'To document: model adaptation and generation tooling.',
      'To document: evaluation and failure-case analysis.',
    ],
    experiments: [
      'Record data permissions and split provenance.',
      'Document model revisions, prompts, conditions, seeds, and sampling settings.',
      'Specify FID sample counts and feature extraction; assess downstream utility separately.',
    ],
    results: [
      'Add verified FID measurements and the reference distribution.',
      'Include qualitative comparisons, limitations, and separately validated downstream outcomes.',
    ],
    demo: [
      {
        type: 'placeholder',
        label: 'Conditioning input / generated scene',
        caption: 'Add paired examples clearly labeled as synthetic.',
      },
    ],
    technicalDetails: [
      'Keep real and synthetic data provenance explicit.',
      'Distribution similarity alone does not establish downstream robustness.',
    ],
    links: [],
  },
];

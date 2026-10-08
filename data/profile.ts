export const profile = {
  name: 'Himanshu Ranjan',
  role: 'Machine Learning & Robotics Engineer',
  focus: 'Machine Learning · Perception · Robot Learning',
  intro:
    'I develop machine learning systems for multimodal perception and embodied intelligence—from visual understanding to robot learning, world models, and autonomous behavior.',
  location: 'United States',
  email: 'himanshuranj@umass.edu',
  links: {
    github: 'https://github.com/HR77275',
    linkedin: 'https://www.linkedin.com/in/himanshuranjan77/',
    huggingface: 'https://huggingface.co/Himanshu77275',
    resume: '/resume.pdf',
  },
  resumeAvailable: true,
  siteUrl:
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL
      : 'https://example.com'),
  bio: 'My work spans machine learning and perception, from multimodal representations and learned policies to dependable intelligent systems in the physical world.',
  currentFocus:
    'Machine learning for multimodal perception, with applications in robot learning, world modeling, and real-world autonomy.',
  background:
    'I am pursuing an MS in Computer Science at UMass Amherst after working on production machine-learning and perception systems in industry.',
  interests: [
    'Machine learning',
    'Multimodal perception',
    'Robot learning',
    'Simulation and world models',
  ],
  education: [
    {
      school: 'University of Massachusetts Amherst',
      degree: 'Master of Science in Computer Science',
      period: 'Aug 2025 - May 2027',
      gpa: '3.95 / 4.00',
      study:
        'Machine Learning, Reinforcement Learning, Computer Vision, Robotics, Natural Language Processing, AI Alignment, and Optimization Theory',
    },
    {
      school: 'Indian Institute of Technology Kharagpur',
      degree: 'Bachelor of Technology in Electrical Engineering',
      period: 'Aug 2018 - May 2022',
      gpa: '8.22 / 10.00',
      study:
        'An engineering foundation in mathematics, signals, systems, computation, and intelligent technologies',
    },
  ],
};
export function isPlaceholderLink(url: string) {
  return url.includes('YOUR_USERNAME') || url.includes('example.com');
}

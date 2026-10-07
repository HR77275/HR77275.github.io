export const profile = {
  name: 'Himanshu Ranjan',
  role: 'Machine Learning & Robotics Engineer',
  focus: 'Machine Learning · Computer Vision · Robot Learning',
  intro:
    'I develop machine learning systems for computer vision, multimodal perception, and embodied intelligence—from visual understanding to robot learning, world models, and autonomous behavior.',
  location: 'United States',
  email: 'himanshuranj@umass.edu',
  links: {
    github: 'https://github.com/HR77275',
    linkedin: 'https://www.linkedin.com/in/himanshuranjan77/',
    huggingface: 'https://huggingface.co/YOUR_USERNAME',
    resume: '/resume.pdf',
  },
  resumeAvailable: true,
  siteUrl:
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL
      : 'https://example.com'),
  bio: 'My work spans machine learning, computer vision, and perception, from multimodal representations and learned policies to dependable intelligent systems in the physical world.',
  currentFocus:
    'Machine learning for computer vision and multimodal perception, with applications in robot learning, world modeling, and real-world autonomy.',
  background:
    'I am pursuing an MS in Computer Science at UMass Amherst after working on production machine-learning and perception systems in industry.',
  interests: [
    'Machine learning',
    'Computer vision and perception',
    'Multimodal perception',
    'Robot learning',
    'Simulation and world models',
  ],
  education: [
    {
      school: 'University of Massachusetts Amherst',
      degree: 'MS Computer Science · 2025–2027',
    },
    {
      school: 'Indian Institute of Technology Kharagpur',
      degree: 'B.Tech Electrical Engineering · 2018–2022',
    },
  ],
};
export function isPlaceholderLink(url: string) {
  return url.includes('YOUR_USERNAME') || url.includes('example.com');
}

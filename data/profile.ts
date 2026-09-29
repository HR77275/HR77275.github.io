export const profile = {
  name: 'Himanshu Ranjan',
  role: 'Robotics & Machine Learning Engineer',
  focus: 'Embodied AI · Robot Learning · Autonomous Systems',
  intro:
    'I build learning systems for robots, spanning multimodal perception, robot learning, simulation, and reliable real-world deployment.',
  location: 'United States',
  email: 'himanshuranj@umass.edu',
  links: {
    github: 'https://github.com/HR77275',
    linkedin: 'https://www.linkedin.com/in/himanshuranjan77/',
    huggingface: 'https://huggingface.co/YOUR_USERNAME',
    resume: '/resume.pdf',
  },
  resumeAvailable: false,
  siteUrl:
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL
      : 'https://example.com'),
  bio: 'My work connects machine learning with physical systems, from multimodal data and learned policies to the engineering required for dependable robot deployment.',
  currentFocus:
    'Robot learning, multimodal navigation, and simulation-informed autonomy for real-world systems.',
  background:
    'I am pursuing an MS in Computer Science at UMass Amherst after working on production machine-learning and perception systems in industry.',
  interests: [
    'Robot learning',
    'Multimodal perception',
    'Simulation and world models',
    'Reliable real-world autonomy',
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

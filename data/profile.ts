export const profile = {
  name: 'Himanshu Ranjan',
  role: 'Robotics & Machine Learning Engineer',
  focus: 'Embodied AI · World Models · Autonomous Systems',
  intro:
    'I build learning systems for robots, from multimodal data pipelines and world models to vision-language-action policies and safety-aware autonomy.',
  location: 'Amherst, MA',
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
  bio: 'My work connects robot learning with reliable real-world systems: collecting multimodal data, training manipulation and navigation policies, building simulation workflows, and deploying perception and inference pipelines.',
  currentFocus:
    'World-model post-training, digital twins, multimodal navigation, and vision-language-action policies for real robots.',
  background:
    'I am an MS Computer Science student at UMass Amherst with research experience in embodied AI and human-centered robotics, following three years building production ADAS perception systems at Bosch.',
  interests: [
    'World models and digital twins',
    'Vision-language-action policies',
    'Multimodal robot navigation',
    'Reliable real-world autonomy',
  ],
  education: [
    {
      school: 'University of Massachusetts Amherst',
      degree: 'MS Computer Science · GPA 3.95/4.0 · 2025–2027',
    },
    {
      school: 'Indian Institute of Technology Kharagpur',
      degree: 'B.Tech Electrical Engineering · GPA 8.22/10.0 · 2018–2022',
    },
  ],
};
export function isPlaceholderLink(url: string) {
  return url.includes('YOUR_USERNAME') || url.includes('example.com');
}

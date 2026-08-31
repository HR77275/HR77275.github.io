export const profile = {
  name: 'Himanshu Ranjan',
  role: 'Machine Learning & Robotics Engineer',
  focus: 'Embodied AI · Computer Vision · Autonomous Systems',
  intro:
    'I work on perception, robot learning, vision-language-action models, diffusion policies, and the systems that bring intelligent behavior into the physical world.',
  location: 'Location to be added',
  email: 'hello@example.com',
  links: {
    github: 'https://github.com/YOUR_USERNAME',
    linkedin: 'https://www.linkedin.com/in/YOUR_USERNAME',
    huggingface: 'https://huggingface.co/YOUR_USERNAME',
    resume: '/resume.pdf',
  },
  // Set to true after adding public/resume.pdf.
  resumeAvailable: false,
  // Set your final production origin before deploying.
  siteUrl:
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://example.com',
  bio: 'My work sits at the intersection of machine learning and physical systems: building perception pipelines, learning from robot demonstrations, and evaluating how policies behave on real hardware.',
  currentFocus:
    'Vision-language-action models, diffusion policies, and real robot learning for manipulation and navigation.',
  background:
    'From ADAS perception at Bosch to embodied AI research at UMass Amherst, I focus on connecting model development with the constraints of deployed systems.',
  interests: [
    'Generalist robot policies',
    'Learning from demonstrations',
    'Multimodal perception',
    'Reliable real-world autonomy',
  ],
  education: [
    { school: 'UMass Amherst', degree: 'MS Computer Science' },
    { school: 'IIT Kharagpur', degree: 'B.Tech Electrical Engineering' },
  ],
};
export function isPlaceholderLink(url: string) {
  return url.includes('YOUR_USERNAME') || url.includes('example.com');
}

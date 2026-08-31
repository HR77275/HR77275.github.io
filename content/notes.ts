export type Note = {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: 'draft' | 'published';
  date?: string;
  sections: { heading: string; paragraphs: string[] }[];
};
// Simple typed content; drafts are excluded from public routes.
export const notes: Note[] = [];
export const plannedTopics = [
  'BEV perception',
  'Camera geometry',
  'Vision Transformers',
  'Vision-Language-Action models',
  'Diffusion policies',
  'LeRobot',
  'Mixed precision training',
  'Gaussian Splatting for robotics',
];

export type Publication = {
  slug: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  description: string;
  paper?: string;
  code?: string;
  project?: string;
  citation: string;
};
// Add only verified publications. An empty list renders an intentional overview.
export const publications: Publication[] = [];

// https://ps-lms.vercel.app/curriculum/se/415/lab-2#:~:text=%7D-,2.%20StatsDisplay%20Component,-Create%20a%20StatsDisplay
// types/index.ts
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}
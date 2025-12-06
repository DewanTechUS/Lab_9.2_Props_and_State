// https://ps-lms.vercel.app/curriculum/se/415/lab-2#:~:text=%7D-,2.%20StatsDisplay%20Component,-Create%20a%20StatsDisplay
// types/index.ts
// export interface TextStats {
//   characterCount: number;
//   wordCount: number;
//   readingTime: number; // in minutes
// }
 
// export interface StatsDisplayProps {
//   stats: TextStats;
//   showReadingTime?: boolean;
// }
// https://stackoverflow.com/questions/76983697/why-does-my-vue-vite-typescript-application-require-me-to-separate-import-and
// follow this you will be fine with the imports
import React from "react";
import { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  const { characterCount, wordCount, readingTime } = stats;

  return (
 <div className="stats-wrapper">
      <p>
        <div className="stat-card">Characters: {characterCount}</div>
      </p>
      <p>
        <div className="stat-card">Words: {wordCount}</div>
      </p>
      {showReadingTime && (
        <p>
          <div className="stat-card">Reading time: {readingTime.toFixed(1)} min</div>
        </p>
      )}
    </div>
  );
};

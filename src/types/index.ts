// src/types/index.ts
// text input component props
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// text statistics structure
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

// stats display component props
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}
// character counter component props
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

// https://ps-lms.vercel.app/curriculum/se/415/lab-2#:~:text=%7D-,3.%20CharacterCounter%20Component,-Create%20a%20CharacterCounter
// types/index.ts
// types/index.ts
// export interface CharacterCounterProps {
//   minWords?: number;
//   maxWords?: number;
//   targetReadingTime?: number; // in minutes
// }

// src/components/CharacterCounter/CharacterCounter.tsx

import React, { useState } from "react";
import { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

const WORDS_PER_MINUTE = 250;

function calculateStats(text: string): TextStats {
  const trimmed = text.trim();
  const characterCount = text.length;
  const wordCount = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const readingTime = wordCount / WORDS_PER_MINUTE;

  return {
    characterCount,
    wordCount,
    readingTime,
  };
}

export const CharacterCounter: React.FC<CharacterCounterProps> = () => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState<TextStats>(calculateStats(""));

  const handleTextChange = (newText: string) => {
    setText(newText);
    setStats(calculateStats(newText));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Character Counter</h1>

      <TextInput
        onTextChange={handleTextChange}
        placeholder="Start typing..."
        initialValue=""
      />

      <StatsDisplay
        stats={stats}
        showReadingTime={true}
      />
    </div>
  );
};

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
// we can assume an average reading speed of 30 words per minute
const WORDS_PER_MINUTE = 30;

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

      <h3 className="text-2xl font-bold"> Student: Dewan Mahmud Rocky - Per Scholas Software Engineering Cohort 2025-RTT-57
        <br />Instructors: Tishana Trainor & Bryan Santos
        <br />Technical Reference: React & TypeScript guidance</h3>

      <br /> We can copy and paste this in box to see character and word count along with estimated reading time.

      <br /><h5>This project was created as part of the Per Scholas Software Engineering training program. The components are built using modern React with TypeScript, focusing on basic props, interface usage, and clean UI design. I followed the lesson instructions to keep everything simple and on topic. Over time, I've realized that TypeScript and React are actually much better to work with because they give clear errors when something is wrong. For example, I had an issue with my tsconfig settings, and TypeScript showed an exact error code. I was able to search it, find the solution, and debug it successfully. Special thanks to my instructors for their clear explanations and ongoing support while learning component structure, prop typing, and event handling in React. </h5>
      <br /> Highly confused but dangerously persistent software engineer with 10+ (Decades) years of experience breaking code I just wrote. Specialized in turning simple tasks into complex mysteries, fixing one bug while creating three new ones, and saying “Why is this not working?” out loud 200+ times a day.
      <br />Famous for closing bugs without knowing why it worked and saying, Don't touch anything, it works now. I don't fix bugs… I relocate them.
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

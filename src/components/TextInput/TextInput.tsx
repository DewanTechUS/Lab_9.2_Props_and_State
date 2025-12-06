// https://ps-lms.vercel.app/curriculum/se/415/lab-2#:~:text=Component%20Requirements-,1.%20TextInput%20Component,-Create%20a%20TextInput
// types/index.ts
// https://www.robinwieruch.de/react-event-handler/
// components/TextInput/TextInput.tsx
// src/components/TextInput/TextInput.tsx
// example taken from https://ps-lms.vercel.app/curriculum/se/415/lab-2#:~:text=Here%E2%80%99s%20a%20starting%20point%20for%20the%20TextInput%20component%20using%20Tailwind%20CSS%20classes%20for%20styling%3A
import React from "react";
import { TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <div className="w-full">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};

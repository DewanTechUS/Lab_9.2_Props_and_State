// https://ps-lms.vercel.app/curriculum/se/415/lab-2#:~:text=Component%20Requirements-,1.%20TextInput%20Component,-Create%20a%20TextInput
// types/index.ts
// https://www.robinwieruch.de/react-event-handler/
// components/TextInput/TextInput.tsx
// src/components/TextInput/TextInput.tsx
// example taken from https://ps-lms.vercel.app/curriculum/se/415/lab-2#:~:text=Here%E2%80%99s%20a%20starting%20point%20for%20the%20TextInput%20component%20using%20Tailwind%20CSS%20classes%20for%20styling%3A
// remember verbatimModuleSyntax false in tsconfigs.app.json and tsconfigs.node.json 
import React from "react";
import { TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <div className="text-input-container">
      <textarea
        className="text-input-area"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};

// https://ps-lms.vercel.app/curriculum/se/415/lab-2#:~:text=Component%20Requirements-,1.%20TextInput%20Component,-Create%20a%20TextInput
// types/index.ts
// https://www.robinwieruch.de/react-event-handler/
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}
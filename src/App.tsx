// src/App.tsx
import "./App.css";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CharacterCounter
        minWords={0}
        maxWords={200}
        targetReadingTime={1}
      />
    </div>
  );
}

export default App;

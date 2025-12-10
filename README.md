# Lab 9.2 - Props and State

## Author
**Dewan Farhad Mahmud (Rocky)**  
- Per Scholas Software Engineering, Cohort RTT-57  
- GitHub: https://github.com/DewanTechUS  
- Portfolio: https://dewantech.com  
- Email: rockyit10@gmail.com

I’m passionate about building clean, responsive user interfaces and learning modern JavaScript, TypeScript, and React. Still learning every day, debugging every night.

This project is my implementation of Lab 2 from the Per Scholas Software Engineering curriculum. It is a character counter built with React + TypeScript using Vite, and it updates statistics in real-time as you type.

## Features

- Live character and word count  
- Estimated reading time  
- Word goal progress (min / max words)  
- Callback communication between components  
- All components strongly typed with TypeScript interfaces  

## How It Works

- `useState` stores the text and statistics in `CharacterCounter`
- `TextInput` sends text changes to the parent using a callback
- `calculateStats()` updates characters, words, and reading time instantly
- `StatsDisplay` shows the current stats on screen

## How to Run the Project
1.	Open Terminal or git bash - Press CTRL + ` (backtick) in VS Code to open the integrated terminal.
2.	Install dependencies - Make sure you are inside your project folder (example: character-counter), then run:
3.	npm install - This installs everything from your package.json (React, TypeScript, Vite, etc.).
4.	Start development server
5.	npm run dev

You should see something like:
VITE v5.x.x  ready in 400ms
 Local: http://localhost:5173/
6.	Open the browser
Go to:
7.	http://localhost:5173/
Your Character Counter app will be running and updating in real-time.
8.	Stop the server
To stop the development server at any time, press:
CTRL + C

## Reflection

**How did you handle state updates when the text changed?**  
I kept all state in `CharacterCounter` and used a callback (`onTextChange`) to update the text and stats each time the user types.

**What considerations did you make when calculating reading time?**  
I used a estimate of 30 words per minute. If the text is empty, the reading time returns 0 so the UI never breaks.

**How did you ensure the UI remained responsive?**  
The calculations are lightweight (only counting characters, splitting words, and a basic division), so React can update smoothly even during fast typing.

**What challenges did you face?**  
One issue was handling empty input and extra whitespace when counting words. Another struggle was fixing TypeScript configuration errors (`tsconfig`). I researched errors on StackOverflow and found solutions that helped TypeScript recognize React types correctly. After that, the build finally stopped yelling at me. 

## Special Thanks

**Huge thank you to our instructor**:  
*My Teachers Tishana Trainor and Bryan Santos* - for breaking down React and TypeScript in a way that finally made sense.

**Shout-out to my classmates**:  
everyone in **2025-RTT-57** - thank you for the help, laughs, and caffeine-powered group chats.



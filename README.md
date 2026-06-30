# ⚡ BrainBuzz

An interactive quiz app built with React, featuring India-focused trivia across Space, Mythology, and Inventions — with timed questions, score tracking, and a sleek glassmorphism UI.

> Live Demo: [brainbuzz-quiz.netlify.app](https://brainbuzz-quiz.netlify.app/)

---

## ✨ Features

- **3 Categories** — Space & Universe 🚀, Mythology ⚡, Inventions & Discoveries 💡
- **Shuffled Questions** — fresh random order of 10 questions every attempt
- **15-Second Timer** — per question, with a visual countdown that turns red under pressure
- **Instant Feedback** — correct/wrong answers highlighted immediately on selection or timeout
- **Next Button Flow** — review the answer before manually moving to the next question
- **Score Breakdown** — see correct, wrong, and skipped counts at the end
- **High Score Tracking** — best score per category saved locally and shown on the home screen
- **Progress Bar** — track how far you are in the quiz
- **Responsive Design** — works smoothly across mobile and desktop
- **Modern UI** — clean dark theme with smooth gradients and animations

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Styling | Custom CSS |
| State Management | React Hooks (useState, useEffect) |
| Data Persistence | localStorage (high scores) |
| Deployment | Netlify |

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

- Node.js installed

### 1. Clone the repo

```bash
git clone https://github.com/srija678/BrainBuzz.git
cd BrainBuzz
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Visit `http://localhost:5173`

---

## 📁 Project Structure

```
BrainBuzz/
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Landing screen with category high scores
│   │   ├── Navbar.jsx            # App branding bar
│   │   ├── CategorySelect.jsx    # Category selection screen
│   │   ├── Quiz.jsx              # Core quiz logic and flow
│   │   ├── QuestionCard.jsx      # Individual question + options
│   │   ├── Timer.jsx             # Countdown timer per question
│   │   ├── ProgressBar.jsx       # Question progress indicator
│   │   └── Result.jsx            # Final score, breakdown, high score
│   ├── data/
│   │   └── questions.js          # Hardcoded question bank by category
│   ├── App.jsx                   # Screen routing and state management
│   ├── App.css                   # Global styling
│   ├── index.css                 # Base styles
│   └── main.jsx                  # React entry point
├── public/                       # Static assets
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
└── .gitignore
```

---

## 🎮 How It Works

1. Land on the home screen and see your best score per category
2. Pick a category — Space, Mythology, or Inventions
3. Answer 10 shuffled questions, each with a 15-second timer
4. Get instant visual feedback on correct/wrong answers
5. Click Next to proceed at your own pace
6. View your final score, breakdown, and any new high score
7. Replay the same category or return home

---

## 🌐 Deployment

Deployed on **[Netlify](https://netlify.com)**, connected directly to GitHub — every push to `main` triggers an automatic redeploy.

---

## 👩‍💻 Author

**Srija**  
[GitHub](https://github.com/srija678)


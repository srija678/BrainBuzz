import { useState } from "react";
import questions from "../data/questions";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

function Quiz({ category, onFinish, onBack }) {
  const allQuestions = questions[category];
  const [shuffled] = useState(() =>
    [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10),
  );
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  const currentQuestion = shuffled[current];

  const handleAnswer = (selected) => {
    if (answered) return;
    setAnswered(true);
    setShowNext(true);
    if (selected === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }
  };

  const handleTimeUp = () => {
    if (!answered) {
      setAnswered(true);
      setShowNext(true);
      setTimedOut(true);
      setSkipped((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setTimedOut(false);
    if (current + 1 < shuffled.length) {
      setCurrent(current + 1);
      setAnswered(false);
      setShowNext(false);
      setResetTimer((prev) => !prev);
    } else {
      onFinish({ score, wrong, skipped });
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <ProgressBar current={current + 1} total={shuffled.length} />
        <Timer
          onTimeUp={handleTimeUp}
          resetTimer={resetTimer}
          stopped={answered}
        />
      </div>
      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        onAnswer={handleAnswer}
        answered={answered}
        correctAnswer={currentQuestion.answer}
        timedOut={timedOut}
      />
      <div className="quiz-footer">
        <button className="back-btn" onClick={onBack}>
          ← Quit Quiz
        </button>
        {showNext && (
          <button className="next-btn" onClick={handleNext}>
            {current + 1 === shuffled.length ? "See Result →" : "Next →"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

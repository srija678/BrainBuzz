function QuestionCard({
  question,
  options,
  onAnswer,
  answered,
  correctAnswer,
  timedOut,
}) {
  return (
    <div className="question-card">
      {timedOut && <div className="timed-out">⏰ Time's Up!</div>}
      <h2 className="question">{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-btn 
              ${answered ? (option === correctAnswer ? "correct" : "wrong") : ""}
            `}
            onClick={() => !answered && onAnswer(option)}
            disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;

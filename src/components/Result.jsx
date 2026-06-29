import { useEffect, useState } from "react";

function Result({ score, total, onRestart, category, wrong, skipped }) {
  const [highScore, setHighScore] = useState(0);
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const percentage = Math.round((score / total) * 100);

  useEffect(() => {
    const key = `highscore_${category}`;
    const saved = parseInt(localStorage.getItem(key)) || 0;
    if (score > saved) {
      localStorage.setItem(key, score);
      setIsNewHighScore(true);
      setHighScore(score);
    } else {
      setHighScore(saved);
    }
  }, []);

  const getMessage = () => {
    if (percentage === 100) return "🏆 Perfect Score!";
    if (percentage >= 80) return "🌟 Excellent!";
    if (percentage >= 60) return "👍 Good Job!";
    if (percentage >= 40) return "😊 Keep Practicing!";
    return "💪 Better Luck Next Time!";
  };

  return (
    <div className="result">
      <div className="result-content">
        <h2>{getMessage()}</h2>
        {isNewHighScore && (
          <div className="new-highscore">🎉 New High Score!</div>
        )}
        <div className="score-circle">
          <span className="score-number">
            {score}/{total}
          </span>
          <span className="score-percent">{percentage}%</span>
        </div>
        <div className="score-breakdown">
          <div className="breakdown-item correct-item">
            <span>✅</span>
            <p>Correct</p>
            <strong>{score}</strong>
          </div>
          <div className="breakdown-item wrong-item">
            <span>❌</span>
            <p>Wrong</p>
            <strong>{wrong}</strong>
          </div>
          <div className="breakdown-item skipped-item">
            <span>⏰</span>
            <p>Skipped</p>
            <strong>{skipped}</strong>
          </div>
        </div>
        <div className="highscore-display">
          <span>
            🏅 Best Score: {highScore}/{total}
          </span>
        </div>
        <div className="result-buttons">
          <button className="restart-btn" onClick={() => onRestart("category")}>
            Try Another Category
          </button>
          <button className="home-btn" onClick={() => onRestart("home")}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;

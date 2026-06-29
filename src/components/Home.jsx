import { useEffect, useState } from "react";

function Home({ onStart }) {
  const [scores, setScores] = useState({
    space: 0,
    mythology: 0,
    inventions: 0,
  });

  useEffect(() => {
    setScores({
      space: parseInt(localStorage.getItem("highscore_space")) || 0,
      mythology: parseInt(localStorage.getItem("highscore_mythology")) || 0,
      inventions: parseInt(localStorage.getItem("highscore_inventions")) || 0,
    });
  }, []);

  return (
    <div className="home">
      <h1>⚡ BrainBuzz</h1>
      <p>Test your knowledge across Space, Mythology and Inventions!</p>
      <div className="home-scores">
        <div className="home-score-card">
          <span>🚀</span>
          <p>Space</p>
          <strong>{scores.space}/10</strong>
        </div>
        <div className="home-score-card">
          <span>⚡</span>
          <p>Mythology</p>
          <strong>{scores.mythology}/10</strong>
        </div>
        <div className="home-score-card">
          <span>💡</span>
          <p>Inventions</p>
          <strong>{scores.inventions}/10</strong>
        </div>
      </div>
      <button className="start-btn" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default Home;

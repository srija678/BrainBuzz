import { useState } from "react";
import Home from "./components/Home";
import CategorySelect from "./components/CategorySelect";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");
  const [category, setCategory] = useState("");
  const [results, setResults] = useState({ score: 0, wrong: 0, skipped: 0 });

  const handleStart = () => setScreen("category");

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setScreen("quiz");
  };

  const handleFinish = (finalResults) => {
    setResults(finalResults);
    setScreen("result");
  };

  const handleRestart = (destination) => {
    if (destination === "category") {
      setScreen("category");
    } else {
      setScreen("home");
    }
    setResults({ score: 0, wrong: 0, skipped: 0 });
  };

  return (
    <>
      <Navbar />
      <div className="app">
        {screen === "home" && <Home onStart={handleStart} />}
        {screen === "category" && (
          <CategorySelect
            onSelect={handleCategorySelect}
            onBack={() => setScreen("home")}
          />
        )}
        {screen === "quiz" && (
          <Quiz
            category={category}
            onFinish={handleFinish}
            onBack={() => setScreen("category")}
          />
        )}
        {screen === "result" && (
          <Result
            score={results.score}
            wrong={results.wrong}
            skipped={results.skipped}
            total={10}
            category={category}
            onRestart={handleRestart}
          />
        )}
      </div>
    </>
  );
}

export default App;

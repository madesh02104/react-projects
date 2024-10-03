import { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  const updateScore = (newScore) => {
    setScore(newScore);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <Body updateScore={updateScore} resetScore={resetScore} />
    </div>
  );
};

export default App;

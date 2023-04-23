import React, { useState, useEffect } from 'react';
import "../styles/App.css"

const WORD_LIST = ['apple', 'banana', 'cherry', 'grape', 'orange'];

function App() {
  const [word, setWord] = useState('');
  const [flashWord, setFlashWord] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setWord(WORD_LIST[index % 5]);
  }, [index]);

  const handleFormSubmit = () => {
    if (word === userInput) {
      setResult("You won!");
    } else {
      setResult("You lost!");
    }
  }

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleRestartClick = () => {
    setIndex(index + 1);
    setUserInput("");
    setResult("");
    setFlashWord(true);
  }
  useEffect(() => {

    setTimeout(() => {
      setFlashWord(false);
    }, 500);
  }, [index])

  return (
    <div class="mini-game-container">
      <h2 class="mini-game-title">Mini Game</h2>

      {result ? (
        <>
          <p class="mini-game-result">{result}</p>
          <button class="mini-game-restart-button" onClick={handleRestartClick}>Restart</button>
        </>
      ) : (
        flashWord ? (<p class="mini-game-word">{word}</p>) :
          (<form class="mini-game-form" onSubmit={handleFormSubmit}>
            <input class="mini-game-input" type="text" value={userInput} onChange={handleInputChange} />
            <button class="mini-game-button" type="submit">Check Answer</button>
          </form>)
      )}
    </div>
  );
}

export default App;

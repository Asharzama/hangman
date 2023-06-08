import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanWord from "./components/HangmanWord";
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import "../styles.css";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetter, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  const addGuessedLetter = useCallback(
    (key: string) => {
      if (guessedLetter.includes(key) || isLoser || isWinner) {
        return;
      }
      setGuessedLetters((currLetter) => [...currLetter, key]);
    },
    [guessedLetter, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;

      if (!key.match(/^[a-z]$/)) return;

      event.preventDefault();

      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);

  const Restart = () => {
    setGuessedLetters([]);
    setWordToGuess(getWord());
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "25px", textAlign: "center" }}>
        <div
          style={{
            visibility: `${isLoser || isWinner ? "visible" : "hidden"}`,
          }}
        >
          {isWinner ? "Winner !" : isLoser ? "Nice Try :(" : ""}
          <button onClick={Restart} className="try-btn">
            Try Again
          </button>
        </div>
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      <HangmanWord
        guessedLetters={guessedLetter}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />

      <div
        style={{
          alignSelf: "stretch",
        }}
      >
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetter.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;

import "../../styles.css"

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};

const Keyboard = ({
  activeLetter,
  inactiveLetters,
  disabled = false,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(55px, 1fr))",
        gap: "0.5rem",
      }}
    >
      {keys.map((key) => {
        const isActive = activeLetter.includes(key);

        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            className={`btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;

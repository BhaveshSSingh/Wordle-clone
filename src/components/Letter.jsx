import { useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";

const Letter = ({ letterPos, attemptVal }) => {
  const {
    board,
    correctWord,
    currAttempt,
    disabledLetters,
    setDisabledLetters,
  } = useContext(BoardContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "bg-green-600" : almost ? "bg-yellow-600" : "bg-gray-500");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters([...disabledLetters, letter]);
    }
  }, [currAttempt.attempt]);

  return (
    <div
      className={`p-4 border border-gray-600 m-1 h-16 w-12
      text-center text-xl font-bold uppercase
 rounded-[4px] ${letterState}

  `}
      // id={letterState}
    >
      {letter}
    </div>
  );
};

export default Letter;

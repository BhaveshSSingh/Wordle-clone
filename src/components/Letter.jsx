import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

const Letter = ({ letterPos, attemptVal }) => {
  const { board } = useContext(BoardContext);
  console.log({ board });

  const letter = board[attemptVal][letterPos];
  return (
    <div
      className="p-4 border border-gray-600 m-1 h-16 w-12
      text-center text-xl font-bold uppercase
 rounded-[4px]"
    >
      {letter}
    </div>
  );
};

export default Letter;

import React, { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

const Key = ({ keyVal }) => {
  const { onEnter, onDelete, onSelectLetter } = useContext(BoardContext);

  const selectLetter = () => {
    if (keyVal === "👍") {
      onEnter();
    } else if (keyVal === "⌫") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <button
      className="w-8  h-10 m-1 rounded-sm grid place-items-center text-white	bg-gray-600 cursor-pointer"
      onClick={selectLetter}
    >
      {keyVal}
    </button>
  );
};

export default Key;

import { useCallback, useContext, useEffect } from "react";
import { BoardContext } from "../context/BoardContext";
import Key from "./Key";

const KeyBoard = () => {
  const { onEnter, onDelete, onSelectLetter } = useContext(BoardContext);

  const keyLine1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyLine2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyLine3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keyLine1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keyLine2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keyLine3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className=" pb-5" onKeyDown={handleKeyboard}>
      <div className="flex  flew-row justify-center  m-2 ">
        {keyLine1.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="flex  flew-row justify-center m-2">
        {keyLine2.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="flex flew-row justify-center m-2">
        <Key keyVal={"👍"} bigKey />
        {keyLine3.map((key) => {
          return <Key keyVal={key} />;
        })}
        <Key keyVal={"⌫"} bigKey />
      </div>
    </div>
  );
};

export default KeyBoard;

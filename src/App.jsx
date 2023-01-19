import KeyBoard from "./components/KeyBoard";
import Nav from "./components/Nav";
import WordGuesses from "./components/WordBoard";

function App() {
  return (
    <>
      <div
        className="dark:bg-black dark:text-white h-full
        text-center bg-gray-200 text-black"
      >
        <Nav />
        <div className="flex  justify-center">
          <WordGuesses />
        </div>
        <KeyBoard />
      </div>
    </>
  );
}

export default App;

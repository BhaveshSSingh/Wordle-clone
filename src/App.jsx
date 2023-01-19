import KeyBoard from "./components/KeyBoard";
import Nav from "./components/Nav";
import WordGuesses from "./components/WordGuesses";

function App() {
  return (
    <>
      <div
        className="dark:bg-black dark:text-white h-screen
      text-center
      "
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

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BoardProvider from "./context/BoardContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BoardProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BoardProvider>
  </React.StrictMode>
);

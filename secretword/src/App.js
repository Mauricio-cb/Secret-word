//Css
import "./App.css";

//React

import { useState, useCallback, useEffect } from "react";

//Data

//Componentes
import { StartScreen } from "./components/StartScreen";
import GameOver from "./components/GameOver";
import Game from "./components/Game";

const stage = [
  {
    id: 1,
    name: "start",
  },
  {
    id: 2,
    name: "game",
  },
  {
    id: 3,
    name: "end",
  },
];

function App() {
  const [gameStage, setGameStage] = useState([0].name);
  const [words] = useState([1, 2, 3]);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <GameOver />}
    </div>
  );
}

export default App;

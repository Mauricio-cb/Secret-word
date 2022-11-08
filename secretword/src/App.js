//Css
import "./App.css";

//React

import { useState, useCallback, useEffect } from "react";

//Data

//Componentes
import { StartScreen } from "./components/StartScreen";
import GameOver from "./components/GameOver";
import Game from "./components/Game";

const stages = [
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
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState([1, 2, 3]);

  //Começar o jogo
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  //Processar o input das letras
  const verificarLetra = () => {
    setGameStage(stages[2].name);
  };

  const reiniciarJogo = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verificarLetra={verificarLetra} />}
      {gameStage === "end" && <GameOver reiniciarJogo={reiniciarJogo} />}
    </div>
  );
}

export default App;

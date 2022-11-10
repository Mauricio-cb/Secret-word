//Css
import "./App.css";

//React

import { useState, useCallback, useEffect } from "react";

//Data
import { wordsList } from "./data/data";

//Componentes
import { StartScreen } from "./components/StartScreen";
import GameOver from "./components/GameOver";
import Game from "./components/Game";

//Estagios
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
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesse] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    //Pegar uma categoria aleatoria
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    //Pegar uma palavra aleatoria
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  //Começar o jogo
  const startGame = () => {
    //pega palavra e categoria
    const { word, category } = pickWordAndCategory();

    //Criar um array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    //settar estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    console.log(letters + "aqui");
    setGameStage(stages[1].name);
  };

  //Processar o input das letras
  const verificarLetra = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //Verificando se a letra ja foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    if (letter.includes(normalizedLetter)) {
      setGuessedLetters((actualGuesssedLetters) => [
        ...actualGuesssedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
    }
  };
  //reiniciar jogo
  const reiniciarJogo = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verificarLetra={verificarLetra}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver reiniciarJogo={reiniciarJogo} />}
    </div>
  );
}

export default App;

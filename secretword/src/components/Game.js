import "./Game.css";

const Game = ({ verificarLetra }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verificarLetra}>finalizar</button>
    </div>
  );
};

export default Game;

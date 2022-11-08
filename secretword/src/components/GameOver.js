import "./GameOver.css";

const GameOver = ({ reiniciarJogo }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={reiniciarJogo}>Reiniciar</button>
    </div>
  );
};

export default GameOver;

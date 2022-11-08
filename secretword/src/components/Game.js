import "./Game.css";

const Game = ({ verificarLetra }) => {
  return (
    <div>
      <div className="game">
        <p className="points"></p>
      </div>
      <h1>advinhe a palavra</h1>
      <h3 className="tip">
        dica sobre a palavra <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b</span>
      </div>
    </div>
  );
};

export default Game;

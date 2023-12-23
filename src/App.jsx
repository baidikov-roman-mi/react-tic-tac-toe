import Player from "./componnets/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName='Player 1' symbol='X' />
          <Player initialName='Player 2' symbol='0' />
        </ol>
        Gameboard will be here soon . . .
      </div>
    </main>
  );
}

export default App;

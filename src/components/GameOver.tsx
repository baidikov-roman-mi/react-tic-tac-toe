interface Props {
  gameWinner: string | null
  onRestart: () => void
}

export default function GameOver({ gameWinner, onRestart }: Props) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {gameWinner && <p>{gameWinner} won!</p>}
      {!gameWinner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  )
}

export default function GameOver({ gameWinner, onRestart }) {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{gameWinner && <p>{gameWinner} won!</p>}
            {!gameWinner && <p>It&apos;s a draw!</p>}
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>
		</div>
	);
}

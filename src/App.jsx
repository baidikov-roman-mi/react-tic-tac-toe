import { useState } from "react";

import Player from "./componnets/Player.jsx";
import GameBoard from "./componnets/GameBoard.jsx";
import Log from "./componnets/Log.jsx";
import GameOver from "./componnets/GameOver.jsx";

import { WinningCombinations } from "./assets/winning-combinations.js";

let initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns) {
	let currentPlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	}

	return currentPlayer;
}

function App() {
	const [players, setPlayers] = useState({
		X: "Player 1",
		O: "Player 2",
	});
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);

	let gameBoard = [...initialGameBoard.map((array) => [...array])];
	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, column } = square;

		gameBoard[row][column] = player;
	}

	let winner = null;
	for (const combination of WinningCombinations) {
		const firstSquare = gameBoard[combination[0].row][combination[0].column];
		const secondSquare = gameBoard[combination[1].row][combination[1].column];
		const thirdSquare = gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquare &&
			firstSquare === secondSquare &&
			firstSquare === thirdSquare
		) {
			winner = players[firstSquare];
		}
	}

	const draw = gameTurns.length === 9 && !winner;

	function handleSelectSquare(rowIndex, columnIndex) {
		setGameTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);

			const updatedTurns = [
				{
					square: { row: rowIndex, column: columnIndex },
					player: currentPlayer,
				},
				...prevTurns,
			];

			return updatedTurns;
		});
	}

	function handleReset() {
		setGameTurns([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName,
			};
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="Player 1"
						symbol="X"
						isActive={activePlayer === "X"}
						onChangeName={handlePlayerNameChange}
					/>
					<Player
						initialName="Player 2"
						symbol="O"
						isActive={activePlayer === "O"}
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{(winner || draw) && (
					<GameOver gameWinner={winner} onRestart={handleReset} />
				)}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;

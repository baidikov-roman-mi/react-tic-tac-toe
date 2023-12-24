// import { useState } from "react";
let initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

	let gameBoard = initialGameBoard;
	for (const turn of turns) {
		const { square, player } = turn;
		const {row, column} = square;

		gameBoard[row][column] = player;
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((symbol, columnIndex) => (
							<li key={columnIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, columnIndex)} disabled={symbol !== null}>
									{symbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}

import { useState } from "react";
let initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleSelectSquare(rowIndex, columnIndex) {
		setGameBoard((previousGameBoard) => {
			const updatedGameBoard = [
				...previousGameBoard.map((innerArray) => [...innerArray]),
			];
			updatedGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
			return updatedGameBoard;
		});
	
        onSelectSquare();
    }

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((symbol, columnIndex) => (
							<li key={columnIndex}>
								<button
									onClick={() => handleSelectSquare(rowIndex, columnIndex)}>
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

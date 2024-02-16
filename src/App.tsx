import { useState } from "react"

import Player from "./components/Player.tsx"
import GameBoard from "./components/GameBoard.tsx"
import Log from "./components/Log.tsx"
import GameOver from "./components/GameOver.tsx"

import WINNING_COMBINATIONS from "./assets/winning-combinations.ts"

type PlayerType = {
  [key: string]: string
}

type Turn = {
  square: { row: number; column: number }
  player: string
}
type GameBoard = (string | null)[][]

const PLAYERS: PlayerType = {
  X: "Player 1",
  O: "Player 2"
}

let INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns: Turn[]) {
  let currentPlayer = "X"
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O"
  }

  return currentPlayer
}

function deriveWinner(gameBoard: GameBoard, players: PlayerType) {
  let winner = null

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column]
    const secondSquare = gameBoard[combination[1].row][combination[1].column]
    const thirdSquare = gameBoard[combination[2].row][combination[2].column]

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = players[firstSquare]
    }
  }

  return winner
}


function deriveGameBoard(gameTurns: Turn[]): GameBoard {
  let gameBoard: GameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, column } = square

    gameBoard[row][column] = player
  }
  return gameBoard
}

function App() {
  const [players, setPlayers] = useState<PlayerType>(PLAYERS)
  const [gameTurns, setGameTurns] = useState<Turn[]>([])

  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const draw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex: number, columnIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        {
          square: { row: rowIndex, column: columnIndex },
          player: currentPlayer
        },
        ...prevTurns
      ]

      return updatedTurns
    })
  }

  function handleReset() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol: string, newName: string) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && <GameOver gameWinner={winner} onRestart={handleReset} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App

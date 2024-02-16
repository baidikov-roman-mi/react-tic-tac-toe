type Turn = {
  square: { row: number; column: number }
  player: string
}

interface Props {
  turns: Turn[]
}

export default function Log({ turns }: Props) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.column}`}>
          {turn.player} selected {turn.square.row}, {turn.square.column}
        </li>
      ))}
    </ol>
  )
}

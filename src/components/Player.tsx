import { useState } from "react"

interface Props {
  initialName: string
  symbol: string
  isActive: boolean
  onChangeName: (symbol: string, newName: string) => void
}
export default function Player({ initialName, symbol, isActive, onChangeName }: Props) {
  const [name, setName] = useState(initialName)
  const [edit, isEditing] = useState(false)

  function handleEditUser() {
    isEditing((edit) => !edit)
    if (edit) {
      onChangeName(symbol, name)
    }
  }

  function handleNameChange(event: any) {
    setName(event.target.value)
  }
  let playerName = <span className="player-name">{name}</span>

  if (edit) {
    playerName = <input type="text" required value={name} onChange={handleNameChange} />
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditUser}>{edit ? "Save" : "Edit"}</button>
    </li>
  )
}

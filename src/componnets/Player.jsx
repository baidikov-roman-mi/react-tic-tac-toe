import { useState } from "react";
export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [name, setName] = useState(initialName);
	const [edit, isEditing] = useState(false);

	function handleEditUser() {
		isEditing((edit) => !edit);
		if (isEditing) {
			onChangeName(symbol, name);			
		}
	}
	function handleNameChange(event) {
		setName(event.target.value);
	}
	let playerName = <span className="player-name">{name}</span>;
	let btnCaption = "Edit";
	if (edit) {
		playerName = (
			<input type="text" required value={name} onChange={handleNameChange} />
		);
		btnCaption = "Save";
	}
	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{playerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditUser}>{edit ? "Save" : "Edit"}</button>
		</li>
	);
}

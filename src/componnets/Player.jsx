import { useState } from "react";
export default function Player({ initialName, symbol }) {
	const [name, setName] = useState(initialName);
	const [edit, isEditing] = useState(false);

	function handleEditUser() {
		isEditing((edit) => !edit);
	}
	function handleNameChange(event) {
		setName(event.target.value);
	}
	let playerName = <span className="player-name">{name}</span>;
	let btnCaption = "Edit";
	if (edit) {
		playerName = <input type="text" required
		value={name} onChange={handleNameChange}/>;
		btnCaption = "Save";
	}
	return (
		<li>
			<span className="player">
				{playerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditUser}>{edit ? "Save" : "Edit"}</button>
		</li>
	);
}

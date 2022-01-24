import React from 'react'

export function Form({ handleSubmit, newName, setNewName, number, setNumber }) {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				name:{' '}
				<input
					value={newName}
					onChange={e => setNewName(e.target.value)}
				/>
				<input
					value={number}
					onChange={e => setNumber(e.target.value)}
				/>
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	)
}

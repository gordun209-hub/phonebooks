import * as R from 'ramda'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import noteServices from './services/phones'
import Persons from './components/Persons'
import { Form } from './components/Form'
const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('Arto Hellas')
	const [number, setNumber] = useState('0534-1615-2231')
	const [filterName, setFilterName] = useState('')

	//adds new Person to list
	const handleSubmit = e => {
		e.preventDefault()
		const newPerson = {
			number: number,
			name: newName
		}
		hasAlreadyHave
			? alert('zatern war?')
			: noteServices.create(newPerson).then(res => {
					setPersons(persons.concat(res))
					setNewName('')
					setNumber('')
			  })
	}

	//fetches data from db
	useEffect(() => {
		noteServices.getAll().then(res => {
			setPersons(res)
		})
	}, [])
	const filteredNames = R.filter(
		person => person.name.includes(filterName),
		persons
	)
	//checks if already in the list
	const hasAlreadyHave =
		R.filter(
			person => person.name.toLowerCase() === newName.toLowerCase(),
			persons
		).length > 0

	//Deletes person
	const deletePerson = id => {
		axios
			.delete(`http://localhost:3001/phones/${id}`)
			.then(setPersons(persons.filter(person => person.id !== id)))
	}

	return (
		<>
			<h2>Phonebook</h2>
			filter shown with:
			<input
				value={filterName}
				onChange={e => setFilterName(e.target.value)}
			/>
			<Form
				handleSubmit={handleSubmit}
				newName={newName}
				setNewName={setNewName}
				number={number}
				setNumber={setNumber}
			/>
			<Persons
				filteredNames={filteredNames}
				deletePerson={deletePerson}
			/>
		</>
	)
}

export default App

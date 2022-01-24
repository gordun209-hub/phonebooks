import {filter, map} from 'ramda'
import React from 'react'

function Persons({filteredNames, deletePerson}) {
    return (
        <>
            <h1>Numbers</h1>
            {map(
                person => (
                    <li key={person.id}>
                        <button onClick={() => deletePerson(person.id)}>
                            Delete
                        </button>
                        name:{person.name} number:{person.number}
                    </li>
                ),
                filteredNames
            )}
        </>
    )
}

export default Persons

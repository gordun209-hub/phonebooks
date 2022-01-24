const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.static('build'))
app.use(cors())
app.use(express.json())

let persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-43-234345'
    },
    {
        id: 4,
        name: 'Mary Poppendieck',
        number: '39-23-6423122'
    }
]

app.get('api/persons/info', (req, res) => {
    res.send(`<h1>Hello ${persons.length} number available</h1>`)
})
app.get('/', (req, res) => {
    res.send(`<h1>Hello world!!31</h1>`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})
app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const number = persons.find(person => person.id === Number(id))
    number ? res.json(number) : res.status(404).end()
})
const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
    return maxId + 1
}
app.post('/api/persons', (req, res) => {
    const body = req.body
    console.log(body)
    body.content && res.status(400).json({error: 'number missing'})
    const number = {
        number: body.number,
        name: body.name,
        id: generateId()
    }
    persons = persons.concat(number)
    res.json(number)
})
app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

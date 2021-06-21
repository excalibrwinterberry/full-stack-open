const { response } = require('express')
const express = require('express')
const app = express()

let persons = [
    {
        "name": "Ark Aryan",
        "number": "800-26-91411",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
]

app.get('/', (request, response) => {
    response.send('<h1>PhoneBook</h1>')
})

app.get('/api/persons', (request, response) =>{
    response.json(persons)
})

app.get('/api/info', (request, response) => {
    const length = persons.length
    response.send(`
    <p>Phonebook has info for ${length} people </p> 
    ${new Date()}
    `)
})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
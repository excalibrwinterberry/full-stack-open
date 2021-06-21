const { response, request } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

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

const idGenerator = () => {
    const lowerLimit = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return Math.floor(Math.random()* 1000)+(lowerLimit+1)
}

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

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

   if(person){
       response.json(person)
   }else{
        response.status(404).end()
   }
})

app.delete('/api/persons/:id', (request, response)=>{
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    console.log('deleted')
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name || !body.phone){
        return response.status(400).json({
            error: 'name and phone must be added'
        })
    }

    const present = persons.some(person => person.name === body.name)
    if(present){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    const person = {
        "name": body.name,
        "phone": body.phone,
        "id": idGenerator()
    }
    persons.concat(person)

    response.json(person)

})

const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
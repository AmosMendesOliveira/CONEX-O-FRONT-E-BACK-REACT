import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const users = [
    {
    newName: 'Amós Mendes',
    idade: '26'
},
]

app.get('/usuarios', function (request, response) {
    response.json(users)
})


app.post('/usuarios', function (request, response) {
    console.log(request.body)

    const newUser = request.body

    users.push(newUser)

    response.status(201).json(newUser)

})


app.listen(3001, () => console.log('Servidor Rodando🚀😊'))
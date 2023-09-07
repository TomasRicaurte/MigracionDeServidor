const express = require('express')
const app = express()
const host = 'localhost'

const tasks = [
    {
        "id":"123456",
        "isCompleted":false,
        "description":"Walk the dog",
    }
    
]

app.get('/tasks', (req, res)=> {
    res.json(tasks)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor express escuchando en el puerto ' + PORT)
})
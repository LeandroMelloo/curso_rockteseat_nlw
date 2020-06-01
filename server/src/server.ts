import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    console.log('Listagem Usuario')
    res.json(['Leandro', 'Luciana', 'Pedro Henrique', 'Beatriz', 'Rosa']) // JSON
})

app.listen(3333)
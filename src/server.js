const express = require('express');

// importando as rotas
const routes = require('./routes/routes')

const app = express()

// Habilitando a aplicação para receber dados via POST
app.use(express.urlencoded({extended: true}))

// Definindo as rotas
app.use('/api', routes);




const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`)
})
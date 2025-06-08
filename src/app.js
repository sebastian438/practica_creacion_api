const express = require('express')
const cors = require('cors')
const publicRoutes = require('./routes/publics.routes.js')

const { connection } = require('./utils/dbconnect.js')

require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

console.log(process.env.PORT)

//Conexión
connection().catch((error) => {
    console.log(error)
})

//MIDDLEWARES

// Carpeta púnlica

// Carpeta vistas

//cors
const whiteList = ['http://licalhost:5000', 'http://xxxx.front.render.com']
app.use(cors({
    origin: whiteList,
}))

//Rutas

app.use('/api/v1', publicRoutes)

app.listen(port, () => {
    console.log(`Server on ${port}`)
})
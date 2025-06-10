const express = require('express')
const cors = require('cors')
const {
    publicRoutes,
    adminRoutes,
    authenticationRoutes
} = require('./routes/index.js')


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

app.use(express.urlencoded());
app.use(express.json());

//Rutas

app.use('/api/v1', publicRoutes)
app.use('/api/v1/auth', authenticationRoutes)
app.use('/api/v1/admin', adminRoutes)



app.listen(port, () => {
    console.log(`Server on ${port}`)
})
// Dependencies imports
import mongoose from "mongoose"
import dotenv from 'dotenv'
import express from 'express'

// Routes imports
import userRoutes from './Routes.mjs'

// Setting environment variables
dotenv.config()

// Server preferences
const port = 3132

// Database preferences
const port_DB = 27017
const host_DB = "127.0.0.1"

const databaseName = process.env["DATABASENAME"]

const settings_DB = { useNewUrlParser: true, useUnifiedTopology: true }
const URI = `mongodb://${host_DB}:${port_DB}/${databaseName}`

// Server instance
const server = express()

// Database configurations
mongoose.set('strictQuery', false)


// Database connection
// Note: We should change the connection location, but ... whatever.
mongoose.connect(URI, settings_DB, (err) => {

    if (err) {
        console.log(err)
        return false
    }

    console.log("Conexión exitosa")
})

// Server settings
server.use(express.json())
server.use("/user",userRoutes)

// Server launch
server.listen(port,(err)=>{
    if(err){
        console.log(err)
    }

    console.log(`Servidor a la escucha en el puerto ${port}`)

})
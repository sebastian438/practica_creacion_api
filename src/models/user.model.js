// nombre -> string -> requerido

// email -> string -> requerido -> unico
// pass -> string -> requerido
//roll ->deffault poner que tenga diferentes roles

const { Schema, model } = require('mongoose');

const User = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
})

module.exports = model('users', User);
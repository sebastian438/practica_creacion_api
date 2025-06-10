const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

//LOGIN

const login = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Entra en login'
    })
    //TODO: recoger el body

    //TODO: comprobar si el usuario existe

    //si no: return 403

    //si existe
    //comprobar si la contaseña coincide

    //si no return 403

    //si coincide crear token, retorn 202
    //bcrypt.compareSync(password, usuario.password; // true)
}

//REGISTRO
const registro = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Entra en registro'
    })
    // TODO: traer datos del body (req.body)
    // comprobar si el usuario ya existe --> findOne()
    // si existe --> retornamos estado 403
    // si no existe --> encriptar contraseña, añadir a la bbdd (con save), crear token, retornar 200
    // ecriptar contraseña
    // añadir a la bbdd
    // crear token
}

//RENEWTOKEN
const renewToken = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Entra en renewToken'
    })

    //comprobar que hay token
    //si no retorno 403

    //si crear tokem

}

module.exports = { login, registro, renewToken };
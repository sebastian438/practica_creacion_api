const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const createToken = require('../utils/createToken.js')

//LOGIN

const login = async (req, res) => {
    //TODO: recoger el body
    const { nombre, email, password } = req.body;

    try {
        //TODO: comprobar si el usuario existe
        const usuario = await User.findOne({ email });
        //si no: return 403
        if (!usuario) {
            return res.status(403).json({
                ok: false,
                mensaje: "Usuario o contraseña incorrectos"
            });
        }

        //si existe
        //comprobar si la contaseña coincide
        const passwordCorrecta = await bcrypt.compare(password, usuario.password);

        //si no return 403
        if (!passwordCorrecta) {
            return res.status(403).json({
                ok: false,
                mensaje: "Usuario o contraseña incorrectos"
            });
        }

        //si coincide crear token, retorn 202
        const token = createToken(usuario._id, usuario.role);
        //bcrypt.compareSync(password, usuario.password; // true)
        return res.status(200).json({
            ok: true,
            mensaje: "Login exitoso",
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                email: usuario.email,
                role: usuario.role
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            mensaje: "Error interno. Contacte al administrador"
        });
    }


}

//REGISTRO
const registro = async (req, res) => {
    const { nombre, email, password } = req.body
    try {
        const usuarioExist = await User.findOne({ email });
        if (usuarioExist) {
            return res.status(403).json({
                mensaje: "El usuario ya existe"
            });
        }
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        const nuevoUsuario = new User({
            email,
            nombre,
            password: hashedPassword
        });
        const savedUser = await nuevoUsuario.save()
        const token = createToken(savedUser._id, savedUser.role)
        return res.status(200).json({
            mensaje: "Usuario creado correctamente",
            token
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Póngase en contacto con el administrador'
        })
    }
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
const jwt = require('jsonwebtoken');
require('dotenv').config()

const validarJWT = (req, res, next) => {
    //Si token existe
    const tokem = req.header('Authorization').split(' ')[1];
    //El clinete envia el tokem al servidor
    if (!token) {
        return res.status(401).json({
            ok: false,
            mensaje: "No hay token en la peticion"
        });
    }


    try {
        //COMPROBAR QUE EL TOKEN ES VALIDO
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        //Como almacenar en req los datos del playload
        req.uid = payload.id;
        req.role = payload.role;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            mensaje: "Token no válido"
        });
    }

};

module.exports = validarJWT;
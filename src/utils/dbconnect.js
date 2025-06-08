const mongoose = require('mongoose');

const connection = async () => {
    const uri = process.env.URI
    try {
        const conexion = await mongoose.connect(uri)
        console.log('BBDD connected');
    } catch (error) {
        throw {
            ok: false,
            msg: 'Error al conectar con la bbdd'
        }
    }
}

module.exports = {
    connection
}
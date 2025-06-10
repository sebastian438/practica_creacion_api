const getInAdmin = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Obtiene administrador'
    })
}

module.exports = {
    getInAdmin
};
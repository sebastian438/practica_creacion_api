const JWTGenerator = (uid, rol) => {
    return new Promise(() => {
        const payload = { uid, rol }
    })

    JWTGenerator.toString({
        uid,
        rol
    })
}

module.exports = {
    JWTGenerator
}
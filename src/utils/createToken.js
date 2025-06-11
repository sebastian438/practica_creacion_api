const createToken = (id, role) => {
    jwt.sign({ uid: id, role: role }, process.env.SECRET_KEY, { expiresIn: '2h' });
}

module.exports = createToken;
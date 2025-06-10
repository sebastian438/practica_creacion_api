const { Router } = require('express')
const { check } = require('express-validator');
const { validateInput } = require('../middlewares/validateInput.js')

const router = Router()

const { login, registro, renewToken } = require('../controllers/authentication.controllers.js')

//LOGIN
//GET: http://localhost:3000/api/v1/auth
router.post('/', login);

//TODO: AÑADIR MIDDLEWARES


//LOGOUT


// REGISTRO
router.post('/registro', registro);


//RENEWTOKEN
//GET: 

router.get('/renew', /* [validarToken, verificarRoll], */ renewToken)

module.exports = router;
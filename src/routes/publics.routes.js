const { Router } = require('express')
const { check } = require('express-validator');
const { validateInput } = require('../middlewares/validateInput.js')

const router = Router()

const {
    getAllProducts,
    getProductsByCategory,
    getProductById,
    createProducts,
    updateProductById,
    deleteProductById
} = require('../controllers/publics.controllers.js')


// router.get('/servicios', (req, res) => {
//     res.send('<h1>Hola Servicios</h1>')
// });

//GET ALL PRODUCTS
//GET: http://localhost:3000/api/v1/productos
router.get('/productos', getAllProducts);

//GET PRODUCT BY CATEGORY
router.get('/productos/:categoria', getProductsByCategory);

//GET PRODUCT BY ID
router.get('/producto/:id', getProductById);

//CREATE PRODUCT
router.post('/productos', [
    check('nombre', 'introduce nombre').notEmpty().isString(),
    check('descripcion', 'introduce descripcion').notEmpty().isString(),
    check('precio', 'introduce un precio').notEmpty().isNumeric(),
    check('categoria', 'introduce una categoria').notEmpty().isString(),
    validateInput
], createProducts);

//UPDATE PRODUCT BY ID
router.put('/productos/:id', updateProductById);

//DELETE PRODUCT BY ID
router.delete('/productos/:id', deleteProductById);

module.exports = router

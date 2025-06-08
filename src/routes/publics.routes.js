const { Router } = require('express')

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
router.get('/productos', getAllProducts);

//GET PRODUCT BY CATEGORY
router.get('/productos/:categoria', getProductsByCategory);

//GET PRODUCT BY ID
router.get('/producto/:id', getProductById);

//CREATE PRODUCT
router.post('/productos', createProducts);

//UPDATE PRODUCT BY ID
router.put('/productos/:id', updateProductById);

//DELETE PRODUCT BY ID
router.delete('/productos/:id', deleteProductById);

module.exports = router

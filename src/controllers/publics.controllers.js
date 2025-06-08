const Product = require('../models/product.model')

//GET ALL PRODUCTS
const getAllProducts = (req, res) => {
    res.json({
        msg: 'Getting all porducts'
    })
}

//GET PRODUCT BY CATEGORY
const getProductsByCategory = (req, res) => {
    res.json({
        msg: 'Getting porducts by category'
    })
}

//GET PRODUCT BY ID
const getProductById = (req, res) => {
    res.status(200).json({
        msg: 'Getting porducts by id'
    })
}

//CREATE PRODUCT
const createProducts = async (req, res) => {
    console.log(req.body)

    const nuevoProducto = {

    }

    const producto = new Product(nuevoProducto)

    const SavedProduct = await producto.save()

    return res.status(201).json({
        ok: true,
        SavedProduct
    })

    console.log(producto);

    res.status(201).json({
        msg: 'Creating porduct'
    })
}

//UPDATE PRODUCT BY ID
const updateProductById = (req, res) => {
    res.json({
        msg: 'Updating porducts by id'
    })
}

//DELETE PRODUCT BY ID
const deleteProductById = (req, res) => {
    res.json({
        msg: 'Deleting porducts by id'
    })
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
    getProductById,
    createProducts,
    updateProductById,
    deleteProductById
}
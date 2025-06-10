const Product = require('../models/product.model')

//GET ALL PRODUCTS
const getAllProducts = async (req, res) => {

    try {
        const productos = await Product.find()
        console.log(productos)

        return res.status(200).json({
            ok: true,
            productos
        })

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Error al traer los productos'
        })
    }
}

//GET PRODUCT BY CATEGORY
const getProductsByCategory = (req, res) => {
    res.json({
        msg: 'Getting porducts by category'
    })
}

//GET PRODUCT BY ID
const getProductById = async (req, res) => {

    const { id } = req.params;
    const producto = await Product.findOne({ _id: id })
    console.log(producto)

    res.status(200).json({
        msg: 'Getting porducts by id'
    })
}

//CREATE PRODUCT
const createProducts = async (req, res) => {
    const body = req.body

    //TODO: comprobar que el producto existe, si existe retorna un 404

    const producto = new Product(body)
    try {
        const SavedProduct = await producto.save()

        return res.status(201).json({
            ok: true,
            SavedProduct
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Póngase en contacto con el administrador'
        })
    }
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
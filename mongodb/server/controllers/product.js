const Product = require('../models/product');

const createProduct = async (req, res) => {
    try {

        let product = new Product(req.fields);
        await product.save();
        res.send("Create product successfully!")
    } catch (err) {
        res.status(500).send(err);
    }
}

const getAllProducts = async (req, res) => {
    try {

        let query = {};
        if (req.query.name) {
            query = { ...query, name: req.query.name };
        }
        if (req.query.min) {
            query = { ...query, price: { ...query.price, $gt: req.query.min } };
        }
        if (req.query.max) {
            query = { ...query, price: { ...query.price, $lt: req.query.max } };
        }
        let products = await Product.find(query);
        res.send(products)
    } catch (err) {
        res.status(500).send(err);
    }
}

const getProductById = async (req, res) => {
    try {

        const id = req.params.productId;
        let product = await Product.findById(id);
        res.send(product)
    } catch (err) {
        res.status(500).send(err);
    }
}

const updateProductById = async (req, res) => {
    try {

        const id = req.params.productId;
        let updatedProduct = req.fields;
        let result = await Product.updateOne({ _id: id }, { $set: updatedProduct });
        res.send(result)
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteProductById = async (req, res) => {
    try {

        const id = req.params.productId;
        await Product.deleteOne({ _id: id });
        res.send(`Delete productId=${id} successfully! `)
    } catch (err) {
        res.status(500).send(err);
    }
}


module.exports = { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById };
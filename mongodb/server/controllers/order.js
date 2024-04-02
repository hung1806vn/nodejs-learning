const Order = require('../models/order');
const OrderDetail = require('../models/order-detail');
const Product = require('../models/product');

const createOrder = async (req, res) => {
    try {
        const payload = Object.values(req.fields)
        let orderDetails = await Promise.all(payload.map(async (od) => {
            const product = await Product.findById(od.productId);
            const orderDetail = new OrderDetail({
                quantity: od.quantity,
                product: product
            })
            await orderDetail.save();
            return orderDetail;
        }));
        let order = new Order({
            orderDetails: orderDetails
        });
        await order.save();
        res.send("Create order successfully!")
    } catch (err) {
        res.status(500).send(err);
    }
}

const getAllOrders = async (req, res) => {
    try {

        let orders = await Order.find().populate({
            path: 'orderDetails',
            model: OrderDetail,
            populate: {
                path: 'product',
                model: Product
            }
        }).exec();
        res.send(orders)
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = { createOrder, getAllOrders };
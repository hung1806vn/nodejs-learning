const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderDetailSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('orderDetail', orderDetailSchema);
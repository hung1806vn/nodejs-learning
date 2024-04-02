const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderDetails: [{
        type: Schema.Types.ObjectId,
        ref: 'orederDetail'
    }],
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('order', orderSchema);
const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        },
    ],
    total: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' },
    payment: { type: Schema.Types.ObjectId, ref: 'Payment' },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Order', orderSchema);

const paymentSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    method: { type: String, enum: ['Card', 'PayPal', 'COD'], required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    transaction_id: { type: String },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Payment', paymentSchema);
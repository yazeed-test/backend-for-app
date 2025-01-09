const addressSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    address_line1: { type: String, required: true },
    address_line2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Address', addressSchema);

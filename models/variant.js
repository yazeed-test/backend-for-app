const { Schema, model } = require('mongoose');

const variantSchema = new Schema({
    name: { type: String, required: true, trim: true },
    type: { type: Schema.Types.ObjectId, ref: 'VariantType', required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
});

module.exports = model('Variant', variantSchema);

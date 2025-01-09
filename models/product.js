const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    subcategory: { type: Schema.Types.ObjectId, ref: 'Subcategory', required: true },
    variants: [{ type: Schema.Types.ObjectId, ref: 'Variant' }],
    stock: { type: Number, required: true },
    images: [{ type: String }],
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Product', productSchema);

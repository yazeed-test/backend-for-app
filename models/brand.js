const { Schema, model } = require('mongoose');

const brandSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    logo: { type: String, required: true },
    description: { type: String, trim: true },
    created_at: { type: Date, default: Date.now },
    subcategoryId: [{ type: Schema.Types.ObjectId, ref: 'Subcategory', required: true }],
});

module.exports = model('Brand', brandSchema);

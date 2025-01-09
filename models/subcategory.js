const { Schema, model } = require('mongoose');

const subcategorySchema = new Schema({
    name: { type: String, required: true, trim: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Subcategory', subcategorySchema);

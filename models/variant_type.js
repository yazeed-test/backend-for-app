const { Schema, model } = require('mongoose');

const variantTypeSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('VariantType', variantTypeSchema);

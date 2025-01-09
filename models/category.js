const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String, trim: true },
    image: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Category', categorySchema);

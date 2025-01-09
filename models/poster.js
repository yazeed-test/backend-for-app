const { Schema, model } = require('mongoose');

const posterSchema = new Schema({
    image: { type: String, required: true },
    link: { type: String, trim: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Poster', posterSchema);

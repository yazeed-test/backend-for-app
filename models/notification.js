const { Schema, model } = require('mongoose');

const notificationSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Notification', notificationSchema);

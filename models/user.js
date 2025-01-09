const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { model } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

const User = model('User', userSchema);

module.exports = User;
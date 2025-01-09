const { Schema, model } = require('mongoose');

const couponCodeSchema = new Schema({
    code: { type: String, required: true, unique: true, trim: true },
    discount: { type: Number, required: true },
    expiry_date: { type: Date, required: true },
    usage_limit: { type: Number, default: 1 },
    status : { type: String, default: 'active', enum: ['active', 'inactive'] },
    created_at: { type: Date, default: Date.now },
    
});

module.exports = model('CouponCode', couponCodeSchema);

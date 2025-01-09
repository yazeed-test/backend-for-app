const wishlistSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    created_at: { type: Date, default: Date.now },
});

module.exports = model('Wishlist', wishlistSchema);

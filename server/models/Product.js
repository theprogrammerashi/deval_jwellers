const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    type: { type: String, required: true }, // e.g., Gold, Silver, Diamond
    image: { type: String, required: true }, // URL or path
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);

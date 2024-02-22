const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
});

module.exports = mongoose.model('Cart', cartSchema);
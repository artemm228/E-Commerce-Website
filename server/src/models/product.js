const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  releaseDate: {
    type: Date,
    default: null,
  },
  productImage: {
    type: String,
    required: true,
  },
  colors: [
    {
      colorName: {
        type: String,
      },
      caruselImages: [String],
    },
  ],
  characteristics: [
    {
      group: {
        type: String,
        required: true,
      },
      items: [
        {
          title: {
            type: String,
            required: true,
          },
          values: [String],
        },
      ],
    },
  ],
});

productSchema.index({ productName: 'text' });

module.exports = mongoose.model('Product', productSchema);

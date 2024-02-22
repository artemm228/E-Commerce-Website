const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Роут для поиска товаров
router.get('/search', async (req, res) => {
  const query = req.query.query;
  const regex = new RegExp(query, 'i');

  try {
    const results = await Product.find({ productName: { $regex: regex } });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Обработка GET-запроса для получения информации о товаре по его id
router.get('/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Обработка GET-запроса для получения всех товаров
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;

const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// Добавление товара в корзину
router.post('/add', async (req, res) => {
  try {
    const { itemId, productName, color, price, imageUrl } = req.body;
    if (!itemId || !productName || !price || !imageUrl) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    let cartItem = await Cart.findOne({ itemId, productName, color, price, imageUrl });
    if (cartItem) {
      cartItem.quantity++;
      await cartItem.save();
    } else {
      cartItem = new Cart({ itemId, productName, color, price, imageUrl });
      await cartItem.save();
    }

    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Удаление товара из корзины
router.post('/remove', async (req, res) => {
  try {
    const { itemId, color } = req.body;
    if (!itemId ) {
      return res.status(400).json({ error: 'Invalid data' });
    }
    const cartItem = await Cart.findOne({ itemId, color });
    if (cartItem) {
      const newQuantity = cartItem.quantity - 1;
      if (newQuantity > 0) {
        cartItem.quantity = newQuantity;
        await cartItem.save();
      } else {
        await cartItem.remove();
      }
      res.status(200).json({ message: 'Product removed from cart successfully' });
    } else {
      return res.status(404).json({ error: 'Item not found in cart' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Полное удаление товара из корзины
router.post('/remove-item', async (req, res) => {
  try {
    const { itemId, color } = req.body;
    if (!itemId) {
      return res.status(400).json({ error: 'Неверные данные' });
    }

    await Cart.deleteOne({ itemId, color });

    res.status(200).json({ message: 'Товар полностью удален из корзины и базы данных' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
});

router.post('/update', async (req, res) => {
  try {
    const { itemId, color, newQuantity } = req.body;
    if (!itemId  || newQuantity === undefined || newQuantity < 0) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    const cartItem = await Cart.findOne({ itemId, color });
    if (cartItem) {
      cartItem.quantity = newQuantity;
      await cartItem.save();
      const updatedCartItem = await Cart.findOne({ itemId, color });
      return res.status(200).json({ message: 'Cart item count updated successfully', updatedItem: updatedCartItem });
    } else {
      return res.status(404).json({ error: 'Cart item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/view', async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
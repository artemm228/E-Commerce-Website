const mongoose = require('mongoose');
const Product = require('./models/product');
const { PRODUCTS } = require('./data/data');
const connectDB = require("./connection/connect");

connectDB();

const saveProductsToDatabase = async () => {
  try {
    // Удалить все существующие товары в базе данных
    await Product.deleteMany({});

    // Создать объекты Product и сохранить их в базу данных
    await Promise.all(
      PRODUCTS.map(async (productData) => {
        const product = new Product(productData);
        await product.save();
      })
    );

    console.log('Товары успешно сохранены в базе данных');
  } catch (error) {
    console.error('Ошибка при сохранении товаров в базе данных:', error);
  } finally {
    mongoose.disconnect();
  }
};

saveProductsToDatabase();
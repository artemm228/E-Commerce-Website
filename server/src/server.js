const express = require("express");
const cors = require('cors');

const bodyParser = require('body-parser');

const cartRouter = require('./routes/cartRouter');
const productRouter =  require('./routes/productRouter');

const connectDB = require("./connection/connect");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/cart', cartRouter);
app.use('/products', productRouter);

// Подключение к базе данных
connectDB()
  .then(() => {
    // Запуск сервера
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });
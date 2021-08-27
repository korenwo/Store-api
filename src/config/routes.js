const express = require('express');
const ProductController = require('../controllers/product.controller');
const OrderController = require('../controllers/order.controller');


const routes = express.Router();

routes.get('/getAll', ProductController.getAll);
routes.put('/:id', ProductController.edit);
routes.get('/:id', ProductController.get);
routes.delete('/:id', ProductController.delete);
routes.post('/', ProductController.create);

routes.get('/orders/getAll', OrderController.getAll);
routes.post('/orders/pay', OrderController.create);

routes.get('/', (req, res) => res.send());

module.exports = routes;
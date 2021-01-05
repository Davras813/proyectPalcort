var express = require('express');
var routes = express.Router();
const { productList } = require('../controllers/products');
const { detailProduct } = require('../controllers/products');
const { createBond } = require('../controllers/bonds');
const { bondsList } = require('../controllers/bonds');
const { detailBond } = require('../controllers/bonds');
const { validateBond } = require('../controllers/bonds');

routes.get('/api/v1/productList', productList);
routes.get('/api/v1/detailProduct:/idproduct', detailProduct);
routes.post('/api/v1/createBond', createBond);
routes.get('/api/v1/bondsList', bondsList);
routes.get('/api/v1/detailBond:/idbond', detailBond);
routes.post('/api/v1/validateBond:/idbond', validateBond);

module.exports = routes;
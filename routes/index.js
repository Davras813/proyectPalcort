var express = require('express');
var routes = express.Router();
let { verificaAdmin_Role, verificaCustomer_Role } = require('../middlewares/autenticacion');
const { productList } = require('../controllers/products');
const { detailProduct } = require('../controllers/products');
const { createBond } = require('../controllers/bonds');
const { bondsList } = require('../controllers/bonds');
const { detailBond } = require('../controllers/bonds');
const { validateBond } = require('../controllers/bonds');

routes.get('/api/v1/productList', verificaAdmin_Role, productList);
routes.get('/api/v1/detailProduct/:idproduct', verificaAdmin_Role, detailProduct);
routes.post('/api/v1/createBond', verificaAdmin_Role, createBond);
routes.get('/api/v1/bondsList', verificaAdmin_Role, bondsList);
routes.get('/api/v1/detailBond/:idbond', verificaAdmin_Role, detailBond);
routes.post('/api/v1/validateBond/:idbond', verificaCustomer_Role, validateBond);

module.exports = routes;
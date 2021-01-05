exports.productList = (req, res) => {
    let jsonData = require('../utils/products.json')
    let data = []
    for (var i = 0; i < jsonData.length; i++) {
        data.push(jsonData[i].name);
    }
    res.json({
        productos: data
    });
};


exports.detailProduct = (req, res) => {

    let id = req.params.idproduct;
    const token = req.headers['auth'];
    console.log(token);

    let jsonData = require('../utils/products.json')

    let result = jsonData.find(data => data.id == id);

    res.json({
        result
    });
};
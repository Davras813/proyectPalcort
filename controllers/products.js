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
    res.json({
        posts: [
            { tittle: 'First posts' },
            { tittle: 'Second posts' },
        ]
    });
};
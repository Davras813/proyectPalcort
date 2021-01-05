exports.productList = (req, res) => {
    res.json({
        posts: [
            { tittle: 'First posts' },
            { tittle: 'Second posts' },
        ]
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
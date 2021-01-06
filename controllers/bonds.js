const fs = require('fs');
const { resolve } = require('path');

exports.createBond = (req, res) => {
    let jsonData = require('../utils/bonds.json')
    let body = req.body;
    let dateSince = new Date(body.valid_since);
    let dateEnd = new Date(body.valid_until);
    if (dateSince > dateEnd) {

        let resolve = 'The date initial most be minor' + dateSince.toLocaleString() + ' >  date end ' + dateEnd.toLocaleString()

        res.json({
            resolve
        });

        return
    }

    let result = jsonData.find(data => data.id == body.id);

    if (result) {

        res.json({

            response: 'The id exist'
        });

        return
    }


    jsonData.push(body)
    let sendfile = JSON.stringify(jsonData);
    console.log(sendfile, 'mirenme');
    fs.writeFile('utils/bonds.json', sendfile, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    let response = 'works';
    res.json({
        response
    });
};

exports.bondsList = (req, res) => {
    let jsonData = require('../utils/bonds.json')
    let data = []
    for (var i = 0; i < jsonData.length; i++) {
        data.push(jsonData[i].name);
    }
    res.json({
        Bonos: data
    });
};


exports.detailBond = (req, res) => {
    let id = req.params.idbond;

    let jsonData = require('../utils/bonds.json')

    let result = jsonData.find(data => data.id == id);

    res.json({
        result
    });
};


exports.validateBond = (req, res) => {
    let id = req.params.idbond;

    let jsonData = require('../utils/bonds.json')

    let result = jsonData.find(data => data.id == id);
    let dateNow = new Date();
    let dateSince = new Date(result.valid_since);
    let dateEnd = new Date(result.valid_until);
    let resolve = 'valid bond'
    if (dateNow < dateSince) {
        resolve = 'Not valid for: the date its most little, date today: ' + dateNow.toLocaleString() + ' <  date since ' + dateSince.toLocaleString()
    }
    if (dateNow > dateEnd) {
        resolve = 'Not valid for: the date its most bigger, date today: ' + dateNow.toLocaleString() + ' >  date end ' + dateEnd.toLocaleString()
    }
    res.json({
        resolve
    });
};
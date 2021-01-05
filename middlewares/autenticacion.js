const express = require('express');
let app = express();


//========================
// Verificar AdminRole
//========================
let verificaAdmin_Role = (req, res, next) => {

    //const token = req.headers['auth'];
    let usuario = req.headers['auth']; // Authorization
    console.log(usuario);
    if (usuario !== 'ADMIN') {

        return res.status(401).json({
            ok: false,
            //err,
            err: {
                message: 'Requiere privilegios de ADMIN'
            }
        });

    }
    next();


};


let verificaCustomer_Role = (req, res, next) => {

    //const token = req.headers['auth'];
    let usuario = req.headers['auth']; // Authorization
    console.log(usuario);
    if (usuario !== 'CUSTOMER') {

        return res.status(401).json({
            ok: false,
            //err,
            err: {
                message: 'Requiere privilegios de CUSTOMER'
            }
        });

    }
    next();


};


module.exports = {
    verificaAdmin_Role,
    verificaCustomer_Role,
    app
}
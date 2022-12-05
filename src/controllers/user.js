const { handleHttpError } = require('../helpers/handleError');
const { matchedData } = require('express-validator');
const userModel = require('../models/user')

const registrarUser = async(req, res) => {
    const {
        body: {
            nombre,
            apellido,
            edad,
            email
        }
    } = req;
    try {
        req = matchedData(req);
        const data = await userModel.create({ nombre, apellido, edad, email });
        res.send({ data });

    } catch (error) {
        handleHttpError(res, 'ERROR-EN-REGISTRARSE');
    }
}
module.exports = { registrarUser };
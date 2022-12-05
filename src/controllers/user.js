const { handleHttpError } = require('../helpers/handleError');
const { matchedData } = require('express-validator');
const { userModel } = require('../models/index')

const registrarUser = async(req, res) => {
    try {
        req = matchedData(req);
        const data = await userModel.create(body);

        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR-EN-REGISTRARSE');
    }
}
module.exports = { registrarUser };
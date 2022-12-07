const { check } = require('express-validator');
const validateResul = require('../helpers/handlevalidator');

const validarRegistro = [
    check('nombrePais')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 20 })
    .isAlpha(),
    (req, res, next) => {
        return validateResul(req, res, next)
    }
]
module.exports = { validarRegistro };
const { check } = require('express-validator');
const validateResul = require('../helpers/handlevalidator');

const validarRegistro = [
    check('nombreRegion')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 50 })
    .isString(),
    (req, res, next) => {
        return validateResul(req, res, next)
    }
]
module.exports = { validarRegistro };
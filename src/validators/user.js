const { check } = require("express-validator");
const validationResult = require('../helpers/handlevalidator');

const validarRegistro = [
    check('nombre')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 100 }),
    check('apellido')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 100 }),
    check('edad')
    .exists()
    .notEmpty()
    .isNumeric(),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validationResult(req, res, next)
    }
]


module.exports = { validarRegistro };
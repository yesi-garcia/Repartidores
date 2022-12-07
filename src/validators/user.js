const { check } = require("express-validator");
const validationResult = require('../helpers/handlevalidator');

const validarRegistro = [
    check('nombre')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 100 })
    .custom((value) => {
        return value.match(/^[A-Za-z]+$/);
    }),
    check('apellido')
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 100 })
    .isAlpha(), // es otro metodo que admite solo letra
    check('edad')
    .exists()
    .notEmpty()
    .isNumeric()
    .custom((value, { req }) => {
        if (value < 18 || value > 60) {
            throw new Error('El rango de edad debe ser entre 18 y 60')
        }
        return true
    }),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validationResult(req, res, next)
    }
]
module.exports = { validarRegistro };
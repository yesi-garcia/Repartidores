const { handleHttpError } = require('../../helpers/handleError');
const { matchedData } = require('express-validator');
const userModel = require('../../models/user')

const registrarUser = async(req, res) => {
    const {
        body: {
            rut,
            nombre,
            apellido,
            edad,
            email
        }
    } = req;
    try {
        const existeRut = await userModel.findOne({ where: { rut } });
        if (existeRut) {
            return res.status(400).json({
                msg: 'Rut ya existe'
            });
        }
        req = matchedData(req);
        await userModel.create({ rut, nombre, apellido, edad, email });
        res.status(201).json({
            status: 'OK',
            description: 'Creado',
            Response: {
                message: 'accion realizada satisfactoriamente'
            }
        });

    } catch (error) {
        handleHttpError(res, 'ERROR-EN-REGISTRARSE');
    }
}
module.exports = { registrarUser };
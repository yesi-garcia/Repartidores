const pais = require('../../models/pais');
const { handleHttpError } = require('../../helpers/handleError');
const traerPais = require('../../helpers/handleTraerPais')
const insertarPais = async(req, res, _next) => {
    const {
        body: {
            nombrePais
        }
    } = req;
    try {
        const existePais = await traerPais(nombrePais);
        if (existePais) {
            return res.status(400).json({
                msg: 'Pais ya registrado'
            });
        }
        await pais.create({ nombrePais });

        res.status(201).json({
            status: 'OK',
            description: 'Creado',
            Response: {
                message: 'accion realizada satisfactoriamente'
            }
        });
    } catch (error) {
        handleHttpError(res, 'ERROR-EN-INGRESAR-REGISTRO', 400)
    }
};
module.exports = insertarPais;
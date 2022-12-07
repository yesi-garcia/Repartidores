const pais = require('../../models/pais');
const { handleHttpError } = require('../../helpers/handleError');

const insertarPais = async(req, res, _next) => {
    const {
        body: {
            nombrePais
        }
    } = req;
    try {
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
const region = require('../../models/region');
const { handleHttpError } = require('../../helpers/handleError');
const traerPais = require('../../helpers/handleTraerPais');

const insertarRegion = async(req, res, _next) => {
    const {
        body: {
            nombre,
            nombrePais
        }
    } = req;
    try {
        const resultPais = await traerPais(nombrePais);
        let idPais;
        if (resultPais.id) {
            idPais = resultPais.id;
        }
        await region.create({ nombre, id_pais: idPais });
        res.status(201).json({
            status: 'OK',
            description: 'Creado',
            Response: {
                message: 'Accion realizada con satisfaccion'
            }
        })
    } catch (error) {
        handleHttpError(res, 'ERROR-EN-INGRESAR-REGISTRO', 400);
    }
}

module.exports = insertarRegion;
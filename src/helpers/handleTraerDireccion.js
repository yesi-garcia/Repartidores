const direccion = require('../models/direccion');
const { handleHttpError } = require('../helpers/handleError');

const traerDireccion = async(nombreCalle, numeroCasa) => {
    try {
        const result = await direccion.findOne({
            where: {
                nombreCalle,
                numeroCasa
            },
            // raw: true
        })
        return result;
    } catch (error) {
        handleHttpError(res, 'NO-ENCONTRADO', 404)
    }
}
module.exports = traerDireccion;
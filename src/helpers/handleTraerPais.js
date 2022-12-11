const pais = require('../models/pais');
const { handleHttpError } = require('../helpers/handleError');

const traerPais = async(nombrePais) => {
    try {

        const result = await pais.findOne({
            where: {
                nombrePais
            }
        })
        return result;
    } catch (error) {
        handleHttpError(res, 'PAIS-NO-ENCONTRADO', 404)
    }
}
module.exports = traerPais;
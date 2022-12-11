const region = require('../models/region');
const { handleHttpError } = require('../helpers/handleError');

const traerRegion = async(nombreRegion) => {
    try {
        const resutl = await pais.findOne({
            where: {
                nombreRegion
            }
        });
        return resutl;
    } catch (error) {
        handleHttpError(res, 'REGION-NO-ENCONTRADA', 404)
    }
}
module.exports = traerRegion;
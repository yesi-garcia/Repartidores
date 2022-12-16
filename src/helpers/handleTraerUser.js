const user = require('../models/user');
const { handleHttpError } = require('../helpers/handleError');

const traerUsurario = async(rut) => {
    try {
        const result = await user.findOne({
            where: {
                rut
            },
            raw: true
        })
        return result;
    } catch (error) {
        handleHttpError(res, 'NO-ENCONTRADO', 404)
    }
}
module.exports = traerUsurario;
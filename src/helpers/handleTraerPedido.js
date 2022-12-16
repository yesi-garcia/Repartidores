const pedido = require('../models/pedidos');
const { handleHttpError } = require('../helpers/handleError');

const traerFecha = async(fecha) => {

    try {

        const result = await pedido.findOne({
            where: {
                fecha
            }
        })

        return result;
    } catch (error) {
        handleHttpError(res, 'NO-ENCONTEADO', 404)
    }
}
module.exports = traerFecha;
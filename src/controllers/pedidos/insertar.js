const pedidos = require('../../models/pedidos');
const { handleHttpError } = require('../../helpers/handleError');
const traerDireccion = require('../../helpers/handleTraerDireccion');
const traerUser = require('../../helpers/handleTraerUser');
const traerFecha = require('../../helpers/handleTraerPedido');
const moment = require('moment');
const insertar = async(req, res, _next) => {
    const fechaActual = moment().format();
    const {
        body: {
            nombreCalle,
            numeroCasa,
            rut

        }
    } = req;
    try {
        const resultDireccion = await traerDireccion(nombreCalle, numeroCasa);

        const resultUser = await traerUser(rut);

        let iddireccion;
        let iduser;

        if (resultDireccion.id) {
            iddireccion = resultDireccion.id;
        }

        if (resultUser.id) {
            iduser = resultUser.id;
        }

        const consultarPedidos = await pedidos.findAll({
            where: {
                id_user: iduser
            },
            raw: true
        })

        const pedidosMap = consultarPedidos.map(x => moment(x.fecha).format('L'));
        const pedidosFilter = pedidosMap.filter(x => x == moment(fechaActual).format('L'))

        if (pedidosFilter.length > 2) {
            return res.status(400).json({
                msg: 'Superaste el limite de entrega por dia'
            });
        }

        await pedidos.create({ fecha: fechaActual, id_direccion: iddireccion, id_user: iduser });
        res.status(201).json({
            status: 'OK',
            description: 'Creado',
            Response: {
                message: 'Accion realizada con satisfaccion'
            }
        });


    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR-EN-REGISTRO');
    }
}
module.exports = insertar;
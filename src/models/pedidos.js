const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const direccion = require('../models/direccion');
const user = require('../models/user');

const pedidos = sequelize.define('pedido', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    }
});
pedidos.belongsTo(direccion, {
    foreignKey: 'id_direccion'
});
direccion.hasMany(pedidos, {
    foreignKey: 'id_direccion'
});
pedidos.belongsTo(user, {
    foreignKey: 'id_user'
});
user.hasMany(pedidos, {
    foreignKey: 'id_user'
});
module.exports = pedidos;
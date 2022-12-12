const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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

module.exports = pedidos;
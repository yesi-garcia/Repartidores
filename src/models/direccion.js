const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const comuna = require('./comuna');

const direccion = sequelize.define('direccion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreCalle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroCasa: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});
direccion.belongsTo(comuna, {
    foreignKey: 'id_comuna'
});
comuna.hasMany(direccion, {
    foreignKey: 'id_comuna'
});

module.exports = direccion;
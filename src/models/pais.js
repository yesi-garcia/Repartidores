const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const pais = sequelize.define('pais', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombrePais: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});
module.exports = pais;
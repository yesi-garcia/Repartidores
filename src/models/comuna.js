const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const region = require('./region');

const comuna = sequelize.define('comuna', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreComuna: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

comuna.belongsTo(region, {
    foreignKey: 'id_region'
});
region.hasMany(comuna, {
    foreignKey: 'id_region'
});

module.exports = comuna;
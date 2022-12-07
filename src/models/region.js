const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const pais = require('./pais');

const region = sequelize.define('region', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreRegion: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

region.belongsTo(pais, {
    foreignKey: 'id_pais'
});
pais.hasMany(region, {
    foreignKey: 'id_pais'
});
module.exports = region;
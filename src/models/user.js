const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },

    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Correo ya se encuentra registrado'
        }
    }
}, {
    timestamps: true,
})

module.exports = user;
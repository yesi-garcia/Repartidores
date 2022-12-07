const insertarPais = require('../controllers/pais/insertar');
const { validarRegistro } = require('../validators/pais');
const express = require('express');
const router = express.Router();

router.post('/insertar', validarRegistro, insertarPais);
module.exports = router;
const insertarRegion = require('../controllers/region/insertar');
const { validarRegistro } = require('../validators/region');
const express = require('express');
const router = express.Router();

router.post('/insertar', validarRegistro, insertarRegion);
module.exports = router;
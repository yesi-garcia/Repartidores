const insertarPais = require('../controllers/pais/insertar');
const express = require('express');
const router = express.Router();

router.post('/insertar', insertarPais);
module.exports = router;
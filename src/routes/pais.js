const insertarPais = require('../controllers/pais/insertar');
const express = require('express');
const router = express.Router();

router.post('/resgistro', insertarPais);
module.exports = router;
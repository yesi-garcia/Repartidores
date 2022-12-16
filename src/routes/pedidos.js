const insertar = require('../controllers/pedidos/insertar');
const express = require('express');
const router = express.Router();

router.post('/insertar', insertar);
module.exports = router;
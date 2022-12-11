const insertarRegion = require('../controllers/region/insertar');
const express = require('express');
const router = express.Router();

router.post('/insertar', insertarRegion);
module.exports = router;
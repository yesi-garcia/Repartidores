require('dotenv').config();
const express = require('express');
const cosr = require('cors');
const morgan = require('morgan');
const app = express();


const db = require('./config/db');
require('./models/index');

app.use(cosr());
app.use(express.json());
app.use(morgan(`dev`));

const port = process.env.PORT || 3004

app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`server on port,${port}`);
});
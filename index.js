const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/mongoose');
const app = express();


app.use(bodyParser.urlencoded());

app.use("/", require("./routes"));


app.listen(8000, function () {
    console.log('Node server listening on port 8000');
});
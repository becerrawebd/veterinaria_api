const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: 'variables.env' })

//crear el servidor
const app = express();

app.use(cors());

//habiliar body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

//conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.BD_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


// habilitar routing
app.use('/',routes())

// configurando variables segun el entorno
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

//arrancar el servidor
app.listen(port, host, () => {
    console.log('Servidor funcionando');
})
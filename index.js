const express = require('express');
require('dotenv').config();
var cors = require('cors')
const { dbConnection } = require('./database/config');

/* La siguiente consola es para buscar la propiedad PORT y se pueda trabajar sobre el puerto que nos manden */
// console.log(process.env);
/* Puerto en el que se va a trabajar */
const port = process.env.PORT

//Crear el servidor de express
const app = express();

// Configuracion BD
dbConnection();

//CORS
app.use(cors());

// Mostrar index del directorio publico 
app.use( express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

// Rutas
// TODO auth / crear, login, renewToken
app.use( '/api/auth', require('./routes/auth') );
// TODO CRUD: eventos

//Escuchar peticiones
app.listen( port , () => {
    console.log(`servidor corriendo en puerto ${port}`);
})
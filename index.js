const express = require('express');

//Crear el servidor de express
const app = express();

//Rutas
app.get('/', (req, res) => {

    res.json({
        ok:true
    });
    
});

//Escuchar peticiones
app.listen( 4000, () => {
    console.log(`servidor corriendo en puerto ${4000}`);
})
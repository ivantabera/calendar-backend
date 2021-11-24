const mongoose = require("mongoose");

const dbConnection = async() => {

    try {
        
        await  mongoose.connect( process.env.DB_CON );
        console.log('DB Online')

    } catch (error) {
        console.log( error);
        throw new Error('Conexion fallida')
    }

}

module.exports = {
    dbConnection
}
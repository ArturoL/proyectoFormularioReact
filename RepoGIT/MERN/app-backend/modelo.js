const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// TODO: Validaciones de campos en BBDD. OBLIGATORIO


let Usuario = new Schema( {
    name:{
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    edad: {
        type: Number
    }
} );


// Como el export default

module.exports = mongoose.model("Usuario", Usuario);// Para el tipo usuario utilizamos el esquema Usuario
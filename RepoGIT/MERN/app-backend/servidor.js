const express = require('express');
const bodyParser = require('body-parser');
//TODO: importar y usar módulo middle-eare CORS

const mongoose = require('mongoose');

const Usuario = require('./modelo');

const cors = require('cors');

const app = express();

const PORT = 4000; // Constantes de verdad se ponen siempre con mayúsculas

// Software intermediario para la serialización y 
// deserialización, es decir parseo ,automática.

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/db_usuarios');
const conexion = mongoose.connection;

conexion.once("open",function(){
    console.log("Eureka hemos conectado con Mongoose")
})

app.listen(PORT,
    function(){
        console.log('Servidor ejecutandose en ' + PORT)

    });

const rutasAPI = express.Router();
// Y este obj va a hacer de intermediario en url /api/usuarios
app.use("/api/usuarios", rutasAPI);
// Http://127.0.0.1:4000/api/usuarios/registro

function recibirRegistroPost(peticionHttp, respuestaHttp){
    //deberiamos recibir un JSON con el nuevo usuario
    // asi que creamos un objeto basado Schema y le pasamos el JSON ya 
    // convertido en objeto de JS gracias al bodyParser
    
    let nuevoUsuario = new Usuario( peticionHttp.body );
    let promesaDeGuardado = nuevoUsuario.save();
    promesaDeGuardado.then(usuario => {
            console.log(" 4) - Se ha registrado en bbdd"),
            respuestaHttp.status(200).json({
            "usuario": "Creado satisfactoriamente"
            })        
    });
    promesaDeGuardado.catch(error => {
        console.log(" 4) - Registro fallado");
        respuestahttp.status(400).send("El registro ha fallado")
    });
    console.log("La peticion ha sido procesada")
}


rutasAPI.route("/registro").post(recibirRegistroPost);

rutasAPI.route("/").get(function(reqPeticionHttp, resRespuestaHttp){
    Usuario.find(function(err,coleccionUsuarios){
if(err){
    console.log(err);
} else {
    resRespuestaHttp.json(coleccionUsuarios);
}
    });
});

rutasAPI.route("/:id").delete(function(req,res){
    Usuario.findById(req.params.id).remove().exec();
    res.json({
        "mensaje": "ok"
    })
});



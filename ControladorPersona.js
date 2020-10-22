var persona=require('./ModeloTerreno'),
express=require('express'),
rutas=express.Router();

rutas.post('/obtenerTodos',(request,response)=>{
    persona.find({},(err,datos)=>{ 
        if(err){
            console.log(err);
            throw err;
        }
            response.status(200).json(datos);
    })
})
rutas.post('/crear',(request,response)=>{
 var body=request.body;
 persona.insertMany({
    idPersona:body.idPersona,
    nombre:body.nombre,
    apellidos:body.apellidos,
    edad:body.edad
},(err,res)=>{
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(res);
})
})
module.exports=rutas;
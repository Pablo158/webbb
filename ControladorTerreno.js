var terreno=require('./ModeloTerreno'),
express=require('express'),
rutas=express.Router();

rutas.post('/obtenerTodos',(request,response)=>{
    terreno.find({},(err,datos)=>{ 
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(datos);
    })

})

rutas.post('/crear',(request,response)=>{
    var body=request.body;
terreno.insertMany({
    idTerreno:body.idTerreno,
    dimension:body.dimension,
    barrio:body.barrio,
    calleprincipal:body.calleprincipal
},(err,resp)=>{
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(resp);
}
)
})
module.exports=rutas;
var mongoose= require("mongoose");
mongoose.Schema=mongoose.Schema;
var atributos=new mongoose.Schema({
    idPersona:{type:Number,trim:true},
    nombre:{type:String,trim:true},
    apellido:{type:String,trim:true},
    edad:{type:Number,trim:true}
})
var persona=mongoose.model('persona',atributos);
module.exports=persona

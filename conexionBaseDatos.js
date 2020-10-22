var mongoose=require('mongoose');
var connection=mongoose.connect("mongodb+srv://PabloCCCC:Pablo*159@cluster0.t7ov1.mongodb.net/clase?retryWrites=true&w=majority")
mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongo cloud");

})

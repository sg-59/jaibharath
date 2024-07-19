const mongoose=require('mongoose')

const userdata=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:Number,required:true},
    age:{type:Number,required:true},
password:{type:String,required:true}
})

module.exports=mongoose.model('jai',userdata)
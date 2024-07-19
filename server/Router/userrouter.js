const router=require('express').Router()
const user=require('../Model/userSchema')
router.post('/postData',async(req,res)=>{
    console.log(req.body);
    try{
const newUser=new user({
    firstname:req.body.name,
    lastname:req.body.lname,
    email:req.body.email,
    mobile:req.body.mobile,
    age:req.body.age,
    password:req.body.password
})
const savedUser=await newUser.save()
res.status(200).json({data:savedUser,message:"success"})
    }catch(err){
res.status(500).json("failed")
    }
    
})

router.get('/getData/:id',async(req,res)=>{
    console.log(req.query);
    try{
const allData=await user.findById(req.params.id)
res.status(200).json(allData)
    }catch(err){
res.status(500).json(err)
    }
})
 
router.post('/login',async(req,res)=>{
    console.log(req.body);
    try{
const findData=await user.findOne({email:req.body.email})
console.log("findEmail",findData);
if(!findData){
   return res.status(400).json({message:"please check you email"})
}

if(findData.password != req.body.password){
    return res.status(400).json({message:"please check you password"}) 
}

 return res.status(200).json({message:true,userId:findData._id})
    }catch(err){
return res.status(500).json({message:"false"})
    }
})


module.exports=router


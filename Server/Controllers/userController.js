
const users = require('../Models/userModel');

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');

const Register = async (request,response)=>{
    if(await users.exists({email:request.body.email})){
        return response.status(400).json({massege:'Email is allready exist'});
    } 
    bcrypt.hash(request.body.password,10, async(err,hashPassword)=>{
        if(err) return response.status(500).send({massege:'Erorr'});
        request.body.password = hashPassword;
        
        await users.create(request.body)
        .then((result)=>response.status(200).send({message:'user added successfuly',result}))
        .catch((err) => response.status(500).send(err))
    })
} 


const LogIn = async (request,response)=>{
    if(await users.exists({email:!request.body.email})) {
        return response.status(400).json({message:'Email is not exist'})
    }
    const {email,password} = request.body;
    const user = await users.findOne({email:email});
    console.log(user.firstName);
      bcrypt.compare(password,user.password,(err,isMatch)=>{
        if(err) return response.status(500).json({message:'Error'});

        if(!isMatch) return response.status(400).json({message:'password is incorrest'});

        // const Som = (err,token)=>{
        //     if(err) return response.status(500).json({message:'error'});
        //     response.status(200).json({message:'Loggin successful',token})
        // }
        jwt.sign({user},process.env.SECRET_KEY,{expiresIn:'3m'},Som())

    })
}




module.exports = {Register, LogIn};
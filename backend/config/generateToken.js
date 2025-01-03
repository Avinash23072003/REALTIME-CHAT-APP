const jwt= require('jsonwebtoken');
const JWT_SECRET_KEY="avinash";
const generateToken=(id)=>{
    return jwt.sign({id},JWT_SECRET_KEY,{
        expiresIn:'30d'
    })
}

module.exports=generateToken;
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');
const generateToken=require('../config/generateToken.js')
const userRegister = asyncHandler(async (req, res) => {
   

    const { name, email, password, pic } = req.body;

    // Validate required fields
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please enter all the fields');
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        console.log('User already exists');
        return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token:generateToken(user._id)
        });
        console.log('User registraion done sucessfullly');
    } else {
        res.status(400);
        throw new Error('Failed to create user');
    }

    console.log('userRegister connection here');
});


const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token:generateToken(user._id)
        })


        console.log('User logged in sucessfully')
        }
        else{
            res.status(400).json({message:'Failed to login User'}) 
        }

    })





module.exports = { userRegister, loginUser};

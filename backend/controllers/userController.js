import userModel from "../models/userModel.js";
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET )
}

//Route to login user
const loginUser = async (req,res) => {
    try {
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Please enter all the fields"})
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message: "User does not exist"})
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"})
        }else{
            const token = await createToken(user._id);
            res.status(200).json({message: "User logged in successfully", token})
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
}

//Route to register user
const registerUser = async (req,res) => {
    try {
        
        const {name , email , password} = req.body;
        //checking user already exist or not 
        const exists= await userModel.findOne({email});
        if(exists){
            return res.status(400).json({message: "User already exist"})
        }
        if(!name || !email || !password){
            return res.status(400).json({message: "Please enter all the fields"})
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({message: "Please enter a valid email"})
        }
        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters"})
        }

        //Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);

        //Creating user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        })

        const user = await newUser.save();

        const token = await createToken(user._id);
        res.status(201).json({message: "User registered successfully", token})


    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"})
    }
    

}

//Route for admin login
const adminLogin = async (req,res) => {
    try{
        const {email , password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({email}, process.env.JWT_SECRET);
            res.json({success : true , token})
        }
        else{
            res.json({success : false , message:"Invalid credentials"})
        }
    }catch (error){
        console.log(error);
        res.status(500).json({message: error.message})
    }
}


export { loginUser , registerUser , adminLogin };
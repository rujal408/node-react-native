import { Request,Response } from 'express';
import User from '../model/User';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

class UserController {
    private SECRET_KEY = "NOTESAPI"
    protected async createUser(req:Request,res:Response){
        try{
            const {name,username,email,password} = req.body
            
            const existingUser = await User.findOne({email:email})

            if(existingUser){
                return res.status(400).json({message:"User already exists"})
            }
            
            // const hashedPassword = await bcrypt.hash(password,10);
            
            bcrypt.hash(password, 10, async(_, hash) => {
                // Store hash in your password DB.
                const result = await User.create({email:email,username:username,name:name,password:hash})
                const token = jwt.sign({email:result.email,id:result.id},"NOTESAPI")
                return res.status(201).json({user:result,token})
            });
           
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Something went wrong"})
        }
      }

    protected async loginUser(req:Request,res:Response){
        try{
            const {username, password} = req.body
            
            const existingUser = await User.findOne({username:username})

            if(existingUser){
                const matchPassword = await bcrypt.compare(password,existingUser.password)
                if(!matchPassword){
                    return res.status(400).json({message:"Invalid Password"})
                }
                const token = jwt.sign({email:existingUser.email,id:existingUser.id},"NOTESAPI")
                return res.status(201).json({user:existingUser,token})
            }
            return res.status(404).json({message:"User not found"})
        }
        catch(err){
            console.log(err)
            res.status(500).json({message:"Something went wrong"})
        }
    }

}

export default UserController
import { Request,Response} from 'express';
import User from '../model/User';
import {hash,compare} from 'bcrypt';
import jwt from 'jsonwebtoken'

class UserController {
    private SECRET_KEY = "NOTESAPI"
    protected async createUser(req:Request,res:Response){
        try{
            const {name,username,email,password} = req.body
            const existingUser = await User.findOne({email:email})

            if(existingUser){
                const hashedPassword = await hash(password,10);
                const result = await User.create({email,username,name,password:hashedPassword})
                const token = jwt.sign({email:result.email,id:result.id},this.SECRET_KEY)
                return res.status(201).json({user:result,token})
            }

            return res.status(400).json({message:"User already exists"})

        }catch(err){
            console.log(err)
            res.status(500).json({message:"Something went wrong"})
        }
      }

    protected async loginUser(req:Request,res:Response){
        try{
            const {username, password} = req.body
            const existingUser = await User.findOne({username,password})

            if(existingUser){
                const matchPassword = await compare(password,existingUser.password)
                if(!matchPassword){
                    return res.status(400).json({message:"Invalid Password"})
                }
                const token = jwt.sign({email:existingUser.email,id:existingUser.id},this.SECRET_KEY)
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
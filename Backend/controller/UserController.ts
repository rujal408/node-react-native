import { NextFunction, Request,Response } from 'express';
import User from '../model/User';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../constants/common';
import ErrorHandler from '../utils/error';
import { asyncError } from '../middleware/error';

class UserController {
    protected createUser = asyncError(async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { name, username, email, password } = req.body;
    
          const existingUser = await User.findOne({ email: email });
    
          if (existingUser) {
            return next(new ErrorHandler("User Already Exists", 400));
          }
    
          bcrypt.hash(password, 10, async (_, hash) => {
            // Store hash in your password DB.
            const result = await User.create({
              email: email,
              username: username,
              name: name,
              password: hash,
            });
            const token = jwt.sign({ email: result.email, id: result.id }, SECRET_KEY);
            return res.status(201).json({ user: result, token });
          });
        } catch (err) {
          return next(new ErrorHandler("Something went wrong", 500));
        }
      });

      protected loginUser=asyncError(async(req:Request,res:Response,next:NextFunction)=>{
        try{
            const {username, password} = req.body
            
            const existingUser = await User.findOne({username:username})

            if(existingUser){
                const matchPassword = await bcrypt.compare(password,existingUser.password)
                if(!matchPassword){
                    return next(new ErrorHandler("Invalid Password",400))
                }
                const token = jwt.sign({email:existingUser.email, id:existingUser.id},SECRET_KEY)
                return res.status(201).json({user:existingUser,token})
            }
            return next(new ErrorHandler("User not found",400))

        }
        catch(err){
            return next(new ErrorHandler("Something went wrong",500))
        }
    })
    }

export default UserController
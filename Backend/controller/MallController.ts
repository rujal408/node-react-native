import { Request,Response,NextFunction} from 'express';
import Malls from '../model/Mall';
import ImageController from './ImageController';
import ErrorHandler from '../utils/error';
import { asyncError } from '../middleware/error';

class MallController extends ImageController{
    protected getAllMalls = asyncError(async(_:Request,res:Response,next:NextFunction) => {
      try{
        const malls = await Malls.find({})
        res.status(201).json(malls);
      }catch(err){
        return next(new ErrorHandler("Error Providing Malls",400))
      }
      })

      protected async getSingleMall(req:Request,res:Response){}

      protected createMall = asyncError(async(req:Request,res:Response,next:NextFunction) => {
        const {name} = req.body        
        try {
          const mallResult = await Malls.create({name})
          res.status(201).json(mallResult);
        } catch (error) {
          return next(new ErrorHandler("Error Creating Mall",400))
        }
      })

      protected updateMall=asyncError((req:Request,res:Response)=>{})

      protected deleteMall=asyncError((req:Request,res:Response)=>{})
}

export default MallController
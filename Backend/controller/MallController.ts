import { Request,Response} from 'express';
import Malls from '../model/Mall';
import ImageController from './ImageController';

class MallController extends ImageController{
    protected async getAllMalls(_:Request,res:Response){
        try{
          const malls = await Malls.find({})
          res.status(201).json(malls);
      }catch(err){}
      }

      protected async getSingleMall(req:Request,res:Response){}

      protected async createMall(req:Request,res:Response){
        const {name} = req.body

        
        try {
          const mallResult = await Malls.create({name})
          res.status(201).json(mallResult);
        } catch (error) {
          res.status(400)
        }
      }

      protected async updateMall(req:Request,res:Response){}

      protected async deleteMall(req:Request,res:Response){}
}

export default MallController
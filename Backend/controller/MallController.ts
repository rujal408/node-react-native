import { Request,Response} from 'express';
import Malls from '../model/Mall';

class MallController{
    protected async getAllMalls(_:Request,res:Response){
        try{
          const malls = await Malls.find({})
          res.status(201).json(malls);
      }catch(err){}
      }

      protected async getSingleMall(req:Request,res:Response){}

      protected async createMall(req:Request,res:Response){
        const mall = new Malls({name:"KL Tower",shops:[]})
        try {
          const newMall = await mall.save();
          res.status(201).json(newMall);
        } catch (error) {
          res.status(400)
        }
      }

      protected async updateMall(req:Request,res:Response){}

      protected async deleteMall(req:Request,res:Response){}
}

export default MallController
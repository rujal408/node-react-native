import { Request,Response} from 'express';
// import Shops from '../model/Shop';

class ShopController{
    protected async getAllShops(req:Request,res:Response){}

    protected async getSingleShop(req:Request,res:Response){}

    protected async createShop(req:Request,res:Response){}

    protected async updateShop(req:Request,res:Response){}

    protected async deleteShop(req:Request,res:Response){}
}

export default ShopController
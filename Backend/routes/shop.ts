import { Router} from 'express';
import ShopController from '../controller/ShopController';
import authMiddleWare from '../middleware/auth';

class ShopRoutes extends ShopController {
    public router: Router;
    public path='/shops';

    constructor() {
        super()
        this.router = Router();
        this.initializeRoutes();
      }

      private initializeRoutes() {
        this.router.use(authMiddleWare)
        this.router.get(`${this.path}`, this.getAllShops);
        this.router.get(`${this.path}/:id`, this.getSingleShop);
        this.router.post(`${this.path}`,this.getMultipleImage, this.createShop);
        this.router.put(`${this.path}/:id`, this.updateShop);
        this.router.delete(`${this.path}/:id`, this.deleteShop);
      }

      
    

}

export default ShopRoutes
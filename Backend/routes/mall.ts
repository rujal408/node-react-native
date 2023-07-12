import { Router} from 'express';
import MallController from '../controller/MallController';
import authMiddleWare from '../middleware/auth';

class MallRoutes extends MallController {
    public router: Router;
    public path="/malls"

    constructor() {
        super()
        this.router = Router();
        this.initializeRoutes();
      }

      private initializeRoutes() {
        this.router.use(authMiddleWare)        
        this.router.get(`${this.path}`, this.getAllMalls);
        this.router.get(`${this.path}/:id`, this.getSingleMall);
        this.router.post(`${this.path}`, this.createMall);
        this.router.put(`${this.path}/:id`, this.updateMall);
        this.router.delete(`${this.path}/:id`, this.deleteMall);
      }
}

export default MallRoutes
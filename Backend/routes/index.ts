import express from 'express';
import MallRoutes from './mall';
import ShopRoutes from './shop';
import UserRoutes from './user';

class Routes {
    public app:express.Application
    public mallRoutes: MallRoutes;
    public shopRoutes: ShopRoutes;
    public userRoutes: UserRoutes

    constructor(app:express.Application){
        this.app = app;
        this.mallRoutes = new MallRoutes();
        this.shopRoutes = new ShopRoutes();
        this.userRoutes = new UserRoutes()
        this.initializeRoutes();
    }

    private initializeRoutes():void{
        this.app.use(express.json()) // convert the request body into json (parse)
        this.app.use(express.urlencoded())
        this.app.use('/api', this.userRoutes.router);
        this.app.use('/api', this.mallRoutes.router);
        this.app.use('/api', this.shopRoutes.router);
    }
}

export default Routes
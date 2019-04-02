import { Router } from 'express';
import {indexController}  from '../controllers/indexController';
import {gamesController}  from '../controllers/gamesController';

class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        // this.router.get('/',(req, res) => res.send('Saludos') );
        this.router.get('/', indexController.index );
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
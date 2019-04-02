import {Request, Response} from 'express';

class IndexController {

    index (req: Request, res: Response){
        res.send('Saludos desde controlador');
    }

}

export const indexController = new IndexController();
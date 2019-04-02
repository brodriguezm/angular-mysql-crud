import {Request, Response} from 'express';
import db from '../database';
import { json } from 'body-parser';

class GamesController {

    public list (req: Request, res: Response){
        //db.query('DESCRIBE games;');
        res.send({
            'text': 'Listando juegos'
        });
    }

    public getOne(req: Request, res:Response){
        res.json({
            'text': 'Este es el juego ' + req.params.id
        });
    }

    public create(req: Request, res:Response){
        res.json({
            'text' : 'creando un juego'
        });
    }

    public update(req:Request, res:Response){
        res.json({
            'text' : 'Actualizando un juego'
        })
    }

    public delete(req: Request, res:Response){
        res.json({
            'text' : 'eliminando un juego'
        });
    }

}

export const gamesController = new GamesController();
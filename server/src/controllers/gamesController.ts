import {Request, Response} from 'express';
import db from '../database';
import { json } from 'body-parser';

class GamesController {

    public async list (req: Request, res: Response){
        const games = await db.query('SELECT * FROM games;');
        res.json(games);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        const game = await db.query('SELECT * FROM games WHERE id = ?', [id]);
        if(game.length > 0)
            res.json(game[0]);
        else{
            res.status(404)
                .json({'message':'No se encontró ningún juego con el id '+ id});
        }
    }

    public async create(req: Request, res:Response): Promise<void>{
        await db.query('INSERT INTO games set ?', [req.body]);
        res.json({
            'message' : 'Juego guardado con éxito'
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
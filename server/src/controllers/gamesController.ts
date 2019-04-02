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

    public async update(req:Request, res:Response): Promise<void> {
        const {id} = req.params;
        await db.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
        res.json({
            'message' : 'El juego ha sido actualizado correctamente'
        })
    }

    public async delete(req: Request, res:Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({
            'message' : 'El juego fue elminado correctamente'
        });
    }

}

export const gamesController = new GamesController();
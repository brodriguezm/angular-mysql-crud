"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GamesController {
    list(req, res) {
        //db.query('DESCRIBE games;');
        res.send({
            'text': 'Listando juegos'
        });
    }
    getOne(req, res) {
        res.json({
            'text': 'Este es el juego ' + req.params.id
        });
    }
    create(req, res) {
        res.json({
            'text': 'creando un juego'
        });
    }
    update(req, res) {
        res.json({
            'text': 'Actualizando un juego'
        });
    }
    delete(req, res) {
        res.json({
            'text': 'eliminando un juego'
        });
    }
}
exports.gamesController = new GamesController();

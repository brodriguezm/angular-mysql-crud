import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from '../../services/games.service';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row'; 
  games: any = [];
 
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.listGame();
  }

  listGame(){
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.error(err)
    )
  }

  deleteGame(id: string){
    let me = this;
    this.gamesService.deleteGame(id).subscribe(
      res => {
        console.info(res);
        me.listGame();
      },
      err => console.error(err)
    )
  }

}

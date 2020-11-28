import { Component, OnInit } from '@angular/core';
import { ID } from '../funktioner';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  selectid:ID
  constructor() { }
  game:number;
  ngOnInit(): void {
    console.log(this.game)
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ID } from '../funktioner';
import { GameComponent } from '../game/game.component';
import { HttpService } from '../http.service';
export interface Dialogdata{
  id:number
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit {
  put= new ID();
  constructor(private _http:HttpService,public dialog: MatDialog) { }
  name:string;
  games:object;
  game:object;
  Publisher:object;
  Developer:object;
  Devies:object;
  Genre:object;
  PEGI:object;
  ngOnInit(): void {
    this._http.getgames().subscribe(data=>{
      this.games=data;
    })
    this._http.getgamepublisher().subscribe(gamep=>{
      this.Publisher=gamep;
      //console.log(gamep);
    });
    this._http.getgamedeveloper().subscribe(gamed=>{
      this.Developer=gamed;
      //console.log(gamed);
    });
    this._http.getdevies().subscribe(data=>{
      this.Devies=data;
     //console.log(this.devies);
    });
    this._http.getgenre().subscribe(data=>{
      this.Genre=data;
     //console.log(this.genre)
    });
    this._http.getpegi().subscribe(data=>{
      this.PEGI=data;
     //console.log(this.PEGI)
    });

  }
  Select(id,name,publisher,developer,devices,genre,pegi,release_date){

    this.put.game_name=name;
    this.put.game_publisher=this.cutstring(publisher);
    this.put.game_developer=this.cutstring(developer);
    this.put.devices=this.cutstring(devices);
    this.put.genre=this.cutstring(genre);
    this.put.PEGI=pegi[0];
    this.put.release_date=release_date;
    this._http.putgame(this.cutstring(id),this.put).subscribe();
    /*const dialogRef = this.dialog.open(selectdialog,{
    });*/



    //this.dialog.open(GameComponent);
  }
  onChange(deviceValue) {
    this.name=deviceValue
}

  cutstring(a)
  {

    var str = a;
    var res = str.replace(/\D/g, "");
    return(res);

  }
}/*
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
/*export class selectdialog{
  constructor(public dialogRef:MatDialogRef<selectdialog>,
    @Inject(MAT_DIALOG_DATA) public data:game){}
}*/


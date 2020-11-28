import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dto } from '../dto';
import { GameComponent } from '../game/game.component';
import { HttpService } from '../http.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit {
  url="https://localhost:44336/api/Gaming"
  constructor(public dialogRef: MatDialog, public _http:HttpService, public http:HttpClient ) { }
  post= new Dto();
  
  Publisher:object;
  Developer:object;
  Devies:object;
  Genre:object;
  PEGI:object;


  gamename:string;
  publisher:string;
  developer:string;
  devies:string;
  genre:string;
  pegi:string;
  date:string;
  publishers:string;
  developers:string;
  deviess:string;
  genres:string;
  pegis:string;

  ngOnInit(): void {
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
  tjek(gamenames,gamepublisher,gamedeveloper,gamedevies,gamegenre,gamepegi,date){
      this.post.game_name=gamenames,
      this.post.game_publisher=this.cutstring(gamepublisher),
      this.post.game_developer=this.cutstring(gamedeveloper),
      this.post.devices=this.cutstring(gamedevies),
      this.post.genre=this.cutstring(gamegenre),
      this.post.PEGI=gamepegi[0],
      this.post.release_date=date,
      console.log(this.post); 
      this.http.post(this.url,this.post).subscribe();
      this.dialogRef.closeAll();
      }

  cutstring(a)
  {

    var str = a;
    var res = str.replace(/\D/g, "");
    return(res);

  }
  /*alphaOnly(a) {
    var b = '';
    for (var i = 0; i < a.length; i++) {
        if (a[i] >= 'A' && a[i] <= 'z') b += a[i];
    }
    return b;
}*/
 /* onNoClick(){
    this.dialogRef.closeAll();
  }*/
}

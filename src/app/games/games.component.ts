//import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { Dto } from '../dto';
import { MatTableDataSource } from '@angular/material/table';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';
import { GameComponent } from '../game/game.component';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})





export class GamesComponent implements OnInit {
 
  constructor(private _http:HttpService,public dialog: MatDialog ) { }
  games:object;
  publisher:object;
  developer:object;
  devies:object;
  genre:object;
  PEGI:object;
  number:number;
  product_type:string;
  log(id){
    this.product_type= ""+id;
    console.log(this.product_type)
  }
  Opendialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent)
    
  }
  OpendialogDeleate():void{
    let dialogRef = this.dialog.open(DeletepopupComponent)
  }
  consolelog(num1){
    console.log(num1);
    this.number=num1;
  }
  Redigeragame(){
    this.dialog.open(SelectComponent)

  }
  ngOnInit():void {
    
      this._http.getgames().subscribe(data =>{
        this.games = data;
      });
     /*this._http.getgamepublisher().subscribe(gp=>{
        this.gamepublishers=gp
        console.log(this.gamepublishers)
      });  */
  }
  
}


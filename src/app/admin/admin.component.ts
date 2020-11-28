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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private _http:HttpService,public dialog: MatDialog ) { }

  ngOnInit(): void {
        
    this._http.getgames().subscribe(data =>{
      this.games = data;
    });
  }
  games:object;//indeholder alle elememneter fra database efter den er fået det
  OpendialogDeleate():void{
    let dialogRef = this.dialog.open(DeletepopupComponent)//åberne vores Component
  }
}

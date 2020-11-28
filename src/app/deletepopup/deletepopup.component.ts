import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { MatDialog, MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.scss']
})
export class DeletepopupComponent implements OnInit {

  constructor(private _http:HttpService,public dialog: MatDialog) { }
  games:object;
  id:number;

  ngOnInit(): void {
    this._http.getgames().subscribe(data =>{
      this.games = data;
    });
  }
  Deleatgame(num1){
    this._http.deleatgame(this.cutstring(num1)).subscribe();
    console.log("game gone");
    this.dialog.closeAll();
  }
  cutstring(a)
  {
    var str = a;
    var res = str.replace(/\D/g, "");
    return(res);
  }
}

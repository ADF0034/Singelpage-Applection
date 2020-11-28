import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admingames',
  templateUrl: './admingames.component.html',
  styleUrls: ['./admingames.component.scss']
})
export class AdmingamesComponent implements OnInit {
  games:object;
  constructor(private _http:HttpService,public dialog: MatDialog ) { }

  ngOnInit(): void {
    this._http.getgames().subscribe(data =>{
      this.games = data;
    });
  }

}

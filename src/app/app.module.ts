import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { FormsModule, NgModel } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddgameComponent } from './addgame/addgame.component';
import { DeletepopupComponent } from './deletepopup/deletepopup.component';  
import {MatIconModule} from '@angular/material/icon';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import { SelectComponent } from './select/select.component';
import { AdmingamesComponent } from './admingames/admingames.component';
@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    DialogExampleComponent,
    AddgameComponent,
    DeletepopupComponent,
    AdminComponent,
    SelectComponent,
    AdmingamesComponent,
  ],
  entryComponents:[DialogExampleComponent,DeletepopupComponent,GameComponent,SelectComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

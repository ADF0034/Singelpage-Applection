import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games/games.component';
import { AddgameComponent } from './addgame/addgame.component';
import { AdminComponent } from './admin/admin.component';
import { AdmingamesComponent } from './admingames/admingames.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DeletepopupComponent } from './deletepopup/deletepopup.component';
import { SelectComponent } from './select/select.component';
const routes: Routes = [
  {path:'Games', component: GamesComponent},
  {path:'Addgame', component: AddgameComponent},
  {path:'admin', component: AdminComponent,
  children:[
    {
      path: 'admingames', // child route path
      component: AdmingamesComponent, // child route component that the router renders
    },
    {
      path: 'addgame', // child route path
      component: DialogExampleComponent, // child route component that the router renders
    },
    {
      path: 'editgame', // child route path
      component: SelectComponent, // child route component that the router renders
    }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

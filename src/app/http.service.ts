import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
            /// <summary>
            /// denne her ts fil er lave så jeg har alle kald til api samlet et tid
            /// </summary>
export class HttpService {
  url="https://localhost:44336/api/"
  constructor(private http: HttpClient) { }
  //henter alle games i databasen
  public getgames(){
    return this.http.get(this.url+"Gaming");
  }
  //henter alle genre i databasen
  public getgenre(){
    return this.http.get(this.url+"genre");
  }
  //henter alle genre i databasen
  public getpegi(){
    return this.http.get(this.url+"pegi");
  }
  //henter alle genre i databasen
  public getdevies(){
    return this.http.get(this.url+"devies");
  }
  //henter alle genre i databasen
  public getgamedeveloper(){
    return this.http.get(this.url+"gamedeveloper");
  }
  //henter alle genre i databasen
  getgamepublisher(){
    return this.http.get(this.url+"gamepublisher");
  }
   //gøre at vi kan erstatte elementer i databasen
  putgame(id:number,dto){
    return this.http.put(this.url+"Gaming/"+id,dto)
  }
   //gøre at vi kan insætte elementer i databasen
  postgame(dto){
    return this.http.post(this.url+"Gaming",dto)
  }
  //gøre at vi kan slette elementer i databasen
  deleatgame(id:number){
    return this.http.delete("https://localhost:44336/api/Gaming/"+id)
  }
}

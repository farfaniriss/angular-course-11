import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = "https://heroesapp-14cba.firebaseio.com/heroes.json";
  heroeURL = "https://heroesapp-14cba.firebaseio.com/heroes/";


  constructor(private http: HttpClient) { }

  newHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post(this.heroesURL, body, {headers} ).pipe(
      map( res => {
        return res;
            
          })
      );
  }

  updateHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${ this.heroeURL }${ key$ }.json`
    
    return this.http.put( url, body, {headers} ).pipe(
      map( res => {
        return res;
            
          })
      );
  }

  getHeroe( key$: string){
    const url = `${ this.heroeURL }${ key$ }.json`
    return this.http.get( url ).pipe(
      map( res => {
        return res;
          })
      );
  }

  getHeroes(){
    
    return this.http.get( this.heroesURL ).pipe(
      map( res => {
        return res;
          })
      );
  }

  deleteHeroe(key$: string){
    const url = `${ this.heroeURL }${ key$ }.json`

    return this.http.delete( url ).pipe(
      map( res => {
        return res;
          })
      );
  }
}

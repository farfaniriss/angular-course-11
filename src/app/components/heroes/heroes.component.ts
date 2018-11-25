import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading:boolean = false;
  constructor(private heroesService: HeroesService) {
    this.loading = true;
    this.heroesService.getHeroes()
      .subscribe( (data: any) => {
        
        // console.log(data);

        // for (let key$ in data) {
        //   console.log( data[key$] );
        //   this.heroes.push(data[key$]);          
        // }

        //replacing the code with a pipe
        
        setTimeout(() => {
          this.loading = false;  
          this.heroes = data;
        }, 1000);
        
      })
   }

  ngOnInit() {
  }

  deleteHeroe(key$: string){
    this.heroesService.deleteHeroe(key$)
      .subscribe( resp => {
        if (resp) { 
          console.error (resp)
        } else {
          //looks good
          delete this.heroes[key$]
        }
      });
  }

}

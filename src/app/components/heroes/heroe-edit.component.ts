import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styleUrls: ['./heroe-edit.component.css']
})
export class HeroeEditComponent implements OnInit {

 heroe: Heroe = {
   name: '',
   bio: '',
   home: 'Marvel'
 };

 new: boolean = false;
 id: string;

  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

                this.activatedRoute.params
                    .subscribe( params => {
                        this.id = params['id'];
                        if (this.id !== "new"){
                          this.heroesService.getHeroe( this.id )
                              .subscribe( (data: any) => this.heroe = data )
                        }
                    })
               }

  ngOnInit() {
  }

  save() {
    console.log(this.id);
    if (this.id == "new"){
      this.heroesService.newHeroe(this.heroe)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/heroe', data['name']]);
    }, error => console.log(error));
    } else {
      this.heroesService.updateHeroe(this.heroe, this.id)
      .subscribe(data => {
        console.log(data);
        //this.router.navigate(['/heroe', data['name']]);
    }, error => console.log(error));
    }
    
    console.log(this.heroe);
  }


  addNeww( forma: NgForm){
    this.router.navigate(['/heroe', 'new']);
    forma.reset({
      home: "Marvel"
    });
  }

}

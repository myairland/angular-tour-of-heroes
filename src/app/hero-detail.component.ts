import { Component,Input,OnInit } from '@angular/core'; 
import { ActivatedRoute,ParamMap  } from "@angular/router";
import { Location } from "@angular/common";
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

import { HeroService } from "./hero.service";

@Component({
    selector : 'hero-detail',
    templateUrl : './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    @Input() hero:Hero;

    constructor(
      private heroService:HeroService,
      private router:ActivatedRoute,
      private location:Location
    ){}

    ngOnInit():void{
      this.router.paramMap
        .switchMap((params:ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }

    goBack():void{
      this.location.back();
    }
}



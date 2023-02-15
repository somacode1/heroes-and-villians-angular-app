import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-villians-grid',
  templateUrl: './heroes-villians-grid.component.html',
  styleUrls: ['./heroes-villians-grid.component.css']
})
export class HeroesVilliansGridComponent {

  heroesAndVillians = [
    {
      id: 1,
      imgUrl: 'assets/img/aqua-man.jpeg',
      alt: 'aquaman'
    },
    {
      id: 2,
      imgUrl: 'assets/img/batman.jpeg',
      alt: 'batman'
    },
    {
      id: 3,
      imgUrl: 'assets/img/blackpanther.jpeg',
      alt: 'blackpanther'
    }, {
      id: 4,
      imgUrl: 'assets/img/dare-devil.jpeg',
      alt: 'daredevil'
    },
    {
      id: 5,
      imgUrl: 'assets/img/deadpool.jpeg',
      alt: 'deadpool'
    }, {
      id: 6,
      imgUrl: 'assets/img/dr.fate.jpeg',
      alt: 'dr.fate'
    }, {
      id: 7,
      imgUrl: 'assets/img/dr.manhanttan.jpeg',
      alt: 'dr.manhanttan'
    }, {
      id: 8,
      imgUrl: 'assets/img/fisk.jpeg',
      alt: 'fisk'
    }, {
      id: 9,
      imgUrl: 'assets/img/flash.jpeg',
      alt: 'flash'
    }, {
      id: 10,
      imgUrl: 'assets/img/loki.jpeg',
      alt: 'loki'
    }, {
      id: 11,
      imgUrl: 'assets/img/omniman.jpeg',
      alt: 'omniman'
    }, {
      id: 12,
      imgUrl: 'assets/img/aqua-man.jpeg',
      alt: 'aquaman'
    }
  ]
  constructor() {

  }
}

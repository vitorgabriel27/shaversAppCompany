import { Component } from '@angular/core';

@Component({
  selector: 'new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss'],
  
})
export class NewServiceComponent {

  constructor () {};
  
  public options = [
    {
      categorie:'',
    },
    {
      categorie:'Dêgrade',
    },
    {
      categorie:'Dêgrade Navalhado',
    },
    {
      categorie:'Infantil',
    },
    {
      categorie:'Franja',
    },
    {
      categorie:'Progressiva',
    },
    {
      categorie:'Social',
    },
    {
      categorie:'Hidratação',
    },

  ];
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'new-services',
  templateUrl: './new-services.component.html',
  styleUrls: ['./new-services.component.scss'],
  
})
export class NewServicesComponent {

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
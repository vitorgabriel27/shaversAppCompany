import { Component } from '@angular/core';

@Component({
  selector: 'add-available',
  templateUrl: './add-available.component.html',
  styleUrls: ['./add-available.component.scss'],
})
export class AddAvailableComponent {

  constructor () {};

  public week = [
    {
    name: "Seg",
    },
    {
      name: "Ter",
    },
    {
      name: "Qua",
    },
    {
      name: "Qui",
    },
    {
      name: "Sex",
    },
    {
      name: "Sab",
    },
    {
      name: "Dom",
    },
  ];

  public values = [
    {
      item: '',
    },
    {
      item: '11h00 ás 12h00',
    },
    {
      item: '12h00 ás 13h00',
    },
    {
      item: '13h00 ás 14h00',
    },
  ];
  
}
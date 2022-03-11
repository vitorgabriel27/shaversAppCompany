import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  public schedules = [
    {
      id: 1,
      title: 'Corte social e Barbaterapia',
      status: 'Pendente',
      locale: 'Salão',
      date: '02/10/2021',
      time: '15H30',
      price: '$65',
      transp: '$5',
      total: '$70',
      name: 'Thomas Wilson',
      city: 'São Paulo/SP',
      imgUrl: 'https://randomuser.me/api/portraits/lego/4.jpg',
    },
    {
      id: 2,
      title: 'Corte social',
      status: 'Pendente',
      locale: 'Salão',
      date: '02/10/2021',
      time: '15H30',
      price: '$65',
      transp: '$5',
      total: '$70',
      name: 'Thomas Wilson',
      city: 'São Paulo/SP',
      imgUrl: 'https://randomuser.me/api/portraits/lego/1.jpg',
    },
  ];
}

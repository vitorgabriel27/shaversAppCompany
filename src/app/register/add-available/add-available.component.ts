import { Component } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'add-available',
  templateUrl: './add-available.component.html',
  styleUrls: ['./add-available.component.scss'],
})
export class AddAvailableComponent {

  constructor () {};

  value1: number = 9;
  highValue1: number = 18;
  options: Options = {
    floor: 9,
    ceil: 18,
    showSelectionBar: true,
    getPointerColor: (value: number): string => {
      return '#48CC11';
    },
    getSelectionBarColor: (value: number): string => {
      return '#48CC11';
    }
  };
  value2: number = 10;
  highValue2: number = 18;
  options1: Options = {
    floor: 10,
    ceil: 18,
    showSelectionBar: true,
    getPointerColor: (value: number): string => {
      return '#48CC11';
    },
    getSelectionBarColor: (value: number): string => {
      return '#48CC11';
    }
  };
;

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
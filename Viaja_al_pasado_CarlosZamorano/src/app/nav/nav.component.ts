import { Component, OnInit } from '@angular/core';
import { Item } from '../Clases/Item';
import { ITEMS } from '../Clases/listItem';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Servicio } from './../Clases/Servicio';
import { ServicioService } from './../services/servicio.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items = ITEMS;
  a: any;
  lis: any;
  items2: Servicio [];

  constructor( public servicio: ServicioService ) { }

  ngOnInit() {

    this.a = document.getElementsByClassName('dropdown-menu');
    this.a[0].setAttribute('class', 'dropdown-menu');

    this.servicio.getServicios().subscribe
    (servicios => {
        this.items2 = servicios;
    });

    this.lis = document.getElementsByClassName('nav-item');
    for (const key in this.lis) {
      if (this.lis.hasOwnProperty(key)) {
        const element = this.lis[key];
        element.click(() => {
          /**
           * Aqui deberia ir el codigo que hace que al hacer click en un elemnto del menu...
           * se vuelva a esconder
           */
        });
      }
    }
  }

}

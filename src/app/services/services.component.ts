import { Component, OnInit } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { SERVICIOS } from '../Clases/listServicios';
import { Servicio } from '../Clases/Servicio';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {

  title = 'Estamos a su Disposición';
  servicios: Servicio[] = SERVICIOS;

  constructor() { }

  ngOnInit() {
    this.servicios = SERVICIOS.sort((b: any, a: any) => {
      if (a.id > b.id) {
        return -1;

      } else if (a.id < b.id) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}

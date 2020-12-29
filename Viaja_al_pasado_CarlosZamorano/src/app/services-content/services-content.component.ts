import { Component, OnInit } from '@angular/core';
import { SERVICIOS } from './../Clases/listServicios';
import { Servicio } from './../Clases/Servicio';
import { NgForOf } from '@angular/common';
import { OrdenarPrecioPipe } from './../pipes/ordenar-precio.pipe';
import { ServicioService } from './../services/servicio.service';

@Component({
  selector: 'app-services-content',
  templateUrl: './services-content.component.html',
  styleUrls: ['./services-content.component.css']
})
export class ServicesContentComponent implements OnInit {

  title = 'Nuestras Casas';
  description = 'Nuestra empresa se basa en el alquiler de casas' +
  ' tematizadas en el mundo árabe, incluyendo unas rutas deportivas y visitas guiadas por la localidad a un precio mínimo,' +
  ' añadiendo un catering tanto de comida típica de la localidad como de comida árabe.';
  opcion = 0;
  servicios: Servicio[];

  constructor( public servicio: ServicioService ) { }

  ngOnInit() {
    this.servicio.getServicios().subscribe
    (servicios => {
        this.servicios = servicios;
      });
  }

  cambiar(valor: number): void {
    this.opcion = valor;
  }
}

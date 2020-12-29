import { Component, OnInit, Input } from '@angular/core';
import { SERVICIOS } from './../Clases/listServicios';
import { Servicio } from './../Clases/Servicio';
import { NgForOf } from '@angular/common';
import { ServicioService } from './../services/servicio.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-servicio-detail',
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {

  servicios: Servicio[];
  servicio: Servicio;
  id: string;

  constructor(
    private location: Location,
    public servicioS: ServicioService,
    private route: ActivatedRoute
  ) { }

  goBack(): void {
    this.location.back();
  }

  evalueClass(op: string, cad: string): boolean {
    if (op === cad) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {

    this.servicioS.getServicios().subscribe
    (servicios => {
        this.servicios = servicios;
    });

    this.route.params.subscribe(params => {
      this.id = (params['id']);
    });
  }

}

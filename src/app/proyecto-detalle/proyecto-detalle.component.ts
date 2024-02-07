import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['./proyecto-detalle.component.css']
})
export class ProyectoDetalleComponent implements OnInit {
  proyectoId: string= ''; // Agrega un inicializador aquí;

  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.proyectoId = params['id'];
      // Ahora puedes utilizar this.proyectoId para cargar la información específica del proyecto.
    });
  }
}
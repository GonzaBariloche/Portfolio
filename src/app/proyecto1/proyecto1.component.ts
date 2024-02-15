// proyecto1.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.css']
})
export class Proyecto1Component {
  productos: string[] = ['Arroz', 'Papel Higiénico', 'Lavandina', 'Agua Mineral', 'Galletitas'];
  bolsasDeTela: number = 0;

  calcularBolsas(): void {
    // Implementa tu lógica de cálculo de bolsas aquí
    // Puedes usar la cantidad de productos y sus tipos para realizar el cálculo
    // Actualiza la variable bolsasDeTela con el resultado
  }
}

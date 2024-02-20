// proyecto1.component.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styleUrls: ['./proyecto1.component.css']
})

export class Proyecto1Component implements OnInit {

  listaProductos: { nombre: string; imagen: string }[] = [
    { nombre: 'Arroz', imagen: 'https://www.mayoristanet.com/media/catalog/product/cache/7c7e7e8fca0426f106cb3e3371a80f9c/A/0/A08354_2.jpg' },
    { nombre: 'Papel Higiénico', imagen: 'https://http2.mlstatic.com/D_NQ_NP_728208-MLU72998937907_112023-O.webp' },
    { nombre: 'Lavandina', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70TEGOU0CMxhNOxTWACed_vhbtDUJAEFknw&usqp=CAU' },
    { nombre: 'Agua Mineral', imagen: 'https://arcordiezb2c.vteximg.com.br/arquivos/ids/163320/Agua-Mineral-sin-Gas-Bonaqua-500-Cc-1-6289.jpg?v=637541081615330000' },
    { nombre: 'Galletitas', imagen: 'https://arcorencasa.com/wp-content/uploads/2023/08/20230824-13931.jpg' },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  cantidades: { [producto: string]: number } = {};
  bolsasDeTela: number = 0;

  restarCantidad(producto: { nombre: string; imagen: string }): void {
    const nombreProducto = producto.nombre;
    this.cantidades[nombreProducto] = (this.cantidades[nombreProducto] || 0) - 1;
    this.calcularBolsas(); // Llamada a calcularBolsas aquí
    this.cdr.detectChanges();
  }

  sumarCantidad(producto: { nombre: string; imagen: string }): void {
    const nombreProducto = producto.nombre;
    this.cantidades[nombreProducto] = (this.cantidades[nombreProducto] || 0) + 1;
    this.calcularBolsas(); // Llamada a calcularBolsas aquí
    this.cdr.detectChanges();
  }

  calcularBolsas(): void {
    console.log('Calculando bolsas...');
    const volumenPorBolsa = 15360; // Volumen estimado por bolsa en cm³

    this.bolsasDeTela = 0;

    for (const producto of this.listaProductos) {
      // Considera un volumen adicional para productos de limpieza
      const volumenAdicional = this.esProductoDeLimpieza(producto) ? volumenPorBolsa : 0;

      // Asegúrate de que estás accediendo a la propiedad 'nombre' del objeto 'producto'
      const cantidad = this.cantidades[producto.nombre] || 0;
      const volumenTotal = cantidad * this.obtenerVolumenEstimado(producto.nombre) + volumenAdicional;

      // Calcula la cantidad de bolsas necesarias para cada producto
      const bolsasParaProducto = Math.ceil(volumenTotal / volumenPorBolsa);

      // Suma la cantidad de bolsas necesarias al total
      this.bolsasDeTela += bolsasParaProducto;
      console.log(`Total de bolsas: ${this.bolsasDeTela}`)
    }
  }

  // Función para verificar si un producto es de limpieza
  esProductoDeLimpieza(producto: { nombre: string; imagen: string }): boolean {
    // Puedes ajustar esto según tus necesidades
    return producto.nombre.toLowerCase().includes('lavandina') || producto.nombre.toLowerCase().includes('papel higiénico');
  }

  // Función para obtener el volumen estimado de un producto (puedes ajustar según tus necesidades)
  obtenerVolumenEstimado(producto: string): number {
    // Esto es solo un ejemplo, puedes ajustar los valores según tus necesidades
    const volumenesEstimados: { [producto: string]: number } = {
      arroz: 1200, // cm³ por paquete de arroz
      papelHigienico: 7000, // cm³ por paquete de papel higiénico
      lavandina: 750, // cm³ por botella de lavandina
      aguaMineral: 500, // cm³ por botella de agua mineral
      galletitas: 1200, // cm³ por paquete de galletitas
    };

    return volumenesEstimados[producto.toLowerCase()] || 0;
  }

  ngOnInit(): void {
    this.bolsasDeTela = 0;
    // Llama a calcularBolsas al inicializar el componente
    this.calcularBolsas();
  }
}

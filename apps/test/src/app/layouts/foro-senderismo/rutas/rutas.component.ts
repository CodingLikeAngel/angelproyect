import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Ruta {
  nombre: string;
  distancia: string;
  dificultad: 'facil' | 'moderada' | 'dificil';
}

@Component({
  selector: 'app-rutas',
  imports: [CommonModule],
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss'],
})
export class RutasComponent {
  rutas: Ruta[] = [
    { nombre: 'Ruta del Cares', distancia: '12 km', dificultad: 'moderada' },
    { nombre: 'Lagos de Saliencia', distancia: '9 km', dificultad: 'facil' },
    { nombre: 'Peña Ubiña', distancia: '14 km', dificultad: 'dificil' },
    { nombre: 'Senda del Arcediano', distancia: '13 km', dificultad: 'moderada' },
    { nombre: 'Ruta de las Fuentes Medicinales', distancia: '10 km', dificultad: 'facil' },
    { nombre: 'Ascensión al Pico Gilbo', distancia: '7 km', dificultad: 'dificil' },
    { nombre: 'Ruta de los Calderones', distancia: '8 km', dificultad: 'moderada' },
    { nombre: 'Camino de San Salvador: León a La Robla', distancia: '28 km', dificultad: 'dificil' },
    { nombre: 'Ruta de las Hoces de Vegacervera', distancia: '6 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Silencio', distancia: '12 km', dificultad: 'moderada' },
    { nombre: 'Ruta de los Monasterios', distancia: '15 km', dificultad: 'moderada' },
    { nombre: 'Ruta de las Minas de Oro de Las Omañas', distancia: '9 km', dificultad: 'facil' },
    { nombre: 'Ruta de los Pantanos', distancia: '20 km', dificultad: 'dificil' },
    { nombre: 'Ruta de los Picos de Europa Leoneses', distancia: '18 km', dificultad: 'dificil' },
    { nombre: 'Ruta de los Puertos de Marabio', distancia: '14 km', dificultad: 'moderada' },
    { nombre: 'Ruta de los Valles de Babia', distancia: '16 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Hayedo de Busmayor', distancia: '5 km', dificultad: 'facil' },
    { nombre: 'Ruta del Lago de Truchillas', distancia: '9 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Nacimiento del Río Sil', distancia: '8 km', dificultad: 'facil' },
    { nombre: 'Ruta del Pico Catoute', distancia: '17 km', dificultad: 'dificil' },
    { nombre: 'Ruta del Pico Polvoreda', distancia: '12 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle de Arbás', distancia: '10 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle de Fornela', distancia: '15 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle de Laciana', distancia: '13 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle de Sajambre', distancia: '11 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle de Valdeón', distancia: '14 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Silencio', distancia: '12 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle Gordo', distancia: '9 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Oza', distancia: '10 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Silván', distancia: '8 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Torío', distancia: '13 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Valcarce', distancia: '15 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Valdeón', distancia: '14 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Valporquero', distancia: '7 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Vegacervera', distancia: '6 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Yuso', distancia: '9 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Zurriegas', distancia: '8 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Ésera', distancia: '12 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Íbias', distancia: '10 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Órbigo', distancia: '11 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Órbigo Superior', distancia: '13 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Órbigo Inferior', distancia: '9 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Porma', distancia: '14 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Bernesga', distancia: '12 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Curueño', distancia: '10 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Esla', distancia: '15 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Luna', distancia: '13 km', dificultad: 'moderada' },
    { nombre: 'Ruta del Valle del Omaña', distancia: '11 km', dificultad: 'facil' },
    { nombre: 'Ruta del Valle del Sil', distancia: '14 km', dificultad: 'moderada' },
  ];
  
}

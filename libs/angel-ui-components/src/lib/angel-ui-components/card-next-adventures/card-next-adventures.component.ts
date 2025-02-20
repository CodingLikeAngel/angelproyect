import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Adventure {
  title: string;
  date: string;
  spots: number;
  difficulty: string;
  rating: number;
  guides: { name: string; photo: string }[];
  imageUrl: string;
}

@Component({
  selector: 'lib-card-next-adventures',
  imports: [CommonModule],
  templateUrl: './card-next-adventures.component.html',
  styleUrls: ['./card-next-adventures.component.scss'],
})
export class CardNextAdventuresComponent {
  adventures: Adventure[] = [
    {
      title: 'Ruta Otoñal',
      date: '15 Oct 2024',
      spots: 25,
      difficulty: 'Dificultad Media',
      rating: 4.8,
      guides: [
        { name: 'Ana', photo: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Carlos', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6',
    },
    // Puedes agregar más aventuras aquí
  ];


  getGuideNames(adventure: Adventure): string {
    return adventure.guides.map(g => g.name).join(' & ');
  }
}

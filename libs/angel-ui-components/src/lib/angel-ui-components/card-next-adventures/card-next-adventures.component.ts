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
  standalone: true,
})
export class CardNextAdventuresComponent {
  adventures: Adventure[] = [
    {
      title: 'Ruta Otoñal',
      date: '15 Oct 2024',
      spots: 25,
      difficulty: 'Media',
      rating: 4.8,
      guides: [
        { name: 'Ana', photo: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Carlos', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6',
    },
    {
      title: 'Ascenso Nocturno',
      date: '20 Nov 2024',
      spots: 15,
      difficulty: 'Alta',
      rating: 4.9,
      guides: [
        { name: 'Lucía', photo: 'https://randomuser.me/api/portraits/women/3.jpg' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e',
    },
    {
      title: 'Sendero Familiar',
      date: '5 Dic 2024',
      spots: 30,
      difficulty: 'Baja',
      rating: 4.7,
      guides: [
        { name: 'María', photo: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: 'Juan', photo: 'https://randomuser.me/api/portraits/men/5.jpg' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    },
  ];

  getGuideNames(adventure: Adventure): string {
    return adventure.guides.map(g => g.name).join(' & ');
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty.toLowerCase()) {
      case 'baja': return 'var(--neon-green)';
      case 'media': return 'var(--neon-yellow)';
      case 'alta': return 'var(--neon-pink)';
      default: return 'var(--neon-cyan)';
    }
  }
}
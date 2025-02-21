import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './../card.component';

const meta: Meta<CardComponent> = {
  title: 'SharedUi/Card',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    image: {
      control: 'text',
      description: 'URL de la imagen del post',
    },
    title: {
      control: 'text',
      description: 'Título del post',
    },
    excerpt: {
      control: 'text',
      description: 'Extracto o resumen del post',
    },
    date: {
      control: 'text',
      description: 'Fecha de publicación del post',
    },
    author: {
      control: 'text',
      description: 'Autor del post',
    },
    readMoreUrl: {
      control: 'text',
      description: 'URL para leer más del post',
    },
    category: {
      control: 'text',
      description: 'Categoría del post',
    },
    authorInitials: {
      control: 'text',
      description: 'Iniciales del autor',
    },
    tag: {
      control: 'text',
      description: 'Etiqueta temática',
    },
    showCategoryOverlay: {
      control: 'boolean',
      description: 'Mostrar overlay de categoría',
    },
    gradientFrom: {
      control: 'text',
      description: 'Color de inicio del gradiente',
    },
    gradientTo: {
      control: 'text',
      description: 'Color de fin del gradiente',
    },
    badgeColor: {
      control: 'text',
      description: 'Color del badge',
    },
    badgeTextColor: {
      control: 'text',
      description: 'Color del texto del badge',
    },
  },
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    image: 'https://via.placeholder.com/400x200',
    title: 'Título de ejemplo',
    excerpt: 'Este es un extracto del post que ofrece una vista previa del contenido.',
    date: '2025-02-16',
    author: 'Autor de ejemplo',
    readMoreUrl: '#',
    category: 'Blog',
    authorInitials: 'UA',
    tag: 'actualidad',
    showCategoryOverlay: true,
    gradientFrom: 'purple-600',
    gradientTo: 'pink-500',
    badgeColor: 'pink-100',
    badgeTextColor: 'pink-700',
  },
};

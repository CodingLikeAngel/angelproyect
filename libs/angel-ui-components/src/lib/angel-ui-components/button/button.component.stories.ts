import { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ButtonComponent } from '../button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'SharedUi/Botón',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
      description: 'Define el estilo del botón',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Define el tamaño del botón',
    },
    disabled: {
      control: 'boolean',
      description: 'Desactiva el botón',
    },
    loading: {
      control: 'boolean',
      description: 'Muestra un indicador de carga en el botón',
    },
    iconLeft: {
      control: 'text',
      description: 'Nombre del icono a la izquierda',
    },
    iconRight: {
      control: 'text',
      description: 'Nombre del icono a la derecha',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Historia principal del input (por defecto)
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button 
        [variant]="variant" 
        [size] ="size"
      >
        Botón
      </lib-button>
    `,
  }),
};

// Botón con iconos
export const ConIconos: Story = {
  args: {
    iconLeft: 'heroArrowPath',
    iconRight: 'heroArrowPath',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button 
        [variant]="secondary" 
        [iconLeft]="iconLeft"
        [iconRight]="iconRight"
      >
        Botón con Iconos
      </lib-button>
    `,
  }),
};

// Estado de carga
export const Cargando: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button variant="primary" [loading]="loading">
        Procesando...
      </lib-button>
    `,
  }),
};

// Botón deshabilitado
export const Deshabilitado: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-button variant="primary" [disabled]="disabled">
        Botón Deshabilitado
      </lib-button>
    `,
  }),
};

// Prueba de interacción
export const Interactivo: Story = {
  render: (args) => ({
    props: args,
    template: `
      <lib-button 
        variant="primary"
        (clicked)="clicked.emit($event)"
      >
        Hazme click
      </lib-button>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await userEvent.click(button);
    await expect(button).toBeEnabled();
  },
};

// Todos los tamaños
export const TodosLosTamaños: Story = {
  render: () => ({
    template: `
      <div class="flex flex-col gap-4 items-center">
        <lib-button size="sm">Pequeño</lib-button>
        <lib-button size="md">Mediano</lib-button>
        <lib-button size="lg">Grande</lib-button>
      </div>
    `,
  }),
};

// Todos los variantes
export const TodosLosVariantes: Story = {
  render: () => ({
    template: `
      <div class="flex flex-wrap gap-4 items-center">
        <lib-button variant="primary">Primario</lib-button>
        <lib-button variant="secondary">Secundario</lib-button>
        <lib-button variant="outline">Outline</lib-button>
        <lib-button variant="ghost">Ghost</lib-button>
        <lib-button variant="link">Link</lib-button>
      </div>
    `,
  }),
};

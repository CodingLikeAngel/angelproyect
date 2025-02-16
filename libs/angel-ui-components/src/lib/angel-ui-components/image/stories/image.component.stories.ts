import { Meta, StoryObj } from '@storybook/angular';
import { ImageComponent } from './../image.component';

const meta: Meta<ImageComponent> = {
    title: 'SharedUi/Imagen',
    component: ImageComponent,
    parameters: {
      layout: 'centered',
    },
    argTypes: {
      src: {
        control: 'text',
        description: 'Ruta de la imagen',
      },
      alt: {
        control: 'text',
        description: 'Texto alternativo de la imagen',
      },
      ancho: {
        control: 'text',
        description: 'Ancho de la imagen (ej: "200px", "100%")',
      },
      alto: {
        control: 'text',
        description: 'Alto de la imagen (ej: "200px", "auto")',
      },
      borde: {
        control: 'text',
        description: 'Estilo del borde de la imagen',
      },
      sombra: {
        control: 'text',
        description: 'Sombra de la imagen',
      },
      bordeRedondeado: {
        control: 'text',
        description: 'Radio de borde redondeado de la imagen',
      },
      opacidad: {
        control: 'text',
        description: 'Opacidad de la imagen',
      },
      filtro: {
        control: 'text',
        description: 'Filtro CSS aplicado a la imagen',
      },
      transicion: {
        control: 'text',
        description: 'Transición CSS aplicada a la imagen',
      },
    },
  };
  
  export default meta;
  type Story = StoryObj<ImageComponent>;
  
  export const Default: Story = {
    args: {
      src: 'https://via.placeholder.com/150',
      alt: 'Imagen de ejemplo',
      ancho: '200px',
      alto: '200px',
      borde: '2px solid #000',
      sombra: '0 4px 6px rgba(0, 0, 0, 0.1)',
      bordeRedondeado: '8px',
      opacidad: '1',
      filtro: 'none',
      transicion: 'all 0.3s ease-in-out',
    },
    render: (args) => ({
      props: args,
      template: `
        <lib-image
          [src]="src"
          [alt]="alt"
          [ancho]="ancho"
          [alto]="alto"
          [borde]="borde"
          [sombra]="sombra"
          [bordeRedondeado]="bordeRedondeado"
          [opacidad]="opacidad"
          [filtro]="filtro"
          [transicion]="transicion"
        ></lib-image>
      `,
    }),
  };

  
export const ConBordeRedondeado: Story = {
  args: {
    ...Default.args,
    bordeRedondeado: '8px',
  },
  render: Default.render,
};

export const ConSombra: Story = {
  args: {
    ...Default.args,
    sombra: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  render: Default.render,
};

export const ConFiltro: Story = {
  args: {
    ...Default.args,
    filtro: 'grayscale(50%)',
  },
  render: Default.render,
};

export const ConTransicion: Story = {
  args: {
    ...Default.args,
    transicion: 'all 0.3s ease-in-out',
  },
  render: Default.render,
};

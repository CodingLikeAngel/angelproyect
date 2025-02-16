import { Meta, StoryObj } from '@storybook/angular';
import { ArticleInputComponent } from './article-input.component';

const meta: Meta<ArticleInputComponent> = {
  title: 'SharedUi/Article Input',
  component: ArticleInputComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'El contenido actual del artículo'
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder del input'
    },
    rows: {
      control: 'number',
      description: 'Número de filas del textarea'
    },
    cols: {
      control: 'number',
      description: 'Número de columnas del textarea'
    },
    valueChange: {
      action: 'changed',
      description: 'Evento emitido cuando cambia el contenido'
    }
  },
};

export default meta;
type Story = StoryObj<ArticleInputComponent>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Escribe tu artículo aquí...',
    rows: 10,
    cols: 50,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-article-input
        [value]="value"
        [placeholder]="placeholder"
        [rows]="rows"
        [cols]="cols"
        (valueChange)="value = $event"
      ></lib-article-input>
    `,
  }),
};

export const ConTextoPredefinido: Story = {
  args: {
    value: 'Este es un ejemplo de artículo preescrito. Puedes editarlo o empezar desde cero...',
    placeholder: 'Redacta tu artículo aquí...',
    rows: 15,
    cols: 70,
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-article-input
        [value]="value"
        [placeholder]="placeholder"
        [rows]="rows"
        [cols]="cols"
        (valueChange)="value = $event"
      ></lib-article-input>
    `,
  }),
};

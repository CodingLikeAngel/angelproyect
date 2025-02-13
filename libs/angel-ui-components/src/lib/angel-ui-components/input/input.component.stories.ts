import { Meta, StoryObj } from '@storybook/angular';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { InputComponent } from './input.component';

// Definición de la metadata de la historia
const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'SharedUi/Input', // Título en Storybook
};

export default meta;

type Story = StoryObj<InputComponent>;

// Historia principal del input (por defecto)
export const Default: Story = {
  args: {
    placeholder: 'Enter text...', // Texto por defecto del placeholder
    type: 'text', // Tipo de input
    label: 'Text Input', // Etiqueta que aparece sobre el input
    accessibilityDescription: 'accessibilityDescription'
  },
};

// Historia de tipo password
export const Password: Story = {
  args: {
    placeholder: 'Enter password...', // Placeholder específico para contraseña
    type: 'password', // Tipo de input (password)
    label: 'Password Input', // Etiqueta para el input de contraseña
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Verifica que el placeholder esté correcto
    expect(canvas.getByPlaceholderText('Enter password...')).toBeTruthy();
  },
};

// Historia de tipo email
export const Email: Story = {
  args: {
    placeholder: 'Enter your email...', // Placeholder específico para email
    type: 'email', // Tipo de input (email)
    label: 'Email Input', // Etiqueta para el input de email
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Verifica que el placeholder esté correcto
    expect(canvas.getByPlaceholderText('Enter your email...')).toBeTruthy();
  },
};

// Historia de un input con un valor predefinido
export const WithPredefinedValue: Story = {
  args: {
    placeholder: 'Enter your username...',
    value: 'JohnDoe', // Valor por defecto
    label: 'Username Input', // Etiqueta
    type: 'text', // Tipo de input
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Verifica que el valor del input sea el correcto
    expect(canvas.getByDisplayValue('JohnDoe')).toBeTruthy();
  },
};

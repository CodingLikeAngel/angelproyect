import { Meta, StoryObj } from '@storybook/angular';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'SharedUi/Checkbox',
};

export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'Accept Terms and Conditions',
    checked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Accept Terms and Conditions')).toBeTruthy();
  },
};

export const Checked: Story = {
  args: {
    label: 'Accept Terms and Conditions',
    checked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Accept Terms and Conditions')).toBeTruthy();
  },
};

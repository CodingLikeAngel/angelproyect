import type { Meta, StoryObj } from '@storybook/angular';
import { AngelUiComponentsComponent } from './angel-ui-components.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AngelUiComponentsComponent> = {
  component: AngelUiComponentsComponent,
  title: 'AngelUiComponentsComponent',
};
export default meta;
type Story = StoryObj<AngelUiComponentsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/angel-ui-components works!/gi)).toBeTruthy();
  },
};

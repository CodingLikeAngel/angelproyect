import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'SharedUi/HeaderComponent',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {},
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/header works!/gi)).toBeTruthy();
//   },
// };


export const Desktop: Story = {};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByLabelText('Toggle mobile menu');
    await userEvent.click(menuButton);
    const mobileMenu = canvas.getByRole('navigation').querySelector('.md\\:hidden');
    expect(mobileMenu).toHaveStyle('max-height: 400px');
  },
};




import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button/Button";


const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    disabled: false,
    text: 'Submit',
  },
  play: async () => {

  }
};


export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Submit',
  },
};



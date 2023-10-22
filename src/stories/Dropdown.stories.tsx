import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../components/Dropdown/Dropdown";


const meta: Meta<typeof Dropdown> = {
    component: Dropdown,
    title: "Marbella/Dropdown",
    argTypes: {},
  };

  export default meta;

  type Story = StoryObj<typeof Dropdown>;

  export const Primary: Story = {
    args: {
    
    },
  };
  
  

  

import { Meta, StoryObj } from "@storybook/react";
import Slide from "../../components/MotionComps/Slide/Slide";


const meta: Meta<typeof Slide> = {
    component: Slide,
    title: "Motion/Slide",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Slide>;

export const Primary: Story = {
    args: {
      
    },

};




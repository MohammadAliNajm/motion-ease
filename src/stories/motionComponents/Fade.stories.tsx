import { Meta, StoryObj } from "@storybook/react";
import Fade from "../../components/MotionComps/Fade/Fade";


const meta: Meta<typeof Fade> = {
    component: Fade,
    title: "Motion/Fade",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Fade>;

export const Primary: Story = {
    args: {
        children: "Testing Fade",
        duration:2
    },

};




import { Meta, StoryObj } from "@storybook/react";
import TextFlip from "../../components/MotionComps/TextFlip/TextFlip";


const meta: Meta<typeof TextFlip> = {
    component: TextFlip,
    title: "Motion/TextFlip",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextFlip>;

export const Primary: Story = {
    args: {

    },

};




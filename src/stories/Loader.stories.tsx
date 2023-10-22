import { Meta, StoryObj } from "@storybook/react";
import Loader from "../components/loader/Loader";


const meta: Meta<typeof Loader> = {
    component: Loader,
    title: "Marbella/Loader",
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
    args: {

    },

};





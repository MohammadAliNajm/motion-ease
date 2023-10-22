import { Meta, StoryObj } from '@storybook/react';
import Toast from '../components/Toast/Toast';


const meta: Meta<typeof Toast> = {
    component: Toast,
    title: 'Toast',
    argTypes: {}
}

export default meta;

type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
    args: {
        opened: true,
        text:'You have an error!',
        title:'Title'
    },
};
                    
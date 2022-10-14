import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: "I'm a Button",
        size: 'md',
    },
    argTypes: {}
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
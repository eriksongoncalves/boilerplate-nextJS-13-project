import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonProps } from '.'

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: {
    size: 'sm',
    children: 'Custom text',
    fullWidth: false
  }
}

export default meta

export const Default: StoryObj<ButtonProps> = {}

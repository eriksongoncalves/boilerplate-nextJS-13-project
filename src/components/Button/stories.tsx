import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonProps } from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    size: 'sm',
    children: 'Custom text',
    fullWidth: false
  }
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

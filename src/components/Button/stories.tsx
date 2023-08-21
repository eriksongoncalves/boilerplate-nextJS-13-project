import type { Meta, StoryObj } from '@storybook/react'

import Button, { ButtonProps } from '.'

const meta = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Custom text'
  }
}

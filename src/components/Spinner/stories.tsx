import type { Meta, StoryObj } from '@storybook/react'

import Spinner, { SpinnerProps } from '.'

const meta = {
  title: 'Components/Spinner',
  component: Spinner
} satisfies Meta<SpinnerProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

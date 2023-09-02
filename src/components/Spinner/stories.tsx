import type { Meta, StoryObj } from '@storybook/react'

import Spinner, { SpinnerProps } from '.'

const meta: Meta<SpinnerProps> = {
  title: 'Components/Spinner',
  component: Spinner
}

export default meta

export const Default: StoryObj<SpinnerProps> = {
  args: {}
}

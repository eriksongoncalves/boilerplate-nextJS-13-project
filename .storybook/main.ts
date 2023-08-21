import type { StorybookConfig } from '@storybook/nextjs'

import { storyIndexers } from './csf-indexer'

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  storyIndexers
}
export default config

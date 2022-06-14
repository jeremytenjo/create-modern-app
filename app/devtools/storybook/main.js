module.exports = {
  stories: [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(ts|tsx)',
    '../../functions/src/**/*.stories.@(ts|tsx)',
  ],
  staticDirs: ['../../public'],
  features: { emotionAlias: false, storyStoreV7: true },
  framework: '@storybook/react',
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
}

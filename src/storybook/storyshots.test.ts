import initStoryshots, {
  snapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex: /^((?!.*?Vertical Menu|PopOver|Feature Tour Panel).)*$/,
  storyNameRegex: /^((?!.*?DateSelect|Date Range|ColorSelect).)*$/,
  test: snapshotWithOptions(() => ({
    createNodeMock: () => document.createElement('div'),
  })),
});

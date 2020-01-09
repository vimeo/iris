import initStoryshots, {
  snapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex: /^((?!.*?portals|Marks).)*$/,
  test: snapshotWithOptions(() => ({
    createNodeMock: () => document.createElement('div'),
  })),
});

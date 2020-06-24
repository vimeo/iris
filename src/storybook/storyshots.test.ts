import initStoryshots, {
  snapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex: /^((?!.*?Modal|PopOver|Tip|Annotation|withGlobalStyles).)*$/,
  test: snapshotWithOptions(() => ({
    createNodeMock: () => document.createElement('div'),
  })),
});

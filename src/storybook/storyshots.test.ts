import initStoryshots, {
  snapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex: /^((?!.*?Modal|PopOver|Tip|Annotation|useMeasure|Grid|VideoList|SlideUpDown|Examples|withGlobalStyles|labs).)*$/,
  test: snapshotWithOptions(() => ({
    createNodeMock: () => document.createElement('div'),
  })),
});

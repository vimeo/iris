import { CustomProjectConfig } from 'lost-pixel';

// https://docs.lost-pixel.com/user-docs/api-reference/lost-pixel.config.js-or-ts
export const config: CustomProjectConfig = {
  browser: 'chromium',
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  threshold: 3,
  imagePathBaseline: './baseline-images',
  imagePathCurrent: './current-images',
  imagePathDifference: './difference-images',
  generateOnly: true,
  failOnDifference: true,
};

import { CustomProjectConfig } from 'lost-pixel';

// https://docs.lost-pixel.com/user-docs/api-reference/lost-pixel.config.js-or-ts
export const config: CustomProjectConfig = {
  browser: 'chromium',
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  threshold: 3,
  imagePathBaseline: './lost-pixel/baseline-images',
  imagePathCurrent: './lost-pixel/current-images',
  imagePathDifference: './lost-pixel/difference-images',
  generateOnly: true,
  failOnDifference: true,
};

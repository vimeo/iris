import { CustomProjectConfig } from 'lost-pixel';

// https://docs.lost-pixel.com/user-docs/api-reference/lost-pixel.config.js-or-ts
export const config: CustomProjectConfig = {
  browser: 'chromium',
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  threshold: 3,
  imagePathBaseline: './lost-pixel/baseline',
  imagePathCurrent: './lost-pixel/current',
  imagePathDifference: './lost-pixel/difference',
  generateOnly: true,
  failOnDifference: true,
};

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';

storiesOf('legacy', module).add('link to old docs', () => {
  window.open(
    'https://github.vimeows.com/pages/vimeo/iris/docs/',
    '_blank',
  );
  return (
    <a
      href="https://github.vimeows.com/pages/vimeo/iris/docs/"
      target="_blank"
    >
      <Button>old docs</Button>
    </a>
  );
});

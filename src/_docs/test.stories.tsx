import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Iris|Home', module).add('Redirect', () => <Redirect />);

function Redirect() {
  const { origin } = window.location;
  const { location } = window.top;
  const { pathname } = location;

  const welcome = '?path=/story/iris-welcome--page';
  location.replace(origin + pathname + welcome);

  return <div />;
}

// export default { title: 'Iris|Home' };

// export function Redirect() {
//   const { origin } = window.location;
//   const { location } = window.top;

//   location.replace(`${origin}?path=/docs/iris-welcome--page`);

//   return null;
// }

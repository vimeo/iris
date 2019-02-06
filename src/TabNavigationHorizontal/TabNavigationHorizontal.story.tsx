import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header2, ParagraphMd } from '../Type';
import { LinkText } from '../LinkText/LinkText';
import { TabNavigationHorizontal } from './TabNavigationHorizontal';

import { Story } from '../../.storybook/Story';

const componentName = 'Tab Navigation Horizontal';

storiesOf(`components/`, module).add('Tab Navigation', () => (
  <Story title={componentName}>
    <TabNavigationHorizontal
      index={1}
      panels={[
        {
          label: 'Option 1',
          tabId: 'option-1',
          content: (
            <div>
              <Header2>I am Tab 1</Header2>
              <ParagraphMd>I don't have much content.</ParagraphMd>
              <img
                src="http://placekitten.com/1000/400"
                width="100%"
              />
            </div>
          ),
        },
        {
          label: 'Option 2',
          tabId: 'option-2',
          content: (
            <div>
              <Header2>I am Tab 2</Header2>
              <ParagraphMd>
                `Twas brillig, and the slithy toves Did gyre and
                gimble in the wabe: All mimsy were the borogoves, And
                the mome raths outgrabe.
              </ParagraphMd>
              <ParagraphMd>
                "Beware the Jabberwock, my son! The jaws that bite,
                the claws that catch! Beware the Jubjub bird, and shun
                The frumious Bandersnatch!"
              </ParagraphMd>
              <img src="http://fillmurray.com/600/200" width="100%" />
            </div>
          ),
        },
        {
          label: 'Option 3',
          tabId: 'option-3',
          content: (
            <div>
              <Header2>I am Tab 3</Header2>
              <ParagraphMd>
                My liege, and madam, to expostulate What majesty
                should be, what duty is, What day is day, night night,
                and{' '}
                <LinkText
                  href="https://en.wikipedia.org/wiki/Hamlet"
                  target="_blank"
                >
                  time is time
                </LinkText>
                , Were nothing but to waste night, day, and time;
                Therefore, since{' '}
                <LinkText
                  href="https://en.wikipedia.org/wiki/William_Shakespeare"
                  target="_blank"
                >
                  brevity is the soul of wit
                </LinkText>
                , And tediousness the limbs and outward flourishes, I
                will be brief. Your noble son is mad
              </ParagraphMd>
              <img src="http://placecage.com/1000/400" width="100%" />
            </div>
          ),
          onClick: () => console.log('you clicked option 3!'),
        },
      ]}
    />
  </Story>
));

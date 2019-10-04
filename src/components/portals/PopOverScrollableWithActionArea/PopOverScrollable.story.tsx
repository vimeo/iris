import React from 'react';
import { storiesOf } from '@storybook/react';

import { PopOverScrollableWithActionArea } from './PopOverScrollableWithActionArea';
import { PopOver } from '../PopOver/PopOver';

import { ParagraphMd } from '../../../legacy';
import { InputText, ButtonIconOnly } from '../../index';
import { Gear } from '../../../icons';

import { Story } from '../../../storybook';

storiesOf(`components|portals/PopOver`, module).add(
  'scrollable',
  () => (
    <Story title="PopOver" subTitle="Scrollable">
      <PopOver
        alignment="left"
        size="lg"
        menuContent={
          <PopOverScrollableWithActionArea
            maxHeight={200}
            primaryButtonProps={{
              children: 'Submit',
            }}
            secondaryButtonProps={{
              children: 'Cancel',
            }}
          >
            <ParagraphMd>
              `Twas brillig, and the slithy toves Did gyre and gimble
              in the wabe: All mimsy were the borogoves, And the mome
              raths outgrabe.
            </ParagraphMd>
            <ParagraphMd>
              "Beware the Jabberwock, my son! The jaws that bite, the
              claws that catch! Beware the Jubjub bird, and shun The
              frumious Bandersnatch!"
            </ParagraphMd>
            <ParagraphMd>
              He took his vorpal sword in hand: Long time the manxome
              foe he sought -- So rested he by the Tumtum tree, And
              stood awhile in thought.
            </ParagraphMd>
            <ParagraphMd>
              And, as in uffish thought he stood,The Jabberwock, with
              eyes of flame, Came whiffling through the tulgey wood,
              And burbled as it came!
            </ParagraphMd>
            <InputText
              name="foo"
              id="PopOverExample Input"
              label="Jabberwocky Name"
            />
          </PopOverScrollableWithActionArea>
        }
      >
        <ButtonIconOnly
          icon={<Gear />}
          format="dark"
          size="md"
          isButtonElement={false}
        />
      </PopOver>
    </Story>
  ),
);

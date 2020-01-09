import React, { Fragment } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../storybook';
import { Button as B } from '../../buttons/Button/Button';
import { PopOver, Pop } from './PopOver';
import { ANCHOR_POINTS } from '../constants';
import { Input } from '../../inputs/Input/Input';
import { Gear } from '../../../icons';
import { Paragraph } from '../../../typography';
import { rgba } from 'polished';
import { Badge } from '../../chips/Badge/Badge';

storiesOf(`Components|portals/`, module)
  .add('PopOver', () => (
    <Story title="PopOver">
      {ANCHOR_POINTS.map((attach, i) => (
        <Fragment key={i}>
          <PopOver content={PopList} attach={attach}>
            <TriggerButton>PopOver {attach}</TriggerButton>
          </PopOver>
          <br />
        </Fragment>
      ))}
    </Story>
  ))
  .add('PopOver (scrollable)', () => (
    <Story title="PopOver">
      <PopOver
        content={PopScrollable}
        attach="bottom"
        style={{ width: '25rem' }}
      >
        <TriggerButton>PopOver bottom</TriggerButton>
      </PopOver>
    </Story>
  ));

const TriggerButton = styled(B)`
  margin-bottom: 2rem;
  margin-left: 12rem;
`;

const Button = styled(B)`
  margin: 0.5rem;
`;

const PopList = (
  <>
    <Pop.List>
      <Pop.Header>Header</Pop.Header>
      <Pop.Item href="#">Item 1</Pop.Item>
      <Pop.Item href="#" selected>
        Item 2 (Selected)
      </Pop.Item>
    </Pop.List>
    <Pop.Divider />
    <Pop.List>
      <Pop.Item href="#">
        <Gear />
        Item 3
      </Pop.Item>
      <Pop.Item href="#" selected>
        Item 4
        <Badge format="upgrade" style={{ display: 'inline-block' }}>
          Upgrade
        </Badge>
      </Pop.Item>
    </Pop.List>
  </>
);

const PopActions = styled.div`
  display: flex;
  padding: 0.5rem;
  border-top: 1px dashed
    ${({ theme }) => rgba(theme.content.color, 0.5)};
`;

const PopScrollable = (
  <>
    <div
      style={{
        padding: '1rem',
        maxHeight: '15rem',
        overflow: 'auto',
      }}
    >
      <Paragraph size="2">
        `Twas brillig, and the slithy toves Did gyre and gimble in the
        wabe: All mimsy were the borogoves, And the mome raths
        outgrabe.
      </Paragraph>
      <Paragraph size="2">
        "Beware the Jabberwock, my son! The jaws that bite, the claws
        that catch! Beware the Jubjub bird, and shun The frumious
        Bandersnatch!"
      </Paragraph>
      <Paragraph size="2">
        He took his vorpal sword in hand: Long time the manxome foe he
        sought -- So rested he by the Tumtum tree, And stood awhile in
        thought.
      </Paragraph>
      <Paragraph size="2">
        And, as in uffish thought he stood,The Jabberwock, with eyes
        of flame, Came whiffling through the tulgey wood, And burbled
        as it came!
      </Paragraph>
      <Input
        name="foo"
        id="PopOver Example Input"
        label="Jabberwocky Name"
      />
    </div>
    <PopActions>
      <Button format="secondary" fluid>
        Cancel
      </Button>
      <Button fluid>Submit</Button>
    </PopActions>
  </>
);

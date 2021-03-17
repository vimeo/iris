/// <reference types="styled-components/cssprop" />
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { PopOver, Pop } from './PopOver';

import { Dock } from '../Dock/Dock';
import { Grid } from '../Grid/Grid';
import { Button as B, Badge, Input } from '../../components';
import { ANCHOR_POINTS } from '../../utils';
import { Gear, DismissX } from '../../icons';
import { Paragraph } from '../../typography';
import { blue } from '../../color';

export default { title: 'layout/PopOver' };

export function Common() {
  return (
    <>
      <PopOver active content={PopList} style={{ zIndex: 5000 }}>
        <TriggerButton>PopOver</TriggerButton>
      </PopOver>
    </>
  );
}

export function DynamicSize() {
  return <DynamicSizeStory />;
}
function DynamicSizeStory() {
  const [width, widthSet] = useState(240);
  return (
    <>
      <PopOver
        active
        content={
          <div style={{ padding: '2rem', width }}>
            PopOvers dynamically adjust when their contents resize.
          </div>
        }
        style={{
          zIndex: 5000,
          transition: '80ms ease-in-out',
          width,
        }}
      >
        <TriggerButton>PopOver</TriggerButton>
      </PopOver>
      <Button onClick={() => widthSet((width) => width + 40)}>
        resize
      </Button>
    </>
  );
}

export function Attach() {
  return ANCHOR_POINTS.map((attach, i) => (
    <Fragment key={i}>
      <PopOver
        content={PopList}
        attach={attach}
        style={{ zIndex: 5000 }}
      >
        <TriggerButton>PopOver {attach}</TriggerButton>
      </PopOver>
      <br />
    </Fragment>
  ));
}

export function Scrollable() {
  return (
    <>
      <PopOver
        content={PopScrollable}
        attach="bottom"
        style={{ width: '25rem' }}
      >
        <TriggerButton>PopOver bottom</TriggerButton>
      </PopOver>
    </>
  );
}

export function Fixed() {
  return (
    <div style={{ height: '150vh' }}>
      <Dock attach="bottom" style={{ height: '7rem' }}>
        <PopOver
          content={PopScrollable}
          attach="top"
          style={{ width: '25rem' }}
        >
          <TriggerButton>PopOver bottom</TriggerButton>
        </PopOver>
      </Dock>
    </div>
  );
}

export const Controlled = () => <PopOverControlled />;

function PopOverControlled() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Button onClick={() => setActive((active) => !active)}>
        toggle
      </Button>
      <PopOver
        content={
          <div>
            <Button
              onClick={() => setActive(false)}
              icon={<DismissX />}
              variant="minimalTransparent"
              css={`
                position: absolute;
                top: 0;
                right: 0;
              `}
            />
            <p
              css={`
                padding: 4rem 1rem;
              `}
            >
              Hi! I'm a PopOver! Click the X to close me.
            </p>
          </div>
        }
        attach="bottom"
        active={active}
      >
        <Dot />
      </PopOver>
    </>
  );
}

export function OnClick() {
  const [active, setActive] = useState(false);

  return (
    <Grid
      css={`
        padding: 2rem;
      `}
    >
      <Card
        href="#"
        key="1"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Paragraph size="1">This whole card is a link</Paragraph>
        <PopOver content={PopList} style={{ zIndex: 5000 }}>
          <B
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            PopOver
          </B>
        </PopOver>
      </Card>
      <Card
        href="#"
        key="2"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Paragraph size="1">This whole card is a link</Paragraph>
        <PopOver
          active={active}
          content={PopList}
          style={{ zIndex: 5000 }}
        >
          <B
            onClick={(event) => {
              event.preventDefault();
              setActive(!active);
            }}
          >
            Controlled PopOver
          </B>
        </PopOver>
      </Card>
    </Grid>
  );
}

const Card = styled.a`
  width: 20rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  border: 0.2rem solid ${blue(500)};
  border-radius: 0.5rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${blue(500)};
  margin: 2rem auto;
`;

const TriggerButton = styled(B)`
  margin: 2rem auto;
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

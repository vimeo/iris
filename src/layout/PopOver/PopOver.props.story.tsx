import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import { PopOver, Pop } from './PopOver';
import { Button as B, Badge } from '../../components';
import { ANCHOR_POINTS } from '../../utils';
import { Gear, DismissX } from '../../icons';
import { blue } from '../../color';

export default { title: 'layout/PopOver/Props' };

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

export function Active() {
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

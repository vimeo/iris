import React from 'react';

import { useMeasure } from './useMeasure';

import { Button } from '../../components';
import { ButtonStyled } from '../../components/buttons/Button/Button.style';
import { Header, Text } from '../../typography';
import styled from 'styled-components';

export default { title: 'utilties/useMeasure' };

export const Common = () => <CommonStory />;
function CommonStory() {
  const [button, DOMRect] = useMeasure(<Button>Button</Button>);
  const { width, height } = DOMRect;

  return (
    <>
      {button}
      <br />
      <div>
        <Stat>
          width: {width}px ({Math.round((width / 16) * 1000) / 1000}
          rem)
        </Stat>
        <br />
        <Stat>
          height: {height}px (
          {Math.round((height / 16) * 1000) / 1000}rem)
        </Stat>
      </div>
    </>
  );
}

export const Children = () => <ChildrenStory />;
function ChildrenStory() {
  const [buttons, DOMRect] = useMeasure(
    <div>
      <Button>Button 1</Button>
      <br />
      <Button>Button 2 has more text</Button>
    </div>,
    { depth: 1 }
  );
  const { width, height } = DOMRect;

  return (
    <>
      {buttons}
      <br />
      <Header size="3">combined size</Header>
      <div>
        <Stat>
          width: {width}px ({Math.round((width / 16) * 1000) / 1000}
          rem)
        </Stat>
        <br />
        <Stat>
          height: {height}px (
          {Math.round((height / 16) * 1000) / 1000}rem)
        </Stat>
      </div>
      <br />
      <Header size="3">individual children size</Header>
      {DOMRect.children?.map(({ width, height }) => (
        <>
          <div>
            <Stat>
              width: {width}px (
              {Math.round((width / 16) * 1000) / 1000}rem)
            </Stat>
            <br />
            <Stat>
              height: {height}px (
              {Math.round((height / 16) * 1000) / 1000}rem)
            </Stat>
          </div>
          <br />
        </>
      ))}
    </>
  );
}

const Stat = styled(Text)`
  font-size: 0.667rem;
  font-weight: 800;
  line-height: 1rem;
  letter-spacing: 0.0667rem;
  text-transform: uppercase;
  opacity: 0.75;
`;

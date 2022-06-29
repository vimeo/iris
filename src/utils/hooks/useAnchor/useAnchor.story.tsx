import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { createPortalOutlet } from '../../DOM';
import { useAnchor } from './useAnchor';

export default { title: 'utilties/useAnchor' };

const sides = {
  X: ['right', 'left'],
  Y: ['top', 'bottom'],
};
const positions = {
  X: [null, 'top', 'bottom'],
  Y: [null, 'left', 'right'],
};

const attachs = ['X', 'Y'].flatMap((axis) =>
  sides[axis].flatMap((side) =>
    positions[axis].map((position) =>
      position ? side + '-' + position : side
    )
  )
);

export const Common = () => <CommonStory />;
function CommonStory() {
  const ref = useRef(null);

  return (
    <Frame>
      <CardBg ref={ref} />
      {attachs.map((attach, key) => (
        <Card
          key={key}
          attachRef={ref}
          attach={attach}
          children={attach}
          style={{ zIndex: 5000 - key }}
        />
      ))}
    </Frame>
  );
}

const CardBg = styled.div`
  border: 2px dashed rgba(0, 0, 0, 0.5);
  width: 10rem;
  height: 10rem;
`;

function Card({ attach, attachRef, ...props }) {
  const { styleAnchor, styleChild } = useAnchor(
    attachRef,
    attach,
    true
  );
  const outlet = createPortalOutlet('iris-portals');

  return createPortal(
    <Anchor style={{ ...styleAnchor, zIndex: props.style.zIndex }}>
      <CardStyled
        {...props}
        style={{
          position: 'absolute',
          ...styleChild,
          zIndex: props.style.zIndex,
        }}
      />
    </Anchor>,
    outlet
  );
}

const Anchor = styled.div`
  position: absolute;
`;

const CardStyled = styled.div`
  border: 1px solid rgba(200, 0, 0, 0.15);
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  transition: 120ms ease-in-out;
  cursor: pointer;

  &:hover {
    width: 22rem;
    height: 22rem;
    background: rgba(200, 0, 0, 0.15);
    border: 5px solid rgba(200, 0, 0, 1);
    color: rgba(200, 0, 0, 1);
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  width: 100%;
  position: relative;
`;

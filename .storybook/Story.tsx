import React from 'react';
import { Button } from '../src/';
import { HeaderPlusUltra, Header4 } from '../src/Type';
import styled from 'styled-components';

const MonoHeader = styled(Header4)`
  font-family: 'Source Code Pro', monospace;
`;

export const Story = ({ children, title }) => (
  <>
    <HeaderPlusUltra>{title}</HeaderPlusUltra>
    <MonoHeader>
      {'<'}
      {title.replace(' ', '')}
      {' />'}
    </MonoHeader>

    <div
      style={{
        padding: '2rem',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '0.25rem',
        maxWidth: '600px',
        margin: '3rem 0',
      }}
    >
      {children}
    </div>
  </>
);

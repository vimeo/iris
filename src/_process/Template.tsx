import React, { useState, ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Header } from '../typography';
import { Button, Notification } from '../components';
import { blue } from '../color';

interface Props {
  name: string;
  children: ReactNode;
  instructions: ReactNode;
  copyBlock: string;
}

export function Template({
  name,
  instructions,
  copyBlock,
  children,
}: Props) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  function doCopy() {
    if (document && !copied) {
      ref.current.select();
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }
  }

  return (
    <>
      <Layout>
        <Header>{name}</Header>
        <Instructions>{instructions}</Instructions>
        {children}
        <Notification showing={copied as boolean} content="Copied!" />
      </Layout>
      <CopyBlock>
        <CopyButton format="basic" variant="outline" onClick={doCopy}>
          Copy
        </CopyButton>
        <textarea
          ref={ref}
          style={{ position: 'absolute', opacity: 0 }}
          readOnly
          value={copyBlock.trim()}
        />
        {copyBlock}
      </CopyBlock>
    </>
  );
}

const Layout = styled.div`
  padding: 1rem 2rem 1rem 1rem;
  width: calc(100% - 40rem);

  & > * {
    width: 100%;
    margin-bottom: 1rem;
    display: block;
  }
`;

const CopyBlock = styled.div`
  background: ${({ theme }) => theme.appBg};
  padding: 4rem 3rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  white-space: pre-wrap;
  width: 40rem;
  color: ${({ theme }) => theme.textColor};
`;

const CopyButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Instructions = styled.div`
  padding: 1.5rem;
  margin: 2rem 0;
  border: ${rem(2)} solid ${blue(500)};
  border-radius: ${rem(8)};

  p {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

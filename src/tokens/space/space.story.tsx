import React from 'react';
import styled from 'styled-components';

import { Story } from '../../storybook';
import { Header, Text } from '../../typography';

import { core } from '../../tokens';
import { amethyst } from '../../color';

export default { title: 'Tokens/space' };
export function Tokens() {
  return (
    <Story title="Space" width="100%" flex>
      <Flex>
        {[...new Array(24)].map((item, index) => {
          const token = (index + 1) * 50;
          const pxValue = token / 12.5;
          const remValue = pxValue / 16;
          return (
            <StoryRow key={index}>
              <Header size="5">space({token})</Header>
              <Text size={200}>{remValue}rem</Text>
              <Text size={200}>{pxValue}px</Text>
              <ExampleSpaceDiv token={core.space(token)} />
            </StoryRow>
          );
        })}
      </Flex>
    </Story>
  );
}

Tokens.storyName = 'space';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${core.space(300)};
  width: 75%;
`;

const ExampleSpaceDiv = styled.div<{ token: any }>`
  height: ${(props) => props.token};
  width: ${(props) => props.token};
  background-color: ${amethyst(650)};
`;

const StoryRow = styled.div`
  align-items: center;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${core.space(500)};
  border-bottom: ${(props) =>
    props.theme.name === 'light'
      ? '1px solid rgba(0, 0, 0, 0.1)'
      : '1px solid rgba(255, 255, 255, 0.2)'};
  padding: 0 ${core.space(300)} ${core.space(300)} ${core.space(300)};
`;

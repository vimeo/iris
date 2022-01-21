import React, { useState } from 'react';
import { Story } from '@storybook/react';
import styled, { keyframes } from 'styled-components';

import { Button } from '../buttons/Button/Button';

export default { title: 'components/ActionBar' };

const Template: Story<any> = (args) => {
  const [variant, variantSet] = useState('A');

  const onClick = (variant) => () => variantSet(variant);
  const Component = ActionBar[variant];

  return (
    <>
      <Button onClick={onClick('A')}>Variant A</Button>
      <br />
      <Button onClick={onClick('B')}>Variant B</Button>
      <Component {...args}>Variant {variant}</Component>
    </>
  );
};

export const ActionBarStory = Template.bind({});
ActionBarStory.storyName = 'ActionBar';

const ActionBar = {
  A: ({ children, ...props }) => {
    return <StyledA {...props}>{children}</StyledA>;
  },
  B: ({ children, ...props }) => {
    return <StyledB {...props}>{children}</StyledB>;
  },
};

const topRight = keyframes`
  0% {
    width: 0%;
    height: calc(0% + 2px);
  }

  75% {
    width: calc(100% + 4px);
    height: calc(0% + 2px);
  }

  99% {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
  }

  100% {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 0;
  }
`;

const bottomLeft = keyframes`
  0% {
    width: 0%;
    height: calc(0% + 2px);
  }

  75% {
    width: calc(100% + 4px);
    height: calc(0% + 2px);
  }

  99% {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
  }

  100% {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 0;
  }
`;

const border = keyframes`
  0% {
    transform: translateX(-50%) translateY(200%);
    border: 2px solid rgba(255,255,255,0);
    background: rgba(32, 32, 32, 0);
  }

  50% {
    transform: translateX(-50%) translateY(0%);
  }
  
  67% {
    background: rgba(32, 32, 32, 0);
  }

  99% {
    transform: translateX(-50%) translateY(0%);
    border: 2px solid rgba(255,255,255,0);
  }

  100% {
    border: 2px solid rgba(255,255,255,0.25);
    background: rgba(32, 32, 32, 1);
  }
`;

const StyledA = styled.div`
  min-width: 30rem;
  min-height: 5rem;
  padding: 1rem;
  margin: 2rem auto;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(32, 32, 32, 1);
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.75rem;

  animation: ${border} 1s ease-in-out both;

  &:before {
    content: '';
    top: -2px;
    left: -2px;
    position: absolute;
    border-top: 2px solid rgba(255, 255, 255, 0.25);
    border-right: 2px solid rgba(255, 255, 255, 0.25);
    width: 100%;
    height: 2px;
    border-radius: 0.5rem;

    animation: ${topRight} 1s ease-in-out both;
  }

  &:after {
    content: '';
    bottom: -2px;
    right: -2px;
    position: absolute;
    border-bottom: 2px solid rgba(255, 255, 255, 0.25);
    border-left: 2px solid rgba(255, 255, 255, 0.25);
    width: 100%;
    height: 2px;
    border-radius: 0.5rem;

    animation: ${bottomLeft} 1s ease-in-out both;
  }
`;

const variantB = keyframes`
  0% {
    transform: translateX(-50%) translateY(200%);
    min-width: 10rem;
    max-width: 10rem;
  }

  34% {
    transform: translateX(-50%) translateY(0%);
    min-width: 10rem;
    max-width: 10rem;
  }

  68% {
    transform: translateX(-50%) translateY(0%);
    min-width: 30rem;
    max-width: calc(100vw - 4rem);
  }
`;

const StyledB = styled.div`
  min-width: 30rem;
  min-height: 5rem;
  padding: 1rem;
  margin: 2rem auto;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(32, 32, 32, 1);
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.75rem;

  animation: ${variantB} 1s ease-in-out both;
`;

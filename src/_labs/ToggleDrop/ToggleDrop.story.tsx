import React, { Component, SFC } from 'react';
import styled from 'styled-components';
import { rgb, rem } from 'polished';

import { ToggleDrop } from './ToggleDrop';

import { red, blue, yellow, green } from '../../color';
import { Header, Paragraph } from '../../typography';
import { Story } from '../../storybook';
import { themes } from '../../themes';

export default { title: 'Labs/ToggleDrop' };

export function Common() {
  return (
    <Story title="Toggle Drop">
      <ToggleDropExampleA />

      <br />
      <br />
      <br />

      <ToggleDropExampleB />
    </Story>
  );
}

//   {
//     info: {
//       inline: true,
//       propTables: [ToggleDrop],
//     },
//     notes: 'test notes for button',
//   }

// const WhateverDiv = styled.div<{
//     name: string;
//     color: string;
//     onClick: (e?: Event) => void;
// }>`
//     display: block;
//     width: 100%;
//     padding: 20px;
//     color: white;
//     border: 1px solid white;
//     border-radius: 3px;
//     margin-bottom: 0.25rem;
//     cursor: pointer;
//     font-size: 1rem;
//     font-family: Helvetica;
//     font-weight: 400;

//     &:hover {
//         background: rgba(255, 255, 255, 0.2);
//     }

//     svg {
//         width: 1rem;
//         margin-right: 1rem;
//         display: inline-block;

//         * {
//             fill: white;
//         }
//     }
// `;

const StatusButtonStyled = styled.button<any>`
  padding: 0.5rem;
  border-radius: ${rem(4)};
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  cursor: pointer;
  transition: 120ms ease-in-out;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    border: 1px solid ${(props) => props.color};
    background: rgba(255, 255, 255, 0.15);

    .icon {
      transition: 120ms ease-in-out;
      background: ${(props) => props.color};
    }
  }

  + button {
    margin-top: 0.5rem;
  }

  .icon {
    height: 4.5rem;
    width: 4.5rem;
    margin-right: 0.5rem;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${rem(3)};
  }

  .text {
    padding: 0.5rem;

    > * {
      margin: 0;
      text-align: left;
    }
  }
`;

const reviewModes = [
  {
    name: 'Reviewing',
    description: 'Collaborate on the video with time-coded notes.',
    color: '#56b291',
  },
  {
    name: 'Presenting',
    description: 'Watch the video with no comments or distractions.',
    color: '#bc6fd9',
  },
  {
    name: 'File sharing',
    description:
      'Download the video file in different resolution optios.',
    color: blue(500),
  },
];

interface State {
  name: string;
  color: string;
}

// StatusButton is not an Iris component. Just an example.
const StatusButton: SFC<any> = ({
  name,
  color,
  description,
  onClick,
}) => (
  <StatusButtonStyled name={name} color={color} onClick={onClick}>
    <div className="icon" />
    <div className="text">
      <Header size="6" theme={themes.dark}>
        {name}
      </Header>
      {description && (
        <Paragraph size="3" theme={themes.dark}>
          {description}
        </Paragraph>
      )}
    </div>
  </StatusButtonStyled>
);

class ToggleDropExampleA extends Component {
  state: State = reviewModes[0];

  stateStuff = (name, color) => {
    this.setState({ name, color });
  };

  render() {
    return (
      <ToggleDrop // Iris Component
        title="Choose a setting"
        description="Changed made here are visible to everyone."
        name={this.state.name}
        color={this.state.color}
        footer="Hide Vimeo Logo"
      >
        {reviewModes.map((mode, i) => (
          <StatusButton
            key={i}
            name={mode.name}
            color={mode.color}
            description={mode.description}
            onClick={() => this.stateStuff(mode.name, mode.color)}
          />
        ))}
      </ToggleDrop>
    );
  }
}

const Fruit = styled.li<{
  name: string;
  color: string;
  onClick: (e?: Event) => void;
}>`
  display: inline-block;
  width: calc(50% - 30px);
  padding: 10px 20px;
  min-height: 5rem;
  min-width: 5rem;
  color: black;
  border: 2px dashed #666;
  padding: 2.5rem;
  margin: 0.25rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.75rem;
  font-family: 'Comic Sans MS';
  font-weight: 400;

  &:hover {
    background: ${(props) => props.color};
    color: white;
  }
`;

const fruits = [
  {
    name: 'Blueberry',
    color: blue(500),
  },
  {
    name: 'Banana',
    color: yellow(500),
  },
  {
    name: 'Coconut',
    color: rgb(250, 230, 210),
  },
  {
    name: 'Apple',
    color: 'red',
  },
  {
    name: 'Orange',
    color: red(500),
  },
  {
    name: 'Avocado',
    color: green(600),
  },
];

class ToggleDropExampleB extends Component {
  state: State = fruits[0];

  stateStuff = (name, color) => {
    this.setState({ name, color });
  };

  render() {
    return (
      <ToggleDrop
        title="Choose a fruit"
        description="Lorem ipsum nom nom."
        theme="light"
        name={this.state.name}
        color={this.state.color}
      >
        {fruits.map((mode, i) => (
          <Fruit
            key={i}
            name={mode.name}
            color={mode.color}
            onClick={() => this.stateStuff(mode.name, mode.color)}
          >
            {mode.name}
          </Fruit>
        ))}
      </ToggleDrop>
    );
  }
}

import React from 'react';
import styled, { css } from 'styled-components';

import { Dropzone } from './Dropzone';
import { DropChangeEvent } from './Dropzone.types';

import { Header } from '../../typography';
import {
  red,
  green,
  blue,
  slate,
  yellow,
  amethyst,
} from '../../color';
import { useLocalTheme } from '../../utils';
import { IrisTheme } from '../../themes';

export default {
  title: 'components/Dropzone/props',
  component: Dropzone,
  argTypes: {
    label: { table: { disable: true } },
    status: { table: { disable: true } },
    messages: { table: { disable: true } },
    src: { table: { disable: true } },
    children: { control: { disable: true } },
  },
};

const onChange = (event: DropChangeEvent) => {
  console.log(
    'File uploaded',
    event.target.files || event.dataTransfer.files,
    event
  );
};

const formats = ['primary', 'secondary'] as const;

export function Formats() {
  const style = {
    maxWidth: '40rem',
    height: '5rem',
    marginBottom: '1rem',
  };

  return formats.map((format) => (
    <div key={format} style={{ marginBottom: '4rem' }}>
      <Header size="5">{format}</Header>
      <Dropzone format={format} style={style}>
        <Header size="3" style={{ margin: 0 }}>
          Drag files here
        </Header>
      </Dropzone>
      <Header size="5">{format} active</Header>
      <Dropzone active format={format} key={format} style={style}>
        <Header size="3" style={{ margin: 0 }}>
          Drag files here
        </Header>
      </Dropzone>
    </div>
  ));
}

export const Custom = () => <CustomStory />;
function CustomStory() {
  // change primary from blue to amethyst.
  const theme = useLocalTheme({
    formats: { primary: amethyst(500) },
  });

  return (
    <>
      <Header size="5">custom</Header>
      <Dropzone
        onChange={onChange}
        theme={theme}
        style={{ maxWidth: '40rem', marginBottom: '1rem' }}>
        {(active) => (
          <CustomContent active={active}>
            <Header size="3" style={{ margin: 0 }}>
              Drag files here
            </Header>
          </CustomContent>
        )}
      </Dropzone>

      <Header size="5">custom active</Header>
      <Dropzone
        active
        onChange={onChange}
        theme={theme}
        style={{ maxWidth: '40rem' }}>
        {(active) => (
          <CustomContent active={active}>
            <Header size="3" style={{ margin: 0 }}>
              Drag files here
            </Header>
          </CustomContent>
        )}
      </Dropzone>
    </>
  );
}

function rainbow({ active = false, theme }) {
  const grade = theme.name === 'dark' ? 850 : 100;

  return (
    active &&
    css`
      background-image: linear-gradient(
        to bottom right,
        ${slate(grade)},
        ${blue(grade)},
        ${green(grade)},
        ${yellow(grade)},
        ${red(grade)}
      );
    `
  );
}

const CustomContent = styled.div<{
  active?: boolean;
  theme?: IrisTheme;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${rainbow};
`;

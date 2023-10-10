import React, { useState, useContext } from 'react';
import styled, {
  ThemeProvider,
  css,
  ThemeContext,
} from 'styled-components';
import { rem } from 'polished';

import { Fonts } from './Fonts';
import { themes } from './themes';

import {
  Badge as Bg,
  Button as B,
  Input as I,
  Notice as N,
  Pop,
  Checkbox as C,
  Radio as R,
  Toggle as T,
} from '../../components';
import { Header as H, Paragraph as P } from '../../typography';
import { LoaderCircular as LC } from '../../motion';
import { Gear } from '../../icons';

export default {
  title: 'Labs/Themekit',
  parameters: {
    lostpixel: {
      disable: true,
    },
  },
};

export function Common() {
  return <ThemeKit />;
}

const box = {
  padding: '5rem',
  borderBottom: '1px solid rgba(150,150,150,0.4)',
};

function ThemeKit(props) {
  const { name } = useContext(ThemeContext);
  const subTheme = name;

  const [theme, setTheme] = useState(themes.vimeo);

  const brands = Object.entries(themes)
    .filter(([_, theme]) => theme.dark?.formats || theme.formats)
    .map(([brand, theme]) => ({ name: brand, theme }));

  const doClick = (name) => () => setTheme(themes[name]);

  return (
    <>
      <ThemeProvider theme={theme[subTheme] || theme}>
        <div style={box}>
          {brands.map(({ name }, key) => (
            <BrandButton
              key={key}
              onClick={doClick(name)}
              active={
                name === theme[subTheme]?.name || name === theme.name
              }
            >
              {name}
            </BrandButton>
          ))}
        </div>
        <DemoComponents theme={theme[subTheme] || theme} />
      </ThemeProvider>
    </>
  );
}

function BrandButton({ active, ...props }) {
  return (
    <Button
      style={{ textTransform: 'capitalize' }}
      size="lg"
      format={active ? 'primary' : 'basic'}
      variant={active ? 'solid' : 'outline'}
      {...props}
    />
  );
}

function DemoComponents({ theme, ...props }) {
  return (
    <div style={box}>
      <Fonts />
      {theme?.logo && (
        <img
          src={theme.logo}
          style={{ height: '3rem', marginBottom: '2rem' }}
        />
      )}
      <Header size="3" style={{ textTransform: 'capitalize' }}>
        {theme.name} {theme?.system}
      </Header>
      <br />
      <div>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
        <Button format="secondary">Button</Button>
        <Button variant="outline" format="secondary">
          Button
        </Button>
      </div>
      <br />
      <div>
        <Header size="1">Header 1</Header>
        <Header size="2">Header 2</Header>
        <Header size="3">Header 3</Header>
        <Paragraph size="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores fugit quo, dignissimos labore nemo cupiditate eum
          eius quis maxime ducimus?
        </Paragraph>
        <Paragraph size="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores fugit quo.
        </Paragraph>
      </div>
      <br />
      <div>
        <LoaderCircular />
      </div>
      <br />
      <div>
        <Input placeholder="lorem ipsum dolor sit..." />
      </div>
      <br />
      <div>
        <Checkbox disabled />
        <Checkbox checked />
        <Radio disabled />
        <Radio checked />
        <Toggle disabled />
        <Toggle checked />
      </div>
      <br />
      <div>
        <PopList />
      </div>
      <br />
      <div>
        <Notice format="primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi?
        </Notice>
        <Notice format="positive">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi?
        </Notice>
        <Notice format="negative">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sequi?
        </Notice>
      </div>
      <br />
    </div>
  );
}

const Button = styled(B)`
  display: inline-block;
  margin: 0 0.5rem 0.5rem 0;
  min-width: 7rem;
  font-size: ${(p) => rem(p.theme?.typography?.fontSize)};
  text-transform: ${(p) => p.theme?.typography?.textTransform};
  border-radius: ${(p) => rem(p.theme?.geometry?.borderRadius)};
  font-family: ${(p) => p.theme?.typography?.fontFamily};
  letter-spacing: ${(p) => rem(p.theme?.typography?.letterSpacing)};
  font-weight: ${(p) => p.theme?.typography?.fontWeight};
`;

const Header = styled(H)`
  font-family: ${(p) => p.theme?.typography?.fontFamily};
  font-family: ${(p) => p.theme?.typography?.serif};
  letter-spacing: ${(p) => rem(p.theme?.typography?.letterSpacing)};
`;

const Paragraph = styled(P)`
  font-family: ${(p) => p.theme?.typography?.fontFamily};
  font-family: ${(p) => p.theme?.typography?.serif};
  letter-spacing: ${(p) => rem(p.theme?.typography?.letterSpacing)};
`;

const Input = styled(I)`
  max-width: 20rem;
  margin: 0 0.5rem 0.5rem 0;
  font-family: ${(p) => p.theme?.typography?.fontFamily};
  font-size: ${(p) => rem(p.theme?.typography?.fontSize)};
  letter-spacing: ${(p) => rem(p.theme?.typography?.letterSpacing)};
  ${(p) => p.theme?.inputs};
  border-radius: ${(p) => p.theme?.components?.inputs?.borderRadius};
`;

const Checkbox = styled(C)`
  display: inline-block;
  margin: 0.5rem 0.5rem 0.5rem 0;
`;
const Radio = styled(R)`
  display: inline-block;
  margin: 0.5rem 0.5rem 0.5rem 0;
`;
const Toggle = styled(T)`
  display: inline-block;
  margin: 0.5rem 0.5rem 0.5rem 0;
`;

const Notice = styled(N)`
  max-width: 40rem;
  font-family: ${(p) => p.theme?.typography?.fontFamily};
  letter-spacing: ${(p) => rem(p.theme?.typography?.letterSpacing)};
`;

const LoaderCircular = styled(LC)``;

const Badge = styled(Bg)`
  font-family: ${(p) => p.theme?.typography?.fontFamily};
  font-size: ${(p) => rem(p.theme?.typography?.fontSize * 0.75)};
`;

const PopList = () => (
  <div
    style={{
      maxWidth: '12rem',
      border: '1px solid rgba(100,100,100,0.2)',
      borderRadius: '4px',
    }}
  >
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
        <Badge
          size="sm"
          format="upgrade"
          style={{ display: 'inline-block', margin: '0 0.5rem' }}
        >
          Upgrade
        </Badge>
      </Pop.Item>
    </Pop.List>
  </div>
);

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

// import { Avatar } from './Avatar';
import { Text as T, Header } from '../typography';
import { readableColor, rgba } from 'polished';

// import { Layout } from '../../../storybook';

export default { title: 'themes|theme' };

const padding = '2rem';

export const Common = () => <HookedStory />;

function HookedStory() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <div style={{ marginBottom: '3rem' }}>
        <ThemeBlock block="content" />
        <br />
        <div style={{ display: 'flex' }}>
          <ContentBlock background={theme.content.background} text />
          <ContentBlock
            background={theme.content.background}
            foreground={theme.content.color}
          />
          <ContentBlock
            background={theme.content.background}
            border={`2px solid ${theme.content.focus}`}
            text
          />
          <ContentBlock
            background={theme.content.background}
            foreground={theme.content.background}
            border={`2px solid ${theme.content.focus}`}
          />
        </div>
      </div>
      <div style={{ marginBottom: '3rem' }}>
        <ThemeBlock block="item" />
        <br />
        <ContentBlock
          background={theme.content.background}
          foreground={theme.item.bg}
        />
        <ContentBlock
          background={theme.content.background}
          foreground={theme.item.bg2}
        />
        <ContentBlock
          background={theme.content.background}
          foreground={theme.item.locked}
        />
      </div>
      <div style={{ marginBottom: '3rem' }}>
        <ThemeBlock block="formats" />
        <br />
        {Object.entries(theme.formats).map(([name, format], i) => (
          <ContentBlock
            key={i}
            background={theme.content.background}
            foreground={format}
          />
        ))}
        <br />
        {Object.entries(theme.formats).map(([name, format], i) => (
          <ContentBlock
            key={i}
            background={theme.content.background}
            foreground={theme.content.background}
            border={`1px solid ${format}`}
          />
        ))}
        <br />
        {Object.entries(theme.formats).map(([name, format], i) => (
          <ContentBlock
            key={i}
            background={theme.content.background}
            color={format}
            text
          />
        ))}
      </div>
      <div style={{ marginBottom: '3rem' }}>
        <Header size="3" style={{ margin: '2rem 3rem 1rem' }}>
          shadows
        </Header>
        {Object.entries(theme.shadows).map(
          ([name, shadow], i) =>
            name.includes('0') && (
              <ContentBlock
                key={i}
                background={theme.content.background}
                style={{
                  boxShadow: (shadow as string)
                    .replace('box-shadow: ', '')
                    .replace(';', ''),
                }}
              />
            ),
        )}
      </div>
      {/* <ThemeJSON /> */}
    </div>
  );
}

function ThemeBlock({ block }) {
  const theme = useContext(ThemeContext);
  const section = Object.entries(theme[block]);

  return (
    <>
      <Header size="3" style={{ margin: '2rem 3rem 1rem' }}>
        {block}
      </Header>
      {section.map(([key, value], i) => (
        <div
          key={i}
          style={{
            display: 'inline-flex',
            width: '33%',
            alignItems: 'center',
            paddingLeft: padding,
          }}
        >
          <ColorBlock color={value} />
          <Text
            element="pre"
            style={{
              fontFamily: 'Source Code Pro, monospace',
              background: theme.content.background,
              padding: '0.1rem 0.4rem',
              margin: '0 0.5rem',
              borderRadius: '0.5rem',
              border: `2px solid ${rgba(theme.content.color, 0.25)}`,
            }}
          >
            {value}
          </Text>
          <Text>{key}</Text>
          <br />
        </div>
      ))}
    </>
  );
}

function ContentBlock({
  foreground = null,
  background,
  border = null,
  text = null,
  color = null,
  style = null,
}) {
  return (
    <div
      style={{
        background,
        display: 'inline-flex',
        width: '5rem',
        height: '5rem',
        margin: '1rem 0 1rem 3rem',
        border: `1px solid ${rgba(readableColor(background), 0.1)}`,
        borderRadius: '0.2rem',
        verticalAlign: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          ...style,
          background: foreground,
          border,
          borderRadius: '0.2rem',
          width: '2rem',
          height: '2rem',
          margin: '0 auto',
        }}
      >
        {text && (
          <Header size="3" style={{ color, display: 'inline-flex' }}>
            Aa
          </Header>
        )}
      </div>
    </div>
  );
}

function ColorBlock({ color }) {
  return (
    <div
      style={{
        background: color,
        width: '1.5rem',
        height: '1.5rem',
        display: 'inline-flex',
        border: `1px solid ${rgba(readableColor(color), 0.3)}`,
        borderRadius: '0.2rem',
        margin: '0.5rem 1rem',
      }}
    />
  );
}

function ThemeJSON() {
  const theme = useContext(ThemeContext);
  const { color } = theme?.content;

  return (
    <pre style={{ color, padding }}>
      {JSON.stringify(theme, null, 2)}
    </pre>
  );
}

const Text = styled(T)`
  font-weight: 600;
`;

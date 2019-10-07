import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { ButtonIconOnly } from './ButtonIconOnly';

import { Gear } from '../../../icons';
import { Story } from '../../../storybook';

const Format = styled.h6`
  font-family: 'Helvetica';
  margin: 2rem 1rem 2rem 2rem;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  z-index: 2;
  position: relative;
`;

const componentName = 'Button';

storiesOf(`components|${componentName}`, module).add(
  'icon only',
  () => (
    <Story title={componentName} subTitle="Icon Only" width="100%">
      <div
        style={{
          background: '#222',
          padding: '2rem',
          color: '#FFF',
          maxWidth: '50%',
          float: 'left',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Format>alternative</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="alternative"
          size="md"
        />

        <Format>dark</Format>
        <ButtonIconOnly icon={<Gear />} format="dark" size="md" />

        <Format>transparent</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="transparent"
          size="md"
        />

        <Format>lightTransparent</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="lightTransparent"
          size="md"
        />

        <Format>lightWarning</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="lightWarning"
          size="md"
        />

        <Format>midDark</Format>
        <ButtonIconOnly icon={<Gear />} format="midDark" size="md" />

        <Format>primary</Format>
        <ButtonIconOnly icon={<Gear />} format="primary" size="md" />

        <Format>secondary</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="secondary"
          size="md"
        />

        <Format>warning</Format>
        <ButtonIconOnly icon={<Gear />} format="warning" size="md" />
      </div>
      <div
        style={{
          backgroundColor: '#FFF',
          padding: '2rem',
          color: '#000',
          maxWidth: '50%',
          float: 'left',
        }}
      >
        <Format>alternative</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="alternative"
          size="md"
        />

        <Format>dark</Format>
        <ButtonIconOnly icon={<Gear />} format="dark" size="md" />

        <Format>transparent</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="transparent"
          size="md"
        />

        <Format>lightTransparent</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="lightTransparent"
          size="md"
        />

        <Format>lightWarning</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="lightWarning"
          size="md"
        />

        <Format>midDark</Format>
        <ButtonIconOnly icon={<Gear />} format="midDark" size="md" />

        <Format>primary</Format>
        <ButtonIconOnly icon={<Gear />} format="primary" size="md" />

        <Format>secondary</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="secondary"
          size="md"
        />

        <Format>warning</Format>
        <ButtonIconOnly icon={<Gear />} format="warning" size="md" />
      </div>
      <div
        style={{
          background:
            'url(https://f.vimeocdn.com/images_v6/stock/landing_page/stock-hero-fallback-l@2x.jpg)',
          padding: '2rem',
          color: '#FFF',
          maxWidth: '50%',
          float: 'left',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://giphy.com/embed/rlkpAmX3gaLWE"
          width="640"
          height="480"
          frameBorder="0"
          allowFullScreen
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            zIndex: 0,
            top: 0,
            left: 0,
            width: '100%',
          }}
        />
        <Format>alternative</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="alternative"
          size="md"
        />

        <Format>dark</Format>
        <ButtonIconOnly icon={<Gear />} format="dark" size="md" />

        <Format>transparent</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="transparent"
          size="md"
        />

        <Format>lightTransparent</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="lightTransparent"
          size="md"
        />

        <Format>lightWarning</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="lightWarning"
          size="md"
        />

        <Format>midDark</Format>
        <ButtonIconOnly icon={<Gear />} format="midDark" size="md" />

        <Format>primary</Format>
        <ButtonIconOnly icon={<Gear />} format="primary" size="md" />

        <Format>secondary</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="secondary"
          size="md"
        />

        <Format>warning</Format>
        <ButtonIconOnly icon={<Gear />} format="warning" size="md" />
      </div>
      <div
        style={{
          background:
            'url(https://f.vimeocdn.com/images_v6/stock/landing_page/stock-hero-fallback-l@2x.jpg)',
          padding: '2rem',
          color: '#FFF',
          maxWidth: '50%',
          float: 'left',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Format>alternative</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="alternative"
          size="md"
        />

        <Format>dark</Format>
        <ButtonIconOnly icon={<Gear />} format="dark" size="md" />

        <Format>transparent</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="transparent"
          size="md"
        />

        <Format>lightTransparent</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="lightTransparent"
          size="md"
        />

        <Format>lightWarning</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="lightWarning"
          size="md"
        />

        <Format>midDark</Format>
        <ButtonIconOnly icon={<Gear />} format="midDark" size="md" />

        <Format>primary</Format>
        <ButtonIconOnly icon={<Gear />} format="primary" size="md" />

        <Format>secondary</Format>
        <ButtonIconOnly
          icon={<Gear />}
          format="secondary"
          size="md"
        />

        <Format>warning</Format>
        <ButtonIconOnly icon={<Gear />} format="warning" size="md" />
      </div>
    </Story>
  ),
);

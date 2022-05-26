import Link from 'next/link';
import { useState } from 'react';

import { Header } from '@vimeo/iris/typography';
import { amethyst } from '@vimeo/iris/color';

import { Card } from '../../src/components/Card';

export function CardAlt({ name, path, disabled = false }) {
  const slug = name.toLowerCase();
  const [hover, hoverSet] = useState(false);

  const effectHover = edgeHover(hover);
  const effectDisabled = styleDisabled(disabled);

  return (
    <Link href={`${path}/${slug}`}>
      <a style={{ pointerEvents: disabled ? 'none' : 'auto' }}>
        <Card
          disabled={disabled}
          onMouseEnter={() => hoverSet(true)}
          onMouseLeave={() => hoverSet(false)}
        >
          {effectHover}
          {effectDisabled}
          <div>
            <Header css={` text-align: center; `}>{name}</Header>
          </div>
        </Card>
      </a>
    </Link>
  );
}

const styleDisabled = (disabled) =>
  disabled && (
    <div
      css={`
        background: rgba(150, 150, 150, 0.5);
        width: 100%;
        position: absolute;
        bottom: 50%;
        left: 0;
        height: 4px;
        transform: rotate(135deg);
      `}
    />
  );

function edgeHover(hover) {
  return (
    <>
      <div
        css={`
          height: 3px;
          position: absolute;
          top: 0;
          left: 0;
          background: ${amethyst(600)};
          transition: 230ms ease-in-out 0ms;
        `}
        style={{ width: hover ? '100%' : '0%' }}
      />
      <div
        css={`
          width: 3px;
          position: absolute;
          top: 0;
          right: 0;
          background: ${amethyst(600)};
          transition: 200ms ease-in-out 20ms;
        `}
        style={{ height: hover ? '100%' : '0%' }}
      />
      <div
        css={`
          height: 3px;
          position: absolute;
          bottom: 0;
          right: 0;
          background: ${amethyst(600)};
          transition: 230ms ease-in-out 40ms;
        `}
        style={{ width: hover ? '100%' : '0%' }}
      />
      <div
        css={`
          width: 3px;
          position: absolute;
          bottom: 0;
          left: 0;
          background: ${amethyst(600)};
          transition: 230ms ease-in-out 60ms;
        `}
        style={{ height: hover ? '100%' : '0%' }}
      />
    </>
  );
}

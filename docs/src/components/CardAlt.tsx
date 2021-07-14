import Link from 'next/link';
import { useState } from 'react';

import { Header } from '@vimeo/iris/typography';
import { blue } from '@vimeo/iris/color';

import { Card } from '../../src/components/Card';

export function CardAlt({ name, path }) {
  const slug = name.toLowerCase();
  const [hover, hoverSet] = useState(false);

  const hoverEffect = edgeHover(hover);

  return (
    <Link href={`${path}/${slug}`}>
      <a>
        <Card
          onMouseEnter={() => hoverSet(true)}
          onMouseLeave={() => hoverSet(false)}
        >
          {hoverEffect}
          <div>
            <Header>{name}</Header>

            {/* <Button>{name}</Button> */}
          </div>
        </Card>
      </a>
    </Link>
  );
}

function edgeHover(hover) {
  return (
    <>
      <div
        css={`
          height: 3px;
          position: absolute;
          top: 0;
          left: 0;
          background: ${blue(500)};
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
          background: ${blue(500)};
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
          background: ${blue(500)};
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
          background: ${blue(500)};
          transition: 230ms ease-in-out 60ms;
        `}
        style={{ height: hover ? '100%' : '0%' }}
      />
    </>
  );
}

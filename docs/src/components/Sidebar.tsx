import { core } from '@vimeo/iris/tokens';

import { Menu } from '@vimeo/iris/components';
import { Paragraph } from '@vimeo/iris/typography';
import Link from 'next/link';

export function Sidebar({ active, header, items }) {
  return (
    <div
      css={`
        color: ${(p) => core.color.text.primary};
        position: fixed;
        top: 6rem;
        left: 2rem;
        min-width: 15rem;
        background: ${(p) => core.color.surface.secondary};
        ${core.edge(300)};
        border-radius: 0.25rem;
        z-index: 2000;
      `}
    >
      <Menu
        format="basic"
        css={`
          width: 100%;
        `}
      >
        <Menu.Section title={header}>
          {items.map((item) => (
            <Link href={item.path || null}>
              <Menu.Item
                active={active && item.name === active}
                css={`
                  padding: 0.5rem 2rem;
                `}
              >
                {item.name}
              </Menu.Item>
            </Link>
          ))}
        </Menu.Section>
      </Menu>
    </div>
  );
}

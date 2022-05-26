import { core } from '@vimeo/iris/tokens';

import { Menu } from '@vimeo/iris/components';
import { Paragraph } from '@vimeo/iris/typography';

export function Sidebar({ active, header, items }) {
    return (
        <div
            css={`
                background: ${(p) => core.color.surface.secondary};
                border-right: 1px solid ${(p) => core.color.stroke};
                max-width: var(--layout-sidebar-width);
                width: 100%;
            `}
        >
            <div
                css={`
                    color: ${(p) => core.color.text.primary};
                    padding: var(--space-200);
                `}
            >
                <Menu format="basic" css={`width: 100%;`}>
                    <Menu.Section title={header}>
                        {items.map((item) => (
                            <Menu.Item active={active && (item.name === active)} href={item.path}>{item.name}</Menu.Item>
                        ))}
                    </Menu.Section>
                </Menu>
            </div>
        </div>
    );
}

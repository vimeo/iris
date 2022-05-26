import Link from 'next/link'
import { useRouter } from 'next/router';

import { core } from '@vimeo/iris/tokens';
import { Button } from '@vimeo/iris/components';
import { LightDark, Search } from '@vimeo/iris/icons';
import { VimeoLogo } from '@vimeo/iris/illustration';

import NavLink from '../components/NavLink'

function Header({ handleToggleTheme }) {
    const { pathname } = useRouter();

    return (
        <div
            css={`
                border-bottom: 1px solid ${(p) => core.color.stroke};
                height: 64px;
                left: 0;
                position: sticky;
                right: 0;
                top: 0;
                z-index: 1;
            `}
        >
            <header
                css={`
                    align-items: center;
                    background: ${(p) => core.color.background.primary};
                    color: ${(p) => core.color.text.primary};
                    display: flex;
                    height: 100%;
                    justify-content: space-between;
                    padding: 0 var(--space-200);
                `}
            >
                <nav
                    css={`
                        align-items: center;
                        display: flex;
                        flex: 1 0 auto;
                        height: inherit;
                    `}
                >
                    <Link href="/">
                        <div 
                            css={`
                                align-items: center;
                                display: flex;
                            `}
                        >
                            <VimeoLogo
                                css={`
                                width: 6rem;
                                margin-right: 0.25rem;
                                > path {
                                    fill: ${(p) =>
                                    p.theme.name === 'dark' ? 'white' : 'black'};
                                }
                                `}
                            />
                            <span 
                                css={`
                                    color: ${(p) => p.theme.name === 'dark' ? 'white' : 'black'};
                                    font-size: 26px;
                                    font-weight: 600;
                                    line-height: 1px;
                                `}
                            >
                                design
                            </span>
                        </div>
                    </Link>
                    <div
                        css={`
                            display: flex;
                            height: 100%;
                            flex: 1 0 auto;
                            margin-left: var(--space-300);
                        `}
                    >
                    {pages.map(({ href, name }) => (
                        <NavLink href={href} active={pathname === href} key={href}>
                            {name}
                        </NavLink>
                    ))}
                    </div>
                </nav>
                <div 
                    css={`
                    align-items: center;
                    display: flex;
                    `}
                >
                    <Button
                        icon={<Search />}
                        size="md"
                        style={{ marginLeft: 'auto', marginRight: '0.5rem' }}
                        variant="minimal"
                    />
                    <Button
                        icon={<LightDark />}
                        onClick={handleToggleTheme}
                        size="md"
                        variant="minimal"
                    />
                </div>
            </header>
        </div>
    );
}

const pages = [
    { href: '/principles', name: 'Principles' },
    { href: '/tokens', name: 'Tokens' },
    { href: '/components', name: 'Components' },
    { href: '/patterns', name: 'Patterns' },
    { href: '/content', name: 'Content' },
    { href: '/resources/logo', name: 'Resources' },
];

export default Header

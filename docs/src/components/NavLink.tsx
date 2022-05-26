import Link from 'next/link'
import styled from 'styled-components'

import { core } from '@vimeo/iris/tokens';

const StyledLink = styled.a`
    color: ${(p) => core.color.text.primary};
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0 var(--space-100);
`

const ActiveBorder = styled.div`
    &:after {
        height: 2px;
        position: absolute;
        right: var(--space-50);
        bottom: 0px;
        left: var(--space-50);
        background-color: ${(p) => core.color.format.primary};;
        content: "";
    }
`

function NavLink({ active, href, children }) {
  return (
    <div css={`
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        margin: 0 var(--space-50);
        position: relative;
    `}
    >
        <Link href={href} passHref>
            <StyledLink>{children}</StyledLink>
        </Link>

        {active && <ActiveBorder />}
    </div>
  )
}

export default NavLink

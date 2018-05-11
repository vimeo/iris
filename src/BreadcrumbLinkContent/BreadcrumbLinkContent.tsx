import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import mediaQuery from '../globals/js/style-helpers/mediaQuery';
//@ts-ignore 
import ArrowLeft from '../icons/arrow-left.svg';
import { ARROWLEFT_CLASSNAME} from '../Breadcrumb/Breadcrumb';

const ArrowLeftWrapper = styled.span`
        display: inline-block;
        position: relative;
        top: ${rem(5)};

        svg {
            height: ${rem(24)};
            width:${rem(24)};

            * {
            fill: currentColor;
            }
        }

        ${mediaQuery.md`
            display: none;
        `}
`;

const LinkLabel = styled.span`
        display: none;
        ${mediaQuery.md`
            display: inline;
        `}
`;

const BreadcrumbLinkContent: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    return (
        <span>
            <ArrowLeftWrapper className={ARROWLEFT_CLASSNAME}>
                <ArrowLeft />
            </ArrowLeftWrapper>
            <LinkLabel>
                {props.children}
            </LinkLabel>
        </span>
    );
};

export default BreadcrumbLinkContent;


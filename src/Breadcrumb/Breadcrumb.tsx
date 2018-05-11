
import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import mediaQuery from '../globals/js/style-helpers/mediaQuery';
//@ts-ignore
import ChevronRight from '../icons/chevron-right.svg';
import { ParagraphMd } from '../Type';

export interface BreadcrumbProps {
    crumbs?: Array<React.ReactNode>,
    currentPageLabel: string;
};

const BreadCrumbSetWrapper = styled.div `width: 100%;`;

const ArrowIconWidth = 24;
const ArrowIconSmallPadding = 8;
export const ARROWLEFT_CLASSNAME = 'BreadcrumbLink_ArrowLeft';

const truncatewithEllipsisCSS = css`
    display: inline-block;
    overflow: hidden;

    position: relative;

    width: auto;
    max-width: 100%;

    white-space: nowrap;
    text-overflow: ellipsis;
`;

interface CrumbWrapperProps extends React.HTMLProps<HTMLDivElement>{
    showOnSmall?: boolean;
}

const CrumbWrapper = styled<CrumbWrapperProps,'div'>('div')`
    display: ${props => props.showOnSmall ? 'inline-block' : 'none'};

    position: relative;

    ${mediaQuery.md`
        display: inline-block;
        padding-right: ${rem(ArrowIconWidth)};
    `}

    ${props => props.showOnSmall ? css`
        .${ARROWLEFT_CLASSNAME} {
            display: inline-block;
            padding-right: ${rem(8)};
            ${mediaQuery.md`
                display: none;
            `}
        }
    ` : ''}
`;

const CrumbLabel = styled(ParagraphMd)`
    ${truncatewithEllipsisCSS}
`;

const CrumbArrowIcon = styled(ChevronRight)`
    position: absolute;
    top: ${rem(-2)};

    width: ${rem(ArrowIconWidth)};
    height: ${rem(ArrowIconWidth)};
    display: none;
    right: 0;

    ${mediaQuery.md`
        display: inline-block;
    `}
`;

const CurrentPageCrumb = styled(ParagraphMd)`
    ${truncatewithEllipsisCSS}
    ${mediaQuery.md`
        //cancels-out inline calculated style with 100% minus the width of the arrow icon and its padding.
        max-width: calc(100% - ${rem(ArrowIconWidth + ArrowIconSmallPadding) }) !important; 
    `}
`;

const Breadcrumb = ({
    crumbs,
    currentPageLabel,
    ...filteredProps
}: BreadcrumbProps) => {

    const crumbWidth = crumbs ? `${100 / (crumbs.length + 1)}%` : '100%';

    const CrumbList = crumbs.map(function(crumb, i) {

        return (
                <CrumbWrapper
                    showOnSmall={i === crumbs.length - 1}
                    key={`crumb-${i}`}
                    style={{ 'maxWidth': crumbWidth }}
                >
                    <CrumbLabel
                        element="span"
                    >
                        {crumb}
                    </CrumbLabel>
                    <CrumbArrowIcon />
                </CrumbWrapper>
        );
    });

    return (
        <BreadCrumbSetWrapper
            {...filteredProps}
        >
            {crumbs && CrumbList}

            <CurrentPageCrumb
                element="span"
                style={{ 'maxWidth': crumbWidth }}
            >
                {currentPageLabel}
            </CurrentPageCrumb>
        </BreadCrumbSetWrapper>
    );
};

export default Breadcrumb;

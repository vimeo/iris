import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphLg } from '../Type/';
import COLORS from '../globals/js/constants/COLORS';
import VimeoStyleSettings from '../globals/js/style-settings/VimeoStyleSettings';

const categoryCardStyleSettings = {
    ICON_SIZE: rem(48),
    BORDER_RADIUS: rem(5),
    TRANSITION: '300ms ease',
};

export interface CategoryCardProps {
    /**
     * a URL for a backgroundImage to represent the category
     */
    backgroundImageURL: string;
    /**
     * Should be a string of the category title
     */
    children: React.ReactNode;
    /**
     * Category Icon SVG
     */
    icon: React.ReactNode;
}

// ==================== CategoryCard Styled Thing

const CategoryCardStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>(
    'div'
)`
    margin-bottom: 1rem;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);

    background-color: ${COLORS.SoutherlySky};
    border-radius: ${categoryCardStyleSettings.BORDER_RADIUS};
    padding-bottom: 100%;
    position: relative;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    }
`;

const BackgroundStyled = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 100%;
    background-size: cover;
    background-position: center;
    transition: transform ${categoryCardStyleSettings.TRANSITION};
    border-radius: ${categoryCardStyleSettings.BORDER_RADIUS};

    ${CategoryCardStyled}:hover & {
        transform: scale(1.1);
    }
`;

const OverlayStyled = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 100%;
    background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
    );
    border-radius: ${categoryCardStyleSettings.BORDER_RADIUS};
    opacity: 0.7;
    transition: opacity ${categoryCardStyleSettings.TRANSITION};

    ${CategoryCardStyled}:hover & {
        opacity: 1;
    }
`;

const CardContentWrapStyled = styled('div')`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardContentStyled = styled('div')`
    text-align: center;
    padding: ${rem(24)};
`;

const IconWrapperStyled = styled('div')`
    margin-bottom: ${rem(8)};
    svg {
        height: auto;
        width: ${categoryCardStyleSettings.ICON_SIZE};
        * {
            fill: ${VimeoStyleSettings.colors.typeColors.textColorLight};
        }
    }
`;

// ==================== CategoryCard

const CategoryCard = ({
    backgroundImageURL,
    children,
    icon,
    ...filteredProps
}: CategoryCardProps) => {
    return (
        <CategoryCardStyled {...filteredProps}>
            <BackgroundStyled
                style={{ backgroundImage: `url(${backgroundImageURL})` }}
            />
            <OverlayStyled />
            <CardContentWrapStyled>
                <CardContentStyled>
                    <IconWrapperStyled>{icon}</IconWrapperStyled>
                    <ParagraphLg format="white" element="div" noMargin>
                        {children}
                    </ParagraphLg>
                </CardContentStyled>
            </CardContentWrapStyled>
        </CategoryCardStyled>
    );
};

export default CategoryCard;

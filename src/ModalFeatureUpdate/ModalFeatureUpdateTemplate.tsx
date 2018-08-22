import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Header3, ParagraphMd, ParagraphSm } from '../Type';
import { ModalFeatureUpdateStyleSettings } from './ModalFeatureUpdate';

export interface ModalFeatureUpdateTemplateProps {
    /**
     * Headline as string or ReactNode
     */
    headline: React.ReactNode;
    /**
     * should be an image tag or SVG with a width="380" / height="250" aspect ratio. Don't forget the alt tag if the image is more than just abstract decoration.
     */
    heroImageArea?: React.ReactNode;
    /**
     * pass a primary, medium button with the primary action
     */
    primaryActionArea: React.ReactNode;
    /**
     * this should be a <LinkText> component.
     */
    secondaryActionArea: React.ReactNode;
}

// ==================== ModalFeatureUpdateTemplate

const ModalFeatureUpdateTemplateStyled = styled<
    React.HTMLProps<HTMLDivElement>,
    'div'
>('div')`
    display: block;
    position: relative;
`;

const HeroImageAreaStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>(
    'div'
)`
    border-radius: ${rem(ModalFeatureUpdateStyleSettings.borderRadius)}
        ${rem(ModalFeatureUpdateStyleSettings.borderRadius)} 0 0;
    max-height: ${rem(250)};
    width: 100%;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
    }
`;

const BodyAreaStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    display: block;
    text-align: center;
    padding: ${rem(24)} ${rem(28)} 0;
`;

const FooterAreaStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    display: block;
    text-align: center;
    padding: 0 ${rem(28)} ${rem(28)};
`;

const SecondaryAreaStyled = styled<React.HTMLProps<HTMLDivElement>, any>(
    ParagraphSm
)`
    margin-top: ${rem(4)};
`;

// ==================== ModalFeatureUpdateTemplate
const ModalFeatureUpdateTemplate: SFC<ModalFeatureUpdateTemplateProps> = ({
    children,
    headline,
    heroImageArea,
    primaryActionArea,
    secondaryActionArea,
    ...filteredProps
}) => {
    return (
        <ModalFeatureUpdateTemplateStyled {...filteredProps}>
            {heroImageArea && (
                <HeroImageAreaStyled>{heroImageArea}</HeroImageAreaStyled>
            )}
            <BodyAreaStyled>
                <Header3>{headline}</Header3>
                <ParagraphMd element="div">{children}</ParagraphMd>
            </BodyAreaStyled>
            <FooterAreaStyled>
                <div>{primaryActionArea}</div>
                <SecondaryAreaStyled element="div" noMargin>
                    {secondaryActionArea}
                </SecondaryAreaStyled>
            </FooterAreaStyled>
        </ModalFeatureUpdateTemplateStyled>
    );
};

export default ModalFeatureUpdateTemplate;

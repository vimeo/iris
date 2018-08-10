import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { HeaderAltSm, Header5, ParagraphMd } from '../Type';
import ButtonIconOnly from '../ButtonIconOnly';
//@ts-ignore
import DismissIcon from '../icons/dismiss-x.svg';
import COLORS from '../globals/js/constants/COLORS';

export interface FeatureTourPanelContentProps {
    /**
     * Area for button. Use `<FeatureTourPanelButton>`
     */
    actionArea?: React.ReactNode;
    /**
     * The content of the panel
     */
    children: React.ReactNode;
    /**
     * Area in bottom right for things like "Step 1 of 2"
     */
    contextualInfo?: React.ReactNode;
    /**
     * Translated label explaining what the close button does.
     */
    dismissButtonA11yLabel: string;
     /**
     * Object of props that will be spread across the dismiss button
     */
    dismissButtonProps?: Object;
    /**
     * Feature Panel header
     */
    headerText?: string;
    /**
     * Fires when panel is dismissed
     */
    onDismissClick?: (event?: MouseEvent) => void;
}

const HeaderWrapperStyled = styled.div`
    padding-right: ${rem(24)};
`;

const FeatureTourPanelContentStyled = styled<React.HTMLProps< HTMLDivElement >, 'div'>('div')`
    padding: ${rem(24) + ' ' + rem(24) + ' ' + rem(16)};
    border-radius: ${rem(5)};
    background: ${COLORS.DarkerBlue};
`;

const DismissButtonStyled = styled(ButtonIconOnly)`
    position: absolute;
    top: ${rem(14)};
    right: ${rem(16)};
`;

const ContextAreaStyled = styled('div')`
    position: absolute;
    bottom: ${rem(20)};
    right: ${rem(20)};
    max-width: 50%;
    text-align: right;
`;

const FeatureTourPanelContent = ({
    actionArea,
    children,
    contextualInfo,
    dismissButtonA11yLabel,
    headerText,
    onDismissClick,
    dismissButtonProps,
    ref:_,
    ...filteredProps
}: FeatureTourPanelContentProps & React.HTMLProps< HTMLDivElement >) => {

    const handleClick = event => {
        if(typeof onDismissClick === 'function') {
            onDismissClick(event)
        }
    }

    return (
        <FeatureTourPanelContentStyled {...filteredProps}>
            <DismissButtonStyled
                {...dismissButtonProps}
                icon={<DismissIcon title={dismissButtonA11yLabel} />}
                format="lightTransparent"
                size="sm"
                onClick={handleClick}
            />
            {headerText && <HeaderWrapperStyled><Header5 format="white">{headerText}</Header5></HeaderWrapperStyled>}
            <ParagraphMd element="div" format="white">
                {children}
            </ParagraphMd>
            {actionArea}
            {contextualInfo && (
                <ContextAreaStyled>
                    <HeaderAltSm format="white" noMargin>
                        {contextualInfo}
                    </HeaderAltSm>
                </ContextAreaStyled>
            )}
        </FeatureTourPanelContentStyled>
    );
};

export default FeatureTourPanelContent;

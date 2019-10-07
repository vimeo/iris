import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { rem, getLuminance } from 'polished';

import { ButtonIconOnly } from '../../buttons/ButtonIconOnly/ButtonIconOnly';

import { HeaderAltSm, Header5, ParagraphMd } from '../../../legacy';
import { DismissX } from '../../../icons';
import * as COLORS from '../../../color';

export interface FeatureTourPanelContentProps {
  actionArea?: ReactNode;
  children: ReactNode;
  contextualInfo?: ReactNode;
  dismissButtonA11yLabel: string;
  dismissButtonProps?: {};
  headerText?: string;
  onDismissClick?: (event?: MouseEvent) => void;
  color?: string;
}

export const FeatureTourPanelContent = ({
  actionArea,
  children,
  color,
  contextualInfo,
  dismissButtonA11yLabel,
  headerText,
  onDismissClick,
  dismissButtonProps,
  ...props
}: FeatureTourPanelContentProps) => {
  const handleClick = event => {
    if (typeof onDismissClick === 'function') {
      onDismissClick(event);
    }
  };

  const theme = getLuminance(color) > 0.5 ? 'dark' : 'white';

  return (
    <FeatureTourPanelContentStyled color={color} {...props}>
      <DismissButtonStyled
        {...dismissButtonProps}
        icon={<DismissX />}
        format={
          getLuminance(color) > 0.5 ? 'dark' : 'lightTransparent'
        }
        size="sm"
        onClick={handleClick}
      />
      {headerText && (
        <HeaderWrapperStyled>
          <Header5 format={theme}>{headerText}</Header5>
        </HeaderWrapperStyled>
      )}
      <ParagraphMd element="div" format={theme}>
        {children}
      </ParagraphMd>
      {actionArea}
      {contextualInfo && (
        <ContextAreaStyled>
          <HeaderAltSm format={theme} noMargin>
            {contextualInfo}
          </HeaderAltSm>
        </ContextAreaStyled>
      )}
    </FeatureTourPanelContentStyled>
  );
};

const HeaderWrapperStyled = styled.div`
  padding-right: ${rem(24)};
`;

const FeatureTourPanelContentStyled = styled.div`
  padding: ${rem(24)} ${rem(24)} ${rem(16)};
  border-radius: ${rem(5)};
  background: ${props =>
    props.color ? props.color : COLORS.DarkerBlue};

  img {
    display: none;
  }

  img:first-child {
    display: block;
    width: calc(100% + 3rem);
    margin: -1.5rem -1.5rem 1rem;
    border-radius: ${rem(5)} ${rem(5)} 0 0;
  }
`;

const DismissButtonStyled = styled(ButtonIconOnly)`
  position: absolute;
  top: ${rem(14)};
  right: ${rem(16)};
`;

const ContextAreaStyled = styled.div`
  position: absolute;
  bottom: ${rem(20)};
  right: ${rem(20)};
  max-width: 50%;
  text-align: right;
`;

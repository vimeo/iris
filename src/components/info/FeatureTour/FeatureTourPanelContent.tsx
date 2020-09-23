import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  rem,
  getLuminance,
  adjustHue,
  setSaturation,
} from 'polished';

import { Button } from '../../buttons/Button/Button';
import { Header, Paragraph } from '../../../typography';
import { DismissX } from '../../../icons';
import { themes } from '../../../themes';
import { blue } from '../../../color';
import { onClose, useClose } from '../../../utils';

const BLUE = adjustHue(30, setSaturation(0.9, blue(600)));

export interface FeatureTourPanelContentProps {
  actionArea?: ReactNode;
  children: ReactNode;
  contextualInfo?: ReactNode;
  dismissButtonA11yLabel: string;
  dismissButtonProps?: unknown;
  headerText?: string;
  onClose?: onClose;
  color?: string;
  size: 'md' | 'lg' | 'xl';
}

export const FeatureTourPanelContent = ({
  actionArea,
  children,
  color,
  contextualInfo,
  dismissButtonA11yLabel,
  headerText,
  onClose,
  dismissButtonProps,
  ...props
}: FeatureTourPanelContentProps) => {
  const { reject, complete } = useClose(onClose);

  const onClick = (event) => {
    event.preventDefault();
    if (reject) reject(event);
    if (complete) complete(event);
  };

  const theme = getLuminance(color) > 0.5 ? 'light' : 'dark';

  return (
    <ThemeProvider theme={themes[theme]}>
      <FeatureTourPanelContentStyled color={color} {...props}>
        <DismissButtonStyled
          {...dismissButtonProps}
          icon={<DismissX />}
          format="basic"
          variant="hyperminimal"
          size="sm"
          onClick={onClick}
        />
        {headerText && (
          <HeaderWrapperStyled>
            <Header size="5">{headerText}</Header>
          </HeaderWrapperStyled>
        )}
        <Paragraph size="2" element="span">
          {children}
        </Paragraph>
        {actionArea}
        {contextualInfo && (
          <ContextAreaStyled>
            <Header size="5" format="basic" style={{ margin: 0 }}>
              {contextualInfo}
            </Header>
          </ContextAreaStyled>
        )}
      </FeatureTourPanelContentStyled>
    </ThemeProvider>
  );
};

const sizes = {
  md: 20,
  lg: 26,
  xl: 32,
};

const HeaderWrapperStyled = styled.div`
  padding-right: ${rem(24)};
`;

const FeatureTourPanelContentStyled = styled.div<{
  size: 'md' | 'lg' | 'xl';
}>`
  padding: ${rem(24)} ${rem(24)} ${rem(16)};
  border-radius: ${rem(5)};
  background: ${(props) => (props.color ? props.color : BLUE)};
  max-width: ${(p) => sizes[p.size]}rem;

  img {
    display: none;
  }

  img:first-of-type {
    display: block;
    width: calc(100% + 3rem);
    margin: -1.5rem -1.5rem 1rem;
    border-radius: ${rem(5)} ${rem(5)} 0 0;
  }
`;

const DismissButtonStyled = styled(Button)`
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

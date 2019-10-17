import React, { ReactNode, SFC } from 'react';
import { HeaderAltSm } from '../../legacy';
import {
  VerticalMenuHeaderGroupStyled,
  HeaderWrapper,
  ActionButtonWrapper,
  ActionButton,
} from './VerticalMenuHeaderGroupStyled';
import { Tip } from '../../components/portals/Tip/Tip';

interface Props {
  actionButtonIcon?: ReactNode;
  actionButtonTooltipText?: string;
  actionButtonOnClick?: (
    e: React.MouseEvent<HTMLSpanElement>,
  ) => void;
  children: ReactNode;
  headerElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  label: string;
  labelId: string;
}

export const VerticalMenuHeaderGroup: SFC<Props> = ({
  actionButtonIcon,
  actionButtonTooltipText,
  actionButtonOnClick,
  children,
  headerElement = 'h3',
  label,
  labelId,
  ...props
}) => {
  const hasActionButton =
    !!actionButtonIcon &&
    !!actionButtonTooltipText &&
    !!actionButtonOnClick;

  return (
    <VerticalMenuHeaderGroupStyled {...props}>
      <HeaderWrapper hasActionButton={hasActionButton}>
        <HeaderAltSm element={headerElement} id={labelId}>
          {label}
        </HeaderAltSm>
        {hasActionButton && (
          <ActionButtonWrapper>
            <Tip
              content={actionButtonTooltipText}
              // triggerOnClick={false}
            >
              <ActionButton onClick={actionButtonOnClick}>
                {actionButtonIcon}
              </ActionButton>
            </Tip>
          </ActionButtonWrapper>
        )}
      </HeaderWrapper>
      <div aria-labelledby={labelId}>{children}</div>
    </VerticalMenuHeaderGroupStyled>
  );
};

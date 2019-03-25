import React, {
  SFC,
  MouseEventHandler,
  ChangeEventHandler,
} from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { InputCheckbox } from '../InputCheckbox/InputCheckbox';
import { VideoCardStyleSettings } from './VideoCardHelpers';

export interface VideoCardSelectionCheckboxProps {
  checked?: boolean;
  isShowing?: boolean;
  label: string;
  onChange?: ChangeEventHandler;
  onCheckBoxClick?: MouseEventHandler;
  title?: string;
}

export interface WrapperStyledProps
  extends React.HTMLProps<HTMLDivElement> {
  isShowing?: boolean;
}

const WrapperStyled = styled.div<WrapperStyledProps>`
  display: ${props => (props.isShowing ? 'inline-flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  padding: ${rem(VideoCardStyleSettings.padding)}
    ${rem(VideoCardStyleSettings.padding)} 0;
`;

export const VideoCardSelectionCheckbox: SFC<
  VideoCardSelectionCheckboxProps
> = ({ isShowing, label, onCheckBoxClick, title, ...props }) => {
  const handleCheckboxAreaClick = e => {
    e.stopPropagation();
    if ('function' === typeof onCheckBoxClick) {
      onCheckBoxClick(e);
    }
  };

  const handleCheckboxClick = e => {
    e.stopPropagation();
  };

  return (
    <WrapperStyled
      onClick={handleCheckboxAreaClick}
      isShowing={isShowing}
    >
      <InputCheckbox
        {...props}
        onClick={handleCheckboxClick}
        theme="dark"
        hideLabel
        label={label}
        readOnly
        id={title.replace(/[^A-Z0-9]/gi, '_')}
      />
    </WrapperStyled>
  );
};

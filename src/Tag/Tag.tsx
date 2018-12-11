import React, { SFC, ReactNode } from 'react';
import { Button } from '../Button/Button';
import styled from 'styled-components';
import { rem } from 'polished';
import DeleteIcon from '../icons/dismiss-x.svg';
import { ButtonFocus } from '../Button/ButtonFocus';

export interface TagProps {
    autoMargins?: boolean;
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
    children: ReactNode;
    className?: string;
    /**
     * default is 'light'
     */
    format?: 'light' | 'dark';
    isButtonElement?: boolean;
    isInline?: boolean;
    onDismiss?: any;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

const ButtonStyledAsTag = styled(Button)`
    border-radius: ${rem(66)};

    ${ButtonFocus} {
        border-radius: ${rem(66)};
    }
`;

export const Tag: SFC<TagProps> = ({
    autoMargins,
    autoWidth = 'xs',
    children,
    format = 'light',
    isButtonElement,
    onDismiss,
    size = 'md',
    ...props
}) => {
    const handleDismiss = e => {
        e.preventDefault();
        if (typeof onDismiss === 'function') {
            onDismiss(e);
        }
    };

    let iconProps;

    if (onDismiss) {
        iconProps = {
            icon: <DeleteIcon />,
            iconLocation: 'afterLabel',
        };
    }

    const buttonFormat = format === 'dark' ? 'secondaryDark' : 'secondary';

    return (
        <ButtonStyledAsTag
            {...props}
            {...iconProps}
            autoMargins={autoMargins}
            autoWidth={autoWidth}
            isButtonElement={isButtonElement}
            format={buttonFormat}
            size={size}
            children={children}
            onClick={handleDismiss}
        />
    );
};

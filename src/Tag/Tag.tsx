import React from 'react';
import Button from '../Button';
import styled from 'styled-components';
import { rem } from 'polished';
// @ts-ignore
import DeleteIcon from '../icons/dismiss-x.svg';

export interface TagProps {
    autoMargins?: boolean,
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid',
    children: React.ReactChildren | string,
    className?: string,
    /**
     * default is 'light'
     */
    format?: 'light' | 'dark',
    isButtonElement?: boolean,
    isInline?: boolean,
    onDismiss?: any,
    size?: 'xs' | 'sm' | 'md' | 'lg',
};

const ButtonStyledAsTag = styled(Button)`
    border-radius: ${rem(66)};
`;

const Tag = ({
		autoMargins,
		autoWidth = 'xs',
		children,
		format = 'light',
		isButtonElement,
		onDismiss,
		size = 'md',
		...filteredProps
	}: TagProps)=> {

    const handleDismiss = (e) => {
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
            {...filteredProps}
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

export default Tag;

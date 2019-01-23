import React, { SFC, ReactNode } from 'react';
import { Button } from '../Button/Button';
import styled from 'styled-components';
import { rem } from 'polished';
import { DismissX } from '../Icons';
import { ButtonFocus } from '../Button/ButtonFocus';

export interface TagProps {
    autoMargins?: boolean;
    autoWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'fluid';
    children: ReactNode;
    className?: string;
    format?: 'light' | 'dark';
    img?: string;
    isButtonElement?: boolean;
    isInline?: boolean;
    onDismiss?: React.MouseEventHandler;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

interface IconProps {
    icon?: ReactNode;
    iconLocation?: 'afterLabel' | 'beforeLabel' | 'featuredLeft';
}

export const Tag: SFC<TagProps> = ({
    autoMargins,
    autoWidth = 'xs',
    children,
    format = 'light',
    img,
    isButtonElement,
    onDismiss,
    size = 'md',
    ...props
}) => (
    <ButtonStyledAsTag
        {...props}
        {...iconProps(onDismiss)}
        autoMargins={autoMargins}
        autoWidth={autoWidth}
        img={img}
        isButtonElement={isButtonElement}
        size={size}
        format={format === 'dark' ? 'secondaryDark' : 'secondary'}
        onClick={e => {
            e.preventDefault();
            if (typeof onDismiss === 'function') {
                onDismiss(e);
            }
        }}
    >
        {img && <img src={img} />}
        {children}
    </ButtonStyledAsTag>
);

const iconProps = onDismiss =>
    onDismiss
        ? ({
              icon: <DismissX />,
              iconLocation: 'afterLabel',
          } as IconProps)
        : {};

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Keys<K extends string, T> = { [P in K]: T };

function width(size: Sizes) {
    const widths: Keys<Sizes, number> = {
        xl: 60,
        lg: 48,
        md: 39,
        sm: 32,
        xs: 24,
    };
    return widths[size];
}

function padding(size: Sizes) {
    const paddings: Keys<Sizes, number> = {
        xl: width(size) + 20,
        lg: width(size) + 20,
        md: width(size) + 14,
        sm: width(size) + 8,
        xs: width(size) + 6,
    };
    return paddings[size];
}

const ButtonStyledAsTag = styled(Button)<IconProps & { img: string }>`
    border-radius: ${rem(66)};
    ${props =>
        props.img && `padding-left: ${rem(padding(props.size))} !important`}

    ${ButtonFocus} {
        border-radius: ${rem(66)};
    }

    img {
        position: absolute;
        top: 0.03125rem;
        left: 0.03125rem;
        border-radius: 50%;
        height: calc(100% - 0.03125rem);
        width: ${props => rem(width(props.size))};
    }
`;

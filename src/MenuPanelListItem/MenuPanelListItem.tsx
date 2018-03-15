import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphMd } from '../Type';
// @ts-ignore
import SelectedIcon from '../icons/checkmark.svg';
import COLORS from '../globals/js/constants/COLORS';


export interface MenuPanelListItemProps {
    className?: string,
    label: string,
    href?: string,
    linkElement?: any,
    isSelected?: boolean,
    icon?: React.Component<any>,
};


const MenuPanelListItem = ({
        label,
        href = '#',
        linkElement,
        icon,
        isSelected,
        ...menuItemProps
    }: MenuPanelListItemProps) => {

    const SelectedIconElementStyled = styled(SelectedIcon)`
        position: absolute;
        top: ${rem(9)};
        left: 0.25rem;

        width: 1rem;
        height: 1rem;

        * {
            fill: ${COLORS.VimeoBlue};
        }
    `;

    const LinkIconWrapperStyled = styled('span')`
        display: inline-block;

        position: relative;
        top: ${0};

        width: ${rem(18)};
        height: ${rem(18)};
        margin-right: ${rem(8)};

        * {
            fill: ${COLORS.AstroGranite};
        }
    `;

    const linkIconElement = icon ? (
        <LinkIconWrapperStyled>
            {icon}
        </LinkIconWrapperStyled>
    ) : null;

    const AnchorTag = (props) => {
        return (
                <a {...props} />
        );
    };

    const Element = linkElement || AnchorTag;

    const ListItemStyled = styled('li')`
        width: 100%;
    `;

    const LinkElementStyled = styled(Element)`
        display: inline-block;
        position: relative;

        width: 100%;
        padding: ${rem(8)} ${rem(24)};

        color: ${COLORS.AstroGranite};

        cursor: pointer;
        text-decoration: none;

        &:hover {
            color: ${COLORS.AstroGranite};
            background-color: ${COLORS.Paste};
        }

        // only show focus on the text, not the whole width of the menu
        &:focus {
            outline: none;
        }

    `;

    const LabelStyled = styled(ParagraphMd)`
        margin-bottom: 0;

        a:focus & {
                box-shadow: 0 0 0 ${rem(1)} ${COLORS.VimeoBlue};
        }
    `;

    return (
        <ListItemStyled>
            <LinkElementStyled
                href={href}
                {...menuItemProps}
            >
                {isSelected && <SelectedIconElementStyled />}
                <LabelStyled
                    element="span"
                    className="MenuLinkItem_Label"
                >
                    {linkIconElement}
                    {label}
                </LabelStyled>
            </LinkElementStyled>
        </ListItemStyled>
    );
};

export default MenuPanelListItem;

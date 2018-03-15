import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphMd } from '../Type';
import SelectedIcon from '../icons/checkmark.svg';
import COLORS from '../globals/js/constants/COLORS';

const displayName = 'MenuPanelListItem';

type Props = {
    className?: string,
    label: string,
    href?: string,
    linkElement?: any,
    isSelected?: boolean,
    icon?: React$Element<*>,
};


const MenuPanelListItem = ({
        className,
        label,
        href = '#',
        linkElement,
        icon,
        isSelected,
        ...menuItemProps
    }: Props): React$Element<*> => {


    const SelectedIconElementStyled = styled(SelectedIcon)`
        position: absolute;
        top: ${rem(9)};
        left: 0.25rem;

        width: 1rem;
        height: auto;

        * {
            fill: ${COLORS.VimeoBlue};
        }
}
    `;

    const LinkIconWrapperStyled = styled('span')`
        display: inline-block;

        position: relative;
        top: ${rem(4)};

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
        width: 100%:
    `;

    const LinkElementStyled = styled(Element)`
        display: flex;

        width: 100%;
        padding: ${rem(8)} ${rem(6)};

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

            .MenuItemLabel {
                box-shadow: 0 0 0 ${rem(1)} ${COLORS.VimeoBlue};
            }
        }

    `;

    const LabelStyled = styled(ParagraphMd)`
        margin-bottom: 0;
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
                >
                    {linkIconElement}
                    {label}
                </LabelStyled>
            </LinkElementStyled>
        </ListItemStyled>
    );
};

MenuPanelListItem.displayName = displayName;

export default MenuPanelListItem;

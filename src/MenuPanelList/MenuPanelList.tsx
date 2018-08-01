import React from 'react';
import {
    HeaderWrapperStyled,
    MenuListStyled,
    WrapperStyled,
} from './MenuPanelListStyled';
import { MenuPanelListProps } from './MenuPanelListTypes';
import MenuPanelListItem from '../MenuPanelListItem';
import { Header6 } from '../Type';

const MenuPanelList = ({
    hasDivider,
    header,
    menuItems,
    theme="light",
    ref: _,
    ...filteredProps
}: MenuPanelListProps & React.HTMLProps<HTMLDivElement>) => {

    const menuList = menuItems.length && menuItems.map((item, i) => (
        <MenuPanelListItem
            {...item}
            theme={theme}
            key={i}
        />
    ));

const menuHeader = (
    <HeaderWrapperStyled>
        <Header6 format={ theme === 'dark' ? 'white' : 'dark'}noMargin>{header}</Header6>
    </HeaderWrapperStyled>
);

    return (
        <WrapperStyled
            hasDivider={hasDivider}
            theme={theme}
            {...filteredProps}
        >
            {header && menuHeader}
            {menuList && <MenuListStyled>{menuList}</MenuListStyled>}
        </WrapperStyled>
    );
};

export default MenuPanelList;

import React, { SFC } from 'react';
import {
  HeaderWrapperStyled,
  MenuListStyled,
  WrapperStyled,
} from './MenuPanelListStyled';
import { MenuPanelListProps } from './MenuPanelListTypes';
import { MenuPanelListItem } from '../MenuPanelListItem/MenuPanelListItem';
import { Header6 } from '../../legacy';

export const MenuPanelList: SFC<MenuPanelListProps> = ({
  hasDivider,
  header,
  menuItems,
  theme = 'light',
  ...props
}) => {
  const menuList =
    menuItems.length &&
    menuItems.map((item, i) => (
      <MenuPanelListItem {...item} theme={theme} key={i} />
    ));

  const menuHeader = (
    <HeaderWrapperStyled>
      <Header6 format={theme === 'dark' ? 'white' : 'dark'} noMargin>
        {header}
      </Header6>
    </HeaderWrapperStyled>
  );

  return (
    <WrapperStyled hasDivider={hasDivider} theme={theme} {...props}>
      {header && menuHeader}
      {menuList && <MenuListStyled>{menuList}</MenuListStyled>}
    </WrapperStyled>
  );
};

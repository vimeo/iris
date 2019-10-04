import React, { SFC } from 'react';
import {
  HeaderWrapperStyled,
  MenuListStyled,
  WrapperStyled,
} from './PopOverListStyled';
import { PopOverListProps } from './PopOverListTypes';
import { PopOverListItem } from '../PopOverListItem/PopOverListItem';
import { Header6 } from '../../../legacy';

export const PopOverList: SFC<PopOverListProps> = ({
  hasDivider,
  header,
  menuItems,
  theme = 'light',
  ...props
}) => {
  const menuList =
    menuItems.length &&
    menuItems.map((item, i) => (
      <PopOverListItem {...item} theme={theme} key={i} />
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

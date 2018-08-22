import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
let patterns = require('json-loader!../patternList.json');

import {
    VerticalMenuItem,
    VerticalMenuItemContent
} from '../../src/index';

const linkName = (key, i) => patterns[key][i][1];
const patternLink = (key, i) => "/pattern/" + key + '/'+ patterns[key][i][0];

export const NavigationLinkEl = (key, i) => (
    <NavigationLink
        linkPath={patternLink(key, i)}
        linkText={linkName(key, i)}
        key={i}
        index={i}
    />
);

export const filteredNavigationLinkEl = (key, searchText, i) =>
    linkName(key, i)
        .toLowerCase()
        .indexOf(searchText) !== -1
            ? NavigationLinkEl(key, i)
            : null;

const NavLinkIn = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }

  to {
    max-height: 4rem;
    opacity: 1;
  }
`;

const NavigationLinkStyled = styled(VerticalMenuItem)`
    animation: ${NavLinkIn} 180ms ease-in-out both;
    animation-delay: ${props => props.index * 8}ms;
`;

export const NavigationLink = (props) => (
    <NavigationLinkStyled
        index={props.index}>
            <Link to={props.linkPath}>
                <VerticalMenuItemContent
                    label={props.linkText} />
            </Link>
    </NavigationLinkStyled>
);

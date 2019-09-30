import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { mediaQuery } from '../../layout';
import { ArrowLeft } from '../../icons';
import { ARROWLEFT_CLASSNAME } from '../Breadcrumb/Breadcrumb';

const ArrowLeftWrapper = styled.span`
  display: inline-block;
  position: relative;
  top: ${rem(5)};

  svg {
    height: ${rem(24)};
    width: ${rem(24)};

    * {
      fill: currentColor;
    }
  }

  ${mediaQuery.md`
            display: none;
        `};
`;

const LinkLabel = styled.span`
  display: none;
  ${mediaQuery.md`
            display: inline;
        `};
`;

export const BreadcrumbLinkContent: SFC<any> = props => (
  <span>
    <ArrowLeftWrapper className={ARROWLEFT_CLASSNAME}>
      <ArrowLeft />
    </ArrowLeftWrapper>
    <LinkLabel>{props.children}</LinkLabel>
  </span>
);

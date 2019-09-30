import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Badge as B } from './Badge';

import { Story } from '../../storybook';

const BadgeOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Badge = styled(B)`
  margin: 0 1rem 1rem 0;
`;

const sizes = {
  sm: 'sm',
  lg: 'lg',
};

storiesOf(`components|Badges`, module).add('Badge', () => (
  <Story title="Badge">
    <BadgeOuterWrapper>
      <Badge href="#" size={select('size', sizes, 'sm')}>
        default
      </Badge>
      <Badge
        href="#"
        format="alum"
        size={select('size', sizes, 'sm')}
      >
        alum
      </Badge>
      <Badge
        href="#"
        format="beta"
        size={select('size', sizes, 'sm')}
      >
        beta
      </Badge>
      <Badge
        href="#"
        format="business"
        size={select('size', sizes, 'sm')}
      >
        business
      </Badge>
      <Badge
        href="#"
        format="curation"
        size={select('size', sizes, 'sm')}
      >
        curation
      </Badge>
      <Badge
        href="#"
        format="featured"
        size={select('size', sizes, 'sm')}
      >
        featured
      </Badge>
      <Badge href="#" format="hd" size={select('size', sizes, 'sm')}>
        hd
      </Badge>
      <Badge
        href="#"
        format="info"
        size={select('size', sizes, 'sm')}
      >
        info
      </Badge>
      <Badge
        href="#"
        format="live"
        size={select('size', sizes, 'sm')}
      >
        live
      </Badge>
      <Badge
        href="#"
        format="live-archive"
        size={select('size', sizes, 'sm')}
      >
        live
      </Badge>
      <Badge href="#" format="new" size={select('size', sizes, 'sm')}>
        new
      </Badge>
      <Badge
        href="#"
        format="partner"
        size={select('size', sizes, 'sm')}
      >
        partner
      </Badge>
      <Badge
        href="#"
        format="plus"
        size={select('size', sizes, 'sm')}
      >
        plus
      </Badge>
      <Badge
        href="#"
        format="producer"
        size={select('size', sizes, 'sm')}
      >
        producer
      </Badge>
      <Badge href="#" format="pro" size={select('size', sizes, 'sm')}>
        pro
      </Badge>
      <Badge
        href="#"
        format="sponsor"
        size={select('size', sizes, 'sm')}
      >
        sponsor
      </Badge>
      <Badge
        href="#"
        format="staff"
        size={select('size', sizes, 'sm')}
      >
        staff
      </Badge>
      <Badge
        href="#"
        format="support"
        size={select('size', sizes, 'sm')}
      >
        support
      </Badge>
      <Badge
        href="#"
        format="upgrade"
        size={select('size', sizes, 'sm')}
      >
        upgrade
      </Badge>
      <Badge href="#" format="vod" size={select('size', sizes, 'sm')}>
        vod
      </Badge>
    </BadgeOuterWrapper>
  </Story>
));

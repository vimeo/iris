import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Badge } from './Badge';

import { Layout } from '../../../storybook';

/* eslint-disable import/no-default-export */
export default { title: 'components|chips/Badge' };
/* eslint-enable import/no-default-export */

export function Common() {
  return (
    <Layout.StoryVertical>
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
    </Layout.StoryVertical>
  );
}

const sizes = {
  sm: 'sm',
  lg: 'lg',
} as const;

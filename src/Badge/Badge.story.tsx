import React from 'react';
import { Badge } from '../';
import { storiesOf } from '@storybook/react';
import { Story } from '../../.storybook/Story';
import { SovereignShadow } from '../Color/Color';
import styled from 'styled-components';

const $Badge = styled(Badge)`
  margin: 0.5rem 1rem;
`;

const componentName = 'Badge';

storiesOf(`components/`, module).add('Badge', () => (
  <Story title={componentName}>
    <div style={{ padding: '2em', width: '100%' }}>
      {Badges('md')}
    </div>
    <div
      style={{
        padding: '2em',
        width: '100%',
        background: SovereignShadow,
      }}
    >
      {Badges('md')}
    </div>
    <div style={{ padding: '2em', width: '100%' }}>
      {Badges('lg')}
    </div>
  </Story>
));

const Badges = size => (
  <>
    <$Badge href="#" size={size}>
      default
    </$Badge>
    <$Badge href="#" format="alum" size={size}>
      alum
    </$Badge>
    <$Badge href="#" format="beta" size={size}>
      beta
    </$Badge>
    <$Badge href="#" format="business" size={size}>
      business
    </$Badge>
    <$Badge href="#" format="curation" size={size}>
      curation
    </$Badge>
    <$Badge href="#" format="featured" size={size}>
      featured
    </$Badge>
    <$Badge href="#" format="hd" size={size}>
      hd
    </$Badge>
    <$Badge href="#" format="info" size={size}>
      info
    </$Badge>
    <$Badge href="#" format="live" size={size}>
      live
    </$Badge>
    <$Badge href="#" format="live-archive" size={size}>
      live
    </$Badge>
    <$Badge href="#" format="new" size={size}>
      new
    </$Badge>
    <$Badge href="#" format="partner" size={size}>
      partner
    </$Badge>
    <$Badge href="#" format="plus" size={size}>
      plus
    </$Badge>
    <$Badge href="#" format="producer" size={size}>
      producer
    </$Badge>
    <$Badge href="#" format="pro" size={size}>
      pro
    </$Badge>
    <$Badge href="#" format="sponsor" size={size}>
      sponsor
    </$Badge>
    <$Badge href="#" format="staff" size={size}>
      staff
    </$Badge>
    <$Badge href="#" format="support" size={size}>
      support
    </$Badge>
    <$Badge href="#" format="upgrade" size={size}>
      upgrade
    </$Badge>
    <$Badge href="#" format="vod" size={size}>
      vod
    </$Badge>
  </>
);

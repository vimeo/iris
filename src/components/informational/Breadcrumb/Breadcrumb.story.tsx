import React from 'react';
import { Breadcrumb as B } from './Breadcrumb';
import { BreadcrumbLink } from './BreadcrumbLink';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../storybook';
import styled from 'styled-components';

const Breadcrumb = styled(B)`
  margin: 0 0.5rem;
`;

storiesOf(`Components|informational/`, module).add(
  'Breadcrumb',
  () => (
    <Story title="Breadcrumb">
      <Breadcrumb
        crumbs={[
          <BreadcrumbLink href="#">
            Breadcrumb Item 1 is Pretty Long So Cut it Off
          </BreadcrumbLink>,
          <BreadcrumbLink href="#">
            Breadcrumb Item 2 is Pretty Long So Cut it Off
          </BreadcrumbLink>,
        ]}
        currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
      />
      <Breadcrumb
        style={{ maxWidth: '30rem' }}
        crumbs={[
          <BreadcrumbLink href="#">
            Breadcrumb Item 1 is Pretty Long So Cut it Off
          </BreadcrumbLink>,
          <BreadcrumbLink href="#">
            Breadcrumb Item 2 is Pretty Long So Cut it Off
          </BreadcrumbLink>,
        ]}
        currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
      />
      <Breadcrumb
        style={{ maxWidth: '15rem' }}
        crumbs={[
          <BreadcrumbLink href="#">
            Breadcrumb Item 1 is Pretty Long So Cut it Off
          </BreadcrumbLink>,
          <BreadcrumbLink href="#">
            Breadcrumb Item 2 is Pretty Long So Cut it Off
          </BreadcrumbLink>,
        ]}
        currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
      />
    </Story>
  ),
);

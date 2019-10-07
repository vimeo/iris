import React from 'react';
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink';
import { Breadcrumb } from './Breadcrumb';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../storybook';

storiesOf(`components|informational/`, module).add(
  'Breadcrumb',
  () => (
    <Story title="Breadcrumb">
      <Breadcrumb
        currentPageLabel=""
        format="lightTheme"
        crumbs={[
          <BreadcrumbLink format="lightTheme" href="#">
            Crumb1
          </BreadcrumbLink>,
          <BreadcrumbLink format="lightTheme" href="#">
            Crumb2
          </BreadcrumbLink>,
          <BreadcrumbLink format="lightTheme" href="#">
            Crumb3
          </BreadcrumbLink>,
        ]}
      />
    </Story>
  ),
);

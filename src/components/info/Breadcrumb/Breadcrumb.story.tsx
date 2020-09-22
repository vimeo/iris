import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Breadcrumb as B } from './Breadcrumb';
import { BreadcrumbLink } from './BreadcrumbLink';

import { Story } from '../../../storybook';

export default { title: 'Components|Info/Breadcrumb' };

const Breadcrumb = styled(B)`
  margin: 0 0.5rem;
`;

export function Common() {
  return (
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
  );
}

export function Adjustments() {
  let maxWidth = 500;
  const widths = [];
  while (maxWidth > 150) {
    widths.push(maxWidth);
    maxWidth = maxWidth - 50;
  }
  return (
    <Story title="Breadcrumb Width Adjustments">
      {// Single Bread Crumb Link stories
      widths.map((width, i) => (
        <Breadcrumb
          key={i}
          style={{
            maxWidth: rem(width),
          }}
          crumbs={[
            <BreadcrumbLink href="/manage/videos">
              Videos
            </BreadcrumbLink>,
          ]}
          currentPageLabel={`MaxWidth: rem(${width})`}
        />
      ))}
      {widths.map((width, i) => (
        <Breadcrumb
          key={i}
          style={{
            maxWidth: rem(width),
          }}
          crumbs={[
            <BreadcrumbLink href="/manage/videos">
              Videos
            </BreadcrumbLink>,
          ]}
          currentPageLabel={`MaxWidth: rem(${width}) This is some long breadcrumb text for the story`}
        />
      ))}

      {// Double Bread Crumb Link stories
      widths.map((width, i) => (
        <Breadcrumb
          key={i}
          style={{
            maxWidth: rem(width),
          }}
          crumbs={[
            <BreadcrumbLink href="/manage/videos">
              Videos
            </BreadcrumbLink>,
            <BreadcrumbLink href="#">
              This is another Link
            </BreadcrumbLink>,
          ]}
          currentPageLabel={`MaxWidth: rem(${width})`}
        />
      ))}
      {widths.map((width, i) => (
        <Breadcrumb
          key={i}
          style={{
            maxWidth: rem(width),
          }}
          crumbs={[
            <BreadcrumbLink href="/manage/videos">
              Videos
            </BreadcrumbLink>,
            <BreadcrumbLink href="#">
              This is another Link
            </BreadcrumbLink>,
          ]}
          currentPageLabel={`MaxWidth: rem(${width}) This is some long breadcrumb text for the story`}
        />
      ))}

      {// Triple Bread Crumb Link stories
      widths.map((width, i) => (
        <Breadcrumb
          key={i}
          style={{
            maxWidth: rem(width),
          }}
          crumbs={[
            <BreadcrumbLink href="/manage/videos">
              Videos
            </BreadcrumbLink>,
            <BreadcrumbLink href="#">
              This is another Link
            </BreadcrumbLink>,
            <BreadcrumbLink href="#">
              Third link for the win
            </BreadcrumbLink>,
          ]}
          currentPageLabel={`MaxWidth: rem(${width})`}
        />
      ))}
      {widths.map((width, i) => (
        <Breadcrumb
          key={i}
          style={{
            maxWidth: rem(width),
          }}
          crumbs={[
            <BreadcrumbLink href="/manage/videos">
              Videos
            </BreadcrumbLink>,
            <BreadcrumbLink href="#">
              This is another Link
            </BreadcrumbLink>,
            <BreadcrumbLink href="#">
              Third link for the win
            </BreadcrumbLink>,
          ]}
          currentPageLabel={`MaxWidth: rem(${width}) This is some long breadcrumb text for the story`}
        />
      ))}
    </Story>
  );
}

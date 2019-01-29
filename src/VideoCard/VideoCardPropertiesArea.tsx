import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';
export interface VideoCardPropertiesAreaProps
  extends React.HTMLProps<HTMLDivElement> {
  isHovered?: boolean;
  properties: any[];
}

export interface VideoCardPropertiesAreaStyledProps
  extends React.HTMLProps<HTMLDivElement> {
  isHovered?: boolean;
}

const VideoCardPropertiesAreaStyled = styled<
  VideoCardPropertiesAreaStyledProps,
  'div'
>('div')`
  opacity: ${props => (props.isHovered ? '.5' : '1')};
  position: absolute;
  top: ${rem(VideoCardStyleSettings.padding)};
  right: ${rem(VideoCardStyleSettings.padding)};
`;

const PropertyCellStyled = styled<
  React.HTMLProps<HTMLDivElement>,
  'div'
>('div')`
  display: inline-flex;
  margin-right: ${rem(8)};

  &:last-child {
    margin-right: 0;
  }
`;

export const VideoCardPropertiesArea: SFC<
  VideoCardPropertiesAreaProps
> = ({ isHovered, properties, ref: _, ...props }) => (
  <VideoCardPropertiesAreaStyled isHovered={isHovered} {...props}>
    {properties.map((property, i) => (
      <PropertyCellStyled key={`property${i}`}>
        {property}
      </PropertyCellStyled>
    ))}
  </VideoCardPropertiesAreaStyled>
);

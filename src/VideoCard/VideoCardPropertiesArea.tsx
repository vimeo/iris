import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { VideoCardStyleSettings } from './VideoCardHelpers';

interface Props {
  isHovered?: boolean;
  properties: any[];
}

const VideoCardPropertiesAreaStyled = styled.div<{
  isHovered?: boolean;
}>`
  position: absolute;
  top: ${rem(VideoCardStyleSettings.padding)};
  right: ${rem(VideoCardStyleSettings.padding)};
`;

const PropertyCellStyled = styled.div`
  display: inline-flex;
  margin-right: ${rem(8)};

  &:last-child {
    margin-right: 0;
  }
`;

export const VideoCardPropertiesArea: SFC<Props> = ({
  isHovered,
  properties,
  ...props
}) => (
  <VideoCardPropertiesAreaStyled isHovered={isHovered} {...props}>
    {properties.map((property, i) => (
      <PropertyCellStyled key={i}>{property}</PropertyCellStyled>
    ))}
  </VideoCardPropertiesAreaStyled>
);

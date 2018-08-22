import React, { SFC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {VideoCardStyleSettings} from './VideoCardHelpers';
export interface VideoCardPropertiesAreaProps extends React.HTMLProps<HTMLDivElement>  {
    isHovered?: boolean,
    properties: Array<any>,
};

export interface VideoCardPropertiesAreaStyledProps extends React.HTMLProps<HTMLDivElement>  {
    isHovered?: boolean,
};

// ==================== VideoCardPropertiesArea Styled
const VideoCardPropertiesAreaStyled= styled<VideoCardPropertiesAreaStyledProps, 'div'>('div')`
    opacity: ${props=> props.isHovered ? '.5' : '1'};
    position: absolute;
    top: ${rem(VideoCardStyleSettings.padding)};
    right: ${rem(VideoCardStyleSettings.padding)};
`;

const PropertyCellStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    display: inline-flex;
    margin-right: ${rem(8)};

    &:last-child {
        margin-right: 0;
    }
`;

// ==================== VideoCardPropertiesArea

const VideoCardPropertiesArea: SFC<VideoCardPropertiesAreaProps> = ({
    isHovered,
    properties,
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {

    const propertyList = properties.map((property, i) => {

        return(
            <PropertyCellStyled key={`property${i}`}>
                {property}
            </PropertyCellStyled>
        )
    });    
    return (
        <VideoCardPropertiesAreaStyled
            isHovered={isHovered}
            {...filteredProps}
        >
            {propertyList}
        </VideoCardPropertiesAreaStyled>
    );
};

export default VideoCardPropertiesArea;

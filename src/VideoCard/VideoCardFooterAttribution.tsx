import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ParagraphSm } from '../Type';
import {VideoCardStyleSettings} from './VideoCardHelpers';
import Avatar from '../Avatar';
import ButtonIconOnly from '../ButtonIconOnly';
// @ts-ignore
import DotsMenuIcon from '../icons/dots-menu.svg';
import MenuPanel from '../MenuPanel';

export interface VideoCardFooterAttributionProps {
    /**
    * A string to describe the action menu button does, e.g. "see user actions"
    */
    actionMenuDescription: string,
    /**
    * The contents of the MenuPanel that opens when the button is clicked
    */
    actionMenuContent: React.Component<any>,
    /**
    * An object of props that get spread to the nested MenuPanel
    */
    actionMenuProps: any,
    /**
    * URI for user avatar
    */
    userAvatarSrc: string,
    /**
    * URI for user avatar srcSet
    */
    userAvatarSrcSet?: string,
    /**
    * The author's name
    */
    userName: string,
    
};

// ==================== VideoCardFooterAttribution Styled

const Wrapper = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const AvatarStyled = styled<React.HTMLProps<HTMLDivElement>, Avatar>(Avatar)`
    display: inline-flex;
    margin-right: ${rem(4)};
`;

const UserNameStyled = styled<React.HTMLProps<HTMLSpanElement>, ParagraphSm>(ParagraphSm)`
    align-items: center;
    display: inline-flex;
    font-weight: 600;
    width: calc(100% - ${rem(VideoCardStyleSettings.actionButtonSize)});
`;

const AttributionStyled = styled<React.HTMLProps<HTMLDivElement>, 'div'>('div')`
    display: inline-flex;
    width: calc(100% - ${rem(VideoCardStyleSettings.actionButtonSize)});
`;

const UserNameTruncation = styled<React.HTMLProps<HTMLSpanElement>, 'span' >('span')`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 100%;
`
// ==================== VideoCardFooterAttribution

const VideoCardFooterAttribution: React.SFC<VideoCardFooterAttributionProps> = ({
    actionMenuDescription,
    actionMenuContent,
    actionMenuProps,
    userAvatarSrc,
    userAvatarSrcSet,
    userName,
    ...filteredProps
}) => {

    const suppressClickPropagation = (e) => {
        // clicks in the footer area should not trigger the onClick for the entireCard.
        e.stopPropagation();
    }
    
    return (
        <Wrapper
            onClick={suppressClickPropagation}
            {...filteredProps}
        >
            <AttributionStyled>
                <AvatarStyled
                    alt={userName}
                    src={userAvatarSrc}
                    srcSet={userAvatarSrcSet}
                    size="sm"
                />
                    <UserNameStyled
                        element="span"
                        noMargin
                    >
                        <UserNameTruncation>{userName}</UserNameTruncation>
                    </UserNameStyled>
            </AttributionStyled>
            <MenuPanel
                alignment="right"
                menuContent={actionMenuContent}
                {...actionMenuProps}
            >
                <ButtonIconOnly
                    format="midDark"
                    icon={<DotsMenuIcon title={actionMenuDescription} />}
                    isButtonElement={false}
                    size="sm"
                />
            </MenuPanel>
        </Wrapper>
    );
};

export default VideoCardFooterAttribution;

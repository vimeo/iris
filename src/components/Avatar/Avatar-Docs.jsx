import React from 'react';
import Avatar from './Avatar';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const AvatarDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <p>Avatars are used across the site to represent individual users. Each avatar is an image <code>{'<img/>'}</code> tag that includes requires the user to pass through a src and srcSet. The props
            should be passed images queried as perfect squares (10x10, 180x180x) using: <a href="https://github.vimeows.com/video/turner/blob/master/FILTERS.md">Turner</a>. </p>
            <h3>Sizes</h3>
            <p>The sizes prop allows users to easily select a default size for the avatar. The default is auto, meaning the avatar will simply fill in the space of its parent element.</p>
            <div data-code>
                <Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
                    alt="Avatar Extra Small Example"
                    size="xs" />
                <Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
                    alt="Avatar Small Example"
                    size="sm" />
                <Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
                    alt="Avatar Medium Example"
                    size="md" />
                <Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
                    alt="Avatar Large Example"
                    size="lg" />
                <Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
                    alt="Avatar Extra Large Example"
                    size="xl" />
            </div>

            <ExampleSource>
                {`
<Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
    alt="Avatar Extra Small Example"
    size="xs" />
<Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
    alt="Avatar Small Example"
    size="sm" />
<Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
    alt="Avatar Large Example"
    size="md" />
<Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
    alt="Avatar Large Example"
    size="lg" />
<Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
    alt="Avatar Extra Large Example"
    size="xl" />`}
            </ExampleSource>

            <h3>Inline or Block</h3>
            <p>The default display for avatars is set to inline, meaning your avatar will be inline with any text elements. However, should the need come to have your element take up its own horizontal space, <code>isInline</code> can be set to false, triggering a display block.</p>
            <div data-code>
                <Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
                    alt="Avatar Inline Example"
                    size="lg" />
                <Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
                    alt="Avatar Inline Example"
                    size="md" />
                <Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
                    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
                    alt="Avatar Block Example"
                    size="lg"
                    isInline={false} />
            </div>
            <ExampleSource>
                {` 
<Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
    alt="Avatar Inline Example"
    size="lg" />
<Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
    alt="Avatar Inline Example"
    size="md" />
<Avatar src="https://i.vimeocdn.com/video/562859486_270x270.jpg"
    srcSet="https://i.vimeocdn.com/video/562859486_540x540.jpg"
    alt="Avatar Block Example"
    size="lg"
    isInline={false} />
                `}
            </ExampleSource>

            <h3>Accessibility Notes</h3>
                <ul>
                    <li> Avatars are <strong>required to have meaningful alternative text</strong> through the <code>alt</code> prop. Example : "Photo of UserX".</li>
                    <li> Avatars that link to other pages should be wrapped in <code>{'<a></a>'}</code> tags. </li>
                </ul>
        </div>
    );
};

export default AvatarDocs;

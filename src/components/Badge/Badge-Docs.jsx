import React from 'react';
import Badge from './Badge';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const BadgeDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <h3>Regular Badges (small)</h3>
            <div style={{ 'padding': '1em', 'width': '100%' }} data-code>
                <Badge href="#">default</Badge>
                <Badge href="#" format="alum">alum</Badge>
                <Badge href="#" format="beta">beta</Badge>
                <Badge href="#" format="business">business</Badge>
                <Badge href="#" format="curation">curation</Badge>
                <Badge href="#" format="featured">featured</Badge>
                <Badge href="#" format="hd">hd</Badge>
                <Badge href="#" format="info">info</Badge>
                <Badge href="#" format="new">new</Badge>
                <Badge href="#" format="partner">partner</Badge>
                <Badge href="#" format="plus">plus</Badge>
                <Badge href="#" format="pro">pro</Badge>
                <Badge href="#" format="sponsor">sponsor</Badge>
                <Badge href="#" format="staff">staff</Badge>
                <Badge href="#" format="support">support</Badge>
                <Badge href="#" format="vod">vod</Badge>
            </div>
            <div style={{ 'backgroundColor': '#000', 'padding': '1em', 'width': '100%' }}>
                <Badge href="#">default</Badge>
                <Badge href="#" format="alum">alum</Badge>
                <Badge href="#" format="beta">beta</Badge>
                <Badge href="#" format="business">business</Badge>
                <Badge href="#" format="curation">curation</Badge>
                <Badge href="#" format="featured">featured</Badge>
                <Badge href="#" format="hd">hd</Badge>
                <Badge href="#" format="info">info</Badge>
                <Badge href="#" format="new">new</Badge>
                <Badge href="#" format="partner">partner</Badge>
                <Badge href="#" format="plus">plus</Badge>
                <Badge href="#" format="pro">pro</Badge>
                <Badge href="#" format="sponsor">sponsor</Badge>
                <Badge href="#" format="staff">staff</Badge>
                <Badge href="#" format="support">support</Badge>
                <Badge href="#" format="vod">vod</Badge>
            </div>

            <ExampleSource>
                {`
<Badge href="#">default</Badge>
<Badge href="#" format="alum">alum</Badge>
<Badge href="#" format="beta">beta</Badge>
<Badge href="#" format="business">business</Badge>
<Badge href="#" format="curation">curation</Badge>
<Badge href="#" format="featured">featured</Badge>
<Badge href="#" format="hd">hd</Badge>
<Badge href="#" format="info">info</Badge>
<Badge href="#" format="new">new</Badge>
<Badge href="#" format="partner">partner</Badge>
<Badge href="#" format="plus">plus</Badge>
<Badge href="#" format="pro">pro</Badge>
<Badge href="#" format="sponsor">sponsor</Badge>
<Badge href="#" format="staff">staff</Badge>
<Badge href="#" format="support">support</Badge>
<Badge href="#" format="vod">vod</Badge>
                `}
                </ExampleSource>

                <h3>Large Badges</h3>
                <div data-code>
                    <Badge href="#" format="explicit" size="lg">explicit</Badge>
                    <Badge href="#" format="unrated" size="lg">unrated</Badge>
                    <Badge href="#" format="spatial" size="lg">360</Badge>
                </div>

                <ExampleSource>
                    {`
<Badge href="#" format="explicit" size="lg">explicit</Badge>
<Badge href="#" format="unrated" size="lg">unrated</Badge>
<Badge href="#" format="spatial" size="lg">360</Badge>
                    `}
                    </ExampleSource>

                    <h3>Non-link Badges</h3>
                    <p>Most badges are links, but if you need a badge that is not a link, just omit the href attribute and the badge will be a span.</p>
                    <div data-code>
                        <Badge href="#" format="staff">link</Badge>
                        <Badge format="pro">span</Badge>
                    </div>

                    <ExampleSource>
                        {`
<Badge href="#" format="staff">link</Badge>
<Badge format="pro">span</Badge>
                        `}
                        </ExampleSource>
            </div>
    );
};

export default BadgeDocs;

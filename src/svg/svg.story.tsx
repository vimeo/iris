import React, { SFC } from 'react';
import { storiesOf } from '@storybook/react';
import * as Icons from '../../docs/apps/svgPage/svgIconExportList.js';
import * as Illustrations from '../../docs/apps/svgPage/svgIllustrationExportList.js';
import styled from 'styled-components';
import { HeaderPlusUltra, Header2, Header4, Header5, Header6 } from '../Type';
import COLORS from '../globals/js/constants/COLORS';
import { css } from 'styled-components';
import { select } from '@storybook/addon-knobs';

const svgData = require('../../data/svgIconList');
const illustrationData = require('../../data/svgIllustrationsList');

storiesOf('SVG', module)
    .add('icons', () => {
        const size = select(
            'Size',
            { XS: 0.625, SM: 0.875, MD: 1, LG: 1.125, XL: 2 },
            1.125,
            'iconSizes',
        );

        return (
            <div>
                <HeaderPlusUltra id="icons">Icons</HeaderPlusUltra>

                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {svgData.map(({ name, filename }) => (
                        <IconWrapper>
                            <Header4 style={{ marginBottom: '0.125rem' }}>
                                {name}
                            </Header4>
                            <Header6>{filename}.svg</Header6>
                            <Icon size={size} name={name} />
                        </IconWrapper>
                    ))}
                </div>
            </div>
        );
    })
    .add('illustrations', () => (
        <div>
            <HeaderPlusUltra id="illustrations">Illustrations</HeaderPlusUltra>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {illustrationData.map(({ name, filename }) => (
                    <IllustrationWrapper>
                        <Header2 style={{ marginBottom: '0.25rem' }}>
                            {name}
                        </Header2>
                        <Header5>{filename}.svg</Header5>
                        <Illustration name={name} />
                    </IllustrationWrapper>
                ))}
            </div>
        </div>
    ));

const Card = css`
    padding: 1rem;
    margin: 2rem;
    border-radius: 0.125rem;
    display: inline-block;
    width: calc(100% - 4rem);
    background: ${COLORS.Paste};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px -8px,
        rgba(0, 0, 0, 0.3) 0px 0px 4px -1px;
`;

const width = widthMap =>
    Object.keys(widthMap).map(
        minWidth => css`
            @media (min-width: ${minWidth}rem) {
                width: calc(${widthMap[minWidth]}% - 4rem);
            }
        `,
    );

const IconWrapper = styled.div`
    ${Card};

    ${width({
        40: 50,
        50: 25,
        70: 20,
        100: 16.6667,
    })};
`;

const Icon: SFC<{ size: number; name: string }> = ({ size, name }) =>
    React.createElement(
        styled(Icons[name])`
            width: ${size}rem;
            height: ${size}rem;
            display: block;
            margin: ${size * 1.5}rem auto;
        `,
    );

const IllustrationWrapper = styled.div`
    ${Card};

    ${width({
        70: 50,
    })};
`;

const Illustration: SFC<any> = ({ name }) => {
    console.log(name, Illustrations[name]);
    return React.createElement(
        styled(Illustrations[name])`
            width: 20rem;
            height: 20rem;
            display: block;
            margin: 3rem auto;
        `,
    );
};

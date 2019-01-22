import React, { SFC } from 'react';
import { storiesOf } from '@storybook/react';
import * as Icons from './iconList.js';
import * as Illustrations from './illustrationList.js';
import styled from 'styled-components';
import { HeaderPlusUltra, Header2, Header4 } from '../Type';
import * as COLORS from '../Color/Color';
import { css } from 'styled-components';
import { select } from '@storybook/addon-knobs';

storiesOf('svg', module)
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
                    {Object.keys(Icons).map(icon => (
                        <IconWrapper>
                            <Header4 style={{ marginBottom: '0.125rem' }}>
                                {icon}
                            </Header4>

                            <Icon size={size} name={icon} />
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
                {Object.keys(Illustrations).map(illustration => (
                    <IllustrationWrapper>
                        <Header2 style={{ marginBottom: '0.25rem' }}>
                            {illustration}
                        </Header2>

                        <Illustration name={illustration} />
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
    Icons[name]
        ? React.createElement(
              styled(Icons[name])`
                  width: ${size}rem;
                  height: ${size}rem;
                  display: block;
                  margin: ${size * 1.5}rem auto;
              `,
          )
        : null;

const IllustrationWrapper = styled.div`
    ${Card};

    ${width({
        70: 50,
    })};
`;

const Illustration: SFC<any> = ({ name }) =>
    Illustrations[name]
        ? React.createElement(
              styled(Illustrations[name])`
                  width: 20rem;
                  height: 20rem;
                  display: block;
                  margin: 3rem auto;
              `,
          )
        : null;

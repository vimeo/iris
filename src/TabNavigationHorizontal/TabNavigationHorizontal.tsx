import React, { ReactNode, Component } from 'react';
import { TabNavigationHorizontalItem } from '../TabNavigationHorizontalItem/';
import TabContentPanel from '../TabContentPanel/TabContentPanel';
import styled from 'styled-components';
import { rem } from 'polished';
import COLORS from '../globals/js/constants/COLORS';

interface Props {
    index: number;
    panels: Array<{
        tabId: string;
        label: string;
        content: ReactNode;
        onClick?: (e: React.MouseEvent) => void;
    }>;
}

interface State {
    index: number;
}

class TabNavigationHorizontal extends Component<Props, State> {
    readonly state: Readonly<State> = {
        index: this.props.index,
    };

    private tabWidth = (tabs = this.props.panels.length) =>
        tabs ? 100 / tabs : 0;

    render() {
        const { index, panels, ...props } = this.props;

        return (
            <div {...props}>
                <NavWrapper>
                    {panels.map(({ content, onClick, ...props }, i) => (
                        <TabNavigationHorizontalItem
                            {...props}
                            key={`TabNavigationHorizontalItem-${i}`}
                            isSelected={this.state.index === i}
                            handleTabChange={(e: React.MouseEvent) => {
                                this.setState({ index: i });
                                (() => {
                                    onClick && onClick(e);
                                })();
                            }}
                        />
                    ))}
                </NavWrapper>

                <NavIndicatorBar>
                    <NavIndicator
                        width={this.tabWidth()}
                        position={this.state.index * 100}
                    />
                </NavIndicatorBar>

                <TabContentPanel
                    index={this.state.index}
                    panels={panels.map(key => ({
                        tabId: key.tabId,
                        content: key.content,
                    }))}
                />
            </div>
        );
    }
}

const NavWrapper = styled.ul`
    display: flex;
    width: 100%;
    margin: 0 0 ${rem(4)};
    padding: 0;
    list-style-type: none;
`;

const NavIndicatorBar = styled.div`
    position: relative;
    width: 100%;
    height: ${rem(2)};
    background-color: ${COLORS.Porcelain};
`;

const NavIndicator = styled.div<{ width: number; position: number }>`
    position: absolute;
    top: 0;
    left: 0;
    height: ${rem(2)};
    width: ${props => props.width}%;
    transform: translateX(${props => props.position}%);
    background-color: ${COLORS.VimeoBlue};
    transition: 150ms ease-in-out;
`;

export default TabNavigationHorizontal;

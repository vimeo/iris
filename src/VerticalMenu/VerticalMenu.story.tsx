import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    VerticalMenuToggleButton,
    VerticalMenuItemContent,
    VerticalMenuNested,
    VerticalMenuItem,
    VerticalMenuActionButton,
    VerticalMenuHeaderGroup,
} from '../VerticalMenu';
import { Grid } from '../Grid/Grid';
import { GridCol } from '../GridCol/GridCol';
import { GridBlock } from '../GridBlock/GridBlock';
import { MenuPanelList } from '../MenuPanelList/MenuPanelList';
import { Header3, Header4, ParagraphMd } from '../Type';
import { Button } from '../Button/Button';
import { PopOutIcon } from '../Icons';
import { CirclePlusIcon } from '../Icons';
import { FolderIcon } from '../Icons';
import { HomeIcon } from '../Icons';
import { HomeFilledIcon } from '../Icons';
import { SettingsIcon } from '../Icons';
import * as COLORS from '../Color/Color';
import styled from 'styled-components';

storiesOf('components/VerticalMenu', module)
    .add(
        'simple',
        () => (
            <div className="Pattern__docs">
                <VerticalMenuNested
                    actionButton={
                        <VerticalMenuActionButton
                            icon={<CirclePlusIcon title="Add New Item" />}
                            tooltipText="click to add new item"
                        />
                    }
                    label="Menu Label"
                    labelId="testMenu"
                    labelIcon={<FolderIcon />}
                    subMenuItems={subMenuItems}
                    nestedButtonLabel="toggle menu"
                />
            </div>
        ),
        {
            info: {
                inline: true,
                propTables: [VerticalMenuToggleButton],
            },
            options: {
                name: 'Iris',
                url: '#',
            },
        },
    )
    .add('complex', () => <VerticalMenuDemoDocs />);

const GridColStyled = styled(GridCol)`
    background: ${COLORS.Paste};
`;

const onClickHandler = e => {
    e.preventDefault();
    console.log('Demo Click Handler: You Clicked:', e.target);
};

const subMenuItems = [
    <VerticalMenuItem>
        <a href="#" onClick={onClickHandler}>
            <VerticalMenuItemContent label="Nested Item 1" />
        </a>
    </VerticalMenuItem>,
    <VerticalMenuItem isActive>
        <a href="#" onClick={onClickHandler}>
            <VerticalMenuItemContent isActive label="Nested Item 2" />
        </a>
    </VerticalMenuItem>,
];

class VerticalMenuDemoDocs extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            dynamicMenuItems: [],
        };
    }

    componentWillMount() {
        this._makeMenuItem();
    }

    _makeMenuItem = () => {
        const i = this.state.dynamicMenuItems.length + 1;
        const newItem = (
            <VerticalMenuItem>
                <a href="#">
                    <VerticalMenuItemContent label={`Dynamic Item ${i}`} />
                </a>
            </VerticalMenuItem>
        );
        const newItemState = [...this.state.dynamicMenuItems];
        newItemState.push(newItem);
        this.setState({
            dynamicMenuItems: newItemState,
        });
    };
    _toggleMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen,
        });
    };
    _handleClick = e => {
        console.log(e);
    };
    render() {
        const onClickHandler = e => {
            e.preventDefault();
            console.log('Demo Click Handler: You Clicked:', e.target);
        };
        const MenuPanelDemoList = (
            <div>
                <MenuPanelList
                    header="Section 1"
                    menuItems={[
                        {
                            label: 'Item 1',
                            href: '#',
                        },
                        {
                            label: 'Selected Item',
                            href: '#',
                            isSelected: true,
                            // 'data-foo': 'bar',
                        },
                    ]}
                />
                <MenuPanelList
                    hasDivider
                    menuItems={[
                        {
                            label: 'Item 3',
                            icon: <SettingsIcon />,
                            href: '#',
                        },
                        {
                            label: 'Item 4',
                            href: '#',
                        },
                    ]}
                />
            </div>
        );
        return (
            <Grid isNested>
                <GridBlock>
                    <GridColStyled mdSpan={8}>
                        <VerticalMenuHeaderGroup
                            actionButtonIcon={<CirclePlusIcon />}
                            actionButtonTooltipText="Tooltip Text"
                            actionButtonOnClick={this._handleClick}
                            label="Section Label 1"
                            labelId="Section1"
                        >
                            <VerticalMenuNested
                                isOpen={this.state.menuOpen}
                                label="Menu Label"
                                labelId="testMenu"
                                nestedButtonLabel="toggle menu"
                                subMenuItems={subMenuItems}
                            />
                        </VerticalMenuHeaderGroup>
                        <VerticalMenuHeaderGroup
                            label="Section Label 2"
                            labelId="Section2"
                        >
                            <VerticalMenuNested
                                actionButton={
                                    <VerticalMenuActionButton
                                        icon={
                                            <CirclePlusIcon title="Add New Item" />
                                        }
                                        tooltipText="click to add new item"
                                    />
                                }
                                isOpen={!this.state.menuOpen}
                                label="Menu Label"
                                labelId="testMenu"
                                labelIcon={<FolderIcon />}
                                nestedButtonLabel="toggle menu"
                                subMenuItems={subMenuItems}
                            />
                        </VerticalMenuHeaderGroup>
                        <VerticalMenuNested
                            isOpen={this.state.menuOpen}
                            label="Dynamic Menu"
                            labelId="testDynamicMenu"
                            nestedButtonLabel="toggle menu"
                            subMenuItems={this.state.dynamicMenuItems}
                        />
                        <VerticalMenuItem>
                            <a href="#" onClick={onClickHandler}>
                                <VerticalMenuItemContent
                                    label="Stand Alone Link With Link Icon"
                                    linkActionIcon={<PopOutIcon />}
                                />
                            </a>
                        </VerticalMenuItem>
                        <VerticalMenuItem>
                            <a href="#" onClick={onClickHandler}>
                                <VerticalMenuItemContent
                                    label="Stand Alone Link With Label Icon"
                                    labelIcon={<HomeIcon />}
                                    labelIconActive={<HomeFilledIcon />}
                                />
                            </a>
                        </VerticalMenuItem>
                        <VerticalMenuItem
                            nestedInteractionContent={MenuPanelDemoList}
                            menuPanelTooltip="Show Menu"
                        >
                            <a href="#" onClick={onClickHandler}>
                                <VerticalMenuItemContent
                                    label="Menu With Nested Menu on Hover"
                                    truncateLabel
                                />
                            </a>
                        </VerticalMenuItem>
                        <VerticalMenuItem
                            isActive
                            nestedInteractionContent={MenuPanelDemoList}
                            menuPanelTooltip="Show Menu"
                        >
                            <a href="#" onClick={onClickHandler}>
                                <VerticalMenuItemContent
                                    isActive
                                    label="Active Menu With Nested Menu on Hover"
                                    truncateLabel
                                />
                            </a>
                        </VerticalMenuItem>
                    </GridColStyled>
                    <GridCol mdSpan={16}>
                        <Header3>Building Vertical Menus</Header3>
                        <ParagraphMd>
                            Vertical Menus are assembled from the
                            VerticalMenuItem component for single links and the
                            VerticalMenuNested component for Menu Items with a
                            nested sub-menu. A group header can be added by
                            wrapping a menu in the VerticalMenuHeaderGroup
                            component. See the documentation of these components
                            for information about their use.
                        </ParagraphMd>
                        <ParagraphMd>
                            These components will up their given space and
                            should be sized using the grid
                        </ParagraphMd>
                        <ParagraphMd>
                            The menus can also be opened programatically with
                            the <code>isOpen</code> prop.
                        </ParagraphMd>
                        <Button onClick={this._toggleMenu}>
                            Toggle isOpen Prop
                        </Button>
                        <Button onClick={this._makeMenuItem}>
                            Add Dynamic Menu Items
                        </Button>
                        <Header4>
                            Both components should be used in a binding grid.
                        </Header4>
                    </GridCol>
                </GridBlock>
            </Grid>
        );
    }
}

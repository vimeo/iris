import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { Header3, Header4, ParagraphMd } from '../../../src/Type';
import Button from '../../../src/Button';
import Grid from '../../../src/Grid';
import GridBlock from '../../../src/GridBlock';
import GridCol from '../../../src/GridCol';
import VerticalMenuHeaderGroup from '../../../src/VerticalMenuHeaderGroup';
import VerticalMenuNested from '../../../src/VerticalMenuNested/VerticalMenuNested';
import VerticalMenuContextualMenuPanel from '../../../src/VerticalMenuContextualMenuPanel/VerticalMenuContextualMenuPanel';
import VerticalMenuItem from '../../../src/VerticalMenuItem/VerticalMenuItem';
import VerticalMenuItemContent from '../../../src/VerticalMenuItemContent';
import MenuPanelList from '../../../src/MenuPanelList/MenuPanelList';
import HomeIcon from '../../../src/icons/home.svg';
import HomeFilledIcon from '../../../src/icons/home-filled.svg';
import PopOutIcon from '../../../src/icons/pop-out.svg';
import SettingsIcon from '../../../src/icons/gear.svg';
import CirclePlusIcon from '../../../src/icons/circle-plus.svg';
import styles from './VerticalMenuDemo-Docs.scss';

class VerticalMenuDemoDocs extends React.Component {
    constructor(props) {
        super();
        this.state = {
            menuOpen: false,
            dynamicMenuItems: [],
        }
    }

    componentWillMount() {
        this._makeMenuItem();
    }

    _makeMenuItem = () => {
        const i = this.state.dynamicMenuItems.length+1;
        const newItem = (
            <VerticalMenuItem
            >
                    <a
                        to="#"
                    >
                        <VerticalMenuItemContent
                            label={`Dynamic Item ${i}`}
                        />
                    </a>
                </VerticalMenuItem>
        );

        const newItemState = [...this.state.dynamicMenuItems];
        newItemState.push(newItem);

        this.setState({
            dynamicMenuItems: newItemState,
        });
    }

    _toggleMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    _handleClick = (e) => {
        console.log(e);
    }

    render() {

        const onClickHandler = (e) => {
            e.preventDefault();
            console.log('Demo Click Handler: You Clicked:', e.target);
        };

        const subMenuItems = [
            (
            <VerticalMenuItem>
                    <a
                        to="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            label="Nested Item 1"
                        />
                    </a>
                </VerticalMenuItem>
            ),
    
            (
            <VerticalMenuItem
            >
                    <a
                        to="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            isActive
                            label="Nested Item 2"
                        />
                    </a>
                </VerticalMenuItem>
            ),
        ];


        const MenuPanelDemoList = (
            <div>
                <MenuPanelList
                    header="Section 1"
                    menuItems = {[
                        {
                            label: 'Item 1',
                            href: '#',
                        },
                        {
                            label: 'Selected Item',
                            href: '#',
                            isSelected: true,
                            'data-foo': 'bar',
                        },
                    ]}
                />
                <MenuPanelList
                    hasDivider
                    menuItems = {[
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
            <div className="Pattern__docs">
                <div data-code>
                    <Grid isNested >
                        <GridBlock>
                            <GridCol
                                mdSpan={8}
                                className={styles.MenuCol}
                            >
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
                                    subMenuItems={[
                                        (
                                        <VerticalMenuItem>
                                            <a
                                                to="#"
                                                onClick={onClickHandler}
                                            >
                                                <VerticalMenuItemContent
                                                    label="Nested Item 1"
                                                />
                                            </a>
                                        </VerticalMenuItem>
                                        ),
                                    
                                        (
                                        <VerticalMenuItem>
                                            <a
                                                to="#"
                                                onClick={onClickHandler}
                                            >
                                                <VerticalMenuItemContent
                                                    isActive
                                                    label="Nested Item 2"
                                                />
                                            </a>
                                        </VerticalMenuItem>
                                        ),
                                    ]}
                                />
                            </VerticalMenuHeaderGroup>

                            <VerticalMenuHeaderGroup
                                label="Section Label 2"
                                labelId="Section2"
                            >
                                <VerticalMenuNested
                                isOpen={!this.state.menuOpen}
                                label="Menu Label"
                                labelId="testMenu"
                                nestedButtonLabel="toggle menu"
                                subMenuItems={[
                                    (
                                    <VerticalMenuItem>
                                        <a
                                            to="#"
                                            onClick={onClickHandler}
                                        >
                                            <VerticalMenuItemContent
                                                label="Nested Item 1"
                                            />
                                        </a>
                                    </VerticalMenuItem>
                                    ),
                                
                                    (
                                    <VerticalMenuItem>
                                        <a
                                            to="#"
                                            onClick={onClickHandler}
                                        >
                                            <VerticalMenuItemContent
                                                isActive
                                                label="Nested Item 2"
                                            />
                                        </a>
                                    </VerticalMenuItem>
                                    )]}
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
                            <a
                                href="#"
                                onClick={onClickHandler}
                            >
                                <VerticalMenuItemContent
                                    label="Stand Alone Link With Link Icon"
                                    linkActionIcon={(<PopOutIcon />)}
                                />
                            </a>
                        </VerticalMenuItem>
                        <VerticalMenuItem>
                        <a
                            to="#"
                            onClick={onClickHandler}
                        >
                            <VerticalMenuItemContent
                                label="Stand Alone Link With Label Icon"
                                labelIcon={(<HomeIcon />)}
                                labelIconActive={(<HomeFilledIcon />)}
                            />
                        </a>
                            </VerticalMenuItem>
                            <VerticalMenuItem
                            nestedInteractionContent={MenuPanelDemoList}
                            menuPanelTooltip="Show Menu"
                            >
                                <a
                                    to="#"
                                    onClick={onClickHandler}
                                >
                                    <VerticalMenuItemContent
                                        label="Menu With Nested Menu on Hover"
                                    />
                                </a>
                            </VerticalMenuItem>
                            </GridCol>
                            <GridCol mdSpan={16}>
                                <Header3>Building Vertical Menus</Header3>
                                <ParagraphMd>Vertical Menus are assembled from the VerticalMenuItem component for single links and the VerticalMenuNested component for Menu Items with a nested sub-menu. A group header can be added by wrapping a menu in the VerticalMenuHeaderGroup component. See the documentation of these components for information about their use.</ParagraphMd>
                                <ParagraphMd>These components will up their given space and should be sized using the grid</ParagraphMd>
                                <ParagraphMd>The menus can also be opened programatically with the <code>isOpen</code> prop.</ParagraphMd>
                                <Button onClick={this._toggleMenu}>Toggle isOpen Prop</Button>
                                <Button onClick={this._makeMenuItem}>Add Dynamic Menu Items</Button>
                                <Header4>Both components should be used in a binding grid.</Header4>
                                
                                <ExampleSource>
                                {`
<GridCol
    mdSpan={8}
    className={styles.MenuCol}
>
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
        subMenuItems={[
            (
            <VerticalMenuItem>
                <a
                    to="#"
                    onClick={onClickHandler}
                >
                    <VerticalMenuItemContent
                        label="Nested Item 1"
                    />
                </a>
            </VerticalMenuItem>
            ),
        
            (
            <VerticalMenuItem>
                <a
                    to="#"
                    onClick={onClickHandler}
                >
                    <VerticalMenuItemContent
                        isActive
                        label="Nested Item 2"
                    />
                </a>
            </VerticalMenuItem>
            ),
        ]}
    />
</VerticalMenuHeaderGroup>
<VerticalMenuHeaderGroup
    label="Section Label 2"
    labelId="Section2"
>
    <VerticalMenuNested
    isOpen={!this.state.menuOpen}
    label="Menu Label"
    labelId="testMenu"
    nestedButtonLabel="toggle menu"
    subMenuItems={[
        (
        <VerticalMenuItem>
            <a
                to="#"
                onClick={onClickHandler}
            >
                <VerticalMenuItemContent
                    label="Nested Item 1"
                />
            </a>
        </VerticalMenuItem>
        ),

        (
        <VerticalMenuItem>
            <a
                to="#"
                onClick={onClickHandler}
            >
                <VerticalMenuItemContent
                    isActive
                    label="Nested Item 2"
                />
            </a>
        </VerticalMenuItem>
        ),
        (  <VerticalMenuItem
            nestedInteractionContent={MenuPanelDemoList}
            menuPanelTooltip="Show Menu"
            >
                <a
                    to="#"
                    onClick={onClickHandler}
                >
                    <VerticalMenuItemContent
                        label="Menu With Nested Menu on Hover"
                    />
                </a>
            </VerticalMenuItem>
        ),
    ]}
    />
</VerticalMenuHeaderGroup>

<VerticalMenuItem>
    <a
    href="#"
    onClick={onClickHandler}
    >
    <VerticalMenuItemContent
        label="Stand Alone Link With Link Icon"
            labelIcon={(<HomeIcon />)}
        linkActionIcon={(<PopOutIcon />)}
    />
    </a>
</VerticalMenuItem>
<VerticalMenuItem>
<a
    to="#"
    onClick={onClickHandler}
>
    <VerticalMenuItemContent
        label="Stand Alone Link With Label Icon"
        labelIcon={(<HomeIcon />)}
        labelIconActive={(<HomeFilledIcon />)}
    />
</a>
</VerticalMenuItem>
<VerticalMenuItem
nestedInteractionContent={MenuPanelDemoList}
menuPanelTooltip="Show Menu"
>
    <a
        to="#"
        onClick={onClickHandler}
    >
        <VerticalMenuItemContent
            label="Menu With Nested Menu on Hover"
        />
    </a>
</VerticalMenuItem>
</GridCol>
                                    `}
                                </ExampleSource>
                            </GridCol>
                        </GridBlock>
                    </Grid>
                </div>
                </div>
        );
    }
}

export default VerticalMenuDemoDocs;

import React from 'react';
import VerticalMenuItem from './VerticalMenuItem';
import VerticalMenuItemContent from '../VerticalMenuItemContent';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import List from '../List';
import ListItem from '../ListItem';
import { ParagraphMd, Header3 } from '../Type';
import PopOutIcon from '../icons/pop-out.svg';
import HomeIcon from '../icons/home.svg';
import LockIcon from '../icons/lock.svg';
import SettingsIcon from '../icons/gear.svg';
import HomeFilledIcon from '../icons/home-filled.svg';
import MenuPanelList from '../MenuPanelList/MenuPanelList';
import VerticalMenuActionButton from '../VerticalMenuActionButton';
import CirclePlusIcon from '../icons/circle-plus';

const VerticalMenuItemDocs = (props) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        console.log('Demo Click Handler: You Clicked:', e.target);
    };

    const MenuPanelDemoList = (
        <div>
            <MenuPanelList
                header="Section 1"
                menuItems = {[
                    {
                        label: 'Item 1',
                        to: '#',
                    },
                    {
                        label: 'Selected Item',
                        to: '#',
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
                        to: '#',
                    },
                    {
                        label: 'Item 4',
                        to: '#',
                    },
                ]}
            />
        </div>
    );

    return (
        <div className="Pattern__docs">

            <ParagraphMd>VerticalMenuItem provides stand-alone links in vertical menus as well as providing the styled links in the VerticalMenuNested component.</ParagraphMd>
            <ParagraphMd>The child of this component must be something that generates a link wrapped around a <code>VerticalMenuItemContent</code> component.</ParagraphMd>
            <Header3>Prop Notes</Header3>
            <List>
                <ListItem><code>nestedInteractionContent</code> adds a submenu panel with the conentend passed to this prop with an optional tooltip with text from the <code>menuPanelTooltip</code> prop.</ListItem>
                <ListItem><code>nestedInteractionMenuSize</code> will determine the sieze of the nested menu. These options are the same as the MenuPanel component and default to <code>md</code></ListItem>
                <ListItem><code>nestedButtonLabel</code> should be passed a translated string indicating that the toggle arrow will open and close the menu.</ListItem>

            </List>

            <div style={{ 'maxWidth': '25rem' }}>
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
                >
                    <a
                        to="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            isActive
                            label="Active Stand Alone Link With Label Icon"
                            labelIcon={(<HomeIcon />)}
                            labelIconActive={(<HomeFilledIcon />)}
                        />
                    </a>
                </VerticalMenuItem>
                <VerticalMenuItem>
                    <a
                        to="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            label="Stand Alone Link, subtle icon"
                            labelIcon={(<LockIcon />)}
                            labelIconTheme="subtle"
                        />
                    </a>
                </VerticalMenuItem>
                <VerticalMenuItem
                nestedInteractionContent={MenuPanelDemoList}
                nestedInteractionMenuSize="sm"
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
                <VerticalMenuItem>
                    <a
                        to="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            label="Truncated Long Label Name 12345678910"
                            truncateLabel
                        />
                    </a>
                </VerticalMenuItem>
                <VerticalMenuItem>
                    <a
                        to="#"
                        onClick={onClickHandler}
                    >
                        <VerticalMenuItemContent
                            label="With Action Button"
                            actionButton={(
                                <VerticalMenuActionButton
                                icon = {<CirclePlusIcon title="Add New Item" />}
                                tooltipText="click to add new item"
                            />
                            )}
                        />
                    </a>
                </VerticalMenuItem>
            </div>
            <ExampleSource>
                {`
import { VerticalMenuItem, VerticalMenuItemContent } from '@vimeo/iris';

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
<VerticalMenuItem>
<a
    to="#"
    onClick={onClickHandler}
>
    <VerticalMenuItemContent
        isActive
        label="Active Stand Alone Link With Label Icon"
        labelIcon={(<HomeIcon />)}
        labelIconActive={(<HomeFilledIcon />)}
    />
</a>
</VerticalMenuItem>
<VerticalMenuItem>
<a
    to="#"
    onClick={onClickHandler}
>
    <VerticalMenuItemContent
        label="Stand Alone Link, subtle icon"
        labelIcon={(<LockIcon />)}
        labelIconTheme="subtle"
    />
</a>
</VerticalMenuItem>
<VerticalMenuItem>
<a
    to="#"
    onClick={onClickHandler}
>
    <VerticalMenuItemContent
        label="Truncated Long Label Name 12345678910"
        truncateLabel
    />
</a>
</VerticalMenuItem>
<VerticalMenuItem
    nestedInteractionContent={MenuPanelDemoList}
    nestedInteractionMenuSize="sm"
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
<VerticalMenuItem>
    <a
        to="#"
        onClick={onClickHandler}
    >
        <VerticalMenuItemContent
            label="With Action Button"
            actionButton={(
                <VerticalMenuActionButton
                icon = {<CirclePlusIcon title="Add New Item" />}
                tooltipText="click to add new item"
            />
            )}
        />
    </a>
</VerticalMenuItem>
                    `}
            </ExampleSource>
            <Header3>Example nestedInteractionContent</Header3>
            <ExampleSource>
            {`
const MenuPanelDemoList = (
    <div>
        <MenuPanelList
            header="Section 1"
            menuItems = {[
                {
                    label: 'Item 1',
                    to: '#',
                },
                {
                    label: 'Selected Item',
                    to: '#',
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
                    to: '#',
                },
                {
                    label: 'Item 4',
                    to: '#',
                },
            ]}
        />
    </div>
);
            `}
            </ExampleSource>
        </div>
    );
};

export default VerticalMenuItemDocs;

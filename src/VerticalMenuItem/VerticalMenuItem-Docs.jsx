import React from 'react';
import VerticalMenuItem from './VerticalMenuItem';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { List, ListItem } from '../List/List';
import { ParagraphMd, Header3 } from '../Type';
import PopOutIcon from '../icons/pop-out.svg';
import HomeIcon from '../icons/home.svg';
import LockIcon from '../icons/lock.svg';
import SettingsIcon from '../icons/gear.svg';
import HomeFilledIcon from '../icons/home-filled.svg';
import MenuPanelList from '../MenuPanelList/MenuPanelList';

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

            <ParagraphMd>VerticalMenuItem provides stand-alone links</ParagraphMd>
            <Header3>Prop Notes</Header3>
            <List>
                <ListItem><code>truncateLabel</code> will prevent the label from going to multiple lines using an elipsis truncation.</ListItem>
                <ListItem><code>labelIcon</code> adds an icon to the label text.</ListItem>
                <ListItem><code>linkActionIcon</code> adds an icon to the far right of the navigation item, this is usually use to indicate the link's behavior (e.g. "will pop-out a window").</ListItem>
                <ListItem><code>nestedInteractionContent</code> adds a submenu panel with the conentend passed to this prop with an optional tooltip with text from the <code>menuPanelTooltip</code> prop.</ListItem>
                <ListItem>All other passed props will go to the anchor tag or Router Link component.</ListItem>
                <ListItem>The <code>to</code> prop indicates the path that you want the top level menu item to load (by passing it to the React Router Link tag). If you do not specify anything the top level link will just toggle the submenu.</ListItem>
                <ListItem><code>nestedButtonLabel</code> should be passed a translated string indicating that the toggle arrow will open and close the menu.</ListItem>
            </List>

            <div style={{ 'maxWidth': '25rem' }}>
                <VerticalMenuItem
                    to="#"
                    onClick={onClickHandler}
                    label="Stand Alone Link With Link Icon"
                    linkActionIcon={(<PopOutIcon />)}
                />
                <VerticalMenuItem
                    to="#"
                    onClick={onClickHandler}
                    label="Stand Alone Link With Label Icon"
                    labelIcon={(<HomeIcon />)}
                    labelIconActive={(<HomeFilledIcon />)}
                />
                <VerticalMenuItem
                    to="#"
                    onClick={onClickHandler}
                    label="Stand Alone Link With Label Icon"
                    labelIcon={(<HomeIcon />)}
                    labelIconActive={(<HomeFilledIcon />)}
                    isActive
                />
                <VerticalMenuItem
                    to="#"
                    onClick={onClickHandler}
                    label="Stand Alone Link, subtle icon"
                    labelIcon={(<LockIcon />)}
                    labelIconTheme="subtle"
                />
                <VerticalMenuItem
                    to="#"
                    onClick={onClickHandler}
                    label="Truncated Long Label Name 12345678910"
                    truncateLabel
                />
                <VerticalMenuItem
                    to="#"
                    label="Menu With Nested Menu"
                    nestedInteractionContent={MenuPanelDemoList}
                    menuPanelTooltip="Show Menu"
                />
            </div>
            <ExampleSource>
                {`

import VerticalMenuItem from 'iris/VerticalMenuItem';

<VerticalMenuItem
    to="#"
    onClick={onClickHandler}
    label="Stand Alone Link With Link Icon"
    linkActionIcon={(<PopOutIcon />)}
/>
<VerticalMenuItem
    to="#"
    onClick={onClickHandler}
    label="Stand Alone Link With Label Icon"
    labelIcon={(<HomeIcon />)}
    labelIconActive={(<HomeFilledIcon />)}
/>
<VerticalMenuItem
    to="#"
    onClick={onClickHandler}
    label="Stand Alone Link With Label Icon"
    labelIcon={(<HomeIcon />)}
    labelIconActive={(<HomeFilledIcon />)}
    isActive
/>
<VerticalMenuItem
    to="#"
    onClick={onClickHandler}
    label="Stand Alone ReactRouter Link"
    labelIcon={(<HomeIcon />)}
    labelIconActive={(<HomeFilledIcon />)}
/>
<VerticalMenuItem
    to="#"
    onClick={onClickHandler}
    label="Stand Alone ReactRouter Link"
    labelIcon={(<HomeIcon />)}
    labelIconActive={(<HomeFilledIcon />)}
    isActive
/>
<VerticalMenuItem
    to="#"
    onClick={onClickHandler}
    label="Truncated Long Label Name 12345678910"
    truncateLabel
/>
<VerticalMenuItem
    to="#"
    label="Menu With Nested Menu"
    nestedInteractionContent={MenuPanelDemoList}
    menuPanelTooltip="Show Menu"
/>
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

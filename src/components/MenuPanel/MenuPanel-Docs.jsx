import React from 'react';
import MenuPanel from './MenuPanel';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../../../src/utility_components/Type/Type';
import Button from '../Button/Button';
import { List, ListItem } from '../List/List';
import LinkText from '../LinkText/LinkText';
import { GridBlock, GridCol } from '../../../src/components/Grid/Grid.jsx';
import MenuPanelList from '../MenuPanelList/MenuPanelList';
import NotificationWarning from '../NotificationWarning/NotificationWarning';
class MenuPanelDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const MenuList = (
            <div>
                <MenuPanelList
                    menuItems = {[
                        {
                            label: 'Menu Item 1',
                            href: '#',
                        },
                        {
                            label: 'Menu Item 2',
                            href: '#',
                            'data-foo': 'bar',
                        },
                    ]}
                />
                <MenuPanelList
                    hasDivider
                    menuItems = {[
                        {
                            label: 'Menu Item 3',
                            href: '#',
                        },
                        {
                            label: 'Menu Item 4',
                            href: '#',
                        },
                    ]}
                />
            </div>
        );

        return (
            <div className="Pattern__docs">
            <ParagraphMd>Menu Panels provide a drop-down menu panel that can be attached at different points using the <code>alignment</code> prop.</ParagraphMd>
            <ParagraphMd>Menu Panel content is passed to the <code>menuContent</code> prop. The most common content will be the <LinkText href="/pattern/Components/MenuPanelList">MenuPanelList component</LinkText>.</ParagraphMd>
            <NotificationWarning>
                <ParagraphMd>The element passed to the component as child must not, itself be interactive.</ParagraphMd>
                <List>
                    <ListItem>
                        If you use a button, use the <code>isButtonElement=false</code> and <code>isInline</code> prop flags.
                    </ListItem>
                    <ListItem>
                        If you are passing a bit of text formatted by the LinkText component, use <code>element="span"</code>
                    </ListItem>
                </List>
            </NotificationWarning>
                <div data-code>
                    <GridBlock style={{ marginBottom: '1rem' }}>
                        <GridCol mdSpan={8}>
                            <MenuPanel
                                alignment="right"
                                menuContent={MenuList}
                                size="sm"
                            >
                                <LinkText
                                    element="span"
                                >
                                    Click for Small Right Menu
                                </LinkText>
                            </MenuPanel>
                        </GridCol>
                        <GridCol mdSpan={8}>
                            <MenuPanel
                                alignment="center"
                                menuContent={MenuList}
                                size="md"
                            >
                                <Button
                                    isInline
                                    isButtonElement={false}
                                >
                                    Click for Medium Center Menu
                                </Button>
                            </MenuPanel>
                        </GridCol>
                        <GridCol mdSpan={8}>
                            <MenuPanel
                                alignment="left"
                                menuContent={MenuList}
                                size="lg"
                            >
                                <LinkText
                                    element="span"
                                >
                                    Click for Large Left Menu
                                </LinkText>
                            </MenuPanel>
                        </GridCol>
                    </GridBlock>
                </div>

                <ExampleSource>
                    {`
const MenuList = (
    <div>
        <MenuPanelList
            menuItems = {[
                {
                    label: 'Menu Item 1',
                    href: '#',
                },
                {
                    label: 'Menu Item 2',
                    href: '#',
                    'data-foo': 'bar',
                },
            ]}
        />
        <MenuPanelList
        hasDivider
        menuItems = {[
            {
                label: 'Menu Item 3',
                href: '#',
            },
            {
                label: 'Menu Item 4',
                href: '#',
            },
        ]}
        />
    </div>
);
<MenuPanel
    alignment="right"
    menuContent={MenuList}
    size="sm"
>
    <LinkText
        element="span"
    >
        Click for Small Right Menu
    </LinkText>
</MenuPanel>
<MenuPanel
    alignment="center"
    menuContent={MenuList}
    size="md"
>
    <Button
        isInline
        isButtonElement={false}
    >
        Click for Medium Center Menu
    </Button>
</MenuPanel>
<MenuPanel
    alignment="left"
    menuContent={MenuList}
    size="lg"
>
    <LinkText
        element="span"
    >
        Click for Large Left Menu
    </LinkText>
</MenuPanel>

                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default MenuPanelDocs;

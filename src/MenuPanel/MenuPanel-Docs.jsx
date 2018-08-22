import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import {
    Button,
    ButtonIconOnly,
    Header4,
    Header3,
    InputText,
    LinkText,
    List,
    ListItem,
    MenuPanelList,
    MenuPanel,
    MenuPanelScrollableWithActionArea,
    NotificationWarning,
    ParagraphMd,
} from '../index';

import SettingsIcon from '../icons/gear.svg';

import styles from './MenuPanel-Docs.scss';
class MenuPanelDocs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
        };
    }

    _toggleMenu = () => {
        this.setState({
            isShowing: !this.state.isShowing,
        });
    }

    _onClose = () => {
        this.setState({
            isShowing: false,
        });
    }

    _onOpen = ()=> {
        this.setState({
            isShowing: true,
        });
    }

    render() {
        const MenuList = (
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

        const MenuListDark = (
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
                    theme="dark"
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
                    theme="dark"
                />
            </div>
        );
        const MenuWithActionArea = (
            <MenuPanelScrollableWithActionArea
                maxHeight = {200}
                primaryButtonProps = {{
                    children: 'Submit',
                }}
                secondaryButtonProps = {{
                    children: 'Cancel',
                }}
            >
                <ParagraphMd>`Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
                <ParagraphMd>"Beware the Jabberwock, my son! The jaws that bite, the claws that catch! Beware the Jubjub bird, and shun The frumious Bandersnatch!"</ParagraphMd>
                <ParagraphMd>He took his vorpal sword in hand: Long time the manxome foe he sought -- So rested he by the Tumtum tree, And stood awhile in thought.</ParagraphMd>
                <ParagraphMd>And, as in uffish thought he stood,The Jabberwock, with eyes of flame, Came whiffling through the tulgey wood, And burbled as it came!</ParagraphMd>
                <InputText
                    name="foo"
                    id="MenuPanelExample Input"
                    label="Jabberwocky Name"
                />
            </MenuPanelScrollableWithActionArea>
        );

        return (
            <div className="Pattern__docs">
            <ParagraphMd>Menu Panels provide a drop-down menu panel that can be attached at different points using the <code>alignment</code> prop.</ParagraphMd>
            <ParagraphMd>Menu Panel content is passed to the <code>menuContent</code> prop. The most common content will be the <LinkText href="/pattern/Components/MenuPanelList">MenuPanelList component</LinkText>.</ParagraphMd>
            <ParagraphMd>The <code>onOpen</code> and <code>onClose</code> props take callback functions that will fire when the menu opens or closes.</ParagraphMd>
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
                <Header3>Button Triggers</Header3>
                <div className={styles.Spacer}>
                    <MenuPanel
                        alignment="right"
                        menuContent={MenuList}
                        size="md"
                    >
                        <Button
                            isInline
                            isButtonElement={false}
                            autoWidth="md"
                        >
                            Click for Medium Right Menu
                        </Button>
                    </MenuPanel>
                </div>
                <div className={styles.Spacer}>
                    <MenuPanel
                        alignment="left"
                        menuContent={MenuList}
                        size="lg"
                    >
                        <Button
                            isInline
                            isButtonElement={false}
                            autoWidth="md"
                            format="secondary"
                        >
                            Click for Large Left Menu
                        </Button>
                    </MenuPanel>
                </div>
                <Header3>Text Triggers</Header3>
                <div className={styles.Spacer}>
                    <MenuPanel
                        alignment="center"
                        menuContent={MenuList}
                        size="sm"
                        isShowing={this.state.isShowing}
                        onOpen={this._onOpen}
                        onClose={this._onClose}
                    >
                        <LinkText
                            element="span"
                        >
                            Click for Small Center Menu
                        </LinkText>
                    </MenuPanel>
                </div>

                    <Header3>Dark Theme</Header3>
                    <ParagraphMd>To get a dark theme apply <code>theme="dark</code> to the MenuPanel component, and also to the MenuPanelList component if you are using it.</ParagraphMd>

                    <div className="Pattern-DarkBlock">
                    <MenuPanel
                        alignment="left"
                        menuContent={MenuListDark}
                        size="lg"
                        theme="dark"
                    >
                        <Button
                            isInline
                            isButtonElement={false}
                            autoWidth="md"
                            format="primaryDark"
                        >
                            Click for Dark Large Left Menu
                        </Button>
                    </MenuPanel>
                </div>
                <Header3>MenuPanel with "Action Area"</Header3>
                <ParagraphMd>To add a scrollable area with action buttons to a menu panel use the <code>MenuPanelScrollableWithActionArea</code> as the menu panel content. See the documentation for this component for prop information.</ParagraphMd>
                <div className={styles.Spacer}>
                <Header4>Click Icon to Open Menu</Header4>
                <MenuPanel
                    alignment="center"
                    menuContent={MenuWithActionArea}
                    size="lg"
                >
                    <ButtonIconOnly
                        icon={<SettingsIcon />}
                        format="dark"
                        size="md"
                        isButtonElement={false}
                    />
                </MenuPanel>
                <ExampleSource>
                {`
const MenuWithActionArea = (
    <MenuPanelScrollableWithActionArea
        maxHeight = {200}
        primaryButtonProps = {{
            children: 'Submit',
        }}
        secondaryButtonProps = {{
            children: 'Cancel',
        }}
    >
        <ParagraphMd>Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
        <ParagraphMd>"Beware the Jabberwock, my son! The jaws that bite, the claws that catch! Beware the Jubjub bird, and shun The frumious Bandersnatch!"</ParagraphMd>
        <ParagraphMd>He took his vorpal sword in hand: Long time the manxome foe he sought -- So rested he by the Tumtum tree, And stood awhile in thought.</ParagraphMd>
        <ParagraphMd>And, as in uffish thought he stood,The Jabberwock, with eyes of flame, Came whiffling through the tulgey wood, And burbled as it came!</ParagraphMd>
        <InputText
            name="foo"
            id="MenuPanelExample Input"
            label="Jabberwocky Name"
        />
    </MenuPanelScrollableWithActionArea>
);
<MenuPanel
    alignment="center"
    menuContent={MenuWithActionArea}
    size="lg"
>
    <ButtonIconOnly
        icon={<SettingsIcon />}
        format="dark"
        size="md"
        isButtonElement={false}
    />
</MenuPanel>
                `}
                </ExampleSource>
            </div>
                <Header3>Making a button full width</Header3>
                <div className={styles.Spacer}>
                <ParagraphMd>If you need the trigger "button" to appear full width you need to both apply the <code>isFluid</code> prop to the menu panel <strong>and</strong> the <code>autoWidth="fluid"</code>prop to the button.</ParagraphMd>
                    <MenuPanel
                        alignment="center"
                        menuContent={MenuList}
                        size="md"
                        isFluid
                    >
                        <Button
                            isInline
                            isButtonElement={false}
                            autoWidth="fluid"
                        >
                            Click for Medium Center Menu
                        </Button>
                    </MenuPanel>
                    <ExampleSource>
                    {`
<MenuPanel
    alignment="center"
    menuContent={MenuList}
    size="md"
    isFluid
>
    <Button
        isInline
        isButtonElement={false}
        autoWidth="fluid"
    >
        Click for Medium Center Menu
    </Button>
</MenuPanel>
                    `}
                    </ExampleSource>
                </div>
                <Header3>Controlling Open/Close with the isShowing Prop</Header3>
                <ParagraphMd>MenuPanels will often be controlled by their parent using state. The button below toggles the <code>isShowing</code> prop on the menu above.</ParagraphMd>
                <Button
                    format="secondaryOutline"
                    onClick={this._toggleMenu}
                    autoWidth="md"
                >
                    Toggle Menu
                </Button>
            </div>

            <ExampleSource>
                {`
const MenuList = (
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

<MenuPanel
    alignment="center"
    menuContent={MenuList}
    size="sm"
>
    <ButtonIconOnly
        icon={<SettingsIcon />}
        format="dark"
        size="md"
        isButtonElement={false}
    />
</MenuPanel>

<MenuPanel
    alignment="right"
    menuContent={MenuList}
    size="md"
>
    <Button
        isInline
        isButtonElement={false}
        autoWidth="md"
    >
        Click for Medium Right Menu
    </Button>
</MenuPanel>

<MenuPanel
    alignment="left"
    menuContent={MenuList}
    size="lg"
>
    <Button
        isInline
        isButtonElement={false}
        autoWidth="md"
        format="secondary"
    >
        Click for Large Left Menu
    </Button>
</MenuPanel>

<MenuPanel
    alignment="center"
    menuContent={MenuList}
    size="sm"
    isShowing={this.state.isShowing}
    onOpen={this._onOpen}
    onClose={this._onClose}
>
    <LinkText
        element="span"
    >
        Click for Small Center Menu
    </LinkText>
</MenuPanel>

                    `}
                </ExampleSource>
            </div>
        );
    }
}

export default MenuPanelDocs;

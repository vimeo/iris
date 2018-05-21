import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ButtonSplitMenu, List, ListItem, MenuPanelList, ParagraphMd, Header3 } from '../index';

class ButtonSplitMenuDocs extends React.Component {
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
                <ParagraphMd>ButtonSplutMenu provides a button with an additional MenuPanel control at the end.</ParagraphMd>
                <Header3>Prop Notes</Header3>
                <List>
                    <ListItem><code>menuButtonA11yLabel</code> is a required text string to describe what clicking the menu dropdown control does.</ListItem>
                    <ListItem><code>menuAlignment, menuContent, menuSize</code> all correspond to the same props on the MenuPanel component.</ListItem>
                    <ListItem>Any additional passed props will spread to main button element, the <code>menuProps</code> prop takes an object of any special props you would like to pass to the MenuPanel component.</ListItem>
                </List>
                <div data-code>
                    <ButtonSplitMenu
                        buttonLabel="Button Label"
                        format="secondary"
                        menuButtonA11yLabel="See Options"
                        menuContent={MenuList}
                        size="sm"
                    />
                    <br />
                    <br />
                    <ButtonSplitMenu
                        buttonLabel="Button Label"
                        format="primary"
                        menuButtonA11yLabel="See Options"
                        menuContent={MenuList}
                        size="md"
                    />
                    <br />
                    <br />

                    <ButtonSplitMenu
                        buttonLabel="Button Label"
                        format="alternative"
                        menuButtonA11yLabel="See Options"
                        menuContent={MenuList}
                        size="md"
                    />
                    <br />
                    <br />

                    <ButtonSplitMenu
                        buttonLabel="Button Label"
                        format="primary"
                        menuButtonA11yLabel="See Options"
                        menuContent={MenuList}
                        size="lg"
                    />
                    <br />
                    <br />
                    <ButtonSplitMenu
                        buttonLabel="Button Label"
                        format="secondary"
                        menuButtonA11yLabel="See Options"
                        menuContent={MenuList}
                        size="lg"
                    />
                    <br />
                    <br />
                </div>

                <ExampleSource>
                    {`
<ButtonSplitMenu
    buttonLabel="Button Label"
    format="secondary"
    menuButtonA11yLabel="See Options"
    menuContent={MenuList}
    size="sm"
/>
<ButtonSplitMenu
    buttonLabel="Button Label"
    format="primary"
    menuButtonA11yLabel="See Options"
    menuContent={MenuList}
    size="md"
/>

<ButtonSplitMenu
    buttonLabel="Button Label"
    format="alternative"
    menuButtonA11yLabel="See Options"
    menuContent={MenuList}
    size="md"
/>

<ButtonSplitMenu
    buttonLabel="Button Label"
    format="primary"
    menuButtonA11yLabel="See Options"
    menuContent={MenuList}
    size="lg"
/>

<ButtonSplitMenu
    buttonLabel="Button Label"
    format="secondary"
    menuButtonA11yLabel="See Options"
    menuContent={MenuList}
    size="lg"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ButtonSplitMenuDocs;

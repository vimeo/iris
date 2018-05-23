import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {
    MenuPanelList,
    ParagraphMd,
    VerticalMenuItem,
} from '../index';

import SettingsIcon from '../icons/gear.svg';

class VerticalMenuContextualMenuPanelDocs extends React.Component {
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

        return (
            <div className="Pattern__docs">
            <ParagraphMd>This component provides a preformatted contextual menu to Vertical Menu items. This component should be passed to the <code>linkActionIcon</code> prop of <code>Vertical Menu Item</code>. The children of <code>VerticalMenuContextualMenuPanel</code> will become the content of the menu panel. This often be a <code>MenuPanelList</code> component.</ParagraphMd>

            <div data-code>
                <VerticalMenuItem
                    href="#"
                    label="Stand Alone Link"
                    nestedInteractionContent={MenuList}
                />
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

<VerticalMenuItem
    href="#"
    label="Stand Alone Link"
    nestedInteractionContent={MenuList}
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default VerticalMenuContextualMenuPanelDocs;

import React from 'react';
import VerticalMenuNested from './VerticalMenuNested';
import { List, ListItem } from '../List/List';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3 } from '../../../src/utility_components/Type/Type';
import SettingsIcon from '../../globals/svg/gear.svg';
import VerticalMenuItem from '../VerticalMenuItem/VerticalMenuItem';

const VerticalMenuNestedDocs = (props) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        console.log('Demo Click Handler: You Clicked:', e.target);
    };

    const subMenuItems = [
        (
        <VerticalMenuItem
                href="#"
                onClick={onClickHandler}
                label="Nested Item 1"
            />
        ),

        (
        <VerticalMenuItem
                href="#"
                onClick={onClickHandler}
                label="Item With Label Icon"
                labelIcon={(<SettingsIcon />)}
            />
        ),

        (
        <VerticalMenuItem
                onClick={onClickHandler}
                to="/"
                label="Nested Item 3"
            />
        ),
    ];

    return (
        <div className="Pattern__docs">

            <ParagraphMd>VerticalMenuNested provides links that reveal a nested menu.</ParagraphMd>
            <Header3>Prop Notes</Header3>
            <List>
                <ListItem><code>onOpen</code> and <code>onClose</code> take callback functions for when the nested menu is opened or closed.</ListItem>
                <ListItem><code>labelID</code> is required for accesibility support.</ListItem>
                <ListItem><code>selectedItemIndex</code> is a 0-based index of which item in the list should be highlighted as active.</ListItem>
                <ListItem><code>subMenuItems</code> should be an array of either <code>VerticalMenuItem</code> or <code>VerticalMenuItem</code> components.</ListItem>
                <ListItem>The <code>to</code> prop indicates the path that you want the top level menu item to load (by passing it to the React Router Link tag). If you do not specify anything the top level link will just toggle the submenu.</ListItem>
                <ListItem><code>nestedButtonLabel</code> should be passed a translated string indicating that the toggle arrow will open and close the menu.</ListItem>
            </List>

            <VerticalMenuNested
                label="Menu Label"
                labelId="testMenu"
                selectedItemIndex={1}
                subMenuItems={subMenuItems}
                nestedButtonLabel="toggle menu"
            />
            <ExampleSource>
                {`

 <VerticalMenuNested
    label="Menu Label"
    labelId="testMenu"
    selectedItemIndex={1}
    nestedButtonLabel="toggle menu"
    subMenuItems={[
        (
            <VerticalMenuItem
                    href="#"
                    onClick={onClickHandler}
                    label="Nested Item 1"
                />
            ),
    
            (
            <VerticalMenuItem
                    href="#"
                    onClick={onClickHandler}
                    label="Item With Label Icon"
                    labelIcon={(<SettingsIcon />)}
                />
            ),
    
            (
            <VerticalMenuItem
                    onClick={onClickHandler}
                    to="/"
                    label="Nested Item 3"
                />
        ),
    ]}
/>
                    `}
            </ExampleSource>
        </div>
    );
};

export default VerticalMenuNestedDocs;

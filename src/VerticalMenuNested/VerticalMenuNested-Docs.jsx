import React from 'react';

import List from '../List';
import ListItem from '../ListItem';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3 } from '../Type';
import VerticalMenuItem from '../VerticalMenuItem';
import VerticalMenuNested from './VerticalMenuNested';
import VerticalMenuItemContent from '../VerticalMenuItemContent';

const VerticalMenuNestedDocs = (props) => {
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

    return (
        <div className="Pattern__docs">

            <ParagraphMd>VerticalMenuNested provides links that reveal a nested menu.</ParagraphMd>
            <Header3>Prop Notes</Header3>
            <List>
                <ListItem><code>onOpen</code> and <code>onClose</code> take callback functions for when the nested menu is opened or closed.</ListItem>
                <ListItem><code>labelID</code> is required for accesibility support.</ListItem>
                <ListItem><code>selectedItemIndex</code> is a 0-based index of which item in the list should be highlighted as active.</ListItem>
                <ListItem><code>subMenuItems</code> should be an array of <code>VerticalMenuItem</code> components.</ListItem>
                <ListItem>The <code>href</code> prop passes to the link in the VerticalMenuItem. If you do not specify anything the top level link will just toggle the submenu.</ListItem>
                <ListItem><code>nestedButtonLabel</code> should be passed a translated string indicating that the toggle arrow will open and close the menu.</ListItem>
            </List>

            <VerticalMenuNested
                label="Menu Label"
                labelId="testMenu"
                subMenuItems={subMenuItems}
                nestedButtonLabel="toggle menu"
            />
            <ExampleSource>
                {`
            
<VerticalMenuNested
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
        <VerticalMenuItem
            isActive
        >
            <a
                to="#"
                onClick={onClickHandler}
            >
                <VerticalMenuItemContent
                    label="Nested Item 2"
                />
            </a>
        </VerticalMenuItem>
        ),
    ]}
/>
                    `}
            </ExampleSource>
        </div>
    );
};

export default VerticalMenuNestedDocs;

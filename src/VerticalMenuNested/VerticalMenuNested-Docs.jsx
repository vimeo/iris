import React from 'react';
import { Link } from 'react-router-dom';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import CirclePlusIcon from '../icons/circle-plus';
import FolderIcon from '../icons/folder';
import {
    List,
    ListItem,
    Header3,
    ParagraphMd,
    VerticalMenuActionButton,
    VerticalMenuItem,
    VerticalMenuItemContent,
    VerticalMenuNested,
} from '../index';

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
                        labelIcon={<FolderIcon />}
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
                <ListItem><code>actionButton</code> creates an actionable button to the right of the label by taking a <code>VerticalMenuActionButton</code> component which itself takes two props:
                    <List>
                        <ListItem><code>tooltipText</code> (optional) if the button needs a tooltip (they usually will) pass that string here.</ListItem>
                        <ListItem><code>icon</code> takes an SVG element, be sure to add a title attribute!</ListItem>
                        <ListItem>All other props (including <code>onClick</code>) passed to the component will spread to the button.</ListItem>
                        <ListItem>This component can be wrapped in an anchor or React Router Link tag.</ListItem>
                    </List>

                </ListItem>
                <ListItem><code>isActive</code> will set the top level link to an active (or selected) visual state.</ListItem>
                <ListItem><code>onOpen</code> and <code>onClose</code> take callback functions for when the nested menu is opened or closed.</ListItem>
                <ListItem><code>labelID</code> is required for accesibility support.</ListItem>
                <ListItem><code>selectedItemIndex</code> is a 0-based index of which item in the list should be highlighted as active.</ListItem>
                <ListItem><code>subMenuItems</code> should be an array of <code>VerticalMenuItem</code> components.</ListItem>
                <ListItem>The <code>href</code> prop passes to the link in the VerticalMenuItem. If you do not specify anything for <code>href</code> or <code>to</code>(if using the render prop for a react router link)  the top-level link will just toggle the submenu.</ListItem>
                <ListItem><code>nestedButtonLabel</code> should be passed a translated string indicating that the toggle arrow will open and close the menu.</ListItem>
                <ListItem><code>render</code> should be used if ReactRouter is desired for the top level link. Just create pass a <code>Link</code> component from react router to render.</ListItem>
            </List>

            <VerticalMenuNested
                actionButton = {(
                    <VerticalMenuActionButton
                        icon = {<CirclePlusIcon title="Add New Item" />}
                        tooltipText="click to add new item"
                    />
                )}
                label="Menu Label"
                labelId="testMenu"
                labelIcon={<FolderIcon />}
                subMenuItems={subMenuItems}
                nestedButtonLabel="toggle menu"
            />
            <VerticalMenuNested
                isActive
                label="Menu Label (with Render Prop &amp; isActive)"
                labelId="testMenuRender"
                subMenuItems={subMenuItems}
                nestedButtonLabel="toggle menu"
                render={Link}
                to="foo"
                data-bar="buzz"
            />
            <ExampleSource>
                {`
// import { Link } from 'react-router-dom';
<VerticalMenuNested
    actionButton = {(
        <VerticalMenuActionButton
            icon = {<CirclePlusIcon title="Add New Item" />}
            tooltipText="click to add new item"
        />
    )}
    label="Menu Label"
    labelId="testMenu"
    labelIcon={<FolderIcon />}
    subMenuItems={[
        (
        <VerticalMenuItem>
            <a
                to="#"
                onClick={onClickHandler}
            >
                <VerticalMenuItemContent
                    label="Nested Item 1"
                    labelIcon={<FolderIcon />}
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
                    label="Nested Item 2"
                />
            </a>
        </VerticalMenuItem>
        ),
    ]}
/>
<VerticalMenuNested
    isActive
    label="Menu Label (with Render Prop &amp; isActive)"
    labelId="testMenuRender"
    subMenuItems={subMenuItems}
    nestedButtonLabel="toggle menu"
    render={Link}
    to="foo"
    data-bar="buzz"
/>
                    `}
            </ExampleSource>
        </div>
    );
};

export default VerticalMenuNestedDocs;

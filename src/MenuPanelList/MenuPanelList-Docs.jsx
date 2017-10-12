import React from 'react';
import { Header3, ParagraphMd } from '../Type';
import LinkText from '../LinkText/LinkText';
import NotificationWarning from '../NotificationWarning/NotificationWarning';

class MenuPanelListDocs extends React.Component {

    render() {
        return (
            <div className="Pattern__docs">
            <NotificationWarning>
                <ParagraphMd>This component is only for use with the MenuPanel component</ParagraphMd>
            </NotificationWarning>
            <ParagraphMd>The Menu Panel List Component provides an interface for adding Menu items to the <LinkText href="/pattern/Components/MenuPanel">MenuPanel component</LinkText>.</ParagraphMd>
            <Header3>MenuItems Prop</Header3>
            <ParagraphMd>Items in the menu are added by passing an array to the <code>menuItems</code> props.</ParagraphMd>
            <ParagraphMd>
                The <code>label</code> and <code>href</code> props should be supplied but any other key/value pairs will be passed as props to the anchor tag for the menu item so event handlers and data attributes can be added to the menu item.
            </ParagraphMd>
            <ParagraphMd>The <code>hasDivider</code> prop will add a thin dividing line to the top of the menu ul set.</ParagraphMd>
            <ParagraphMd>The <code>isSelected</code> boolean prop allows for a selected state for menu items.</ParagraphMd>
            <ParagraphMd>The <code>icon</code> prop takes an SVG icon element that will be appended to the label to decorate the link.</ParagraphMd>
            <Header3>Header Prop</Header3>
            <ParagraphMd>The <code>header</code> prop takes a string to create a section header for menu items.</ParagraphMd>
            <ParagraphMd>See the <LinkText href="/pattern/Components/MenuPanel">MenuPanel component</LinkText> for code examples.</ParagraphMd>
            </div>
        );
    }
}

export default MenuPanelListDocs;

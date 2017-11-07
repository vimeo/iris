import React from 'react';
import { List, ListItem } from '../List/List';
import { ParagraphMd } from '../../../src/utility_components/Type/Type';

class MenuPanelScrollableWithActionAreaDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>This component providess a scrollable content area for MenuPanels. See the MenuPanel docs for a usage example.</ParagraphMd>
                <List>
                    <ListItem>The <code>primaryButtonProps</code> and <code>secondaryButtonProps</code> props take an object of props for the Button component.</ListItem>
                    <ListItem>The <code>maxHeight</code> prop should take an integer that represents the desired pixel height for the scrollable area above the action area.</ListItem>
                </List>
            </div>
        );
    }
}

export default MenuPanelScrollableWithActionAreaDocs;

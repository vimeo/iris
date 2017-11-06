import React from 'react';
import MenuPanelScrollableWithActionArea from './MenuPanelScrollableWithActionArea';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {ParagraphMd} from '../../../src/utility_components/Type/Type';

class MenuPanelScrollableWithActionAreaDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <MenuPanelScrollableWithActionArea />
                </div>

                <ExampleSource>
                    {`
                        <MenuPanelScrollableWithActionArea />
                        `}
                    </ExampleSource>
                </div>
        );
    };
};

export default MenuPanelScrollableWithActionAreaDocs;

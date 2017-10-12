import React from 'react';
import ListItem from './ListItem';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

class ListItemDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <ListItem />
                </div>

                <ExampleSource>
                    {`
                        <ListItem />
                        `}
                </ExampleSource>
            </div>
        );
    }
}

export default ListItemDocs;

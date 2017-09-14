import React from 'react';
import {{pascalCase name}} from './{{pascalCase name}}';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {ParagraphMd} from '../../../src/utility_components/Type/Type';

class {{pascalCase name}}Docs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <div data-code>
                    <{{pascalCase name}} />
                </div>

                <ExampleSource>
                    {`
                        <{{pascalCase name}} />
                        `}
                    </ExampleSource>
                </div>
        );
    };
};

export default {{pascalCase name}}Docs;

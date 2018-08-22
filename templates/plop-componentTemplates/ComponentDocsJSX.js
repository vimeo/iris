import React from 'react';
import {
    {{pascalCase name}},
    ParagraphMd,
} from '../index';
import ExampleSource from '../../docs/layout/ExampleSource';

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

import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';

const {{pascalCase name}}Docs = (props) => {
    return (
        <div className="Pattern__docs">
            <div data-code>
                <p>HTML Example</p>
            </div>

            <ExampleSource>
                {`
                    <p>HTML Example</p>
                    `}
                </ExampleSource>
            </div>
    );
};

export default {{pascalCase name}}Docs;

import React from 'react';
import {{pascalCase name}} from './{{pascalCase name}}'
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const {{pascalCase name}}Docs = (props) => {
    return (
        <div>
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

export default {{pascalCase name}}Docs;

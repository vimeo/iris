import React from 'react';
import styled from 'styled-components';
import VimeoTheme from '../globals/js/themes/vimeo-theme';

export interface {{pascalCase name}}Props extends React.HTMLProps<HTMLDivElement>  {
    /* 
    * Class is added to the outer div of the {{pascalCase name}}
     */
    className?: string,
};

// ==================== {{pascalCase name}} Styled Thing

export interface {{pascalCase name}}StyledProps extends React.HTMLProps<HTMLDivElement> {

}

const {{pascalCase name}}Styled= styled<{{pascalCase name}}StyledProps, 'div'>('div')`
    attribute: value;
`;

// ==================== {{pascalCase name}}

const {{pascalCase name}}: React.SFC<{{pascalCase name}}Props> = ({
    sampleProp = 'default',
    ref: _, // filter out ref from styled component
    ...filteredProps
}) => {
    
    return (
            <div>
                <{{pascalCase name}}Styled
                    {...filteredProps}
                    sampleProp={sampleProp}
                />
            </div>
    );
};

export default {{pascalCase name}};

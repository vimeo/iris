import React from 'react';
import styled from 'styled-components';

export interface {{pascalCase name}}Props extends React.HTMLProps<HTMLDivElement>  {
    /* 
    * Class is added to the outer div of the {{pascalCase name}}
     */
    className?: string,
};

export interface {{pascalCase name}}State {
    sampleState: string,
};

// ==================== {{pascalCase name}} Styled Thing

export interface {{pascalCase name}}StyledProps extends React.HTMLProps<HTMLDivElement> {

}

const {{pascalCase name}}Styled = styled<{{pascalCase name}}StyledProps, 'div'>('div')`
    attribute: value;
`;

// ==================== {{pascalCase name}}

class {{pascalCase name}} extends React.Component<any, any> {
    static defaultProps = {
        sampleProp: 'defaultValue',
    };

    constructor(props: {{pascalCase name}}Props){
        super(props);
        this.state = { 
            sampleState: 'initialValue',
        };
    }

    state: {{pascalCase name}}State

    props: {{pascalCase name}}Props;

    public render() {

        const {
            sampleProp,
            ...filteredProps
        } = this.props;

        return (
            <div>
                <{{pascalCase name}}Styled
                    {...filteredProps}
                    sampleProp={sampleProp}
                />
            </div>
        );
    }
}

export default {{pascalCase name}};

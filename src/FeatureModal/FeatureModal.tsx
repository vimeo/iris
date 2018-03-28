import React from 'react';
import styled from 'styled-components';

export interface FeatureModalProps extends React.HTMLProps<HTMLDivElement> {
    hideDismissButton: boolean;
    isControlled: boolean;
    isOpen: boolean;
    footer: React.ReactNode;
}

export interface FeatureModalState {
    isOpen: boolean;
}

// ==================== FeatureModal Styled Thing

export interface FeatureModalStyledProps
    extends React.HTMLProps<HTMLDivElement> {}

const FeatureModalStyled = styled<FeatureModalStyledProps, 'div'>('div')`
    attribute: value;
`;

// ==================== FeatureModal

class FeatureModal extends React.Component<any, any> {
    static defaultProps = {
        sampleProp: 'defaultValue',
    };

    constructor(props: FeatureModalProps) {
        super(props);
        this.state = {
            sampleState: 'initialValue',
        };
    }

    state: FeatureModalState;

    props: FeatureModalProps;

    public render() {
        const { sampleProp, ...filteredProps } = this.props;

        return (
            <div>
                <FeatureModalStyled
                    {...filteredProps}
                    sampleProp={sampleProp}
                />
            </div>
        );
    }
}

export default FeatureModal;

// @flow
import React from 'react';
import FeatureTourPanelContent from '../FeatureTourPanelContent';
import MenuPanel from '../MenuPanel';

const displayName = 'FeatureTourPanel';

type Props = {
    className?: string,
    dismissButtonLabel: string,
    headerText?: string,
    bodyText: string,
    onDismissClick?: () => void,
    primaryButtonProps?: Object,
    secondaryButtonProps?: Object,
    isShowing?: boolean,
};

class FeatureTourPanel extends React.Component {

    constructor(props: Props) {
        super(props);
        this.state = {
            isShowing: props.isShowing,
        };
    }
    state: Object;

    _handleDismissClick = () => {
        this.setState({
            isShowing: false,
        });

        if (typeof this.props.onDismissClick === 'function') {
            this.props.onDismissClick();
        }
    }

    render() {
        const {
            dismissButtonLabel,
            headerText,
            bodyText,
            primaryButtonProps,
            secondaryButtonProps,
            onDismissClick, // eslint-disable-line no-unused-vars
            isShowing, // eslint-disable-line no-unused-vars
            ...filteredProps
        } = this.props;

        const MenuPanelContent = (
            <FeatureTourPanelContent
                dismissButtonLabel={dismissButtonLabel}
                onDismissClick={this._handleDismissClick}
                headerText={headerText}
                bodyText={bodyText}
                primaryButtonProps={primaryButtonProps}
                secondaryButtonProps={secondaryButtonProps}
            />
        );
        return (
            <MenuPanel
                {...filteredProps}
                isShowing={this.state.isShowing}
                menuContent={MenuPanelContent}
            >
                <span>Dot goes here</span>
            </MenuPanel>
        );

    }
}

FeatureTourPanel.displayName = displayName;

export default FeatureTourPanel;

// @flow
import React from 'react';
import FeatureTourPanelContent from '../FeatureTourPanelContent';
import MenuPanel from '../MenuPanel';
import styles from './FeatureTourPanel.scss';

const displayName = 'FeatureTourPanel';


type Props = {
    attachment?: 'top' | 'left' | 'right' | 'bottom',
    className?: string,
    dismissButtonLabel: string,
    headerText?: string,
    bodyText: string,
    onDismissClick?: () => void,
    primaryButtonProps?: Object,
    secondaryButtonProps?: Object,
    size: 'sm' | 'md' | 'lg' | 'xl',
    isShowing?: boolean,
};

class FeatureTourPanel extends React.Component {
    static defaultProps = {
        attachment: 'right',
        size: 'lg',
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            isShowing: props.isShowing,
        };
    }

    state: Object;
    props: Props;

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
            attachment,
            dismissButtonLabel,
            headerText,
            bodyText,
            primaryButtonProps,
            secondaryButtonProps,
            onDismissClick, // eslint-disable-line no-unused-vars
            isShowing, // eslint-disable-line no-unused-vars
            size,
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

        const panelOffsetDistance = 16;
        let panelAttachment, panelTargetAttachment, panelOffset;

        switch (attachment) {
            case 'top':
                panelAttachment = 'bottom center';
                panelOffset = `${panelOffsetDistance}px 0`;
                panelTargetAttachment = 'bottom center';
                break;
            case 'right':
                panelAttachment = 'top left';
                panelOffset = `0 ${panelOffsetDistance * -1}px`;
                panelTargetAttachment = 'top right';
                break;
            case 'bottom':
                panelAttachment = 'top center';
                panelOffset = `${panelOffsetDistance * -1}px 0`;
                panelTargetAttachment = 'top center';
                break;
            case 'left':
                panelAttachment = 'top right';
                panelOffset = `0 ${panelOffsetDistance}px`;
                panelTargetAttachment = 'top left';
                break;
        }

        return (
            <MenuPanel
                {...filteredProps}
                isShowing={this.state.isShowing}
                menuContent={MenuPanelContent}
                panelClassName={styles.FeatureTourPanel}
                size={size}
                options={{
                    offset: panelOffset,
                    attachment: panelAttachment,
                    targetAttachment: panelTargetAttachment,
                }}
            >
                <span>Dot goes here</span>
            </MenuPanel>
        );

    }
}

FeatureTourPanel.displayName = displayName;

export default FeatureTourPanel;

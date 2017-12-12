// @flow
import React from 'react';
import classNames from 'classnames';
import FeatureTourPanelContent from '../FeatureTourPanelContent';
import MenuPanel from '../MenuPanel';
import styles from './FeatureTourPanel.scss';

const displayName = 'FeatureTourPanel';


type Props = {
    attachment?: 'top' | 'left' | 'right' | 'bottom',
    beaconIsActive?: boolean,
    beaconText?: string,
    bodyText: string,
    className?: string,
    dismissButtonLabel: string,
    headerText?: string,
    onClose: () => void,
    onDismissClick?: (e: Event) => void,
    onOpen?: () => void,
    primaryButtonProps?: Object,
    secondaryButtonProps?: Object,
    size: 'sm' | 'md' | 'lg' | 'xl',
    isShowing?: boolean,
};

type State = {
    isShowing?: boolean,
    beaconIsActive?: boolean,
}

class FeatureTourPanel extends React.Component {
    static defaultProps = {
        attachment: 'right',
        size: 'lg',
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            isShowing: props.isShowing,
            beaconIsActive: props.beaconIsActive,
        };
    }

    state: State;
    props: Props;

    _handleDismissClick = (e: Event) => {
        this.setState({
            isShowing: false,
        });

        if (typeof this.props.onDismissClick === 'function') {
            this.props.onDismissClick(e);
        }
    }

    _handleOpen= () => {
        this.setState({
            beaconIsActive: false,
        });

        if (typeof this.props.onOpen === 'function') {
            this.props.onOpen();
        }
    }

    render() {
        const {
            attachment,
            dismissButtonLabel,
            headerText,
            beaconText,
            beaconIsActive, // eslint-disable-line no-unused-vars
            bodyText,
            primaryButtonProps,
            secondaryButtonProps,
            onOpen, // eslint-disable-line no-unused-vars
            onClose,
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

        const beaconClass = classNames(
            styles.Beacon,
            (this.state.beaconIsActive ? 'FeatureTourPanel_beaconIsActive' : null)
        );

        return (
            <MenuPanel
                {...filteredProps}
                isShowing={this.state.isShowing}
                menuContent={MenuPanelContent}
                onClose={onClose}
                onOpen={this._handleOpen}
                panelClassName={styles.FeatureTourPanel}
                size={size}
                options={{
                    offset: panelOffset,
                    attachment: panelAttachment,
                    targetAttachment: panelTargetAttachment,
                }}
            >
                <span className={beaconClass}>{beaconText}</span>
            </MenuPanel>
        );

    }
}

FeatureTourPanel.displayName = displayName;

export default FeatureTourPanel;

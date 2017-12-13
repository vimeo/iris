// @flow
import React from 'react';
import FeatureTourPanelContent from '../FeatureTourPanelContent';
import FeatureTourDot from '../FeatureTourDot';
import MenuPanel from '../MenuPanel';
import styles from './FeatureTourPanel.scss';

const displayName = 'FeatureTourPanel';


type Props = {
    attachment?: 'top' | 'left' | 'right' | 'bottom',
    beaconMode?: 'inactive' |'active',
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
    isShowing?: boolean,
};

type State = {
    isShowing?: boolean,
    beaconMode?: 'inactive' | 'open' |'active';
}

class FeatureTourPanel extends React.Component {
    static defaultProps = {
        attachment: 'right',
        beaconMode: 'inactive',
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            isShowing: props.isShowing,
            beaconMode: props.isShowing ? 'open' : props.beaconMode,
        };
    }

    state: State;


    componentWillUpdate(nextProps: Props) {
        if (nextProps !== this.props) {
            this.setState({
                isShowing: nextProps.isShowing,
                beaconMode: nextProps.isShowing ? 'open' : nextProps.beaconMode,
            });
        }
    }

    props: Props;

    _handleDismissClick = (e: Event) => {
        this.setState({
            isShowing: false,
            beaconMode: 'inactive',
        });

        if (typeof this.props.onDismissClick === 'function') {
            this.props.onDismissClick(e);
        }
    }

    _handleOpen= () => {
        this.setState({
            isShowing: true,
            beaconMode: 'open',
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
            beaconMode, // eslint-disable-line no-unused-vars
            bodyText,
            primaryButtonProps,
            secondaryButtonProps,
            onOpen, // eslint-disable-line no-unused-vars
            onClose,
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
                panelOffset = `${panelOffsetDistance}px ${panelOffsetDistance * -1}px`;
                panelTargetAttachment = 'top right';
                break;
            case 'bottom':
                panelAttachment = 'top center';
                panelOffset = `${panelOffsetDistance * -1}px 0`;
                panelTargetAttachment = 'top center';
                break;
            case 'left':
                panelAttachment = 'top right';
                panelOffset = `${panelOffsetDistance}px ${panelOffsetDistance}px`;
                panelTargetAttachment = 'top left';
                break;
        }


        return (
            <MenuPanel
                {...filteredProps}
                isShowing={this.state.isShowing}
                menuContent={MenuPanelContent}
                onClose={onClose}
                onOpen={this._handleOpen}
                panelClassName={styles.FeatureTourPanel}
                size="lg"
                options={{
                    offset: panelOffset,
                    attachment: panelAttachment,
                    targetAttachment: panelTargetAttachment,
                }}
            >
                <FeatureTourDot
                    beaconText={beaconText}
                    mode={this.state.beaconMode}
                />
            </MenuPanel>
        );

    }
}

FeatureTourPanel.displayName = displayName;

export default FeatureTourPanel;

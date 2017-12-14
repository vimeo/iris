// @flow
import React from 'react';
import FeatureTourPanelContent from '../FeatureTourPanelContent';
import FeatureTourDot from '../FeatureTourDot';
import MenuPanel from '../MenuPanel';
import styles from './FeatureTourPanel.scss';

const displayName = 'FeatureTourPanel';


type Props = {
    attachment?: 'top' | 'left' | 'right' | 'bottom',
    beaconDelayIndex?: number,
    beaconText?: string,
    children: React$Element<*>,
    className?: string,
    dismissButtonLabel: string,
    headerText?: string,
    onClose: () => void,
    onDismissClick?: (e: Event) => void,
    onOpen?: () => void,
    primaryButtonProps?: Object,
    dismissButtonProps?: Object,
    isShowing?: boolean,
};

type State = {
    isShowing?: boolean,
    beaconMode?: 'inactive' | 'open' |'active';
}

class FeatureTourPanel extends React.Component {
    static defaultProps = {
        attachment: 'right',
    };

    constructor(props: Props) {
        super(props);
        let beaconInitialState = 'active';

        if (typeof props.beaconDelayIndex === 'number' && props.beaconDelayIndex > 0) {
            beaconInitialState = 'inactive';
            this._setDelay(props.beaconDelayIndex);
        }
        else if (props.isShowing) {
            beaconInitialState = 'open';
        }

        this.state = {
            isShowing: props.isShowing,
            beaconMode: beaconInitialState,
        };
    }

    state: State;


    componentWillUpdate(nextProps: Props) {
        if (nextProps !== this.props) {
            this.setState({
                isShowing: nextProps.isShowing,
                beaconMode: nextProps.isShowing ? 'open' : this.state.beaconMode,
            });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.beaconTimer);
    }

    props: Props;
    beaconTimer: any;

    _handleClose = () => {
        this.setState({
            isShowing: false,
            beaconMode: 'inactive',
        });

        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    }

    _handleDismissClick = (e: Event) => {
        this.setState({
            isShowing: false,
            beaconMode: 'inactive',
        });

        if (typeof this.props.onDismissClick === 'function') {
            this.props.onDismissClick(e);
        }
    }

    _handleOpen = () => {
        this.setState({
            isShowing: true,
            beaconMode: 'open',
        });

        if (typeof this.props.onOpen === 'function') {
            this.props.onOpen();
        }
    }

    _setDelay = (beaconDelayIndex: number) => {
        this.beaconTimer = setTimeout(()=> {
            if (this.state.beaconMode === 'inactive') {
                this.setState({
                    beaconMode: 'active',
                });
            }
        }, beaconDelayIndex * 300);
    }

    render() {
        const {
            attachment,
            dismissButtonLabel,
            headerText,
            beaconDelayIndex, // eslint-disable-line no-unused-vars
            beaconText,
            children,
            primaryButtonProps,
            dismissButtonProps,
            onOpen, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            onDismissClick, // eslint-disable-line no-unused-vars
            isShowing, // eslint-disable-line no-unused-vars
            ...filteredProps
        } = this.props;

        const MenuPanelContent = (
            <FeatureTourPanelContent
                dismissButtonLabel={dismissButtonLabel}
                onDismissClick={this._handleDismissClick}
                headerText={headerText}
                children={children}
                primaryButtonProps={primaryButtonProps}
                dismissButtonProps={dismissButtonProps}
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
                onClose={this._handleClose}
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

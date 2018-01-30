// @flow
import React from 'react';
import classNames from 'classnames';
import FeatureTourPanelContent from '../FeatureTourPanelContent';
import FeatureTourDot from '../FeatureTourDot';
import MenuPanel from '../MenuPanel';
import styles from './FeatureTourPanel.scss';

const displayName = 'FeatureTourPanel';


type Props = {
    actionArea?: React$Element<*>,
    attachment?: 'top' | 'left' | 'right' | 'bottom',
    beaconDelayIndex?: number,
    beaconA11yText: string,
    children: React$Element<*>,
    className?: string,
    dismissButtonA11yLabel: string,
    headerText?: string,
    onClose: () => void,
    onDismissClick?: (e: Event) => void,
    onOpen?: () => void,
    dismissButtonProps?: Object,
    isShowing?: boolean,
    wrapperClass?: string,
};

type State = {
    isShowing?: boolean,
    beaconMode?: 'inactive' | 'open' |'active' | 'hidden';
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


    componentWillUpdate(nextProps: Props, nextState: State) {
        if (nextProps !== this.props) {
            this.setState({
                isShowing: nextProps.isShowing,
                beaconMode: nextProps.isShowing ? 'open' : this.state.beaconMode,
            });
        }

        if (this.state.beaconMode === 'active' && nextState.beaconMode !== 'active') {
            clearTimeout(this.beaconTimer);
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
            actionArea,
            attachment,
            dismissButtonA11yLabel,
            headerText,
            beaconDelayIndex, // eslint-disable-line no-unused-vars
            beaconA11yText,
            children,
            dismissButtonProps,
            onOpen, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            onDismissClick, // eslint-disable-line no-unused-vars
            isShowing, // eslint-disable-line no-unused-vars
            wrapperClass,
            ...filteredProps
        } = this.props;

        const combinedWrapperClass = classNames(
        styles.Wrapper,
        styles[this.state.beaconMode],
        wrapperClass,
       );

        const MenuPanelContent = (
            <FeatureTourPanelContent
                actionArea={actionArea}
                dismissButtonA11yLabel={dismissButtonA11yLabel}
                onDismissClick={this._handleDismissClick}
                headerText={headerText}
                children={children}
                dismissButtonProps={dismissButtonProps}
            />
        );

        const panelOffsetDistance = 16;
        let panelAttachment, panelTargetAttachment, panelOffset;

        switch (attachment) {
            case 'top':
                panelAttachment = 'bottom center';
                panelOffset = `${panelOffsetDistance * 3}px 0`;
                panelTargetAttachment = 'bottom center';
                break;
            case 'right':
                panelAttachment = 'top left';
                panelOffset = '0 0';
                panelTargetAttachment = 'top right';
                break;
            case 'bottom':
                panelAttachment = 'top center';
                panelOffset = `${panelOffsetDistance * -3}px 0`;
                panelTargetAttachment = 'top center';
                break;
            case 'left':
                panelAttachment = 'top right';
                panelOffset = '0 0';
                panelTargetAttachment = 'top left';
                break;
        }


        return (
            <div className={combinedWrapperClass}>
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
                        beaconA11yText={beaconA11yText}
                        mode={this.state.beaconMode}
                    />
                </MenuPanel>
            </div>
        );

    }
}

FeatureTourPanel.displayName = displayName;

export default FeatureTourPanel;

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
    dismissButtonProps?: Object,
    headerText?: string,
    shouldHideOnClose?: boolean,
    isOpen?: boolean,
    onClose: () => void,
    onDismissClick?: (e: Event) => void,
    onOpen?: () => void,
    shouldRefocusTriggerOnClose?: boolean,
    wrapperClass?: string,
};

type State = {
    isOpen?: boolean,
    beaconMode?: 'inactive' | 'open' |'active' | 'hidden';
}

class FeatureTourPanel extends React.Component {
    static defaultProps = {
        attachment: 'right',
        beaconDelayIndex: 0,
        shouldRefocusTriggerOnClose: true,
    };

    constructor(props: Props) {
        super(props);

        let initialBeaconMode = 'active';

        if (props.isOpen) {
            initialBeaconMode = 'open';
        }
        else if (props.beaconDelayIndex && props.beaconDelayIndex > 0) {
            initialBeaconMode = 'inactive';
        }

        this.state = {
            isOpen: props.isOpen,
            beaconMode: initialBeaconMode,
        };
    }

    state: State;

    componentDidMount() {
        if (this.props.beaconDelayIndex) {
            this._setDelay(this.props.beaconDelayIndex);
        }
    }

    componentWillUpdate(nextProps: Props, nextState: State) {
        if (nextProps.isOpen !== this.props.isOpen) {
            this.setState({
                isOpen: nextProps.isOpen,
                beaconMode: this._chooseBeaconState(nextProps),
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

    _chooseBeaconState = (choiceProps: Props) => {

        if (choiceProps.beaconDelayIndex && !choiceProps.isOpen) {
            this._setDelay(choiceProps.beaconDelayIndex);
            return 'inactive';
        }
        else if (choiceProps.isOpen) {
            return 'open';
        }

        return this.state.beaconMode;
    }

    _handleClose = () => {
        this.setState({
            isOpen: false,
            beaconMode: this.props.shouldHideOnClose ? 'hidden' : 'inactive',
        });

        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    }

    _handleDismissClick = (e: Event) => {
        this.setState({
            isOpen: false,
            beaconMode: 'inactive',
        });

        if (typeof this.props.onDismissClick === 'function') {
            this.props.onDismissClick(e);
        }
    }

    _handleOpen = () => {
        this.setState({
            isOpen: true,
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
            beaconDelayIndex, // eslint-disable-line no-unused-vars
            beaconA11yText,
            children,
            dismissButtonA11yLabel,
            dismissButtonProps,
            headerText,
            isOpen, // eslint-disable-line no-unused-vars
            onOpen, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            onDismissClick, // eslint-disable-line no-unused-vars
            shouldHideOnClose,
            shouldRefocusTriggerOnClose,
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
                    isShowing = {this.state.isOpen}
                    menuContent={MenuPanelContent}
                    onClose={this._handleClose}
                    onOpen={this._handleOpen}
                    panelClassName={styles.FeatureTourPanel}
                    shouldRefocusTriggerOnClose={shouldHideOnClose ? false : shouldRefocusTriggerOnClose}
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

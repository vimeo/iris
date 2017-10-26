// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputCheckboxSet.scss';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import SlideUpDown from '../../animations/SlideUpDown/SlideUpDown';
const displayName = 'InputCheckboxSet';

type Props = {
    className?: string,
    subOptions: Object,
    topLevelCheckedStyle?: 'default' | 'indeterminate',
    topLevel: Object,
    showDisabledOptions?: boolean,
    checkAllOnTopLevelCheck: boolean,
};

class InputCheckboxSet extends React.Component {

    state: Object;

    componentWillMount() {
        const showSubOptions = !this.props.showDisabledOptions && !this.props.topLevel.checked ? false : true;

        this.setState({
            topLevelChecked: this.props.topLevel.checked,
            topLevelStyle: this.props.topLevelCheckedStyle,
            checkboxState: this.props.subOptions.map((key, i) => key.checked || false),
            showSubOptions,
        });
    }

    props: Props;

    _checkForUnifiedState(checkboxesState: Array<boolean>) {

        const isAllTrue = (element) => element;


        const isAllFalse = (element) => !element;

        if (checkboxesState.every(isAllTrue)) {
            this.setState({
                topLevelChecked: true,
                topLevelStyle: 'default',
            });
        }
        else if (checkboxesState.every(isAllFalse)) {
            this.setState({ topLevelChecked: false });
        }
        else {
            this.setState({
                topLevelChecked: true,
                topLevelStyle: 'indeterminate',
            });
        }
    }

    _handleSubChange = (e: Event) => {
        if (e.target instanceof HTMLElement) {
            const targetIndex = parseInt(e.target.getAttribute('data-index'), 10);

            const newCheckboxState = this.state.checkboxState;
            newCheckboxState[targetIndex] = !this.state.checkboxState[targetIndex];

            this._checkForUnifiedState(newCheckboxState);

            this.setState({
                checkboxState: newCheckboxState,
            });
        }
    }

    _handleTopLevelChange = (e: Event) => {
        if (e.target.hasOwnProperty('checked')) {
            const newState = this.props.subOptions.map(
                (key, i) => e.target.checked && this.props.checkAllOnTopLevelCheck
                ? true : false
            );

            this.setState({
                topLevelChecked: !this.state.topLevelChecked,
                topLevelStyle: this.props.checkAllOnTopLevelCheck ? 'default' : this.props.topLevelCheckedStyle,
                checkboxState: newState,
                showSubOptions: this.props.showDisabledOptions ? true : !this.state.topLevelChecked,
            });
        }
    };

    render() {
        const {
            className,
            checkAllOnTopLevelCheck, // eslint-disable-line no-unused-vars
            showDisabledOptions, // eslint-disable-line no-unused-vars
            subOptions,
            topLevel,
            topLevelCheckedStyle, // eslint-disable-line no-unused-vars
            ...filteredProps
        } = this.props;
            // className builder
        const componentClass = classNames(
        styles.InputCheckboxSet,
        className
        );
        const that = this;
        const NestedCheckboxes = subOptions.map(function(key, i) {

            return (
                <InputCheckbox
                    {...key}
                    checked={that.state.checkboxState[i]}
                    key={`NestedCheckbox_${i}_${key.name}`}
                    data-index={i}
                    onChange={that._handleSubChange}
                />
            );
        });

        return (
                <div
                    {...filteredProps}
                    className={componentClass}
                >
                    <InputCheckbox
                        {...topLevel}
                        onChange={this._handleTopLevelChange}
                        checked = {this.state.topLevelChecked}
                        checkedStyle={this.state.topLevelStyle}
                    />
                        <SlideUpDown
                            isHidden= {!this.state.showSubOptions}
                        >
                            <div
                            className={styles.NestedGroup}
                            >
                                {NestedCheckboxes}
                            </div>
                        </SlideUpDown>
                </div>
        );
    }
}

InputCheckboxSet.displayName = displayName;

export default InputCheckboxSet;

import React from 'react';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import SlideUpDown from '../SlideUpDown/SlideUpDown';
import {
    InputCheckboxSetProps,
    InputCheckboxSetState,
} from './InputCheckboxSetTypes';
import { InputCheckboxSetSubStyled } from './InputCheckboxSetSubStyled';

class InputCheckboxSet extends React.Component<
    InputCheckboxSetProps,
    InputCheckboxSetState
> {
    readonly state: InputCheckboxSetState;
    readonly props: InputCheckboxSetProps;

    constructor(props: InputCheckboxSetProps) {
        super(props);
    }

    componentWillMount() {
        const showSubOptions =
            !this.props.showDisabledOptions && !this.props.topLevel.checked
                ? false
                : true;

        this.setState({
            isHovered: false,
            topLevelChecked: this.props.topLevel.checked,
            topLevelStyle: this.props.topLevelCheckedStyle,
            checkboxState: this.props.subOptions.map(
                key => key.checked || false,
            ),
            showSubOptions,
        });
    }

    _checkForUnifiedState(checkboxesState: Array<boolean>) {
        const isAllTrue = element => element;
        const isAllFalse = element => !element;

        this.setState({
            topLevelChecked: !checkboxesState.every(isAllFalse),
            topLevelStyle:
                !checkboxesState.every(isAllTrue) &&
                !checkboxesState.every(isAllFalse)
                    ? 'indeterminate'
                    : 'default',
        });
    }

    _handleSubChange = (event: any) => {
        if (event.target instanceof HTMLElement) {
            const targetIndex = parseInt(
                event.target.getAttribute('data-index'),
                10,
            );

            const newCheckboxState = this.state.checkboxState;
            newCheckboxState[targetIndex] = !this.state.checkboxState[
                targetIndex
            ];

            this._checkForUnifiedState(newCheckboxState);

            this.setState({
                checkboxState: newCheckboxState,
            });
        }
    };

    _handleTopLevelChange = (event: any) => {
        if (event.target.hasOwnProperty('checked')) {
            const newState = this.props.subOptions.map(
                () =>
                    event.target.checked && this.props.checkAllOnTopLevelCheck
                        ? true
                        : false,
            );

            this.setState({
                topLevelChecked: !this.state.topLevelChecked,
                topLevelStyle: this.props.checkAllOnTopLevelCheck
                    ? 'default'
                    : this.props.topLevelCheckedStyle,
                checkboxState: newState,
                showSubOptions: this.props.showDisabledOptions
                    ? true
                    : !this.state.topLevelChecked,
            });
        }
    };

    public render() {
        const {
            checkAllOnTopLevelCheck,
            showDisabledOptions,
            subOptions,
            topLevel,
            topLevelCheckedStyle,
            ...filteredProps
        } = this.props;

        return (
            <div {...filteredProps}>
                <InputCheckbox
                    {...topLevel}
                    onChange={this._handleTopLevelChange}
                    checked={this.state.topLevelChecked}
                    checkedStyle={this.state.topLevelStyle}
                />
                <SlideUpDown isHidden={!this.state.showSubOptions}>
                    <InputCheckboxSetSubStyled>
                        {subOptions.map((key, i) => (
                            <InputCheckbox
                                {...key}
                                checked={this.state.checkboxState[i]}
                                key={`NestedCheckbox_${i}_${key.name}`}
                                data-index={i}
                                onChange={this._handleSubChange}
                            />
                        ))}
                    </InputCheckboxSetSubStyled>
                </SlideUpDown>
            </div>
        );
    }
}

export default InputCheckboxSet;

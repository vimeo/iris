import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
  getSliderThemeColors,
  themeOptions,
  getSliderDimension,
  sliderZindex,
  SliderStyleSettings,
} from './SliderHelpers';
import { SliderLabel } from './SliderLabel';

export interface SliderProps {
  className?: string;
  /**
   * the minimum value in the range
   */
  minValue?: number;
  /**
   * the maximum value in the range
   */
  maxValue?: number;
  /**
   * starting point in the range after initialized
   */
  initialMinValue?: number;
  /**
   * end point in the range after initialized
   */
  initialMaxValue?: number;
  /**
   * minimum gap between starting and end point of range
   */
  gap: number;
  /**
   * specifies the size of each movement (an increment or jump between values) of the slider control.
   */
  step: number;
  /**
   * Set the current color theme
   */
  format: 'dark' | 'light';
  /**
   *  Override the default Z-index
   */
  zIndexOverride?: number;
  /**
   * if true the labels becomes editable to accept input from user
   */
  editableLabel?: boolean;
  /**
   * a function to format the output of range slider for display purpose.
   * e.g we passed startValue and endValue as seconds for a range of start time and end time,
   * but while displaying the output we want to display in minutes or hours.
   */
  valueFormatter?: (value: number) => string;
  /**
   * gets called on slider value change and can be used to read start and end values.
   */
  rangeValues?: (start: number, end: number) => {};
  /**
   * Disables the slider
   */
  disabled?: boolean;
}

const focusIdentifier = {
  start: 'startRange',
  end: 'endRnage',
};

export interface SliderState {
  startValueLeft: string; // left pos of start value bubble
  endValueLeft: string; // left pos of end value bubble
  sliderBgStyle: {};
  focusedInput: string;
}

export interface SliderStyledProps
  extends React.HTMLProps<HTMLDivElement> {
  format: 'dark' | 'light' | 'disabled';
  zIndexOverride: number;
}

interface BubbleWrapperStyleProps {
  zIndexOverride: number;
}

const firstSliderThumbStyles = zIndex => {
  return `
        z-index: ${zIndex + sliderZindex.startHandle};
        position: relative;
        transform: translateX(-${rem(
          SliderStyleSettings.dimensions.gradientOffset,
        )});
    `;
};

const sliderThumbStyles = props => {
  return `
        cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
        border-radius: 50%;
        appearance: none;
        width: ${getSliderDimension('handleDiameter')};
        height: ${getSliderDimension('handleDiameter')};
        background: ${
          getSliderThemeColors(props.format).handleBackground
        };
        pointer-events: auto;
        transform: translateX(
            ${rem(SliderStyleSettings.dimensions.gradientOffset)}
        );`;
};

const sliderTrackStyles = () => {
  return `
        background: none;
        outline: none;
    `;
};

const focusedSliderThumbStyles = props => {
  return `
        background: ${
          getSliderThemeColors(props.format).handleFocusBackground
        };`;
};

const SliderStyled = styled.div<SliderStyledProps>`
  /* stylelint-disable */
  position: relative;
  z-index: ${props => props.zIndexOverride};
  input[type='range'] {
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
    height: ${rem(SliderStyleSettings.dimensions.sliderTrackHeight)};
    width: 100%;
    outline: none;
    margin: 0;
    appearance: none;
    &::-webkit-slider-thumb {
      ${sliderThumbStyles};
    }
    &::-moz-range-thumb {
      ${sliderThumbStyles};
      border: none;
    }
    &::-ms-thumb {
      ${sliderThumbStyles};
    }
    &::-moz-focus-outer {
      border: 0;
    }
    &::-webkit-slider-runnable-track {
      ${sliderTrackStyles};
    }
    &::-moz-range-track {
      ${sliderTrackStyles};
    }
    &::-ms-track {
      ${sliderTrackStyles};
    }
    &::-webkit-slider-thumb {
      pointer-events: auto;
    }
    &::-moz-range-thumb {
      pointer-events: auto;
    }
    &::-ms-thumb {
      pointer-events: auto;
    }
    &:focus {
      &::-webkit-slider-thumb {
        ${focusedSliderThumbStyles};
      }
      &::-moz-range-thumb {
        ${focusedSliderThumbStyles};
      }
      &::-ms-thumb {
        ${focusedSliderThumbStyles};
      }
    }
    &:nth-child(1) {
      border-radius: ${rem(2)};
      z-index: ${props =>
        props.zIndexOverride + sliderZindex.startSlider};
      &::-webkit-slider-thumb {
        ${props => firstSliderThumbStyles(props.zIndexOverride)};
      }
      &::-moz-range-thumb {
        ${props => firstSliderThumbStyles(props.zIndexOverride)};
      }
      &::-ms-thumb {
        ${props => firstSliderThumbStyles(props.zIndexOverride)};
      }
    }
    &:nth-child(2) {
      z-index: ${props =>
        props.zIndexOverride + sliderZindex.endSlider};
      background: none;
    }
  }
  /* stylelint-enable */
`;

const StartRangeValueStyled = styled.div`
  position: relative;
  display: inline-block;
`;

const EndRangeValueStyled = styled.div`
  position: absolute;
  display: inline-block;
`;

const BubbleWrapper = styled.div<BubbleWrapperStyleProps>`
  position: relative;
  display: inline-block;
  width: 100%;
  z-index: ${props =>
    props.zIndexOverride + sliderZindex.bubbleWrapper};
  margin-top: ${getSliderDimension('labelOffsetFromTrack')};
`;

// ==================== Slider

export class Slider extends React.Component<any, any> {
  static defaultProps = {
    minValue: 0,
    maxValue: 100,
    initialMinValue: 0,
    initialMaxValue: 100,
    gap: 1,
    format: themeOptions[0],
    zIndexOverride: 1,
    step: 1,
    editable: false,
    disabled: false,
  };

  private startRange: HTMLInputElement;
  private endRange: HTMLInputElement;
  private totalRange: number;
  private inRangeColor: string; // color for part of slider track in between selected range
  private outRangeColor: string; // color for part of slider track outside of selected range
  private handleDiameter: number; // diameter of slider handle
  private initialMin: number;
  private initialMax: number;
  private valueOffset: number;
  private UID: string;

  constructor(props: SliderProps) {
    super(props);
    this.state = {
      startValueLeft: '0%',
      endValueLeft: '100%',
      sliderBgStyle: {},
      focusedInput: focusIdentifier.start,
    };
    this.totalRange = this.props.maxValue - this.props.minValue;
    this.inRangeColor = getSliderThemeColors(
      this.props.disabled ? 'disabled' : this.props.format,
    ).inRangeBgColor;
    this.outRangeColor = getSliderThemeColors(
      this.props.disabled ? 'disabled' : this.props.format,
    ).outRangeBgColor;
    this.handleDiameter =
      SliderStyleSettings.dimensions.handleDiameter;
    this.valueOffset = this.props.minValue;
    this.UID =
      Math.random()
        .toString(36)
        .substring(2, 6) +
      Math.random()
        .toString(36)
        .substring(2, 6);
  }

  state: SliderState;

  props: SliderProps;

  public componentDidMount() {
    this.initialMin = this.props.initialMinValue;
    this.initialMax = this.props.initialMaxValue;
    this.initializeSlider(this.initialMin, this.initialMax);
  }

  public render() {
    const { ...filteredProps } = this.props;
    return (
      <SliderStyled
        {...filteredProps}
        format={this.props.disabled ? 'disabled' : this.props.format}
        zIndexOverride={this.props.zIndexOverride}
      >
        <input
          ref={input => {
            this.startRange = input;
          }}
          type="range"
          name="startrange"
          min={this.props.minValue}
          max={this.props.maxValue}
          step={this.props.step}
          onInput={() => this.onSliderValueChange(this.startRange)}
          style={this.state.sliderBgStyle}
          disabled={this.props.disabled}
          onFocus={() => {
            this.identifyFocusedInput(focusIdentifier.start);
          }}
        />
        <input
          ref={input => {
            this.endRange = input;
          }}
          type="range"
          name="endrange"
          min={this.props.minValue}
          max={this.props.maxValue}
          step={this.props.step}
          onInput={() => this.onSliderValueChange(this.endRange)}
          onFocus={() => {
            this.identifyFocusedInput(focusIdentifier.end);
          }}
          disabled={this.props.disabled}
        />
        {this.startRange && !this.props.disabled ? (
          <BubbleWrapper zIndexOverride={this.props.zIndexOverride}>
            <StartRangeValueStyled
              style={{
                left: this.state.startValueLeft,
                zIndex:
                  this.state.focusedInput === focusIdentifier.start
                    ? 1
                    : 'initial',
              }}
            >
              <SliderLabel
                value={this.showValue(this.startRange.value)}
                editable={this.props.editableLabel}
                id={`start-${this.UID}`}
                onUserInput={this.readStartRangeInput}
                format={this.props.format}
              />
            </StartRangeValueStyled>
            <EndRangeValueStyled
              style={{
                left: this.state.endValueLeft,
                zIndex:
                  this.state.focusedInput === focusIdentifier.end
                    ? 1
                    : 'initial',
              }}
            >
              <SliderLabel
                value={this.showValue(this.endRange.value)}
                editable={this.props.editableLabel}
                id={`end-${this.UID}`}
                onUserInput={this.readEndRangeInput}
                format={this.props.format}
              />
            </EndRangeValueStyled>
          </BubbleWrapper>
        ) : null}
      </SliderStyled>
    );
  }
  // resets values of slider
  public resetSlider = () => {
    this.initializeSlider(this.props.minValue, this.props.maxValue);
  };

  private onSliderValueChange = selectedInput => {
    const gap = this.props.gap;
    // making sure the start value should always be smaller than end value with minimum difference of gap value provided
    if (
      selectedInput === this.startRange &&
      parseInt(this.startRange.value, 10) >=
        parseInt(this.endRange.value, 10) - gap
    ) {
      this.startRange.value = String(
        parseInt(this.endRange.value, 10) - gap,
      );
    } else if (
      selectedInput === this.endRange &&
      parseInt(this.endRange.value, 10) <=
        parseInt(this.startRange.value, 10) + gap
    ) {
      this.endRange.value = String(
        parseInt(this.startRange.value, 10) + gap,
      );
    }
    // position the corresponding value bubble below slider handle
    this.positionRangeValues(selectedInput, selectedInput.value);

    // update the track background color
    this.setSliderBackground(
      this.startRange.value,
      this.endRange.value,
    );

    if (this.props.rangeValues) {
      this.props.rangeValues(
        parseInt(this.startRange.value, 10),
        parseInt(this.endRange.value, 10),
      );
    }
  };

  // set the background style for slider track using the values
  private setSliderBackground = (startValue, endValue) => {
    const start = parseInt(startValue, 10) - this.valueOffset;
    const end = parseInt(endValue, 10) - this.valueOffset;
    this.setState({
      sliderBgStyle: {
        backgroundImage: `linear-gradient(to right, ${
          this.outRangeColor
        } 0%,${this.outRangeColor} ${(start * 100) /
          this.totalRange}%, ${this.inRangeColor} ${(start * 100) /
          this.totalRange}%,${this.inRangeColor} ${(end * 100) /
          this.totalRange}%,${this.outRangeColor} ${(end * 100) /
          this.totalRange}%,${this.outRangeColor} 100%)`,
      },
    });
  };

  // update the position of value bubbles
  private positionRangeValues = (selectedInput, value) => {
    const postOffsetValue = value - this.valueOffset;
    const gradientOffset =
      SliderStyleSettings.dimensions.gradientOffset;
    const gradientOffsetValue =
      selectedInput === this.startRange
        ? -gradientOffset
        : gradientOffset;
    const bubbleOffset =
      (postOffsetValue / this.totalRange) * this.handleDiameter;

    const leftPos = `calc(${(postOffsetValue / this.totalRange) *
      100}% - ${bubbleOffset -
      gradientOffsetValue +
      this.handleDiameter / 2}px)`;
    if (selectedInput === this.startRange) {
      this.setState({
        startValueLeft: leftPos,
      });
    }
    if (selectedInput === this.endRange) {
      this.setState({
        endValueLeft: leftPos,
      });
    }
  };

  // if formatter function is passed as prop use it else render the value as it is
  private showValue = value => {
    return this.props.valueFormatter
      ? this.props.valueFormatter(parseInt(value, 10))
      : value;
  };

  // initializes the slider with the props value or defaultProps
  private initializeSlider = (min, max) => {
    this.startRange.value = String(min);
    this.endRange.value = String(max);

    this.positionRangeValues(this.startRange, min);
    this.positionRangeValues(this.endRange, max);
    this.setSliderBackground(min, max);
  };

  private readStartRangeInput = userInput => {
    const endVal = parseInt(this.endRange.value, 10);
    this.startRange.value =
      userInput >= endVal ? endVal - this.props.step : userInput;
    const startVal = parseInt(this.startRange.value, 10);
    this.positionRangeValues(this.startRange, startVal);
    this.setSliderBackground(startVal, endVal);
    if (this.props.rangeValues) {
      this.props.rangeValues(startVal, endVal);
    }
  };

  private readEndRangeInput = userInput => {
    const startVal = parseInt(this.startRange.value, 10);
    this.endRange.value =
      userInput <= startVal ? startVal + this.props.step : userInput;
    const endVal = parseInt(this.endRange.value, 10);
    this.positionRangeValues(this.endRange, endVal);
    this.setSliderBackground(startVal, endVal);
    if (this.props.rangeValues) {
      this.props.rangeValues(startVal, endVal);
    }
  };

  private identifyFocusedInput = focused => {
    this.setState({
      focusedInput: focused,
    });
  };
}

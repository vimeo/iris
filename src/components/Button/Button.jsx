import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.css';

const BUTTON_SIZES = [
  'large',
  'medium',
  'small'
];

const BUTTON_TYPES = [
  'primary',
  'secondary',
  'positive',
  'negative',
];

const PROP_TYPES =  {
  disabled: React.PropTypes.bool,
  filled: React.PropTypes.bool,
  size: React.PropTypes.oneOf(BUTTON_SIZES),
  type: React.PropTypes.oneOf(BUTTON_TYPES),
};

const DEFAULT_PROPS = {
  disabled: false,
  filled: true,
  size: 'large',
  type: 'primary'
};

class Button extends React.Component {

  render () {
    // classname generation
    let componentClass = classNames(
      styles.Button,
      styles[this.props.type],
      (styles[this.props.size] ? styles[this.props.size]: null),
      this.props.className
    );

    let props = this.props;

    return (
      <button
        className={componentClass}
        disabled={props.isDisabled ? "disabled" : false}
      >
        {this.props.children}
      </button>
    );
  }

};

Button.displayName = "Button";

Button.propTypes = PROP_TYPES;

Button.defaultProps = DEFAULT_PROPS;

export default Button;

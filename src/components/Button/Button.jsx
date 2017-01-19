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
  'primaryOutline',
  'secondary',
  'secondaryOutline',
  'positive',
  'positiveOutline',
  'negative',
  'negativeOutline'
];

const propTypes =  {
  size: React.PropTypes.oneOf(BUTTON_SIZES),
  type: React.PropTypes.oneOf(BUTTON_TYPES),
};

const defaultProps = {
  size: 'large',
  type: 'primary'
};

class Button extends React.Component {

  render () {
    let attributes = {};
    if (this.props.disabled) {
      attributes['disabled'] = 'disabled';
    }

    // classname generation
    let componentClass = classNames(
      styles.Button,
      styles[this.props.type],
      styles[this.props.size],
      this.props.className
    );

    return (
      <button
        className={componentClass}
        {...attributes}
      >
        {this.props.children}
      </button>
    );
  }

};

Button.displayName = "Button";

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;

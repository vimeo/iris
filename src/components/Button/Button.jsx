import * as React from 'react';
import classNames from 'classnames';
import styles from './Button.css';

const displayName = 'Button';

const buttonSizes = [
  'xSmall',
  'small',
  'medium',
  'large'
];

const buttonTypes = [
  'primary',
  'primaryOutline',
  'secondary',
  'secondaryOutline',
  'positive',
  'positiveOutline',
  'negative',
  'negativeOutline',
  'transparent'
];

const buttonBreakpoints =  [
  'small',
  'medium',
  'large',
  'xLarge',
  'fluid'
];

const propTypes =  {
  autoWidth: React.PropTypes.oneOf(buttonBreakpoints),
  size: React.PropTypes.oneOf(buttonSizes),
  type: React.PropTypes.oneOf(buttonTypes),
};

const defaultProps = {
  autoWidth: 'medium',
  size: 'medium',
  type: 'primary'
};

class Button extends React.Component {

  render () {
    // className builder
    const componentClass = classNames(
      styles.Button,
      styles[this.props.type],
      styles[this.props.size],
      (this.props.autoWidth !== 'fluid' ? styles['autoWidth-'+this.props.autoWidth]: null),
      this.props.className
    );

    // filter out named props from props that get printed into the component
    const {
      autoWidth,
      size,
      type,
      className,
      ...filteredProps
    } = this.props;

    return (
      <button
        {...filteredProps}
        className={componentClass}
      >
        {this.props.children}
      </button>
    );
  }

};

Button.displayName = displayName;

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;

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

const iconLocations =  [
  'beforeLabel',
  'afterLabel'
];

const propTypes =  {
  autoWidth: React.PropTypes.oneOf(buttonBreakpoints),
  buttonElement: React.PropTypes.bool,
  icon: React.PropTypes.element,
  iconLocation: React.PropTypes.oneOf(iconLocations),
  size: React.PropTypes.oneOf(buttonSizes),
  type: React.PropTypes.oneOf(buttonTypes),
};

const defaultProps = {
  autoWidth: 'medium',
  buttonElement: true,
  icon: null,
  iconLocation: 'beforeLabel',
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
      (this.props.autoWidth !== 'fluid' ? styles['autoWidth_'+this.props.autoWidth]: null),
      this.props.className
    );

    // iconClass
    const iconClass = classNames(
      styles.Icon,
      styles['Icon_' + this.props.iconLocation],
      styles['Icon_' + this.props.size]
    );

    // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)
    const {
      autoWidth,
      buttonElement,
      icon,
      iconLocation,
      size,
      type,
      className,
      ...filteredProps
    } = this.props;

    let hasIconBefore = this.props.icon && this.props.iconLocation === iconLocations[0];
    let hasIconAfter = this.props.icon && this.props.iconLocation === iconLocations[1];
    let buttonContent;

    if (hasIconBefore) {
      buttonContent =  <span><span className = {iconClass}>{this.props.icon}</span>{this.props.children}</span>;
    } else if (hasIconAfter) {
      buttonContent =  <span>{this.props.children}<span className = {iconClass}>{this.props.icon}</span></span>;
    } else {
      buttonContent =  this.props.children;
    }


    if (this.props.buttonElement){
        return (
          <button
            {...filteredProps}
            className={componentClass}
          >

            {buttonContent}

          </button>
        )
      } else {
        return (
          <span
            {...filteredProps}
            className={componentClass}
          >

            {hasIconBefore ? <span className = {iconClass}>{this.props.icon}</span> : null}
            {this.props.children}
            {hasIconAfter ? <span className = {iconClass}>{this.props.icon}</span> : null}

          </span>
        )
      }
  }

};

Button.displayName = displayName;

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;

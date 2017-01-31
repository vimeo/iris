import * as React from 'react';
import classNames from 'classnames';
import styles from './Col.css';

const displayName = 'Col';



const propTypes =  {
    span: React.PropTypes.number,
    lgSpan: React.PropTypes.number,
    mdSpan: React.PropTypes.number,
    smSpan: React.PropTypes.number,
    order: React.PropTypes.number,
    rail: React.PropTypes.bool,
    className: React.PropTypes.string,
    offset: React.PropTypes.number
};

const defaultProps = {
    span: 24
};

class Col extends React.Component {

  render () {
    // className builder
    const componentClass = classNames(
      styles.Col,
      this.props.className
    );

    // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)
    const {
      className,
      ...filteredProps
    } = this.props;

    return (
      <div
        {...filteredProps}
        className={componentClass}
      >
        {this.props.children}
      </div>
    );
  }

};

Col.displayName = displayName;

Col.propTypes = propTypes;

Col.defaultProps = defaultProps;

export default Col;

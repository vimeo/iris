import * as React from 'react';
import classNames from 'classnames';
import styles from './Col.css';

const displayName = 'Col';

const spanTypes = React.PropTypes.oneOfType([
    React.PropTypes.number,
    'half', 'quarter', 'third'
]);

const propTypes =  {
    span: spanTypes,
    lgSpan: spanTypes,
    mdSpan: spanTypes,
    smSpan: spanTypes,
    nested: React.PropTypes.bool,
    rail: React.PropTypes.bool,
    className: React.PropTypes.string,
    offset: React.PropTypes.number
};

const defaultProps = {
    span: 24
};

class Col extends React.Component {

  render () {

    //set up offset class naming
    let offsetType;

    if(this.props.offset && this.props.offset >= 1) {
        offsetType = 'plus-';
    } else if(this.props.offset && this.props.offset <= 1) {
        offsetType = 'negative-';
    }

    // className builder
    const colClass = classNames(
        styles.Col,
        styles['span-' + this.props.span],
        (this.props.lgSpan ? styles['offset-' + this.props.lgSpan]: null),
        (this.props.mdSpan ? styles['offset-' + this.props.mdSpan]: null),
        (this.props.smSpan ? styles['offset-' + this.props.smSpan]: null),
        (this.props.offset ? styles['offset-' + offsetType + this.props.offset]: null),
        (this.props.nested ? styles['nested']: null),
        styles[this.props.align],
        this.props.className
    );

    // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)
    const {
        children,
        rail,
        filteredProps
    } = this.props;

    let colContent = this.props.children;

    if(!rail) {
        return (
          <div
            {...filteredProps}
            className={colClass}
          >
            {colContent}
          </div>
        );
    } else {
        return (
          <aside
            {...filteredProps}
            className={colClass}
          >
            {colContent}
        </aside>
        );
    }
  }

};

Col.displayName = displayName;

Col.propTypes = propTypes;

Col.defaultProps = defaultProps;

export default Col;

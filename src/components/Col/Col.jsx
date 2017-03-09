import * as React from 'react';
import classNames from 'classnames';
import styles from './Col.css';

const displayName = 'Col';

//List out proptypes for Iris API generator
const spanTypes = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
    '1-fixed', '2-fixed', '3-fixed', '4-fixed', '5-fixed', '6-fixed', '7-fixed', '8-fixed', '9-fixed', '10-fixed', '11-fixed',
    '12-fixed', '13-fixed', '14-fixed', '15-fixed', '16-fixed', '17-fixed', '18-fixed', '19-fixed', '20-fixed', '21-fixed', '22-fixed', '23-fixed', '24-fixed',
    'quarter', 'half', 'third',
    'quarter-fixed', 'half-fixed', 'third-fixed'
];

const propTypes = {
    xsmSpan: React.PropTypes.oneOf(spanTypes),
    smSpan: React.PropTypes.oneOf(spanTypes),
    mdSpan: React.PropTypes.oneOf(spanTypes),
    lgSpan: React.PropTypes.oneOf(spanTypes),
    xlgSpan: React.PropTypes.oneOf(spanTypes),
    offset: React.PropTypes.oneOf(spanTypes),
    smOffset: React.PropTypes.string,
    mdOffset: React.PropTypes.string,
    lgOffset: React.PropTypes.string,
    xlgOffset: React.PropTypes.string,
    nested: React.PropTypes.bool,
    rail: React.PropTypes.bool,
    className: React.PropTypes.string,
    align: React.PropTypes.string,
};

const defaultProps = {
    xsmSpan: '24',
};

let offsetType;

let offsetCheck = function(offsetValue) {
    if (offsetValue && offsetValue >= 1) {
        offsetType = 'plus-';
    }
    else if (offsetValue && offsetValue <= 1) {
        offsetType = 'negative-';
    }

    return offsetType;
};

class Col extends React.Component {

    render() {
        // set up offset class naming
       

        const offsetNumber = parseInt(this.props.offset, 10);

      
    // className builder
        const colClass = classNames(
        styles.Col,
        (this.props.xsmSpan ? styles['span-' + this.props.xsmSpan] : null),
        (this.props.xlgSpan ? styles['xlg-span-' + this.props.xlgSpan] : null),
        (this.props.lgSpan ? styles['lg-span-' + this.props.lgSpan] : null),
        (this.props.mdSpan ? styles['md-span-' + this.props.mdSpan] : null),
        (this.props.smSpan ? styles['sm-span-' + this.props.smSpan] : null),
        (this.props.offset ? styles['offset-' + offsetCheck(this.props.offset) + this.props.offset] : null),
        (this.props.xlgOffset ? styles['xlg-offset-' + offsetCheck(this.props.xlgOffset) + this.props.xlgOffset] : null),
        (this.props.lgOffset ? styles['lg-offset-' + offsetCheck(this.props.lgOffset) + this.props.lgOffset] : null),
        (this.props.mdOffset ? styles['md-offset-' + offsetCheck(this.props.mdOffset) + this.props.mdOffset] : null),
        (this.props.smOffset ? styles['sm-offset-' + offsetCheck(this.props.smOffset) + this.props.smOffset] : null),
        (this.props.nested ? styles.nested : null),
        styles[this.props.align],
        this.props.className
    );

    // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)
        const {
            rail,
            ...filteredProps
        } = this.props;

        const colContent = this.props.children;

        if (!rail) {
            return (
          <div
            {...filteredProps}
            className={colClass}
          >
            {colContent}
          </div>
            );
        }

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


Col.displayName = displayName;

Col.propTypes = propTypes;

Col.defaultProps = defaultProps;

export default Col;

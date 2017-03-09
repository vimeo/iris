import * as React from 'react';
import classNames from 'classnames';
import styles from './GridCol.css';

const displayName = 'GridCol';

//List out proptypes for Iris API generator
const spanTypes = [
    '1', '1-fixed',
    '2', '2-fixed',
    '3', '3-fixed',
    '4', '4-fixed',
    '5', '5-fixed',
    '6', '6-fixed',
    '7', '7-fixed',
    '8', '8-fixed',
    '9', '9-fixed',
    '10', '10-fixed',
    '11', '11-fixed',
    '12', '12-fixed',
    '13', '13-fixed',
    '14', '14-fixed',
    '15', '15-fixed',
    '16', '16-fixed',
    '17', '17-fixed',
    '18', '18-fixed',
    '19', '19-fixed',
    '20', '20-fixed',
    '21', '21-fixed',
    '22', '22-fixed',
    '23', '23-fixed',
    '24', '24-fixed',
    'quarter', 'quarter-fixed',
    'half', 'half-fixed',
    'third', 'third-fixed'
];


const offsetTypes = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24'
];

const propTypes = {
    xsSpan: React.PropTypes.oneOf(spanTypes),
    smSpan: React.PropTypes.oneOf(spanTypes),
    mdSpan: React.PropTypes.oneOf(spanTypes),
    lgSpan: React.PropTypes.oneOf(spanTypes),
    xlSpan: React.PropTypes.oneOf(spanTypes),
    offset: React.PropTypes.oneOf(offsetTypes),
    smOffset: React.PropTypes.string,
    mdOffset: React.PropTypes.string,
    lgOffset: React.PropTypes.string,
    xlOffset: React.PropTypes.string,
    isAside: React.PropTypes.bool,
    className: React.PropTypes.string,
    align: React.PropTypes.string,
};

const defaultProps = {
    xsSpan: '24',
};

let offsetType;

const offsetCheck = function(offsetValue) {
    const offsetValueInt = parseInt(offsetValue, 10);
    if (offsetValueInt && offsetValueInt >= 1) {
        offsetType = 'plus-';
    }
    else if (offsetValueInt && offsetValueInt <= 1) {
        offsetType = 'negative-';
    }

    return offsetType;
};

class GridCol extends React.Component {

    render() {
    // className builder
        const GridColClass = classNames(
        styles.GridCol,
        (this.props.xsSpan ? styles['span-' + this.props.xsSpan] : null),
        (this.props.xlSpan ? styles['xl-span-' + this.props.xlSpan] : null),
        (this.props.lgSpan ? styles['lg-span-' + this.props.lgSpan] : null),
        (this.props.mdSpan ? styles['md-span-' + this.props.mdSpan] : null),
        (this.props.smSpan ? styles['sm-span-' + this.props.smSpan] : null),
        (this.props.offset ? styles['offset-' + offsetCheck(this.props.offset) + this.props.offset] : null),
        (this.props.xlOffset ? styles['xl-offset-' + offsetCheck(this.props.xlOffset) + this.props.xlOffset] : null),
        (this.props.lgOffset ? styles['lg-offset-' + offsetCheck(this.props.lgOffset) + this.props.lgOffset] : null),
        (this.props.mdOffset ? styles['md-offset-' + offsetCheck(this.props.mdOffset) + this.props.mdOffset] : null),
        (this.props.smOffset ? styles['sm-offset-' + offsetCheck(this.props.smOffset) + this.props.smOffset] : null),
        (this.props.nested ? styles.nested : null),
        styles[this.props.align],
        this.props.className
    );

    // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)
        const {
            isAside,
            ...filteredProps
        } = this.props;

        const GridColContent = this.props.children;

        if (!isAside) {
            return (
          <div
            {...filteredProps}
            className={GridColClass}
          >
            {GridColContent}
          </div>
            );
        }

        return (
          <aside
            {...filteredProps}
            className={GridColClass}
          >
            {GridColContent}
        </aside>
        );

    }

}


GridCol.displayName = displayName;

GridCol.propTypes = propTypes;

GridCol.defaultProps = defaultProps;

export default GridCol;

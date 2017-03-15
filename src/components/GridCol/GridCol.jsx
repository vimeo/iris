import * as React from 'react';
import classNames from 'classnames';
import styles from './GridCol.css';

const displayName = 'GridCol';

//List out proptypes for Iris API generator
const spanTypes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
];

const propTypes = {
    xsSpan: React.PropTypes.oneOf(spanTypes),
    smSpan: React.PropTypes.oneOf(spanTypes),
    mdSpan: React.PropTypes.oneOf(spanTypes),
    lgSpan: React.PropTypes.oneOf(spanTypes),
    xlSpan: React.PropTypes.oneOf(spanTypes),
    offset: React.PropTypes.oneOf(spanTypes),
    smOffset: React.PropTypes.string,
    mdOffset: React.PropTypes.string,
    lgOffset: React.PropTypes.string,
    xlOffset: React.PropTypes.string,
    xsFixed: React.PropTypes.bool,
    smFixed: React.PropTypes.bool,
    mdFixed: React.PropTypes.bool,
    lgFixed: React.PropTypes.bool,
    xlFixed: React.PropTypes.bool,
    className: React.PropTypes.string,
    alignment: React.PropTypes.string,
    columnElement: React.PropTypes.oneOf(['div', 'main', 'aside', 'section'])
};

const defaultProps = {
    xsSpan: 24,
    columnElement: 'div'
};

let offsetType;

const offsetCheck = function (offsetValue) {

    if (offsetValue && offsetValue >= 1) {
        offsetType = 'plus-';
    }
    else if (offsetValue && offsetValue <= 1) {
        offsetType = 'negative-';
    }

    return offsetType;
};

class GridCol extends React.Component {

    render() {

        const {
            columnElement,
            xsSpan,
            xlSpan,
            lgSpan,
            mdSpan,
            smSpan,
            offset,
            xlOffset,
            lgOffset,
            mdOffset,
            smOffset,
            nested,
            alignment,
            className,
            xsFixed,
            xlFixed,
            mdFixed,
            lgFixed,
            smFixed,
            ...filteredProps
        } = this.props;

        // className builder
        const GridColClass = classNames(
            styles.GridCol,
            (xsSpan ? styles['xs-span-' + (xsFixed ? '-fixed' : '') + xsSpan] : null),
            (xlSpan ? styles['xl-span-' + (xlFixed ? '-fixed' : '') + xlSpan] : null),
            (lgSpan ? styles['lg-span-' + (lgFixed ? '-fixed' : '') + lgSpan] : null),
            (mdSpan ? styles['md-span-' + (mdFixed ? '-fixed' : '') + mdSpan] : null),
            (smSpan ? styles['sm-span-' + (smFixed ? '-fixed' : '') + smSpan] : null),
            (offset ? styles['offset-' + offsetCheck(offset) + offset] : null),
            (xlOffset ? styles['xl-offset-' + offsetCheck(xlOffset) + xlOffset] : null),
            (lgOffset ? styles['lg-offset-' + offsetCheck(lgOffset) + lgOffset] : null),
            (mdOffset ? styles['md-offset-' + offsetCheck(mdOffset) + mdOffset] : null),
            (smOffset ? styles['sm-offset-' + offsetCheck(smOffset) + smOffset] : null),
            (nested ? styles.nested : null),
            styles[alignment],
            className
        );

        // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)

        const GridColContent = this.props.children;
        const ColumnElement = columnElement;
        return (
            <ColumnElement
                {...filteredProps}
                className={GridColClass}
            >
                {GridColContent}
            </ColumnElement>
        );
    }

}


GridCol.displayName = displayName;

GridCol.propTypes = propTypes;

GridCol.defaultProps = defaultProps;

export default GridCol;

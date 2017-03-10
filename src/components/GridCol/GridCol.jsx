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
    CustomElement: React.PropTypes.oneOf(['div', 'main', 'aside', 'section'])
};

const defaultProps = {
    xsSpan: 24,
    CustomElement: 'div'
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
        // className builder
        const GridColClass = classNames(
            styles.GridCol,
            (this.props.xsSpan ? styles['span-' + (this.props.xsFixed ? '-fixed' : '') + this.props.xsSpan] : null),
            (this.props.xlSpan ? styles['xl-span-' + (this.props.xlFixed ? '-fixed' : '') + this.props.xlSpan] : null),
            (this.props.lgSpan ? styles['lg-span-' + (this.props.lgFixed ? '-fixed' : '') + this.props.lgSpan] : null),
            (this.props.mdSpan ? styles['md-span-' + (this.props.mdFixed ? '-fixed' : '') + this.props.mdSpan] : null),
            (this.props.smSpan ? styles['sm-span-' + (this.props.smFixed ? '-fixed' : '') + this.props.smSpan] : null),
            (this.props.offset ? styles['offset-' + offsetCheck(this.props.offset) + this.props.offset] : null),
            (this.props.xlOffset ? styles['xl-offset-' + offsetCheck(this.props.xlOffset) + this.props.xlOffset] : null),
            (this.props.lgOffset ? styles['lg-offset-' + offsetCheck(this.props.lgOffset) + this.props.lgOffset] : null),
            (this.props.mdOffset ? styles['md-offset-' + offsetCheck(this.props.mdOffset) + this.props.mdOffset] : null),
            (this.props.smOffset ? styles['sm-offset-' + offsetCheck(this.props.smOffset) + this.props.smOffset] : null),
            (this.props.nested ? styles.nested : null),
            styles[this.props.alignment],
            this.props.className
        );

        // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)
        const {
            CustomElement,
            ...filteredProps
        } = this.props;

        const GridColContent = this.props.children;
        return (
            <CustomElement
                {...filteredProps}
                className={GridColClass}
            >
                {GridColContent}
            </CustomElement>
        );
    }

}


GridCol.displayName = displayName;

GridCol.propTypes = propTypes;

GridCol.defaultProps = defaultProps;

export default GridCol;

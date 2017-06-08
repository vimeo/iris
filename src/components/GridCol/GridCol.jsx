// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './GridCol.scss';

const displayName = 'GridCol';

type SpanTypes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;

type OffsetTypes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | -1 | -2 | -3 | -4 | -5 | -6 | -7 | -8 | -9 | -10 | -11 | -12 | -13 | -14 | -15 | -16 | -17 | -18 | -19 | -20 | -21 | -22 | -23 | -24;

type Props = {
    xsSpan?: SpanTypes,
    smSpan?: SpanTypes,
    mdSpan?: SpanTypes,
    lgSpan?: SpanTypes,
    xlSpan?: SpanTypes,
    offset?: OffsetTypes,
    smOffset?: OffsetTypes,
    mdOffset?: OffsetTypes,
    lgOffset?: OffsetTypes,
    xlOffset?: OffsetTypes,
    xsFixed?: boolean,
    smFixed?: boolean,
    mdFixed?: boolean,
    lgFixed?: boolean,
    xlFixed?: boolean,
    children?: React$Element<*>,
    className?: string,
    alignment?: string,
    columnElement?: 'div' | 'main' | 'aside' | 'section',
    formColumn?: boolean,
};

const GridCol = ({
                    columnElement = 'div',
                    xsSpan = 24,
                    xlSpan,
                    lgSpan,
                    mdSpan,
                    smSpan,
                    offset,
                    xlOffset,
                    lgOffset,
                    mdOffset,
                    smOffset,
                    alignment,
                    className,
                    xsFixed,
                    xlFixed,
                    mdFixed,
                    lgFixed,
                    smFixed,
                    formColumn,
                    children,
                    ...filteredProps
                }: Props): React$Element<*> => {

    let offsetType;

    const offsetCheck = (offsetValue) => {
        if (offsetValue && offsetValue >= 1) {
            offsetType = 'plus-';
        }
        else if (offsetValue && offsetValue <= 1) {
            offsetType = 'negative-';
        }

        return offsetType;
    };

    // className builder
    const GridColClass = classNames(
        styles.GridCol,
        (styles['xs-span-' + (xsFixed ? '-fixed' : '') + xsSpan]),
        (xlSpan ? styles['xl-span-' + xlSpan + (xlFixed ? '-fixed' : '')] : null),
        (lgSpan ? styles['lg-span-' + lgSpan + (lgFixed ? '-fixed' : '')] : null),
        (mdSpan ? styles['md-span-' + mdSpan + (mdFixed ? '-fixed' : '')] : null),
        (smSpan ? styles['sm-span-' + smSpan + (smFixed ? '-fixed' : '')] : null),
        (offset ? styles['offset-' + offsetCheck(offset) + offset] : null),
        (xlOffset ? styles['xl-offset-' + offsetCheck(xlOffset) + xlOffset] : null),
        (lgOffset ? styles['lg-offset-' + offsetCheck(lgOffset) + lgOffset] : null),
        (mdOffset ? styles['md-offset-' + offsetCheck(mdOffset) + mdOffset] : null),
        (smOffset ? styles['sm-offset-' + offsetCheck(smOffset) + smOffset] : null),
        (formColumn ? styles.formColumn : null),
        styles[alignment],
        className
    );

    const ColumnElement = columnElement;
    return (
        <ColumnElement
            {...filteredProps}
            className={GridColClass}
        >
            {children}
        </ColumnElement>
    );
};


GridCol.displayName = displayName;

export default GridCol;

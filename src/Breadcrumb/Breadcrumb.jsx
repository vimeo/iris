// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Breadcrumb.scss';
import ChevronRight from '../icons/chevron-right.svg';
// $FlowFixMe
import { ParagraphMd } from '../Type';


const displayName = 'Breadcrumb';

type Props = {
    className?: string,
    crumbs?: Array<React$Element<*>>,
    currentPageLabel: string,
};

const Breadcrumb = ({
                    className,
                    crumbs,
                    currentPageLabel,
                    ...filteredProps
                    }: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.Breadcrumb,
        className
    );

    const crumbWidth = crumbs ? `${100 / (crumbs.length + 1)}%` : '100%';

    const CrumbList = crumbs && crumbs.map(function(key, i) {

        const CrumbClass = classNames(
            styles.Crumb,
            (crumbs && i === crumbs.length - 1 ? styles.showOnSmall : null),
        );

        return (
                <div
                    className={CrumbClass}
                    key={`crumb-${i}`}
                    style={{ 'maxWidth': crumbWidth }}
                >
                        <ParagraphMd
                        className={styles.CrumbLabel}
                        element="span"
                        >
                            {crumbs && crumbs[i]}
                        </ParagraphMd>
                        <ChevronRight className={styles.CrumbArrowIcon} />
                </div>
        );
    });

    return (
        <div
            {...filteredProps}
            className={componentClass}
        >
            {crumbs && CrumbList}

            <ParagraphMd
                element="span"
                className={styles.CurrentPageCrumb}
                style={{ 'maxWidth': crumbWidth }}
            >
                {currentPageLabel}
            </ParagraphMd>
        </div>
    );
};

Breadcrumb.displayName = displayName;

export default Breadcrumb;

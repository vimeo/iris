// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Breadcrumb.scss';
import LinkText from '../LinkText';
import ArrowLeft from '../icons/arrow-left.svg';
import ChevronRight from '../icons/chevron-right.svg';
import { ParagraphMd } from '../Type';


const displayName = 'Breadcrumb';

type Props = {
    className?: string,
    crumbs?: Array<{
            label: string,
            href: string,
            onClick?: (e: Event) => {}
            }>,
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

    const CrumbClass = classNames(
        styles.Crumb,
    );

    const CurrentCrumbClass = classNames(
        styles.CurrentPageCrumb,
        (crumbs ? styles.hasCrumbs : null),
    );

    const crumbWidth = crumbs ? `${100 / (crumbs.length + 1)}%` : '100%';

    const CrumbList = crumbs && crumbs.map(function(key, i) {

        return (
                <div
                    className={CrumbClass}
                    key={`crumb-${key.label}-${i}`}
                    style={{ 'maxWidth': crumbWidth }}
                >
                        <ParagraphMd
                        className={styles.CrumbLabel}
                        element="span"
                        >
                            <LinkText
                                className={styles.Link}
                                href={key.href}
                                onClick={key.onClick}
                                format="silent"
                                title={key.label}
                            >
                                {key.label}
                            </LinkText>
                        </ParagraphMd>
                        <ChevronRight className={styles.CrumbArrowIcon} />
                </div>
        );
    });

    const smallScreenBackCrumb = crumbs && crumbs[crumbs.length - 1];

    const SmallScreenBackArrowComponent = (
        <a
            className={styles.CurrentCrumbArrowLink}
            href={smallScreenBackCrumb && smallScreenBackCrumb.href}
            title={smallScreenBackCrumb && smallScreenBackCrumb.label}
            onClick={smallScreenBackCrumb && smallScreenBackCrumb.onClick}
        >
            <ArrowLeft className={styles.ArrowIcon} />
        </a>
    );

    return (
        <div
            {...filteredProps}
            className={componentClass}
        >
            {crumbs && CrumbList}

            <ParagraphMd
                element="span"
                className={CurrentCrumbClass}
                style={{ 'maxWidth': crumbWidth }}
            >
                {crumbs && SmallScreenBackArrowComponent}
                {currentPageLabel}
            </ParagraphMd>
        </div>
    );
};

Breadcrumb.displayName = displayName;

export default Breadcrumb;

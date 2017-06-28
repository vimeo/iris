// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Type.scss';

function typeGenerator(tagname, defaultElement) {
    type Props = {
        children: React$Element<*>,
        element?: 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
        className?: string,
    };

    const thisComponent = ({
                        children,
                        className,
                        element = defaultElement,
                        ...filteredProps
                    }: Props): React$Element<*> => {

        const componentClass = classNames(
            styles[tagname],
            className
        );

        const Element = element;

        return (
            <Element
                {...filteredProps}
                className={componentClass}
            >
                {children}
            </Element>
        );

    };

    return thisComponent;
}

const Header1 = typeGenerator('Header1', 'h1');
const Header2 = typeGenerator('Header2', 'h2');
const Header3 = typeGenerator('Header3', 'h3');
const Header4 = typeGenerator('Header4', 'h4');
const Header5 = typeGenerator('Header5', 'h5');
const Header6 = typeGenerator('Header6', 'h6');
const ParagraphLg = typeGenerator('ParagraphLg', 'p');
const ParagraphMd = typeGenerator('ParagraphMd', 'p');
const ParagraphSm = typeGenerator('ParagraphSm', 'p');
const ParagraphAltLg = typeGenerator('ParagraphAltLg', 'p');
const ParagraphAltMd = typeGenerator('ParagraphAltMd', 'p');
const ParagraphAltSm = typeGenerator('ParagraphAltSm', 'p');

export { ParagraphLg, ParagraphSm, ParagraphMd, ParagraphAltLg, ParagraphAltMd, ParagraphAltSm, Header1, Header2, Header3, Header4, Header5, Header6 };

export default ParagraphAltMd;

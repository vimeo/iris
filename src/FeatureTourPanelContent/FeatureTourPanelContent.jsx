// @flow
import React from 'react';
import styles from './FeatureTourPanelContent.scss';
import { Header5, ParagraphMd } from '../Type/index';
import ButtonIconOnly from '../ButtonIconOnly';
import DismissIcon from '../icons/dismiss-x.svg';

const displayName = 'FeatureTourPanelContent';

type Props = {
    actionArea?: React$Element<*>,
    children: React$Element<*>,
    dismissButtonA11yLabel: string,
    headerText?: string,
    onDismissClick: ()=> void,
    dismissButtonProps?: Object,
};

const FeatureTourPanelContent = ({
    actionArea,
    children,
    dismissButtonA11yLabel,
    headerText,
    onDismissClick,
    dismissButtonProps,
    ...filteredProps
}: Props): React$Element<*> => {


    return (
            <div
                {...filteredProps}
                className={styles.FeatureTourPanelContent}
            >
                <ButtonIconOnly
                    {...dismissButtonProps}
                    icon={<DismissIcon title={dismissButtonA11yLabel} />}
                    format="lightTransparent"
                    size="sm"
                    onClick={onDismissClick}
                    className={styles.DismissButton}
                />
                {headerText && <Header5 format="light">{headerText}</Header5>}
                    <ParagraphMd
                        element="div"
                        format="light"
                    >
                        {children}
                    </ParagraphMd>
                    {actionArea}
            </div>
    );
};

FeatureTourPanelContent.displayName = displayName;

export default FeatureTourPanelContent;

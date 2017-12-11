// @flow
import React from 'react';
import styles from './FeatureTourPanelContent.scss';
import { Header5, ParagraphMd } from '../Type/index';
import Button from '../Button';
import ButtonDialogClose from '../ButtonDialogClose';

const displayName = 'FeatureTourPanelContent';

type Props = {
    bodyText: string,
    dismissButtonLabel: string,
    headerText?: string,
    onDismissClick: ()=> void,
    primaryButtonProps?: Object,
    secondaryButtonProps?: Object,
};

const FeatureTourPanelContent = ({
    bodyText,
    headerText,
    onDismissClick,
    primaryButtonProps,
    secondaryButtonProps,
    ...filteredProps
}: Props): React$Element<*> => {

    const PrimaryButton = primaryButtonProps && (
        <Button
            {...primaryButtonProps}
            format="lightTransparent"
            size="md"
            autoWidth="xs"
        />
    );

    const SecondaryButton = primaryButtonProps && (
        <Button
            {...secondaryButtonProps}
            format="lightTextOnly"
            size="md"
            autoWidth="xs"
        />
    );

    return (
            <div
                {...filteredProps}
                className={styles.FeatureTourPanelContent}
            >
                <ButtonDialogClose
                    onClick={onDismissClick}
                    buttonTitle={dismissButtonLabel}
                    className={styles.DismissButton}
                />
                {headerText && <Header5 format="light">{headerText}</Header5>}
                <ParagraphMd format="light">{bodyText}</ParagraphMd>
                {PrimaryButton}
                {SecondaryButton}
            </div>
    );
};

FeatureTourPanelContent.displayName = displayName;

export default FeatureTourPanelContent;

// @flow
import React from 'react';
// $FlowFixMe
import Button from '../Button';

const displayName = 'FeatureTourPanelButton';

type Props = {
    children: React$Element<*>,
};

const FeatureTourPanelButton = ({
    children,
    ...filteredProps
}: Props): React$Element<*> => {

    return (
        <Button
            {...filteredProps}
            format="lightTransparent"
            size="md"
            autoWidth="xs"
            children={children}
        />
    );
};

FeatureTourPanelButton.displayName = displayName;

export default FeatureTourPanelButton;

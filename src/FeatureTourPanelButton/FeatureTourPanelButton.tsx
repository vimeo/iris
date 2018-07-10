// @flow
import React from 'react';
import Button, { ButtonProps } from '../Button/Button';

const FeatureTourPanelButton = ({
    children,
    ...filteredProps
}: ButtonProps) => {
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

export default FeatureTourPanelButton;

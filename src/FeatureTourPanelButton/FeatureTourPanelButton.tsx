// @flow
import React from 'react';
import Button from '../Button/Button';
import { ButtonProps } from '../Button/ButtonProps';

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

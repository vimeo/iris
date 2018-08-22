// @flow
import React, { SFC } from 'react';
import Button from '../Button/Button';
import { ButtonProps } from '../Button/ButtonProps';

const FeatureTourPanelButton: SFC<ButtonProps> = ({
    children,
    ...filteredProps
}) => (
    <Button
        {...filteredProps}
        format="lightTransparent"
        size="md"
        autoWidth="xs"
        children={children}
    />
);

export default FeatureTourPanelButton;

//@flow
import React from 'react';
import ColorDocsSection from './ColorDocsSection';

type Props = {
    colorData: Object,
};

const ColorListing = ({
                colorData,
                ...filteredProps
                }: Props): React$Element<*> => {

        return (
            <div>
                {Object.keys(colorData).map(function (colorSection, i) {
                    return <ColorDocsSection colorSectionKey = {colorSection} colorSectionValue= {colorData[colorSection]} key = {i} />
                })}
            </div>
        )
};

export default ColorListing;

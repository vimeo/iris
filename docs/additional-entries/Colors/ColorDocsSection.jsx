//@flow
import React from 'react';
import ColorDocsBlock from './ColorDocsBlock';

type Props = {
    colorSectionKey: string,
    colorSectionValue: string,
}

const ColorDocsSection = ({
        colorSectionKey,
        colorSectionValue,
        ...filteredProps
    }: Props): React$Element<*> => {

    let ColorDocsSections = [];

    let headline = colorSectionKey;
    headline = headline.charAt(0).toUpperCase() + headline.slice(1);

    if(typeof colorSectionValue === "string") {
        ColorDocsSections.push(
            <ColorDocsBlock
                colorName = {colorSectionKey}
                colorValue = {colorSectionValue}
                key = { 0 } isList={false} 
            />
        );
    } else {
        ColorDocsSections = Object.keys(colorSectionValue).map(function (colorName, i) {
            return <ColorDocsBlock colorCategory= {colorSectionKey} colorName = {colorName} colorValue = {colorSectionValue[colorName]} key = { i } isList={true} />;
        });
    }

        return (
            <div>
                <h3
                    className="sg-colorDocsHeadline"
                >
                    {headline}
                </h3>
                <div className="colorInfoContainer">
                    {ColorDocsSections}
                </div>
            </div>
        );
};

export default ColorDocsSection;

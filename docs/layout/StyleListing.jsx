import React from 'react';
import MainLayout from './MainLayout';
import StyleListingUnit from './StyleListingUnit';
let patterns = require('json-loader!../patternList.json');

const getPatterns = () => {
    let patternEntries = [];

    Object.keys(patterns).map((key, i) => {

        let thisCategory = patterns[key];

        for (let i = 0; i < thisCategory.length; i++){
            let name = thisCategory[i][0];
            let displayName = thisCategory[i][1];
            let isPage = thisCategory[i][2];

            patternEntries.push(
                <StyleListingUnit
                    name={name}
                    displayName={displayName}
                    category={key}
                    key={name}
                    isPage={isPage}
                />
            );
        }

    });

    return patternEntries;
};

const StyleListing = () => (
    <MainLayout>
        <div className="StyleListings">
            {getPatterns()}
        </div>
    </MainLayout>
);

export default StyleListing;

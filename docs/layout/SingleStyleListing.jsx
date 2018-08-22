import React from 'react';
import StyleListingUnit from './StyleListingUnit';

import Navigation from './Navigation';
import NavigationToggle from './NavigationToggle';
let patterns = require('json-loader!../patternList.json');

const SingleStyleListing = (props) => {
        const params = props.match.params;
        const componentName = params.componentName;
        const category = params.category;
        let patternToRender;
        const thisCategory = patterns[category];

        for (let i = 0; i < thisCategory.length; i++) {
            let thisPattern = thisCategory[i];

            if (thisPattern[0] === componentName) {
                patternToRender = thisPattern;
            }
        }

        return (
            <div>
                <Navigation scrollingLinks={false} />
                <NavigationToggle />
                
                <div id="sgMainLayout" className="sg-MainLayout">
                    <StyleListingUnit
                        name = {patternToRender[0]}
                        category = {category}
                        displayName = {patternToRender[1]}
                        isPage = {patternToRender[2]}
                        isSingle = {true}
                    />
                </div>
            </div>
        )
    };

export default SingleStyleListing;

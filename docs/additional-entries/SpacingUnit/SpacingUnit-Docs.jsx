import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {ParagraphMd} from '../../../src/utility_components/Type';
import NotifcationNeutral from '../../../src/components/NotificationNeutral/NotificationNeutral'
const SpacingUnit = (props) => {
    return (
        <div className="Pattern__docs">
            <ParagraphMd>
                Spacing within and between components in Iris based on a 0.25rem (4px) unit.
                The <code>spacingUnit()</code> SASS function generates a multiple of this unit for easy reuse.
            </ParagraphMd>
            <NotifcationNeutral>
                <ParagraphMd>This function should be used for Padding and Margins whenever possible.</ParagraphMd>
            </NotifcationNeutral>


            <ExampleSource language="css">
                {`
//Sass
.foo {
    margin: spacingUnit(1, 2, 4);
    padding: spacingUnit(4, 2, 4, 1)
    transform: translateX(spacingUnit(8));
}


//CSS Output
.foo {
    margin: 0.25rem 0.5rem 1rem; //4px 8px 16px
    padding: 1rem 0.5rem 1rem 0.25rem; //16px 8px 16px 4px
    transform: translateX(2rem); //32px
}
                    `}
                </ExampleSource>
            </div>
    );
};

export default SpacingUnit;

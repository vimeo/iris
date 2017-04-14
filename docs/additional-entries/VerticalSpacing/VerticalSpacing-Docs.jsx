import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';

const VerticalSpacingDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <p>
                Vertical spacing is created within CSS. It is based on a base-4 system 
                where the function returns a single unit of 0.25rem (4px). In any sass file that has included
                the Iris helper styles at the head of the document. The <code>spacingUnit()</code> can be used for
                long-hand properties by passing in up to 4 comma separated arguments.
            </p>

            <ExampleSource>
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

export default VerticalSpacingDocs;

import React from 'react';

export const TypeVariableElement = ({
    element,
    //@ts-ignore filter away from styled component
    fontStack,
    //@ts-ignore filter away from styled component
    noMargin,
    ...filteredProps
}: any) => {

    const elementList = {
        'h1': <h1 {...filteredProps} />,
        'h2': <h2 {...filteredProps} />,
        'h3': <h3 {...filteredProps} />,
        'h4': <h4 {...filteredProps} />,
        'h5': <h5 {...filteredProps} />,
        'h6': <h6 {...filteredProps} />,
        'p': <p {...filteredProps} />,
        'li': <li {...filteredProps} />,
        'div': <div {...filteredProps} />,
        'span': <span {...filteredProps} />,
        'label': <label {...filteredProps} />,
        'legend': <legend {...filteredProps} />,
    }

    return elementList[element] || elementList.p;
}

//@flow
import React from 'react';

type Props = {
    colorName: string,
    colorValue: string,
};

const ColorDocsBlock = ({
                colorValue,
                colorName,
                ...filteredProps
                }: Props): React$Element<*> => {

            return (
                <div className="colorInfo">
                        <span className="colorSwatch" style={{background: colorValue}}></span>
                        <span className="colorName">
                        <code>${colorName}</code>
                        <br />
                        <pre>{colorValue}</pre>
                        </span>
                    </div>
            );
};


export default ColorDocsBlock;

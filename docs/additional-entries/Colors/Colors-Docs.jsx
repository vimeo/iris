import React from 'react';
import Colors from 'steadicam/components/styleListings/Colors/Colors';

const colorData = require('json-loader!../../../src/globals/settings/colors.json');

export default function ColorsDocs() {
    return (
        <div className="Pattern__docs">
            <Colors colorData = {colorData} />
        </div>
    );
}

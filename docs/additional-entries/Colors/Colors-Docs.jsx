import * as React from 'react';
import Colors from 'steadicam/components/styleListings/Colors/Colors';

let colorData = require('json!../../../src/globals/settings/colors.json');

export default function ColorsDocs() {

	return (
		<div>
			<Colors colorData = {colorData} />
		</div>

	);
};

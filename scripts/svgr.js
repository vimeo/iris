const strip = componentName => componentName.name.replace('Svg', '');

const TS = {
    plugins: ['typescript']
};

const TSAST = (template, name, jsx) => template.smart(TS).ast `
    import React, { SVGProps } from 'react';
    export const ${name} = (props: SVGProps<SVGSVGElement>) => ${jsx};
`;

const template = (t, _, c) => TSAST(t.template, strip(c.componentName), c.jsx);

module.exports = template;
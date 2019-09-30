import React from 'react';

export const TypeVariableElement = ({
  element,
  fontStack,
  noMargin,
  ...props
}: any) => {
  const elementList = {
    h1: <h1 {...props} />,
    h2: <h2 {...props} />,
    h3: <h3 {...props} />,
    h4: <h4 {...props} />,
    h5: <h5 {...props} />,
    h6: <h6 {...props} />,
    p: <p {...props} />,
    li: <li {...props} />,
    div: <div {...props} />,
    span: <span {...props} />,
    label: <label {...props} />,
    legend: <legend {...props} />,
  };

  return elementList[element] || elementList.p;
};

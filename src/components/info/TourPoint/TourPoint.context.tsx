import React, { createContext, ReactNode, useState } from 'react';

import { generateUID } from '../../../utils';

export const TourContext = createContext<any>({});

interface Props {
  children: ReactNode;
  id?: string;
  steps: number;
  automated?: boolean;
}

export function Tour({
  children,
  id = null,
  steps = 2,
  automated = true,
}: Props) {
  const [active, activeSet] = useState(1);
  if (!id) id = 'iris-tour-' + generateUID();

  function activeSetExtrinsic(setter) {
    const index = typeof setter === 'number' && setter;
    const number = typeof index === 'number';

    const dismiss = typeof setter !== 'function' && !number;
    if (dismiss) return activeSet(null);

    if (typeof setter === 'function') {
      const state = setter(active);
      return activeSet(state);
    }

    if (typeof setter === 'number') {
      const withinRange = number && (index < steps || index > 0);
      return activeSet(withinRange ? index : null);
    }
  }

  const value = {
    active,
    activeSet: activeSetExtrinsic,
    id,
    steps,
    automated,
  };

  return (
    <TourContext.Provider value={value}>
      {children}
    </TourContext.Provider>
  );
}

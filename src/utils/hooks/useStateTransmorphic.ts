import { useState } from 'react';

export function useStateTransmorphic<StateType = unknown>(
  stateExtrinsic
) {
  const stateIntrinsic = useState<StateType>();

  if (stateExtrinsic) return stateExtrinsic;
  if (!stateExtrinsic) return stateIntrinsic;
}

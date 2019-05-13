import React, { ReactNode, SFC } from 'react';

type Panel = {
  tabId: string;
  content: ReactNode;
};

interface Props {
  index: number;
  className?: string;
  panels: Panel[];
}

export const TabContentPanel: SFC<Props> = ({
  index,
  panels,
  ...props
}) => (
  <div {...props} style={{ padding: '0.5rem 0' }}>
    <div
      id={panels[index].tabId}
      aria-labelledby={`tab-${panels[index].tabId}`}
    >
      {panels[index].content}
    </div>
  </div>
);

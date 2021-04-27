import React, {
  useState,
  cloneElement,
  useLayoutEffect,
} from 'react';

import { Props, Minors } from './Tabs.types';
import { Nav, Indicator } from './Tabs.style';
import { Panel } from './Tabs.minors';
import { NavItem } from './NavItem';

import { withIris } from '../../utils';

export const Tabs = withIris<HTMLDivElement, Props, Minors>(
  TabsComponent
);

Tabs.Panel = Panel;

function TabsComponent({
  children,
  forwardRef,
  format = 'soft',
  variant = 'minimalTransparent',
  pill = false,
  ...props
}: Props) {
  const [activeTab, activeTabSet] = useState(0);

  useLayoutEffect(() => {
    const active = children
      .map(({ props: { active } }, i) => active && i)
      .filter((i) => typeof i === 'number' && i >= 0);

    if (active.length === 0) return;
    if (active.length === 1) return activeTabSet(active[0]);

    const lastActive = active[active.length - 1];
    errorMessage(active, lastActive);
    activeTabSet(lastActive);
  }, [children]);

  function onKeyUp({ key }) {
    const { length } = children;

    const next = activeTab === length - 1 ? 0 : activeTab + 1;
    const prev = activeTab === 0 ? length - 1 : activeTab - 1;

    if (key === 'ArrowRight') activeTabSet(next);
    if (key === 'ArrowLeft') activeTabSet(prev);
  }

  const childrenNavItems = children.map(({ props }, i) => (
    <li
      key={i}
      onClick={() => activeTabSet(i)}
      style={{ flex: '1 0 0' }}
    >
      <NavItem
        onKeyUp={onKeyUp}
        format={format}
        index={i}
        label={props.label}
        selected={activeTab === i}
        variant={variant}
        pill={pill}
      />
    </li>
  ));

  const childrenPanels = children.map(
    (child, i) =>
      activeTab === i &&
      cloneElement(child, { id: `#tab-${i}`, key: i })
  );

  return (
    <div ref={forwardRef} {...props}>
      <Nav variant={variant} pill={pill}>
        {childrenNavItems}
      </Nav>

      {variant !== 'inlay' && (
        <Indicator width={children.length} position={activeTab} />
      )}

      {childrenPanels}
    </div>
  );
}

const irisError = (message) =>
  console.error(`@vimeo/iris:`, message, `\n\n`);

const errorMessage = (active, lastActive) =>
  irisError(
    `Multiple tabs were specified as the intial active tab! Tabs: [${active.toString()}]. Using last 'active' tab: ${lastActive}.`
  );

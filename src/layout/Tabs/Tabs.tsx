import React, {
  useState,
  cloneElement,
  FunctionComponent,
} from 'react';
import styled from 'styled-components';
import { rgba, rem } from 'polished';

import { Formats } from '../../themes';
import { blue } from '../../color';
import { Button } from '../../components/';
import { withIris, IrisElement, IrisProps } from '../../utils';

export const Tabs = withIris<HTMLDivElement, Props, Minors>(
  TabsComponent,
);

type Props = IrisProps<{
  children: Array<IrisElement<PanelProps>>;
  /**
   * [default = 'alternative']
   */
  format?: Formats;
}>;

function TabsComponent({
  children,
  forwardRef,
  format = 'alternative',
  ...props
}: Props) {
  const [activeTab, setActiveTab] = useState(0);

  function doKey({ key }) {
    if (key === 'ArrowRight') {
      setActiveTab(
        activeTab === children.length - 1 ? 0 : activeTab + 1,
      );
    }
    if (key === 'ArrowLeft') {
      setActiveTab(
        activeTab === 0 ? children.length - 1 : activeTab - 1,
      );
    }
  }

  return (
    <div ref={forwardRef} {...props}>
      <NavStyled>
        {children.map(({ props }, i) => (
          <li
            style={{ flex: '1 0 0' }}
            key={i}
            onClick={() => {
              setActiveTab(i);
              props.onActivate();
            }}
          >
            <NavItem
              onKeyUp={doKey}
              format={format}
              index={i}
              label={props.label}
              selected={activeTab === i}
            />
          </li>
        ))}
      </NavStyled>
      <Indicator width={children.length} position={activeTab} />
      {children.map(
        (child, i) =>
          activeTab === i &&
          cloneElement(child, { id: `#tab-${i}`, key: i }),
      )}
    </div>
  );
}

const NavStyled = styled.ol`
  display: flex;
  width: 100%;
  margin: 0 0 0.25rem;
  padding: 0;
  list-style-type: none;
`;

const NavItem = ({ format, index, label, selected, ...props }) => (
  <Button
    aria-selected={selected}
    element="a"
    href={`#tab-${index}`}
    target="_self"
    format="alternative"
    id={`tab-${index}`}
    onClick={event => event.preventDefault()}
    size="md"
    style={{ width: '100%' }}
    variant="minimalTransparent"
    {...props}
  >
    {label}
  </Button>
);

const Indicator = styled.div<{ width: number; position: number }>`
  width: 100%;
  background: ${props => rgba(props.theme.content.color, 0.1)};
  &:after {
    content: '';
    display: block;
    width: ${props => 100 / props.width}%;
    height: ${rem(2)};
    background-color: ${blue(500)};
    transform: translateX(${props => props.position * 100}%);
    transition: 120ms ease-in-out;
  }
`;

interface Minors {
  Panel: FunctionComponent<IrisProps<PanelProps>>;
}

interface PanelProps {
  label?: string;
  onActivate: VoidFunction;
}

const Panel = ({
  children,
  onActivate,
  ...props
}: IrisProps<PanelProps>) => (
  <div style={{ padding: '0.5rem 0' }} {...props}>
    {children}
  </div>
);

Tabs.Panel = Panel;

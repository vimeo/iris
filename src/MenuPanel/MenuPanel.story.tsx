import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button, LinkText, MenuPanel, MenuPanelList } from '../';
import { Gear } from '../Icons';
import { Story } from '../../.storybook/ui/Story';

const componentName = 'Menu Panel';

storiesOf(`components|${componentName}`, module)
  .add('basic', () => (
    <Story title={componentName} subTitle="basic">
      <MenuPanel alignment="right" menuContent={MenuList} size="md">
        <Button isInline isButtonElement={false} autoWidth="md">
          Click for Medium Right Menu
        </Button>
      </MenuPanel>

      <br />
      <br />
      <br />

      <MenuPanel alignment="left" menuContent={MenuList} size="lg">
        <Button
          isInline
          isButtonElement={false}
          autoWidth="md"
          format="secondary"
        >
          Click for Large Left Menu
        </Button>
      </MenuPanel>

      <br />
      <br />
      <br />

      <MenuPanel alignment="center" menuContent={MenuList} size="sm">
        <LinkText element="span">
          Click for Small Center Menu
        </LinkText>
      </MenuPanel>

      <br />
      <br />
      <br />

      <MenuPanel
        alignment="left"
        menuContent={MenuListDark}
        size="lg"
        theme="dark"
      >
        <Button
          isInline
          isButtonElement={false}
          autoWidth="md"
          format="primaryDark"
        >
          Click for Dark Large Left Menu
        </Button>
      </MenuPanel>

      <br />
      <br />
      <br />

      <MenuPanel
        alignment="center"
        menuContent={MenuList}
        size="md"
        isFluid
      >
        <Button isInline isButtonElement={false} autoWidth="fluid">
          Click for Medium Center Menu
        </Button>
      </MenuPanel>
    </Story>
  ))
  .add('controlled with event logs', () => {
    function TestComponent(props: any) {
      const [isShowing, setIsShowing] = useState(false);
      return (
        <MenuPanel isShowing={isShowing} {...props}>
          <Button
            isInline
            autoWidth="fluid"
            isButtonElement={false}
            format="secondary"
            onClick={() => {
              console.log('Button click!');
              setIsShowing(isShowing => !isShowing);
            }}
          >
            {'Edit thumbnail'}
          </Button>
        </MenuPanel>
      );
    }
    return (
      <Story title={componentName} subTitle="event logged">
        <TestComponent
          alignment="center"
          className="Menu"
          isControlled
          isFluid
          menuContent={MenuList}
          onClick={() => console.log('MenuPanel click!')}
          onClose={() => console.log('MenuPanel close!')}
          onOpen={() => console.log('MenuPanel open!')}
          size="lg"
        />

        <br />
        <br />

        <TestComponent
          alignment="center"
          className="Menu"
          isFluid
          menuContent={MenuList}
          onClick={() => console.log('MenuPanel click!')}
          onClose={() => console.log('MenuPanel close!')}
          onOpen={() => console.log('MenuPanel open!')}
          size="lg"
        />
      </Story>
    );
  });

const MenuList = (
  <div>
    <MenuPanelList
      header="Section 1"
      menuItems={[
        {
          label: 'Item 1',
          href: '#',
        },
        {
          label: 'Selected Item',
          href: '#',
          isSelected: true,
        },
      ]}
    />
    <MenuPanelList
      hasDivider
      menuItems={[
        {
          label: 'Item 3',
          icon: <Gear />,
          href: '#',
        },
        {
          label: 'Item 4',
          href: '#',
        },
      ]}
    />
  </div>
);

const MenuListDark = (
  <div>
    <MenuPanelList
      header="Section 1"
      menuItems={[
        {
          label: 'Item 1',
          href: '#',
        },
        {
          label: 'Selected Item',
          href: '#',
          isSelected: true,
        },
      ]}
      theme="dark"
    />
    <MenuPanelList
      hasDivider
      menuItems={[
        {
          label: 'Item 3',
          icon: <Gear />,
          href: '#',
        },
        {
          label: 'Item 4',
          href: '#',
        },
      ]}
      theme="dark"
    />
  </div>
);

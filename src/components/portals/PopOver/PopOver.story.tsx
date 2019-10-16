import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Link, PopOver, PopOverList } from '../../index';
import { Gear } from '../../../icons';
import { Story } from '../../../storybook';

storiesOf(`components|Portals/PopOver`, module)
  .add('basic', () => (
    <Story title="PopOver" subTitle="basic">
      <PopOver alignment="right" menuContent={MenuList} size="md">
        <Button isInline isButtonElement={false} autoWidth="md">
          Click for Medium Right Menu
        </Button>
      </PopOver>

      <br />
      <br />
      <br />

      <PopOver alignment="left" menuContent={MenuList} size="lg">
        <Button
          isInline
          isButtonElement={false}
          autoWidth="md"
          format="secondary"
        >
          Click for Large Left Menu
        </Button>
      </PopOver>

      <br />
      <br />
      <br />

      <PopOver alignment="center" menuContent={MenuList} size="sm">
        <Link element="span">Click for Small Center Menu</Link>
      </PopOver>

      <br />
      <br />
      <br />

      <PopOver
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
      </PopOver>

      <br />
      <br />
      <br />

      <PopOver
        alignment="center"
        menuContent={MenuList}
        size="md"
        isFluid
      >
        <Button isInline isButtonElement={false} autoWidth="fluid">
          Click for Medium Center Menu
        </Button>
      </PopOver>
    </Story>
  ))
  .add('controlled with event logs', () => {
    function TestComponent(props: any) {
      const [isShowing, setIsShowing] = useState(false);
      return (
        <PopOver isShowing={isShowing} {...props}>
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
        </PopOver>
      );
    }
    return (
      <Story title="PopOver" subTitle="event logged">
        <TestComponent
          alignment="center"
          className="Menu"
          isControlled
          isFluid
          menuContent={MenuList}
          onClick={() => console.log('PopOver click!')}
          onClose={() => console.log('PopOver close!')}
          onOpen={() => console.log('PopOver open!')}
          size="lg"
        />

        <br />
        <br />

        <TestComponent
          alignment="center"
          className="Menu"
          isFluid
          menuContent={MenuList}
          onClick={() => console.log('PopOver click!')}
          onClose={() => console.log('PopOver close!')}
          onOpen={() => console.log('PopOver open!')}
          size="lg"
        />
      </Story>
    );
  });

const MenuList = (
  <div>
    <PopOverList
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
    <PopOverList
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
    <PopOverList
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
    <PopOverList
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

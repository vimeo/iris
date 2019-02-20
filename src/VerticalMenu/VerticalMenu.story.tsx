import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  VerticalMenuItemContent,
  VerticalMenuNested,
  VerticalMenuItem,
  VerticalMenuActionButton,
  VerticalMenuHeaderGroup,
} from '../VerticalMenu';
import { MenuPanelList } from '../MenuPanelList/MenuPanelList';

import {
  PopOut,
  CirclePlus,
  Folder,
  Home,
  HomeFilled,
  Gear,
} from '../Icons';

import { Story } from '../../.storybook/Story';

const componentName = 'Vertical Menu';

storiesOf(`components/${componentName}`, module)
  .add('basic', () => (
    <Story title={componentName} subTitle="basic">
      <VerticalMenuNested
        actionButton={
          <VerticalMenuActionButton
            icon={<CirclePlus />}
            tooltipText="click to add new item"
          />
        }
        label="Menu Label"
        labelId="testMenu"
        labelIcon={<Folder />}
        subMenuItems={subMenuItems}
        nestedButtonLabel="toggle menu"
      />
    </Story>
  ))
  .add('complex', () => (
    <Story title={componentName} subTitle="complex" width="100%">
      <VerticalMenuDemoDocs />
    </Story>
  ));

const onClickHandler = e => {
  e.preventDefault();
  console.log('Demo Click Handler: You Clicked:', e.target);
};

const subMenuItems = [
  <VerticalMenuItem>
    <a href="#" onClick={onClickHandler}>
      <VerticalMenuItemContent label="Nested Item 1" />
    </a>
  </VerticalMenuItem>,
  <VerticalMenuItem isActive>
    <a href="#" onClick={onClickHandler}>
      <VerticalMenuItemContent isActive label="Nested Item 2" />
    </a>
  </VerticalMenuItem>,
];

class VerticalMenuDemoDocs extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      dynamicMenuItems: [],
    };
  }

  componentWillMount() {
    this._makeMenuItem();
  }

  _makeMenuItem = () => {
    const i = this.state.dynamicMenuItems.length + 1;
    const newItem = (
      <VerticalMenuItem>
        <a href="#">
          <VerticalMenuItemContent label={`Dynamic Item ${i}`} />
        </a>
      </VerticalMenuItem>
    );
    const newItemState = [...this.state.dynamicMenuItems];
    newItemState.push(newItem);
    this.setState({
      dynamicMenuItems: newItemState,
    });
  };
  _toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  };
  _handleClick = e => {
    console.log(e);
  };
  render() {
    const onClickHandler = e => {
      e.preventDefault();
      console.log('Demo Click Handler: You Clicked:', e.target);
    };
    const MenuPanelDemoList = (
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
              // 'data-foo': 'bar',
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
    return (
      <>
        <VerticalMenuHeaderGroup
          actionButtonIcon={<CirclePlus />}
          actionButtonTooltipText="Tooltip Text"
          actionButtonOnClick={this._handleClick}
          label="Section Label 1"
          labelId="Section1"
        >
          <VerticalMenuNested
            isOpen={this.state.menuOpen}
            label="Menu Label"
            labelId="testMenu"
            nestedButtonLabel="toggle menu"
            subMenuItems={subMenuItems}
          />
        </VerticalMenuHeaderGroup>
        <VerticalMenuHeaderGroup
          label="Section Label 2"
          labelId="Section2"
        >
          <VerticalMenuNested
            actionButton={
              <VerticalMenuActionButton
                icon={<CirclePlus />}
                tooltipText="click to add new item"
              />
            }
            isOpen={!this.state.menuOpen}
            label="Menu Label"
            labelId="testMenu"
            labelIcon={<Folder />}
            nestedButtonLabel="toggle menu"
            subMenuItems={subMenuItems}
          />
        </VerticalMenuHeaderGroup>
        <VerticalMenuNested
          isOpen={this.state.menuOpen}
          label="Dynamic Menu"
          labelId="testDynamicMenu"
          nestedButtonLabel="toggle menu"
          subMenuItems={this.state.dynamicMenuItems}
        />
        <VerticalMenuItem>
          <a href="#" onClick={onClickHandler}>
            <VerticalMenuItemContent
              label="Stand Alone Link With Link Icon"
              linkActionIcon={<PopOut />}
            />
          </a>
        </VerticalMenuItem>
        <VerticalMenuItem>
          <a href="#" onClick={onClickHandler}>
            <VerticalMenuItemContent
              label="Stand Alone Link With Label Icon"
              labelIcon={<Home />}
              labelIconActive={<HomeFilled />}
            />
          </a>
        </VerticalMenuItem>
        <VerticalMenuItem
          nestedInteractionContent={MenuPanelDemoList}
          menuPanelTooltip="Show Menu"
        >
          <a href="#" onClick={onClickHandler}>
            <VerticalMenuItemContent
              label="Menu With Nested Menu on Hover"
              truncateLabel
            />
          </a>
        </VerticalMenuItem>
        <VerticalMenuItem
          isActive
          nestedInteractionContent={MenuPanelDemoList}
          menuPanelTooltip="Show Menu"
        >
          <a href="#" onClick={onClickHandler}>
            <VerticalMenuItemContent
              isActive
              label="Active Menu With Nested Menu on Hover"
              truncateLabel
            />
          </a>
        </VerticalMenuItem>
      </>
    );
  }
}

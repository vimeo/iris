import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonLoadingState } from './ButtonLoadingState';
import { Gear } from '../Icons';
import { Story } from '../../.storybook/Story';
import styled from 'styled-components';

const componentName = 'Button';

const $Button = styled(ButtonLoadingState)`
  margin: 0 1rem 1rem 0;
`;

storiesOf('components/Button', module).add('loading state', () => (
  <Story title={componentName} subTitle="Loading State">
    <ButtonLoadingStateDocs />
  </Story>
));

const initialState = { isLoading: true };
type State = Readonly<typeof initialState>;

const handleClick = (prevState: State) => ({
  isLoading: !prevState.isLoading,
});

class ButtonLoadingStateDocs extends Component {
  readonly state: State = initialState;

  _handleClick = () => this.setState(handleClick);

  render = () => (
    <div>
      <$Button
        isLoading={!this.state.isLoading}
        onClick={this._handleClick}
        size="lg"
      >
        Click Me
      </$Button>
      <$Button
        icon={<Gear />}
        isLoading={this.state.isLoading}
        onClick={this._handleClick}
        format="primaryOutline"
        size="md"
      >
        Click Me
      </$Button>
      <$Button
        icon={<Gear />}
        isLoading={!this.state.isLoading}
        onClick={this._handleClick}
        format="success"
        size="sm"
      >
        Click Me
      </$Button>
      <$Button
        isLoading={this.state.isLoading}
        onClick={this._handleClick}
        format="secondary"
        size="xs"
      >
        Click Me
      </$Button>
    </div>
  );
}

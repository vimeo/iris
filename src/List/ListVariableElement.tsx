import React from 'react';
import { ListProps } from './ListTypes';

export const ListVariableElement: React.SFC<ListProps> = props =>
  props.format === 'unordered' ? (
    <ul {...props} />
  ) : (
    <ol {...props} />
  );

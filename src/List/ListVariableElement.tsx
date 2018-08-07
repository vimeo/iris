import React from 'react';
import { ListProps } from './ListTypes';

export const ListVariableElement = (props: React.HTMLProps<HTMLUListElement> & ListProps) => props.format === 'unordered'
? <ul {...props} />
: <ol {...props} />;

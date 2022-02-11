import React, { useRef } from 'react';
import styled from 'styled-components';

import { TextArea as TA } from './TextArea';

import { Button } from '../..//Button/Button';
import { Layout } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

export default {
  title: 'components/TextArea/props',
};

const TextArea = styled(TA)`
  min-width: 24rem;
  min-height: 12rem;
`;

const TextAreaWCC = withCharacterCount(TextArea);

export function Format() {
  return (
    <Layout.StoryVertical>
      <TextArea
        label="Text area"
        format="negative"
        messages={{ error: 'This is an error.' }}
      />
      <TextArea
        label="Text area"
        format="positive"
        messages={{ help: 'This is an confirmation message.' }}
      />
    </Layout.StoryVertical>
  );
}

export function withCharacterCountStory() {
  return (
    <Layout.StoryVertical>
      <TextAreaWCC
        label="Text area with character count"
        defaultValue="lorem ipsum dolor"
      />
      <TextAreaWCC
        label="Error message overrides character count"
        defaultValue="lorem ipsum dolor"
        format="negative"
        messages={{ error: 'This is an error.' }}
      />
    </Layout.StoryVertical>
  );
}
withCharacterCountStory.storyName = 'withCharacterCount';

export function DefaultValue() {
  const ref = useRef(null);
  const resetText = 'The default text.';
  const reset = () => (ref.current.value = resetText);

  return (
    <Layout.StoryVertical>
      <Button onClick={reset}>Reset</Button>
      <TextArea
        label="Click the button to reset to defaultValue"
        defaultValue={resetText}
        ref={ref}
      />
    </Layout.StoryVertical>
  );
}
DefaultValue.storyName = 'DefaultValue';

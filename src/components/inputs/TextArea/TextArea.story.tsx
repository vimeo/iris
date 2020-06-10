import React, { useRef } from 'react';
import styled from 'styled-components';

import { TextArea as TA } from './TextArea';
import { Button } from '../../buttons/Button/Button';

import { Layout } from '../../../storybook';
import { withCharacterCount } from '../withCharacterCount/withCharacterCount';

export default { title: 'components|inputs/TextArea' };

const TextArea = styled(TA)`
  min-width: 24rem;
  min-height: 12rem;
`;

const TextAreaWCC = withCharacterCount(TextArea);

export function Common() {
  return (
    <Layout.StoryVertical>
      <TextArea label="Text area" />
    </Layout.StoryVertical>
  );
}

export function Error() {
  return (
    <Layout.StoryVertical>
      <TextArea
        label="Text area with error message"
        format="negative"
        messages={{ error: 'This is an error.' }}
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
withCharacterCountStory.story = { name: 'withCharacterCount' };

export const Reset = () => <ResetStory />;
function ResetStory() {
  const ref = useRef(null);
  const resetText =
    'Click the button to reset the TextArea to its default value.';
  const reset = () => (ref.current.value = resetText);

  return (
    <Layout.StoryVertical>
      <Button onClick={reset}>Reset</Button>
      <TextArea
        label="Click the button to reset"
        defaultValue={resetText}
        ref={ref}
      />
    </Layout.StoryVertical>
  );
}

import React from 'react';
import styled from 'styled-components';

import { Text as T } from './Text';

import { Layout } from '../../storybook';

/* eslint-disable import/no-default-export */
export default { title: 'typography|Text' };
/* eslint-enable import/no-default-export */

const Text = styled(T)`
  display: block;
`;

const CustomText1 = styled(Text)`
  font-size: 0.5rem;
  font-weight: 800;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const CustomText2 = styled(Text)`
  font-size: 2rem;
  font-weight: 100;
  line-height: 2.5rem;
  letter-spacing: 0.075rem;
`;

const CustomText3 = styled(Text)`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.5rem;
  letter-spacing: -0.075rem;
`;

const EditableText = styled(CustomText3)`
  display: inline-block;
`;

export function Editable() {
  return (
    <Layout.StoryVertical>
      <EditableText placeholder="Edit me!" contentEditable>
        Text Primitive Component
      </EditableText>
    </Layout.StoryVertical>
  );
}

export function CustomExample1() {
  return (
    <Layout.StoryVertical>
      <CustomText1 format="basic">
        Text Primitive Component
      </CustomText1>
      <CustomText1 format="soft">
        Text Primitive Component
      </CustomText1>
      <CustomText1 format="alternative">
        Text Primitive Component
      </CustomText1>
      <CustomText1 format="secondary">
        Text Primitive Component
      </CustomText1>
      <CustomText1 format="primary">
        Text Primitive Component
      </CustomText1>
      <CustomText1 status="positive">
        Text Primitive Component
      </CustomText1>
      <CustomText1 status="negative">
        Text Primitive Component
      </CustomText1>
    </Layout.StoryVertical>
  );
}

export function CustomExample2() {
  return (
    <Layout.StoryVertical>
      <CustomText2 format="basic">
        Text Primitive Component
      </CustomText2>
      <CustomText2 format="soft">
        Text Primitive Component
      </CustomText2>
      <CustomText2 format="alternative">
        Text Primitive Component
      </CustomText2>
      <CustomText2 format="secondary">
        Text Primitive Component
      </CustomText2>
      <CustomText2 format="primary">
        Text Primitive Component
      </CustomText2>
      <CustomText2 status="positive">
        Text Primitive Component
      </CustomText2>
      <CustomText2 status="negative">
        Text Primitive Component
      </CustomText2>
    </Layout.StoryVertical>
  );
}

export function CustomExample3() {
  return (
    <Layout.StoryVertical>
      <CustomText3 format="basic">
        Text Primitive Component
      </CustomText3>
      <CustomText3 format="soft">
        Text Primitive Component
      </CustomText3>
      <CustomText3 format="alternative">
        Text Primitive Component
      </CustomText3>
      <CustomText3 format="secondary">
        Text Primitive Component
      </CustomText3>
      <CustomText3 format="primary">
        Text Primitive Component
      </CustomText3>
      <CustomText3 status="positive">
        Text Primitive Component
      </CustomText3>
      <CustomText3 status="negative">
        Text Primitive Component
      </CustomText3>
    </Layout.StoryVertical>
  );
}

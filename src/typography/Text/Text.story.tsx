import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Text as T } from './Text';

import { Story } from '../../storybook';

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

storiesOf('Typography|Text/', module).add('Text', () => (
  <Story title="Text">
    <Text format="basic">Text Primitive Component</Text>
    <Text format="soft">Text Primitive Component</Text>
    <Text format="alternative">Text Primitive Component</Text>
    <Text format="secondary">Text Primitive Component</Text>
    <Text format="primary">Text Primitive Component</Text>
    <Text status="positive">Text Primitive Component</Text>
    <Text status="negative">Text Primitive Component</Text>

    <br />
    <br />

    <CustomText1 format="basic">Text Primitive Component</CustomText1>
    <CustomText1 format="soft">Text Primitive Component</CustomText1>
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

    <br />
    <br />

    <CustomText2 format="basic">Text Primitive Component</CustomText2>
    <CustomText2 format="soft">Text Primitive Component</CustomText2>
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

    <br />
    <br />

    <CustomText3 format="basic">Text Primitive Component</CustomText3>
    <CustomText3 format="soft">Text Primitive Component</CustomText3>
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
  </Story>
));

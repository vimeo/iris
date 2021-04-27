import React, { useReducer } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Template } from './Template';
import { Paragraph, Link } from '../typography';
import { Input, TextArea, Checkbox, Tag } from '../components';

import { initialState, reducer } from './NewSvg.state';

export function SVG() {
  const [state, dispatch] = useReducer(reducer, initialState());
  const { iconName, description, meta } = state;

  const CopyBlock = `
# 🔺 New ${iconName} Icon
### Description
${description}
### Meta
${meta}

**_Stakeholders:_** @Vimeo/design-systems-core

# Icon file
Remember to attach (or link to) the icon file here!
`;

  return (
    <Template
      name="New SVG Request"
      instructions={
        <>
          <Paragraph size="2" style={{ marginBottom: '1rem' }}>
            Please use the instructions list below to track your
            progress for adding a{' '}
            <Link
              href="https://github.vimeows.com/Vimeo/iris/issues/new?template=new-svg.md"
              target="_blank"
            >
              New SVG Request
            </Link>
            .
          </Paragraph>
          <Checkbox
            label={
              <p>
                Complete the form below and copy/paste into your
                Github issue. Use{' '}
                <Link href="https://guides.github.com/features/mastering-markdown/#syntax">
                  Github Markdown
                </Link>{' '}
                as needed! Fields marked with * are required.
              </p>
            }
          />
          <Checkbox
            label={
              <p>
                <i>On Github:</i> Tag relevant stakeholders in
                addition to @vimeo/design-systems-core. These can be{' '}
                <Link
                  target="_blank"
                  href="https://github.vimeows.com/orgs/Vimeo/teams"
                >
                  teams
                </Link>{' '}
                or{' '}
                <Link
                  target="_blank"
                  href="https://github.vimeows.com/orgs/Vimeo/people"
                >
                  individuals
                </Link>
                .
              </p>
            }
          />
          <Checkbox
            label={
              <p>
                <i>On Github:</i> Attach (or link to) icon file at the
                bottom of the issue comment.
              </p>
            }
          />
          <Checkbox
            label={
              <p>
                <i>On Github:</i> Under <b>Labels</b>, add the{' '}
                <SVGTag size="xs">🔺 svg</SVGTag> tag.
              </p>
            }
          />
          <Checkbox
            label={
              <p>
                <i>On Github:</i> Under <b>Projects</b>, add Design
                Systems, and sort into backlog.
              </p>
            }
          />
        </>
      }
      copyBlock={CopyBlock}
    >
      <Input
        label="Icon name*"
        value={iconName}
        onChange={(e) =>
          dispatch({
            type: 'SET_ICON_NAME',
            payload: e.target.value,
          })
        }
        style={{ width: rem(200) }}
      />
      <TextArea
        label="Description"
        value={description}
        messages={{
          post:
            'Optional description of the icon, where it will be used, or any deadlines.',
        }}
        onChange={(e) =>
          dispatch({
            type: 'SET_DESCRIPTION',
            payload: e.target.value,
          })
        }
      />
      <TextArea
        label="Meta"
        messages={{
          post:
            'If this request is related to other issues or pull requests, please include them here.',
        }}
        value={meta}
        placeholder="- linked issue"
        onChange={(e) =>
          dispatch({
            type: 'SET_META',
            payload: e.target.value,
          })
        }
      />
    </Template>
  );
}
SVG.storyName = 'New SVG';

const SVGTag = styled(Tag)`
  display: inline;
`;

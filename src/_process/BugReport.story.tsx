import React, { useReducer } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Template } from './Template';
import { Header, Paragraph, Link } from '../typography';
import { Input, TextArea, Checkbox, Tag } from '../components';

import { initialState, reducer } from './BugReport.state';

export default { title: 'Process/Templates' };

export function BugReport() {
  const [state, dispatch] = useReducer(reducer, initialState());
  const {
    linkName,
    description,
    steps,
    affectedPlatforms,
    iris,
    app,
    browser,
    os,
    meta,
  } = state;

  const CopyBlock = `
# Details
### 🐛 [Where the bug is occuring](${linkName})

### Description
${description}

### Steps to Reproduce
${steps}

### Meta
${meta}

# Platform
**Affected Platforms:** ${affectedPlatforms}

#### My Environment
- Iris: \`${iris}\`
- App: \`${app}\`
- Browser: \`${browser}\`
- OS: \`${os}\`

**_Stakeholders:_** @Vimeo/design-systems-core

# Screenshots
Remember to attach screenshots here!
`;

  return (
    <Template
      name="Bug Report Template Generator"
      instructions={
        <>
          <Paragraph size="2" style={{ marginBottom: '1rem' }}>
            Please use the instructions list below to track your
            progress for opening an new{' '}
            <Link
              href="https://github.vimeows.com/Vimeo/iris/issues/new?template=bug-report.md"
              target="_blank"
            >
              Bug Report
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
                <i>On Github:</i> Add relevant screenshots to the
                bottom of the issue comment.
              </p>
            }
          />
          <Checkbox
            label={
              <p>
                <i>On Github:</i> Under <b>Labels</b>, add the{' '}
                <BugTag size="xs">🐛 bug</BugTag> tag.
              </p>
            }
          />
          <Checkbox
            label={
              <p>
                <i>On Github:</i> Under <b>Projects</b>, add Design
                Systems, and sort into bugs.
              </p>
            }
          />
        </>
      }
      copyBlock={CopyBlock}
    >
      <Input
        label="Link*"
        messages={{
          post:
            'A link to where the bug can be seen, in storybook, a CI branch or in production.',
        }}
        value={linkName}
        onChange={(e) =>
          dispatch({
            type: 'SET_LINK_NAME',
            payload: e.target.value,
          })
        }
      />
      <TextArea
        label="Description*"
        value={description}
        messages={{
          post:
            'A description of the bug, expected behavior, and any relevant comments.',
        }}
        onChange={(e) =>
          dispatch({
            type: 'SET_DESCRIPTION',
            payload: e.target.value,
          })
        }
      />
      <TextArea
        label="Steps to Reproduce"
        value={steps}
        placeholder="1. Step one..."
        onChange={(e) =>
          dispatch({
            type: 'SET_STEPS',
            payload: e.target.value,
          })
        }
      />
      <TextArea
        label="Meta"
        messages={{
          post:
            'If your bug is related to other issues or pull requests, please include them here.',
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

      <Header size="4">Platform</Header>
      <Paragraph size="2">
        Please fill out the platform information to help us pinpoint
        the issue. If the issue is not specific to a particular
        platform, it is okay to be general. Otherwise, list the
        browsers, their versions, and operating systems known to be
        affected. Include the most recent version of Iris affected by
        the bug.
      </Paragraph>
      <Input
        label="Affected Platforms*"
        value={affectedPlatforms}
        onChange={(e) =>
          dispatch({
            type: 'SET_AFFECTED_PLATFORMS',
            payload: e.target.value,
          })
        }
      />

      <Header size="6">My environment</Header>
      <Row>
        <Input
          label="Iris*"
          placeholder="eg: latest"
          value={iris}
          onChange={(e) =>
            dispatch({
              type: 'SET_IRIS',
              payload: e.target.value,
            })
          }
        />
        <Input
          label="App"
          value={app}
          placeholder="eg: vimeo/live"
          onChange={(e) =>
            dispatch({
              type: 'SET_APP',
              payload: e.target.value,
            })
          }
        />
        <Input
          label="Browser"
          value={browser}
          placeholder="eg: Chrome 81.0.4044.138"
          onChange={(e) =>
            dispatch({
              type: 'SET_BROWSER',
              payload: e.target.value,
            })
          }
        />
        <Input
          label="OS"
          value={os}
          placeholder="eg: macOS 10.15.7"
          onChange={(e) =>
            dispatch({
              type: 'SET_OS',
              payload: e.target.value,
            })
          }
        />
      </Row>
    </Template>
  );
}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin: 0 2rem 1rem 0;
    width: ${rem(200)};
  }
`;

const BugTag = styled(Tag)`
  display: inline;
  background: red;
  color: white;
`;

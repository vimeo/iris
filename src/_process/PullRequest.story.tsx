import React, { useReducer } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { Template } from './Template';
import { Paragraph, Link } from '../typography';
import { Input, TextArea, Checkbox } from '../components';

import { initialState, reducer } from './PullReqest.state';

export default { title: 'Process/Templates' };

export function PullRequest() {
  const [state, dispatch] = useReducer(reducer, initialState());
  const { branchName, description, comments, meta } = state;

  const CopyBlock = `
# Details
### 📚 [\`${branchName}\` story](https://github.vimeows.com/pages/vimeo/sb/iris/${branchName})

### Description
${description}

### Comments
${comments}

### Meta
${meta}

**_Stakeholders:_** @Vimeo/design-systems-core

# Screenshots
Remember to attach screenshots here!
`;

  return (
    <Template
      name="Pull Request"
      instructions={
        <>
          <Paragraph size="2" style={{ marginBottom: '1rem' }}>
            Please use the instructions list below to track your
            progress for opening an new{' '}
            <Link
              href="https://github.vimeows.com/Vimeo/iris/compare"
              target="_blank"
            >
              Pull Request
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
                Run <i>yarn deploy-storybook</i> to deploy a storybook
                of your branch.
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
                . <b>Please also tag the relevant designer.</b> All
                changes must be approved by the design team.
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
                <i>On Github:</i> Under <b>Labels</b>, add any
                relevant tags.
              </p>
            }
          />
          <Checkbox
            label={
              <p>
                <i>On Github:</i> Under <b>Projects</b>, add Design
                Systems, and sort into "active" if the PR is still in
                progress, or "review" if the PR is ready to be
                reviewed.
              </p>
            }
          />
          <Checkbox
            label={
              <p>
                <i>On Github:</i> Under <b>Milestones</b>, if known,
                add the appropriate milestone for when this request
                will be completed. Typically, this will be the next
                Iris version release.
              </p>
            }
          />
        </>
      }
      copyBlock={CopyBlock}
    >
      <Input
        label="Branch name*"
        value={branchName}
        onChange={(e) =>
          dispatch({
            type: 'SET_BRANCH_NAME',
            payload: e.target.value,
          })
        }
      />
      <TextArea
        label="Description*"
        value={description}
        messages={{
          post:
            'Describe the purpose of the pull request below: specifically the what, how, and why of the implementation.',
        }}
        onChange={(e) =>
          dispatch({
            type: 'SET_DESCRIPTION',
            payload: e.target.value,
          })
        }
      />
      <TextArea
        label="Comments"
        value={comments}
        messages={{
          post: 'Any additional comments or notes.',
        }}
        onChange={(e) =>
          dispatch({
            type: 'SET_COMMENTS',
            payload: e.target.value,
          })
        }
      />
      <TextArea
        label="Meta"
        messages={{
          post:
            'If your pull request is related to other issues or pull requests, please include them here.',
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

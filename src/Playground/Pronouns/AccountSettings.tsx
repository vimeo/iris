import React, { useState } from 'react';
import { Header2, ParagraphMd, Header5, Header4 } from '../../Type';
import { InputText } from '../../InputText/InputText';
import { InputCheckbox } from '../../InputCheckbox/InputCheckbox';
import styled from 'styled-components';
import { InputRadio } from '../../InputRadio/InputRadio';
import { rgba } from 'polished';
import { IronHeart, Paste } from '../../Color/Color';

export const AccountSettings = ({ email = '', name = '' }) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [pronouns, setPronouns] = useState({
    they: false,
    she: false,
    he: false,
    other: false,
  });
  const [preferredPronoun, setPreferredPronoun] = useState('');

  const updatePronouns = changedPronoun => event =>
    setPronouns({
      ...pronouns,
      [changedPronoun]: event.target.checked,
    });

  return (
    <>
      <Header2>Account</Header2>
      <div>
        <SectionHeader>Name</SectionHeader>
        <Description>
          A lot of people use their real name, but anything you choose
          will probably be better than "user5582238."
        </Description>
        <InputText
          id="name"
          showLabel={false}
          value={userName}
          onChange={e =>
            setUserName((e.target as HTMLInputElement).value)
          }
        />
      </div>
      <br />
      <br />
      <div>
        <SectionHeader>Email address</SectionHeader>
        <Description>
          Use this to log in to your account and to receive email
          notifications and updates from us.
        </Description>
        <InputText
          id="email"
          showLabel={false}
          value={userEmail}
          onChange={e =>
            setUserEmail((e.target as HTMLInputElement).value)
          }
        />
      </div>
      <br />
      <br />
      <div>
        <SectionHeader>Pronouns</SectionHeader>
        <Description>
          Help us call you by the proper pronouns.
        </Description>
        <PronounCheckboxes>
          <InputCheckbox
            id="they/them"
            label="they/them"
            onClick={updatePronouns('they')}
          />
          <InputCheckbox
            id="she/her"
            label="she/her"
            onClick={updatePronouns('she')}
          />
          <InputCheckbox
            id="he/him"
            label="he/him"
            onClick={updatePronouns('he')}
          />
          <InputCheckbox
            id="other"
            label="other"
            onClick={updatePronouns('other')}
          />
        </PronounCheckboxes>
        {hasAtLeast(2, pronouns) && (
          <div style={{ paddingLeft: '2rem' }}>
            <SubHeader>However, I prefer (optional):</SubHeader>
            <PronounCheckboxes>
              {Object.keys(pronouns)
                .filter(pronoun => pronouns[pronoun])
                .map(p => (
                  <InputRadio
                    key={p}
                    id={`radio-${p}`}
                    label={p}
                    checked={preferredPronoun === p}
                    onClick={() =>
                      setPreferredPronoun(
                        preferredPronoun === p ? '' : p,
                      )
                    }
                    readOnly
                  />
                ))}
            </PronounCheckboxes>
          </div>
        )}
      </div>
      <br />
      <br />
      <Summary
        email={userEmail}
        name={userName}
        pronouns={pronouns}
        preferredPronoun={preferredPronoun}
      />
    </>
  );
};

const Summary = ({ email, name, pronouns, preferredPronoun }) => {
  let text = '';

  if (name.length > 1) {
    text = `My name is ${name}.`;
  }

  const pronounArray = Object.keys(pronouns)
    .filter(p => pronouns[p])
    .map(p => duo[p]);

  if (hasAtLeast(3, pronouns)) {
    text =
      text +
      ` My pronouns are ${[
        ...pronounArray.splice(0, pronounArray.length - 1),
        `and ${pronounArray.slice(-1)}`,
      ].join(', ')}`;
  } else if (hasAtLeast(2, pronouns)) {
    text = text + ` My pronouns are ${pronounArray.join(' and ')}`;
  } else if (hasAtLeast(1, pronouns)) {
    text = text + ` My pronouns are ${pronounArray}`;
  }

  if (hasAtLeast(1, pronouns)) {
    text = preferredPronoun ? text + ',' : text + '.';
  }

  if (preferredPronoun) {
    text = text + ` but I prefer ${preferredPronoun}.`;
  }

  if (email.length > 3 && email.includes('@')) {
    text = text + ` My email is ${email}.`;
  }

  return (
    <SummaryWrap>
      <Header4>{text}</Header4>
    </SummaryWrap>
  );
};

const SummaryWrap = styled.div`
  background: ${Paste};
  border-radius: 0.25rem;
  padding: 1rem;
  line-height: 1.5 !important;

  > * {
    line-height: 1.5 !important;
  }
`;

const SubHeader = styled(ParagraphMd)`
  margin: 0.5rem 0;
`;

const SectionHeader = styled(Header5)`
  margin-bottom: 0.25rem;
`;

const Description = styled(ParagraphMd)`
  color: ${rgba(IronHeart, 0.8)};
`;

const PronounCheckboxes = styled.div`
  > div {
    display: inline-block;
    margin: 0 1rem 1rem 0;
    width: auto;
  }
`;

const hasAtLeast = (x, pronouns) =>
  Object.keys(pronouns).filter(p => pronouns[p]).length > x - 1;

const duo = {
  they: 'they/them',
  she: 'she/her',
  he: 'he/him',
  other: 'other',
};

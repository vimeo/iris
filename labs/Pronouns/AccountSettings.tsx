import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import {
  Header2,
  ParagraphMd,
  Header5,
  Header4,
} from '../../src/Type';
import { InputText } from '../../src/InputText/InputText';
import { InputCheckbox } from '../../src/InputCheckbox/InputCheckbox';
import { InputRadio } from '../../src/InputRadio/InputRadio';
import { IronHeart, Paste, Black } from '../../src/Color/Color';
import { InputToggle } from '../../src';

export const AccountSettings = ({ email = '', name = '' }) => {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [neoPronouns, setNeoPronouns] = useState('specify your own');
  const [pronouns, setPronouns] = useState({
    they: false,
    she: false,
    he: false,
    other: false,
  });
  const [preferredPronoun, setPreferredPronoun] = useState('');
  const [displayPronouns, setDisplayPronouns] = useState(false);

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
            label={
              <>
                <input
                  type="text"
                  id="neopronouns"
                  value={neoPronouns}
                  onChange={e =>
                    setNeoPronouns(
                      (e.target as HTMLInputElement).value,
                    )
                  }
                />
              </>
            }
            onClick={updatePronouns('other')}
          />
        </PronounCheckboxes>
        {hasAtLeast(2, pronouns) && (
          <div style={{ paddingLeft: '2rem' }}>
            <SubHeader>However, I prefer (optional)</SubHeader>
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
        {hasAtLeast(1, pronouns) && (
          <div style={{ paddingLeft: '2rem' }}>
            <SubHeader>
              Display my pronouns throughout Vimeo
            </SubHeader>
            <PronounCheckboxes>
              <InputRadio
                id="displayPronouns"
                label="display"
                checked={displayPronouns}
                onClick={() =>
                  setDisplayPronouns(display => !display)
                }
                readOnly
              />
              <InputRadio
                id="hidePronouns"
                label="hide"
                checked={!displayPronouns}
                onClick={() =>
                  setDisplayPronouns(display => !display)
                }
                readOnly
              />
            </PronounCheckboxes>
          </div>
        )}
      </div>
      <br />
      <br />
      <Header2>Summary</Header2>
      <Summary
        email={userEmail}
        name={userName}
        pronouns={pronouns}
        neoPronouns={neoPronouns}
        preferredPronoun={preferredPronoun}
      />
    </>
  );
};

const Summary = ({
  email,
  name,
  pronouns,
  neoPronouns,
  preferredPronoun,
}) => {
  // console.log(neoPronouns);
  // console.log(pronouns.other);

  const nameText = name.length > 1 && (
    <>
      My name is <em>{name}</em>.
    </>
  );

  const preferredText = hasAtLeast(1, pronouns) && preferredPronoun && (
    <>
      {' '}
      but I prefer <em>{preferredPronoun}</em>.
    </>
  );

  const emailText = email.length > 3 && email.includes('@') && (
    <>
      {' '}
      My email is <em>{email}</em>.
    </>
  );

  const pronounArray = Object.keys(pronouns)
    .filter(p => pronouns[p])
    .map(p => duo[p]);

  const pronounText = hasAtLeast(1, pronouns) && (
    <>
      {hasAtLeast(3, pronouns) ? (
        <>
          {' '}
          My pronouns are{' '}
          <em>
            {[
              ...pronounArray.splice(0, pronounArray.length - 1),
              `and ${pronounArray.slice(-1)}`,
            ]
              .map(p => {
                return p !== 'he/him' &&
                  p !== 'she/her' &&
                  p !== 'they/them'
                  ? neoPronouns
                  : p;
              })
              .join(', ')}
          </em>
        </>
      ) : hasAtLeast(2, pronouns) ? (
        <>
          {' '}
          My pronouns are{' '}
          <em>
            {pronounArray
              .map(p => {
                return p !== 'he/him' &&
                  p !== 'she/her' &&
                  p !== 'they/them'
                  ? neoPronouns
                  : p;
              })
              .join(' and ')}
          </em>
        </>
      ) : (
        hasAtLeast(1, pronouns) && (
          <>
            {' '}
            My pronouns are{' '}
            <em>
              {pronounArray.map(p => {
                return p !== 'he/him' &&
                  p !== 'she/her' &&
                  p !== 'they/them'
                  ? neoPronouns
                  : p;
              })}
            </em>
          </>
        )
      )}
      {hasAtLeast(1, pronouns) && preferredPronoun ? ',' : '.'}
    </>
  );

  return (
    <SummaryWrap>
      <Header4>
        {nameText}
        {pronounText}
        {preferredText}
        {emailText}
      </Header4>
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

  em {
    font-style: normal;
    border-bottom: 2px solid ${rgba(Black, 0.5)};
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

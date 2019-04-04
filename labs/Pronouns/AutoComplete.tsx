import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { rgba } from 'polished';
import { getCoord } from './getCoord';

import { Black, White, VimeoBlue } from '../../src/Color/Color';
import { Avatar } from '../../src/Avatar/Avatar';

export const TextArea = ({ people }) => {
  const [value, setValue] = useState('');
  const [pronounFound, setPronounFound] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({});
  // const [pronouns, setPronouns] = useState([]);
  const doChange = e => {
    const text = e.target.value;
    const currentWord = getCurrentWord(text);

    setPronounFound(!!isPronoun(currentWord));
    setCursorPosition(getCoord(e.target, e.target.selectionEnd));

    // const pronouns = text
    //   .toLowerCase()
    //   .match(
    //     /(they[.,\/#!$%\^&\*;:{}=\-_`~() ]|them[.,\/#!$%\^&\*;:{}=\-_`~() ]|theirs[.,\/#!$%\^&\*;:{}=\-_`~() ]|she[.,\/#!$%\^&\*;:{}=\-_`~() ]|her[.,\/#!$%\^&\*;:{}=\-_`~() ]|hers[.,\/#!$%\^&\*;:{}=\-_`~() ]|he[.,\/#!$%\^&\*;:{}=\-_`~() ]|him[.,\/#!$%\^&\*;:{}=\-_`~() ]|his)/g,
    //   );
    // setPronouns(pronouns);

    setValue(e.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <textarea
        value={value}
        onChange={doChange}
        style={{
          width: '100%',
          minHeight: '5rem',
          fontSize: '1rem',
        }}
      />
      <UserComplete
        active={!!pronounFound}
        cursorPosition={cursorPosition}
        people={people}
        value={value}
        setValue={setValue}
        setPronounFound={setPronounFound}
      />
      {/* <div>
        <h2>pronouns</h2>
        {pronouns &&
          pronouns.map((pronoun, i) => (
            <span key={i} style={{ margin: '0.5rem' }}>
              {pronoun}
            </span>
          ))}
      </div> */}
    </div>
  );
};

const UserComplete = ({
  active,
  cursorPosition,
  people,
  value,
  setValue,
  setPronounFound,
}) => {
  return (
    active && (
      <UserCompleteWrapper cursorPosition={cursorPosition}>
        {people.map((person, i) => (
          <User
            key={i}
            onClick={e => {
              setValue(selectPronoun(value, person.pronounKey));
              setPronounFound(false);
            }}
          >
            <Avatar
              alt="name"
              src={`https://i.vimeocdn.com/portrait/${
                person.id
              }_75x75`}
              srcSet={`https://i.vimeocdn.com/portrait/${
                person.id
              }_150x150 2x`}
              style={{
                width: '2rem',
                marginRight: '0.5rem',
              }}
            />
            <span>{person.name}</span>
            <span style={{ fontWeight: 700 }}>{person.pronouns}</span>
          </User>
        ))}
      </UserCompleteWrapper>
    )
  );
};

const User = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${rgba(Black, 0.2)};
  line-height: 2rem;
  font-size: 1rem;
  display: flex;

  > span {
    margin-left: 0.5rem;
  }

  &:hover {
    background: ${rgba(VimeoBlue, 0.334)};
  }
`;

const UCWKeyframes = keyframes`
  0% {
    transform: translate(4px, 24px);
  }

  66% {
    transform: translate(-2px, 24px);
  }

  100% {
    transform: translate(0, 24px);
  }
`;

const UCWAnimation = css`
  animation: ${UCWKeyframes} 300ms both ease-in-out;
`;

const UserCompleteWrapper = styled.div<any>`
  position: absolute;
  top: ${props => props.cursorPosition.top}px;
  left: ${props => props.cursorPosition.left}px;
  padding: 0rem;
  border-radius: 0.125rem;
  border: 1px solid ${rgba(Black, 0.2)});
  background: ${rgba(White, 0.9)};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px -8px,
    rgba(0, 0, 0, 0.3) 0px 0px 4px -1px;
  ${UCWAnimation};
  transform-origin: 0 0;
  cursor: pointer;
`;

const isPronoun = string => pronouns.includes(string.toLowerCase());

const pronouns = [
  'they',
  'them',
  'their',
  'theirs',
  'she',
  'her',
  'hers',
  'he',
  'him',
  'his',
];

const getCurrentWord = string => {
  //const textArray = string.split(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g);
  const textArray = string.match(/\w+|\s+|[^\s\w]+/g);
  return textArray ? textArray[textArray.length - 1] : '';
};

const selectPronoun = (text, pronoun) => {
  // const textArray = text.split(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g);
  const textArray = text.match(/\w+|\s+|[^\s\w]+/g);
  const last = textArray.length - 1;
  const currentWord = getCurrentWord(text).toLowerCase();
  const newPronoun =
    PronounMachine[pronoun][pronounCase(currentWord)];

  const newText = textArray
    .slice(0, last)
    .concat(newPronoun)
    .join('');
  //.join(' ')
  //.concat(' ');

  // console.log(newText);

  return newText;
};

const pronounCase = string => {
  // console.log('string: ', string);
  switch (string) {
    case 'they':
    case 'she':
    case 'he':
      return 'subject';
    case 'them':
    case 'her':
    case 'him':
      return 'object';
    case 'their':
    case 'her':
    case 'his':
      return 'possessiveA';
    case 'theirs':
      return 'possessiveP';
    default:
      console.warn('pronoun error');
      return '';
  }
};

const PronounMachine = {
  they: {
    subject: 'they',
    object: 'them',
    possessiveA: 'their',
    possessiveP: 'theirs',
    reflexive: 'themself',
  },
  she: {
    subject: 'she',
    object: 'her',
    possessiveA: 'her',
    possessiveP: 'hers',
    reflexive: 'herself',
  },
  he: {
    subject: 'he',
    object: 'him',
    possessiveA: 'his',
    possessiveP: 'his',
    reflexive: 'himself',
  },
};

import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Story } from '../../storybook';

import { Comment } from './Comment';
import { TextArea } from './AutoComplete';
import { AccountSettings } from './AccountSettings';
import { UserInfo } from './UserInfoSettings';
import { AutoplayList } from './AutoplayList';

import { Header } from '../../typography';

const componentName = 'Comment';

const commentVariations = {
  'badges inline': 'A',
  'badges below': 'B',
  'text inline': 'C',
  tooltip: 'D',
  'badge below avatar': 'E',
  'all badges below avatar': 'F',
  'text below avatar': 'G',
};

storiesOf('Labs|Pronouns/', module).add('comments', () => (
  <Story title={componentName}>
    {demoProps.map((comment, i) => (
      <Comment
        key={i}
        name={comment.name}
        id={comment.id}
        pronouns={comment.pronouns}
        href={comment.href}
        badge={comment.badge}
        variation={select('variation', commentVariations, 'A')}
      >
        {comment.children}
      </Comment>
    ))}
  </Story>
));

storiesOf('Labs|Pronouns/settings/', module)
  // https://vimeo.com/settings/account/general
  .add('general settings', () => (
    <Story title="Settings">
      <AccountSettings />
    </Story>
  ))
  // https://vimeo.com/settings/account/general
  .add('user info', () => (
    <Story title="Settings">
      <UserInfo name="Sean McIntyre" badge="staff" id="26000555" />
    </Story>
  ));

storiesOf(`Labs|Pronouns/`, module)
  .add('autocomplete', () => (
    <Story title="Autocomplete">
      {demoProps
        .filter(user => !user.name.includes('Vim'))
        .map(comment => (
          <Comment
            key={comment.id}
            name={comment.name}
            id={comment.id}
            pronouns={comment.pronouns}
            href={comment.href}
            badge={comment.badge}
            variation={select('variation', commentVariations, 'A')}
          >
            {comment.children}
          </Comment>
        ))}
      <Header size="4">Add a new comment</Header>
      <TextArea
        people={demoProps.filter(user => !user.name.includes('Vim'))}
      />
    </Story>
  ))
  .add('autoplay list', () => (
    <Story title="Video List">
      <AutoplayList
        videos={staffPicks}
        variation={select('variation', autoplayVariations, 'A')}
      />
    </Story>
  ));
// .add('profile page', () => (
//   <Story title="Profile">
//     <div />
//   </Story>
// ))
// .add('top nav', () => (
//   <Story title="Top Nav">
//     <div />
//   </Story>
// ))
// .add('video cards', () => (
//   <Story title="Video Card">
//     <div />
//   </Story>
// ))
// // https://vimeo.com/categories/
// // https://vimeo.com/channels/staffpicks
// .add('video list', () => (
//   <Story title="Video List">
//     <div />
//   </Story>
// ))
// // video page
// .add('video info', () => (
//   <Story title="Video List">
//     <div />
//   </Story>
// ))
// // video page (autoplay next)
// //https://vimeo.com/settings/account/team_members
// .add('manage team', () => (
//   <Story title="Video List">
//     <div />
//   </Story>
// ));

const autoplayVariations = {
  '(A) text inline': 'A',
  '(B) badge inline': 'B',
};

const staffPicks = [
  {
    title: 'Field of Vision - Libre',
    author: 'Field of Vision',
    src: '766327855_260x146.jpg',
  },
  {
    title: 'Beast Make Bomb - Rough it Out',
    author: 'Sean McIntyre',
    pronouns: 'she/her',
    src: '118740015_1560x878.jpg',
  },
  {
    title: 'MTL PINBALL',
    author: 'Barth Coelho',
    src: '766125136_260x146.jpg',
  },
  {
    title: 'No Le Digan - Carlos Medina (Official Music Video)',
    author: 'Meow Wolf',
    src: '765783081_260x146.jpg',
  },
];

const demoProps = [
  {
    name: 'Sean McIntyre',
    id: '26000555',
    pronouns: 'she/her',
    pronounKey: 'she',
    href: 'https://vimeo.com/seanmcintyre',
    badge: 'staff',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad provident, asperiores debitis explicabo consectetur impedit accusantium similique fugiat adipisci.',
  },
  {
    name: 'Vimonius Usarius',
    id: 'defaults-blue',
    pronouns: 'he/him',
    pronounKey: 'he',
    href: 'https://vimeo.com/seanmcintyre',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad provident, asperiores debitis explicabo consectetur impedit accusantium similique fugiat adipisci.',
  },
  {
    name: 'Casey Pugh',
    id: '23588327',
    pronouns: 'he/him',
    pronounKey: 'he',
    href: 'https://vimeo.com/casey',
    badge: 'staff',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad provident, asperiores debitis explicabo consectetur impedit accusantium similique fugiat adipisci.',
  },
  {
    name: 'Hunter Schneider',
    id: '18255517',
    pronouns: 'they/them',
    pronounKey: 'they',
    href: 'https://vimeo.com/hunterschneider',
    badge: 'staff',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad provident, asperiores debitis explicabo consectetur impedit accusantium similique fugiat adipisci.',
  },
  {
    name: 'Vimonia Usaria',
    id: 'defaults-blue',
    pronouns: 'she/her',
    pronounKey: 'she',
    href: 'https://vimeo.com/seanmcintyre',
    badge: 'plus',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad provident, asperiores debitis explicabo consectetur impedit accusantium similique fugiat adipisci.',
  },
  {
    name: 'Vimonium Usarium',
    id: 'defaults-blue',
    pronouns: 'they/them',
    pronounKey: 'they',
    href: 'https://vimeo.com/seanmcintyre',
    badge: 'pro',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad provident, asperiores debitis explicabo consectetur impedit accusantium similique fugiat adipisci.',
  },
];

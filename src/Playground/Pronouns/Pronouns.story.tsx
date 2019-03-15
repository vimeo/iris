import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../.storybook/ui/Story';

import { Header4 } from '../../Type';

import { Comment } from './Comment';
import { TextArea } from './AutoComplete';
import { AccountSettings } from './AccountSettings';
import { UserInfo } from './UserInfoSettings';

const componentName = 'Comment';

storiesOf('playground/pronouns/comments/', module)
  .add('(A) badges below', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <Comment
          name={comment.name}
          id={comment.id}
          pronouns={comment.pronouns}
          href={comment.href}
          badge={comment.badge}
          variation="A"
        >
          {comment.children}
        </Comment>
      ))}
    </Story>
  ))
  .add('(B) badges inline', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <Comment
          name={comment.name}
          id={comment.id}
          pronouns={comment.pronouns}
          href={comment.href}
          badge={comment.badge}
          variation="B"
        >
          {comment.children}
        </Comment>
      ))}
    </Story>
  ))
  .add('(C) text inline', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <Comment
          name={comment.name}
          id={comment.id}
          pronouns={comment.pronouns}
          href={comment.href}
          badge={comment.badge}
          variation="C"
        >
          {comment.children}
        </Comment>
      ))}
    </Story>
  ))
  .add('(D) tooltip', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <Comment
          name={comment.name}
          id={comment.id}
          pronouns={comment.pronouns}
          href={comment.href}
          badge={comment.badge}
          variation="D"
        >
          {comment.children}
        </Comment>
      ))}
    </Story>
  ))
  .add('(E) badge below avatar', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <div />
      ))}
    </Story>
  ))
  .add('(F) all badges below avatar', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <div />
      ))}
    </Story>
  ))
  .add('(G) text below avatar', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <div />
      ))}
    </Story>
  ));

storiesOf('playground/pronouns/settings/', module)
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

storiesOf(`playground/pronouns/`, module)
  .add('autocomplete', () => (
    <Story title="Pronoun Autocomplete">
      <Header4>Add a new comment</Header4>
      <TextArea people={demoProps} />
    </Story>
  ))
  .add('profile page', () => (
    <Story title="Profile">
      <div />
    </Story>
  ))
  .add('top nav', () => (
    <Story title="Top Nav">
      <div />
    </Story>
  ))
  .add('video cards', () => (
    <Story title="Video Card">
      <div />
    </Story>
  ))
  // https://vimeo.com/categories/
  // https://vimeo.com/channels/staffpicks
  .add('video list', () => (
    <Story title="Video List">
      <div />
    </Story>
  ))
  // video page
  .add('video info', () => (
    <Story title="Video List">
      <div />
    </Story>
  ))
  // video page (autoplay next)
  .add('video info', () => (
    <Story title="Video List">
      <div>
        <span>More from Vimeo Staff Picks</span>
        <span>Autoplay next video</span>
        <div />
        <div />
        <div />
      </div>
    </Story>
  ))
  //https://vimeo.com/settings/account/team_members
  .add('manage team', () => (
    <Story title="Video List">
      <div />
    </Story>
  ));

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

import React from 'react';
import { CommentA } from './CommentA';
import { CommentB } from './CommentB';
import { CommentC } from './CommentC';
import { CommentD } from './CommentD';
import { storiesOf } from '@storybook/react';
import { Story } from '../../../.storybook/ui/Story';
import { TextArea } from './AutoComplete';
import { Header6, Header4 } from '../../Type';

const componentName = 'Comment';

storiesOf(`playground/pronouns/`, module)
  .add('comment, badges below', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <CommentA
          name={comment.name}
          id={comment.id}
          pronouns={comment.pronouns}
          href={comment.href}
          badge={comment.badge}
        >
          {comment.children}
        </CommentA>
      ))}
    </Story>
  ))
  .add('comment, badges inline', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <CommentB
          name={comment.name}
          id={comment.id}
          pronouns={comment.pronouns}
          href={comment.href}
          badge={comment.badge}
        >
          {comment.children}
        </CommentB>
      ))}
    </Story>
  ))
  .add('comment, text inline', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <CommentC
          name={comment.name}
          id={comment.id}
          pronouns={comment.pronouns}
          href={comment.href}
          badge={comment.badge}
        >
          {comment.children}
        </CommentC>
      ))}
    </Story>
  ))
  .add('tooltip', () => (
    <Story title={componentName}>
      {demoProps.map(comment => (
        <CommentD
          name={comment.name}
          id={comment.id}
          pronouns={comment.pronouns}
          href={comment.href}
          badge={comment.badge}
        >
          {comment.children}
        </CommentD>
      ))}
    </Story>
  ))
  .add('autocomplete', () => (
    <Story title="Pronoun Autocomplete">
      <Header4>Add a new comment</Header4>
      <TextArea people={demoProps} />
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

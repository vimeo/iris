import React from 'react';
import { storiesOf } from '@storybook/react';
import { AddNewItemCard } from './AddNewItemCard';
import { Grid } from '../Grid/Grid';
import { GridBlock } from '../GridBlock/GridBlock';
import { GridCol } from '../GridCol/GridCol';
import { Story } from '../../.storybook/Story';

const componentName = 'Add New Item Card';

storiesOf(`components/`, module).add('Add New Item Card', () => (
  <Story title={componentName} width="100%">
    <Grid isNested>
      <GridBlock>
        <GridCol mdSpan={12} lgSpan={6}>
          <AddNewItemCard
            text="Add New Item"
            anchorProps={{ href: '#' }}
          />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
          <AddNewItemCard
            text="Add Another New Item"
            anchorProps={{
              onClick: () => console.log('click!'),
              href: '#',
              target: '_blank',
            }}
          />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
          <AddNewItemCard
            text="Add Some Other Item"
            anchorProps={{
              onClick: () => console.log('click!'),
              href: '#',
            }}
          />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
          <AddNewItemCard
            text="Add All the Item"
            anchorProps={{
              onClick: () => console.log('click!'),
            }}
          />
        </GridCol>
      </GridBlock>
      <GridBlock>
        <GridCol mdSpan={12} lgSpan={6}>
          <AddNewItemCard
            fluid
            text="Add New Item"
            anchorProps={{ href: '#' }}
          />
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
          <div
            style={{
              border: '1px solid black',
              padding: '5rem 1rem',
            }}
          >
            <h3>Lorem, ipsum.</h3>
          </div>
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
          <div
            style={{
              border: '1px solid black',
              padding: '5rem 1rem',
            }}
          >
            <h3>Lorem, ipsum.</h3>
          </div>
        </GridCol>
        <GridCol mdSpan={12} lgSpan={6}>
          <div
            style={{
              border: '1px solid black',
              padding: '5rem 1rem',
            }}
          >
            <h3>Lorem, ipsum.</h3>
          </div>
        </GridCol>
      </GridBlock>
    </Grid>
  </Story>
));

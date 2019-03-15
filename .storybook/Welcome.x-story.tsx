import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story } from './ui/Story';
import { Header3, Header2 } from '../src/Type';
import styled from 'styled-components';
import {
  Paste,
  SovereignShadow,
  RavenImperial,
  White,
} from '../src/Color/Color';

storiesOf('Iris|Welcome', module)
  .add('Welcome to Iris!', () => (
    <Story title="Welcome to Iris!" width="50rem">
      <Header3>
        Iris is the design system that powers Vimeo's web apps.
      </Header3>
      <Pre>
        {
        /* tslint:disable */
        /* prettier-ignore */
      }
        <Code>
{'\n'}                                `..`                                  
{'\n'}                            .://--/                                  
{'\n'}                          `--::.``.`                                 
{'\n'}                         `.-::.``  `             `::..`````          
{'\n'}               ..//-`    -/+:-```  :       `-///+o/:-..````..`       
{'\n'}``````   `   .-.`::....  :++:-.`.`+.      -//::::--.``  ``...:       
{'\n'}`...-----:/+o++os++/://  -++/---:o.     `:+/::///:-.`` ``.-://       
{'\n'}.-:::::---.``./++:-...--``+++++s/     `:/::+sso+++/+oyo/://+os       
{'\n'}.:////////:``````-//-.`./:+o+//.`.----+/./+o+        `:yhyssss       
{'\n'} `/++////+o+-`-/-``./+/:/o--...`./+++::sy+so-           /hhhys       
{'\n'}   :+++ossyhdhsoo/..`-+so/.:/+sdhhds.   .--              `/syo       
{'\n'}    .+ooossyyyys:``-:-.:ss//oshmdd:                                  
{'\n'}      :+ssso+:. -::/::://oyhoymmd.                                 
{'\n'}              ``-:-:/o:/+smmmymm.                                  
{'\n'}           `..-::-.````-+++ymdmo                                   
{'\n'}          ---..        `./o+odm`                                   
{'\n'}         //:-.`    ``  ``-+oosd                                    
{'\n'}        -so+:.`````.```-::/sysm/    -s                             
{'\n'}        .ysso:.`......-:/+osyohm`  :dh                             
{'\n'}         -hs/----.---::/+ssyy.hms -shm                               
{'\n'}          /:--::--::://+syys. odm-ssym:                              
{'\n'}         -::::::::+ooosyyyo`  -hmhsyhm+                              
{'\n'}        .::/://::+yhhhhhs-     ymysyddo                d8,           d8,                        
{'\n'}         -///////ohho+:`       :mssymdo               `8P           `8P                         
{'\n'}         `/++++++s/             ysshmdo                                                         
{'\n'}          `/ooooss.             -yyhdd/                88b  88bd88b  88b .d888b,                
{'\n'}            :ssssy/             -ydddm.                88P  88P'  `  88P ?8b,                   
{'\n'}              .:/+:             -hdddh                d88  d88      d88    `?8b                 
{'\n'}                                -hddm+               d88' d88'     d88' `?888P'                 
{'\n'}                                -dmmN`                               
{'\n'}                                .mNNs                                
{'\n'}                                 dNN.                                
{'\n'}                                 yNh                                 
{'\n'}                                 `.` 
      </Code>
      </Pre>
    </Story>
  ))
  .add('Modules', () => (
    <Story title="Modules" width="100%">
      <div>
        <Header3>Iris 7 is organized into multiple modules:</Header3>
        <Ol>
          <Header3>
            <li>Color</li>
          </Header3>
          <Header3>
            <li>Components</li>
          </Header3>
          <Header3>
            <li>Icons</li>
          </Header3>
          <Header3>
            <li>Illustration</li>
          </Header3>
          <Header3>
            <li>Legacy</li>
          </Header3>
          <Header3>
            <li>Motion</li>
          </Header3>
          <Header3>
            <li>Typography</li>
          </Header3>
          <Header3>
            <li>Utilities</li>
          </Header3>
        </Ol>
      </div>
      <br />
      <br />
      <Header3>You can import from them like this:</Header3>
      <DemoImports>
        <Pre>
          import {'{ Button, VideoCard }'} from
          '@vimeo/iris/components';
        </Pre>
        <Pre>
          import {'{ VimeoBlue, RavenImperial }'} from
          '@vimeo/iris/color';
        </Pre>
        <Pre>
          import {'{ SlideUpDown }'} from '@vimeo/iris/motion';
        </Pre>
        <Pre>
          import {'{ HeaderPlusUltra, ParagraphMd }'} from
          '@vimeo/iris/typography';
        </Pre>
        <Pre>
          import {'{ Comment, DownloadArrow, Replay }'} from
          '@vimeo/iris/icons';
        </Pre>
        <Pre>
          import {'{ VimeoExclusiveSm, VodThumbnailBadge }'} from
          '@vimeo/iris/illustration';
        </Pre>
        {}
        <Pre>import {'{ KEY_CODES }'} from '@vimeo/iris/legacy';</Pre>
      </DemoImports>
    </Story>
  ));

const Ol = styled.ol`
  li {
    margin-left: 1.5rem;
  }
`;

const Pre = styled.pre`
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 1rem;
  width: 45rem;
  word-wrap: normal;
  white-space: pre-wrap;
`;

const DemoImports = styled.div`
  background: ${RavenImperial};
  margin: 2rem 0;
  border-radius: 0.25rem;

  ${Pre} {
    color: ${White};
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: auto;
  }
`;

const Code = styled.code`
  background-color: initial;
  border: 0;
  display: inline;
  line-height: inherit;
  margin: 0;
  max-width: 45rem;
  overflow: visible;
  padding: 0;
  word-wrap: normal;
  border-radius: 3px;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo,
    Courier, monospace;
  width: 45rem;
  white-space: pre-wrap;
`;

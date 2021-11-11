import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { hslToColorString } from 'polished';

import { Themed } from './Styles';

export function Flower() {
  return (
    <Themed>
      <Pre>
        { /* prettier-ignore */ }
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
    </Themed>
  );
}

const Pre = styled.pre`
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 16px;
  width: 45rem;
  word-wrap: normal;
  white-space: pre-wrap;
`;

function Code({ children, ...props }) {
  const theme = useContext(ThemeContext);

  const saturation = 1;
  const lightness = theme.name === 'dark' ? 0.667 : 0.4;

  const color = (i) =>
    hslToColorString({
      hue: i * (360 / (children.length - 1)),
      saturation,
      lightness,
    });

  children = children.map((child, i) => (
    <span key={i} style={{ color: color(i) }}>
      {child}
    </span>
  ));

  return <CodeStyled {...props}>{children}</CodeStyled>;
}

const CodeStyled = styled.code`
  background-color: initial;
  color: red;
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
  font-weight: ${({ theme }) => (theme.name === 'dark' ? 400 : 800)};
  white-space: pre-wrap;
`;

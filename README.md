```
                                `..`                                  
                            .://--/                                  
                          `--::.``.`                                 
                         `.-::.``  `             `::..`````          
               ..//-`    -/+:-```  :       `-///+o/:-..````..`       
``````   `   .-.`::....  :++:-.`.`+.      -//::::--.``  ``...:       
`...-----:/+o++os++/://  -++/---:o.     `:+/::///:-.`` ``.-://       
.-:::::---.``./++:-...--``+++++s/     `:/::+sso+++/+oyo/://+os       
.:////////:``````-//-.`./:+o+//.`.----+/./+o+        `:yhyssss       
 `/++////+o+-`-/-``./+/:/o--...`./+++::sy+so-           /hhhys       
   :+++ossyhdhsoo/..`-+so/.:/+sdhhds.   .--              `/syo       
    .+ooossyyyys:``-:-.:ss//oshmdd:                                  
      :+ssso+:. -::/::://oyhoymmd.                                 
              ``-:-:/o:/+smmmymm.                                  
           `..-::-.````-+++ymdmo                                   
          ---..        `./o+odm`                                   
         //:-.`    ``  ``-+oosd                                    
        -so+:.`````.```-::/sysm/    -s                             
        .ysso:.`......-:/+osyohm`  :dh                             
         -hs/----.---::/+ssyy.hms -shm                               
          /:--::--::://+syys. odm-ssym:                              
         -::::::::+ooosyyyo`  -hmhsyhm+                              
        .::/://::+yhhhhhs-     ymysyddo                d8,           d8,                        
         -///////ohho+:`       :mssymdo               `8P           `8P                         
         `/++++++s/             ysshmdo                                                         
          `/ooooss.             -yyhdd/                88b  88bd88b  88b .d888b,                
            :ssssy/             -ydddm.                88P  88P'  `  88P ?8b,                   
              .:/+:             -hdddh                d88  d88      d88    `?8b                 
                                -hddm+               d88' d88'     d88' `?888P'                 
                                -dmmN`                               
                                .mNNs                                
                                 dNN.                                
                                 yNh                                 
                                 `.` 
```

### [Iris](https://github.vimeows.com/pages/vimeo/iris/master) is the design system that powers Vimeo's web apps.

<a href="https://github.vimeows.com/pages/vimeo/iris/master"><img src="https://github.vimeows.com/Vimeo/iris/blob/master/storybook.png" width="720px" /></a>

## Installation
[Yarn](https://github.com/yarnpkg/yarn) is required: `npm install -g yarn`

**For use in your project:**
```bash
$ yarn add @vimeo/iris
```

[styled-components](https://github.com/styled-components/styled-components) and [polished](https://github.com/styled-components/polished) are also required
```bash
$ yarn add styled-components@^4.1.0
$ yarn add polished@^3.0.0

```
***
**For local development:**

```bash
$ git clone git@github.vimeows.com:Vimeo/iris.git
$ cd iris
$ yarn
$ yarn storybook
```
This will open the Iris docs at http://localhost:9001/
***
🚨 All code in Iris must be formatted with [Prettier](https://github.com/prettier/prettier/) for acceptance. We reccomend using an extension to format on save for your code editor (ie. [vscode-prettier](https://github.com/prettier/prettier-vscode)).

🚨 If you have an issue with `@types/react-native` please run `yarn clean`.


***

## Using Components
Import components into your React app:
```jsx
import { Button, ButtonIconOnly } from '@vimeo/iris/components';
import { ParagraphMd } from '@vimeo/iris/typography';


<div>
    <ParagraphMd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ParagraphMd>
    <Button format="primary" size="xl">xl Button</Button>
    <ButtonIconOnly
        icon={<SettingsIcon title="Settings" />}
        format="dark"
        size="sm"
        onClick={clickHandler}
     />
</div>

```

Import SVG icons into your React app:
```jsx
import { Gear } from '@vimeo/iris/icons';

<Gear />

```

Adding additional styles to a component with the [`css`](https://medium.com/styled-components/announcing-native-support-for-the-css-prop-in-styled-components-245ca5252feb) prop:
```jsx
import { Button } from '@vimeo/iris/components';

<div>
    <Button
      format="primary" 
      size="xl"
      css={`
        margin-bottom: 2px;
      `}
    >
      xl Button
    </Button>
</div>

```

Adding additional styles to a component with the `styled` tag:
```jsx
import { ParagraphMd as P } from '@vimeo/iris/typography';
import { SunsetOrangeDarkened } from '@vimeo/iris/color';

const ParagraphMd = styled(P)`
  color: ${SunsetOrangeDarkened};
`;

<div>
    <ParagraphMd>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    </ParagraphMd>
</div>

```

## Need Help?

🆕 [Request a new component](https://github.vimeows.com/Vimeo/iris/issues/new?labels=type%3A+new+component&milestone=4&title=Component+Request%3A&assignee=sean-mcintyre&template=new-component.md)

🛠 [Request updates to an existing component](https://github.vimeows.com/Vimeo/iris/issues/new?labels=type%3A+update+component&milestone=4&title=Component+Update%3A&template=component-update.md)

🐛 [Report a bug](https://github.vimeows.com/Vimeo/iris/issues/new?labels=p2,type%3A+bug&milestone=4&title=Bug%3A&template=bug-report.md)

💬 [#iris](https://vimeo.slack.com/messages/C2UF8PH0A) Slack

## Roadmap

View the [roadmap](https://github.vimeows.com/Vimeo/iris/blob/master/ROADMAP.md). If you have an urgent need for a release, please reach out in [#iris](https://vimeo.slack.com/messages/C2UF8PH0A).


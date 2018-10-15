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


## Installation
Install [Yarn](https://github.com/yarnpkg/yarn): `npm install -g yarn`

**For use in your project:**
```bash
$ yarn add @vimeo/iris
```

[styled-components](https://github.com/styled-components/styled-components) and [polished](https://github.com/styled-components/polished) are also required
```bash
$ yarn add styled-components@^3.2.5
$ yarn add polished@^1.9.2

```
***
**For local development:**

Install [Gulp](https://github.com/gulpjs/gulp): `npm install -g gulp`

```bash
$ git clone git@github.vimeows.com:Vimeo/iris.git
$ cd iris
$ yarn
$ gulp
```
This will open the Iris docs at http://localhost:3000/pattern/Iris/Home
***
🚨 All code in Iris must be formatted with [Prettier](https://github.com/prettier/prettier/) for acceptance. We reccomend using an extension to format on save for your code editor (ie. [vscode-prettier](https://github.com/prettier/prettier-vscode)).

## Usage
Import components into your React app:
```jsx
import { Button, ButtonIconOnly, ParagraphMd } from '@vimeo/iris';


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
import GearIcon from 'iris/icons/gear';

<GearIcon />

```

## Need Help?

🆕 [Request a new component](https://github.vimeows.com/Vimeo/iris/issues/new?labels=type%3A+new+component&milestone=4&title=Component+Request%3A&assignee=sean-mcintyre&template=new_component_request.md)

🛠 [Request updates to an existing component](https://github.vimeows.com/Vimeo/iris/issues/new?labels=type%3A+update+component&milestone=4&title=Component+Update%3A&template=update_component_request.md)

🐛 [Report a bug](https://github.vimeows.com/Vimeo/iris/issues/new?labels=p2,type%3A+bug&milestone=4&title=Bug%3A&template=bug_report.md)

💬 [#web-iris](https://vimeo.slack.com/messages/C2UF8PH0A) Slack

🚨 [Active issues (minus stale issues and typescript conversions)[https://github.vimeows.com/Vimeo/iris/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+-milestone%3A%226.0.0%22+-project%3A%22vimeo%2Firis%2F2%22+-label%3A%22flag%3A+stale%22+]

## Release Schedule

During the conversion of Iris to TypeScript and styled-components, minor versions of Iris will be released biweekly on Wednesdays. If you have an urgent need for a release, please reach out in [#web-iris](https://vimeo.slack.com/messages/C2UF8PH0A) for an accelerated release.

## Releasing

Read the [release docs](https://github.vimeows.com/Vimeo/iris/wiki/Publishing-an-Iris-Release).

## Documentation
Read the [wiki](https://github.vimeows.com/Vimeo/iris/wiki).

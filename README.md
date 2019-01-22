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
$ yarn add styled-components@^3.4.9
$ yarn add polished@^2.3.1

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

***
**[Working with Iris in Vimeo via yarn link:](https://github.vimeows.com/Vimeo/iris/wiki/Working-with-Iris-in-Vimeo-via-yarn-link)**

#### Linking

In order to work with Iris changes in a Vimeo frontend project you need to symlink your Iris package to a local Iris repo. This is accomplished via `yarn link`.

Assuming you have already cloned Iris in an adjacent directory:
1. `cd iris` and run `yarn link`
2. `cd ../vimeo` and run `yarn link "@vimeo/iris"`

Once Iris is linked, you can make changes that will be reflected in your local environment.

⚠️ Note that the `make webpack/[project-name]` watch will not detect changes in Iris. Only changes in the current project will trigger webpack to rebuild.

#### Unlinking

In order to unlink Iris:
1. `cd vimeo` and run `yarn unlink "@vimeo/iris"`
2. then run `make yarn`


## Using Components
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
import { GearIcon } from '@vimeo/iris';

<GearIcon />

```

Adding additional styles to a component:
```jsx
import { Button } from '@vimeo/iris';

const MyButton = styled(Button)`
  margin-bottom: 2rem;
`;

<div>
    <MyButton format="primary" size="xl">xl Button</MyButton>
</div>

```

## Need Help?

🆕 [Request a new component](https://github.vimeows.com/Vimeo/iris/issues/new?labels=type%3A+new+component&milestone=4&title=Component+Request%3A&assignee=sean-mcintyre&template=new-component.md)

🛠 [Request updates to an existing component](https://github.vimeows.com/Vimeo/iris/issues/new?labels=type%3A+update+component&milestone=4&title=Component+Update%3A&template=component-update.md)

🐛 [Report a bug](https://github.vimeows.com/Vimeo/iris/issues/new?labels=p2,type%3A+bug&milestone=4&title=Bug%3A&template=bug-report.md)

💬 [#web-iris](https://vimeo.slack.com/messages/C2UF8PH0A) Slack

## Release Schedule

Minor versions of Iris are generally released biweekly on Wednesdays. If you have an urgent need for a release, please reach out in [#web-iris](https://vimeo.slack.com/messages/C2UF8PH0A).

## Releasing

Read the [release docs](https://github.vimeows.com/Vimeo/iris/wiki/Publishing-an-Iris-Release).

## Documentation
Read the [wiki](https://github.vimeows.com/Vimeo/iris/wiki).

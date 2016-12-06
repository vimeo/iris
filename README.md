#Iris

##About
This repo contains the Iris Components and style globals.

## Getting Started
* Clone this repo locally
* Run npm install. **Note**: that the "vimeo-styleguide" package will be loading via SSH from https://github.vimeows.com. Make sure that you have SSH access to this site configured or your will get a "resource not found" error.
* Run `gulp` at the root of your project in command line. The site should compile and open in your default browser. **You may need to refresh** the first time to see it working.

```
$ gulp
```

## File Structure

* docs: contains files used to document patterns
  * docs/components: Iris React component doc files
  * docs/pages: files which generate pages for patterns which do not have an associated component (e.g. type)
* src: the files which generate contain the Iris React Components and global CSS, as well as any required image assets and js helpers.
* templates: a collection of templates used by various build processes.

## Adding a New Component File

* run 'plop' from the root of the project
```
$ plop
```
* enter the name of the new component


This will create the file structure for the component.

## Showing the Component in the Styleguide
* edit **docs/patternList.js** and add an array entry in the pattern ```[ComponentName, Component Display Name]``` like this:

```
var patternList = {patterns: [
  ['Badge', 'Badges'],
  ['Button', 'Buttons'],

]};

export default patternList;
```

* this is what alerts the styleguide to the presence of the pattern. The pattern will be displayed in the order of the Array.

##Contact
* Jory Cunningham: jory@vimeo.com
* Dina Smither: dina@vimeo.com
* Malika Butler: malika@vimeo.com

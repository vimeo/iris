#Iris

##About
This repo contains the Iris Components and style globals.

* This package can be consumed by NPM to deliver Iris components
* This package can be cloned and used with its imported styleguide to contribute to Iris.

## Getting Started Using Iris in Your App

### Install
Install Iris via SSH from github.vimeows.com.

```
$npm install --save git+ssh://git@github.vimeows.com/Vimeo/iris.git
```

### Set Up Webpack
In order to enable the import paths from Iris you need to do two things in the webpack config.

1) Require Iris
```
var Iris = require('iris');
```

2) Use [webpack resolve.alias](http://webpack.github.io/docs/configuration.html#resolve-alias) to map the paths by using `Iris.paths`.

```
resolve: {
  alias: Iris.paths,
  extensions: ['', '.js', '.jsx', '.json'],
  modulesDirectories: ['node_modules', 'components']
}
```
### Include the Package
To make Iris Components available to your component, Include `iris/ComponentName`. For instance, to include 'Button' you would add the following.
```
import Button from iris/Button
```

Then use the components as per Iris Documentation.

```
<Button type="secondary">Secondary</Button>
```

### Require the Global CSS
At the root of your App (e.g. main.jsx), require the global.css file. This will bring in the global styles. All other CSS modules will be included automatically by including their associated React component in your bundle.
```
import styles from 'iris/GlobalCSS'
```


## File Structure

* docs: contains files used to document patterns
  * docs/additional-entries: components which generate pages for patterns which do not have an associated component (e.g. type)
  * docs/pages: components that generate free-form stand-alone pages.
* src: the files which generate contain the Iris React Components and global CSS, as well as any required image assets and js helpers.
* templates: a collection of templates used by various build processes.


## Contributing to Iris
### Getting Started
* Clone this repo locally
* Run npm install. **Note**: that the "vimeo-styleguide" package will be loading via SSH from https://github.vimeows.com. Make sure that you have SSH access to this site configured or your will get a "resource not found" error.
* Run `gulp` at the root of your project in command line. The site should compile and open in your default browser. **You may need to refresh** the first time to see it working.

```
$ gulp
```
### Adding a New Component File

* run 'plop' from the root of the project
```
$ plop
```
* enter the name of the new component


This will create the file structure for the component.

### Showing the Component in the Styleguide
* edit **docs/patternList.js** and add an array entry in the pattern ```[ComponentName, Component Display Name]``` like this:

```
var patternList = {patterns: [
  ['Badge', 'Badges'],
  ['Button', 'Buttons'],

]};

export default patternList;
```

* this is what alerts the styleguide to the presence of the pattern. **The pattern will be displayed in the order of the Array**.

### Adding an Pattern Entry for Non-Components
Sometimes you will need to show pattern documentation for something that does not have a component (usually because it is in the CSS Globals)

* run `plop` from command-line at the root of the project
* Choose 'Additional Pattern Entry' from the first menu
* Enter the Pattern's name in PascalCase (e.g. GlobalTypographyStandards)
* Edit the file that gets created at `docs/additional-entries/{Pattern Name Here}/{Pattern Name Here}-Docs.jsx`,
* Add an entry to the pattern list. Being sure to set the third argument to true. For example if you where adding a "Type" entry it would look like this:

```
var patternList = {patterns: [
  ['Type', 'Typography', true],
  ['Badge', 'Badges'],
  ['Button', 'Buttons'],

]};

export default patternList;
```

## Troubleshooting

### Webpack cannot resolve my Iris imports
Did you remember to set up the Webpack aliases as described above?

##Contact
* Jory Cunningham: jory@vimeo.com
* Dina Smither: dina@vimeo.com
* Malika Butler: malika@vimeo.com

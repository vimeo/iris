# tl;dr 😵

 Iris 7.0 (released March 2019) is partial rewrite of Iris that lays the groundwork for new features, better DX, smaller bundles, improved performance, component testing & validation, SSR support, and more! Iris is now written in 100% TypeScript and runs on the latest versions of React and styled-components. With the release of Iris 7, _**support for Iris 5 is dropped**_. If you are using Iris outside of the app shell please upgrade to `^6.0.0` ASAP.

Last Updated: 3/28/2018 by [@sean-mcintyre](https://github.vimeows.com/sean-mcintyre)

# Roadmap 🚙
### aka, Rainbow Road
This is a **provisional** overview of what the Iris team is planning to work on over the course of the next year as well as a summary of recent changes. Please file issues in this repository if you have questions, concerns, or suggestions!

<img src="https://media.giphy.com/media/1385h22r1k6sIU/giphy.gif" width="300px" />


## Iris 7.0: 💫 Supernumerary (March 2019)

<a id="changelog" />

**With the 7.0 release we've**

*   Migrated the styleguide and documentation to Storybook
*   Updated core dependencies
	*   React 16.8 (the one with hooks!)
	*   TypeScript 3.3
	*   styled-components 4.1
	*   polished 3.0
*   Reduced the total payload of Iris from **455.17KB** (5.15.0) to  **161.40KB** (7.0.0).
	*   (current use of Iris in the app shell is **~90KB gzipped**.)
*   Implemented code standards with Prettier and TSLint/ESLint
*   Significantly reduced the bundle size and restructured all exports to properly support tree-shaking out of the box
	*   🚨 _**All components are now named exports. You will need to convert any default imports to named imports upon upgrading.**_
*   Added CI check requirements to pull requests
*   Converted all SVG assets to React components
*   Removed most internal margins and layout logic from components.
*   Removed numerous large, abandoned, unruly, and problematic dependencies, often by rewriting their functionality as hooks.
	*   Removal of certain packages has improved SSR and react-native compatibility.
*   Rewritten many class components as function components. [*](#function-components-note)
*   Greatly simplified the barriers to entry for Iris contributions
	*   Deprecated and removed Vimeo/steadicam
	*   Reduced pre-commit checks process from greater than 30 seconds to less than 3 seconds.
	*   Get up and running fast: `git clone; yarn; yarn storybook`
		*   If you have issues with `@types/react-native`, please run `yarn clean`.
	*   Check out the new Getting Started docs!
*   Deprecated the following components:
	*   `Grid`, `GridCol`, `GridBlock`
	*   `List`, `ListItem`
	*   `withCopyAbility` (HOC)

<img src="https://media.giphy.com/media/13AcmSNW5O7WV2/source.gif" width="300px" />


**In upcoming 7+ minor releases we will**

#### 7.1
* Remove top-level imports from `@vimeo/iris` and require module imports, ie. `@vimeo/iris/color`
* Reorganize the internal structure of Iris to better reflect its new module structure, improve the clarity of shared code between components, and dogfood its import conventions.
	* The import groups, storybook, and `/src` folder will follow the same patterns.
* Correct type bugs uncovered during the 7.0 upgrade process.
* General typing improvements.
	* Audit the excess use of `HTMLProps<>`

#### 7.2
* Set up an a11y board for tracking a11y issues and ideas across Vimeo's UIs.
* Add documents to explain best practices when contributing to the Iris storybook.
* Add getting started demos for Create React App and Rendezvous with Iris, TypeScript, and styled-components.
* Improve the discoverability/searchability of icons in storybook.

#### 7.3
* Audit the backlog of bugs from before Iris 7.0 and address any bugs that still exist.
* Finish implementing the new focus outline styles on all remaining components: [New Focus Styles](https://github.vimeows.com/Vimeo/iris/projects/3)

#### 7.4
* Replace the functionality of `react-popper`, `react-swipe`, `react-swipeable`, `react-tether`, and `react-transition-group` with hooks.
* Remove  `react-popper` and `react-tether`.
* Rewrite `MenuPanel`, `Tooltip`, and `SlideUpDown`[*](#function-components-note)

#### 7.5
* Minify Iris with `terser` to further reduce distribution size.

#### 7.6
* Rebuild `Modal` from scratch with a new design[*](#function-components-note)
* Remove `react-transition-group`

#### 7.7
* Rebuild `VideoCard` from scratch and possibly update the design.[*](#function-components-note)

#### 7.8
* Replace `react-datetime` with a smaller library, or write our own date-picker.
* Replace `moment` with `luxon` or `date-fns`

#### 7.9
* Rewrite any remaining class components as function components (except `FeatureTourPanel` and `InputColorPicker`):
	* Should be: `ButtonToggleState`, `ContentCarousel`, `InputCheckboxSet`, `InputSlider`, `InputTextFloatingLabel`, `OverflowTruncationWrapper`, `SteppedContentSlider`, `TabNavigationHorizontal`, `VerticalMenuItem`, `VerticalMenuNested`, `withCharacterCount`[*](#function-components-note)

#### 7.10
* Early introduction of visual regression, snapshot, and unit testing.


#### 7.11
* Rewrite `FeatureTourPanel` from scratch and possibly update design.[*](#function-components-note)

#### 7.12
* Rewrite `InputColorPicker` from scratch and possibly update design.[*](#function-components-note)

***

<a id="function-components-note" />

**Note about component rewrites**

The remaining class components are being rewritten for the same reasons that many were leading up to the release of 7.0: to share stateful logic between components, reduce code complexity, improve performance, increase readability, and prepare for upcoming React features. Additionally, a select few: such as `SteppedContentSlider`, `VideoCard` and `MenuPanel`, are especially complicated, suffer from unacceptable performance issues, and are very challenging to alter or add new features to.

<img src="https://media.giphy.com/media/YXH92d9qgLbUY/giphy.gif" width="300px" />

## Upcoming 
### Iris 8.0: 🌻 Flower Picking (June 2019 ETA)

* Themes! Iris components will support light and dark themes, and we will explore creating a11y themes that users can enable in their Vimeo settings.
* Comprehensive props audit of all components.
	* Conceptually similar/identical props will consolidated across Iris. This means no more `variant`, `format`, `theme`, etc confusion!
* Enforce stricter TypeScript rules (`noImplicitAny`, `strictNullChecks`, etc).
* Enforce stricter ESLint rules.
* Improve component bundling and minification.
* Remove the remaining `react-*` libs: `react-color`, `react-swipe`, `react-swipeable`

<img src="https://media.giphy.com/media/EOmSQEk9b5aqA/giphy.gif" width="300px" />


### Iris 9.0: 🌈 Full Spectrum (September 2019 ETA)
* Finalize tools for visual regression testing, Jest snapshot testing, and Enzyme unit testing.
* Comprehensive performance audit of all components.
* Audit and address all component a11y issues to bring Iris to (at minimum) WCAG 2.1 AA compliance.
* Improve a11y testing and per-component WCAG compliance scoring.
* Add our first a11y theme for components.
* **Exploratory:**
	* Sketch <—> React integration tools
		* and possibly following this: Framer, Figma, etc
	* Component analytics
		* Locations of all Iris imports in vimeo/vimeo accessible via Storybook (github code and CI preview links)
		* Component interface stability: frequency of a component's prop interface changes over versions/time.
		* Per component bug tracking.
		* Per component A/B testing.


### Iris 10.0: 🙀 Emotional Reactions (December 2019 ETA)

* Add 'iris/motion' module, animation guidelines, and react-spring
* Consolidate existing animation code, and add and improve animation across all components.
* Abstract 'formats', color relationships, animation timings/styles, aesthetic geometry, etc, into importable, reusable configs.


### Future 🚀
#### Somewhere over the rainbow. (Sorry, last pun. I promiris!)

* Blog post on the styled components blog about its use at Vimeo, hopefully around the release of 8.0 (the creator of styled components, Max Stoiber, is very excited about this 🎉).
* Integrate brand guidelines/styleguide into Iris.
* Host (bi-)monthly Iris Talks on UI Engineering and Design Systems.
* Design documentation, principles, and guidelines.
	* Design specs/documentation in VSCode tooltips.
* Explore [immutable documentation](https://codeascraft.com/2018/10/10/etsys-experiment-with-immutable-documentation/).
* Iris Slackbot! Like Siri but spelled backwards! Also, you she can't hear you so communication via text is preferred 😉
	* Search and share Vimeo brand assets, Iris icons, colors, etc in Slack!
	* Lazy link to the Iris Storybook!
	* And more!
* Individually versioned and packaged components
* Iris CLI
	* Code scaffolding
	* And more!
* vimeo.design / iris.design
	* Vimeo blog for product design, UI, UX, animation, design engineering, and a11y 
	* hosting Iris sandboxes and tutorial videos on [Glitch](https://glitch.com/@vimeo)
* Tool for queueing up proposals to be reviewed/approved by Designers and Iris Engineers

<img src="https://media.giphy.com/media/9serkTf0zakU0/giphy.gif" width="300px" />


<a id="faq" />

# FAQ 💬

### What if Iris doesn't have what I am looking for?

<b class="qa">Q:</b> <i>I need a component that does not currently exist in Iris, or, I need something slightly different but very similar to something in Iris. Can I has please?</i>

<b class="qa">A:</b> Yes, you can has! But first please make sure, at a minimum, that the designer you work with is aware of your request! After that, sync with someone on the Iris team. They often have information or context that will prove useful. Once everyone is in the loop, your first available course of action is to start a new branch on Iris and PR your changes. This is the fastest way to get your desired changed implemented. In some cases it will make more sense for an Iris engineer to complete the work. If so, work with them to plan and schedule the project, and to add it to the Iris backlog.

### Remember that thing we talked about a while ago? What's the status of the thing? Is it coming out soon?

<b class="qa">Q:</b> <i>A few days/weeks/months ago we discussed implementing a new feature, component, or some such item in Iris. What's the the deal with that? Can I has now please?</i>

<b class="qa">A:</b> I don't know! A good place to check on the status of something in Iris would be to consult its github issue! All issues are organized into minor version [milestones](https://github.vimeows.com/Vimeo/iris/milestones) with approximate release dates. If you need something to be expedited, please comment on the issue with further information before reaching out to an Iris engineer.

<img src="https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif" width="300px" />

### Whatever happened to Iris 6.0?

<b class="qa">Q:</b> <i>I'm working on a project that currently uses Iris 5, and you're talking about Iris 7? What happened to Iris 6!?</i>

<b class="qa">A:</b> 🤫 We don't talk about Iris 6.

Jk! Iris 6 is being released in tandem to Iris 7 as a bridge to the very significant changes between 5 and 7. It is intended to be used outside of the new app shell, and will support React 15 and styled-components 3. It will **not** support React 16 or styled-components 4. If you are using Iris in a project that cannot be migrated to the app shell in the very near future, it is ***strongly*** recommended that you upgrade to 6.0.0. Iris 5 is now officially unsupported. There is a better system in place for maintaining and publishing minor and patch versions of ^6.0.0—which is actually almost following real semver instead of barely sort-of following "semver."

Please note: The Iris team will be primarily be focused on the development of Iris 7. Iris 6 will be community maintained. 

Currently, various Vimeo packages/apps are using the following versions of Iris:

- "4.0.18"
- "5.5.1"
- "^5.8.0"
- "5.13.0"
- "5.13.1"
- "^5.13.0"
- "5.14.0"
- "5.15.0"
- "7.0.0"

The short term goal is to make that list look like this:

- "4.0.18" (`¯\_(ツ)_/¯`)
- "^6.0.0" (`./web/assets/js/packages/…`)
- "^7.0.0" (`./frontend/..`)

### Can I use Iris outside of [Vimeo/vimeo](https://github.vimeows.com/Vimeo/vimeo)?

<b class="qa">Q:</b> <i>I'm working on a project that doesn't live inside the Vimeo monorepo. Can I use Iris in it?</i>

<b class="qa">A:</b> Yes! Iris can be used with any React (16.8+) app. The only requirement is that you are behind the IAC firewall to retrieve it from Artifactory via npm/yarn. We're working on a solution to eliminate this requirement though 😉

<img src="https://media.giphy.com/media/WgPQdRXlUcgVO/giphy.gif" width="300px" />

### I'm looking for an icon.

<b class="qa">Q:</b> <i>Does Iris have the icon I'm looking for? Where can I find it?</i>

<b class="qa">A:</b> **Icons:** https://github.vimeows.com/pages/vimeo/iris/master/?path=/story/icons--all

**Illustrations:** https://github.vimeows.com/pages/vimeo/iris/master/?path=/story/illustration--all

### I found a bug.

<b class="qa">Q:</b> <i>Where do I report bugs?</i>

<b class="qa">A:</b> Please open a new issue here: [Bug Report](https://github.vimeows.com/Vimeo/iris/issues/new?template=bug-report.md)

### Can I override the TypeScript definitions for an Iris component?

<b class="qa">Q:</b> <i>An Iris component is missing a type definition for a prop, or it has an incorrect definition. How can I correct this?</i>

<b class="qa">A:</b> Please do not override TypeScript definitions for Iris components. If you need to make an adjustment, open a pull request. If the matter is very time sensitive, please reach out in [#iris](https://vimeo.slack.com/messages/C2UF8PH0A). In absolutely dire situations, you can `ts-ignore` the problem. Please add `#iris`, `#type-issue`, and a brief explaination to your ignore comment.

<img src="https://media.giphy.com/media/ihViTxTZOHw0o/giphy.gif" width="300px" />

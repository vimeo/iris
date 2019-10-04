# tl;dr 😵

 Iris 7.0 (released March 2019) is partial rewrite of Iris that lays the groundwork for new features, better DX, smaller bundles, improved performance, component testing & validation, SSR support, and more! Iris is now written in 100% TypeScript and runs on the latest versions of React and styled-components. With the release of Iris 7, _**support for Iris 5 is dropped**_. If you are using Iris outside of the app shell please upgrade to `^6.0.0` ASAP.

Last Updated: 6/11/2018 by [@sean-mcintyre](https://github.vimeows.com/sean-mcintyre)

# Roadmap 🚙
This is a **provisional** overview of what the Iris team is planning to work on over the course of the next year as well as a summary of recent changes. Please file issues in this repository if you have questions, concerns, or suggestions!


## Iris 7.0 (March 2019)

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


**In upcoming 7+ minor releases we will**

* Remove top-level imports from `@vimeo/iris` and require module imports, ie. `@vimeo/iris/color`
* Correct type bugs uncovered during the 7.0 upgrade process.
* General typing improvements.
	* Audit the excess use of `HTMLProps<>`
* Set up an a11y board for tracking a11y issues and ideas across Vimeo's UIs.
* Add documents to explain best practices when contributing to the Iris storybook.
* Add getting started demos for Create React App and Rendezvous with Iris, TypeScript, and styled-components.
* Improve the discoverability/searchability of icons in storybook.
* Audit the backlog of bugs from before Iris 7.0 and address any bugs that still exist.
* Replace the functionality of `react-popper` and `react-tether` with hooks.
	* Remove  `react-popper` and `react-tether`.
	* Rebuild `PopOver` and `Tooltip`.
* Replace `react-swipe`, `react-swipeable`, and `react-transition-group` with hooks (or `react-spring`).
	* Rebuild `SlideUpDown`
* Replace `copy-to-clipboard` with a hook and native API.
* Rebuild `Modal` from scratch with a new design
* Rebuild `InputColorPicker` without dependencies.
* Rebuild `InputDatePicker` without dependencies.
	* Remove `moment` library
	* Add `DateRange` variation for selecting between two dates.

## Upcoming 
### Iris 8.0 (July 2019 ETA)

* **Themes!** Iris components will support light and dark themes, as well as a11y theme settings (ie. high contrast mode) that users can enable.
* Require stories and unit tests when modifying or adding components
* Finish implementing the new focus outline styles on all remaining components: [New Focus Styles](https://github.vimeows.com/Vimeo/iris/projects/3)
* Comprehensive props audit of all components.
	* Conceptually similar/identical props will consolidated across Iris. This means no more `variant`, `format`, `theme`, etc confusion!
* All exported components will use the new `IrisComponent` and `IrisInputComponent` types instead of React's `SFC`, `FC`, etc.
* `/src` will be reorganized to reflect the new module structure.
* Automation:
	* Github Pages Storybook builds per branch.
	* Minor and patch releases (Artifactory, Github, and Slack #iris).
	* Webpack bundle analyzer.
	* Readme updates.
	* SVG compression.
	* Component status/coverage list.
	* Componnet history timeline (add, modify, remove).
* Dev environments:
	* Components with exported with dev versions.
	* Iris will be compressed with terser and exported with sourcemaps.
* Pre-commit hooks will be removed.
* Storybook UI will be updated to better reflect Vimeo branding.


### Iris 9.0 (October 2019 ETA)

#### This release will focus on DesignsOps, documentation, and DevEx.

* Introduce `@iris/hooks`
* Introduce `@iris/layout`
* **Spectrum Phase 1**: Early exploration of Framer, Sketch, Storybook integration and development of a long term plan for keeping designer assets synchronized with Iris codebase.
* Establish a Storybook-first UI engineering workflow with tools and documentation in Iris, Rendezvous, or both.
* Introduction of initial design system KPIs and recurring surveys for designers and engineers.
* Design documentation, principles, and guidelines.
	* Design specs/documentation in VSCode tooltips.
	* UX copywriting documentation.
	* Vimeo brand guidelines and styleguide integration into Iris.
	* Storybook panel: good and bad component examples
* Automated prop documentation for components in Storybook.
* Compile time rendering performance improvements (probably via babel macros).
* **vimeo.design, iris.design**
	* product design, design systems, a11y blog
	* storybook enhancements:
		* homepage with updates and general info
		* getting started
		* changelog
		* component status page (ie. https://polaris.shopify.com/components/component-status#navigation)


### Iris 10.0 (December 2019 ETA)

#### This release will focus on test coverage and tooling.

* **Visual regression testing, snapshot testing, and unit testing coverage for all components.**
* Comprehensive performance audit of all components.
* Audit and address all component a11y issues to bring Iris to (at minimum) WCAG 2.1 AA compliance.
* Improve a11y testing and per-component WCAG compliance scoring.
* **Component Scoring**
	* Component scores will be displayed in Storybook based upon:
		* code quality
		* performance tests results
		* a11y (WCAG) score
		* API stability (how stable are the props over time?)
		* developer rating
* Improve Github experience and CI checks.
* Replace TSLint with ESLint.
* Enforce stricter TypeScript rules (`noImplicitAny`, `strictNullChecks`, etc).
* Enforce stricter ESLint rules.
* Improve component bundling and minification.



### Iris 11.0: (February 2020 ETA)

* **Partially open source Iris**
* Introduce `@iris/graphs` (D3?)
	* Area Chart
	* Bar Charts
		* Stacked Bar Chart
		* Vertical Bar Chart
	* Donut Chart
	* Histogram
	* Line Graph
	* Pie Chart
	* Scatterplot
	* Word Cloud
* **Component Coverage:**
	* `@iris/components`
		* Code Gist
		* Data Table
		* Number Inputs
		* Timeline
		* Timepicker
	* `@iris/layout`
		* Footers


### Iris 12.0: (May 2020 ETA)

* Introduce `@iris/motion`
	* Animation guidelines and documentation
	* Consolidate existing animation code, and add and improve animation across all components
	* SVG animation API
	* Animated icons
	* 3D cards
	* blobs (dynamic natural contours)
	* Typography
		* Character animation
	* List / Grid Re-ordering (drag and drop)
	* Connected transformations/transitions (ie. button becomes the modal it opens)
* Elevation system
	* Dynamic light sources
* Spectrum Phase 2: Improved integration between React, Storybook, Sketch, and Framer. Early prototypes of generating code from design tooling.
* **Fully open source Iris**
	* Separate Vimeo specific (or private) code from general design system abstractions
* **Advanced Themes:**
	* Abstract 'formats', color relationships, animation timings/styles, aesthetic geometry, etc, into importable, reusable configs.
	* Demo Iris in multiple brand styles derived from small theme objects (Twitter, Facebook, Google, Apple, etc)
* **Component Coverage:**
	* `@iris/components`
		* Accordions
		* Grouped Components
			* Avatar Group
			* Card Stack
		* Indicators
			* Capacity
			* Circle
			* Progress
			* Rating
			* Relevance
			* Spinners
		* Maps (google maps?)
		* Vertical Tabs
		* Virtual Lists / Grids



### Iris 13.0: (August 2020 ETA)

* Further enhancements to vimeo.design/iris.design
* **SVG system** (similar to Apple's SF symbols, consistent with `@iris/color` and `@iris/typography` systems)
	* Composable SVGs
* **Separate iris modules on npm**
	* `@iris/color`
	* `@iris/components`
	* `@iris/graphs`
	* `@iris/hooks`
	* `@iris/icons`
	* `@iris/illustration`
	* `@iris/layout`
	* `@iris/motion`
	* `@iris/typography`
	* `@iris/utilities`
* **Component Coverage:**
	* **100% responsive support** for all relevant components and layouts
	* `@iris/components`
		* Video (player/editor) components
			* Filmstrip
			* Histogram
			* Playbar
			* Scrubber
			* Timeline
		* Chat / Messaging
	* `@iris/graphs`
		* Bar charts
			* Positive-Negative Bar Chart
		* Collapsible Tree
		* Difference Chart
		* Motion Chart
		* Spider Charts
		* Stream Graph
		* Timeline Chart
		* Tree Map
		* Trend Chart


### Iris 14.0: (December 2020 ETA)

* `@iris/iOS`
* `@iris/android`
* `@iris/tv`
	* Apple TV and Android TV components and compilation via react-native
* **Spectrum Phase 3:** "multi-platform HMR" work on/with Iris in realtime across multiple browsers, devices, platforms, environments, screen sizes, etc

### Iris 15.0: (April 2021 ETA)

* Individually published components
	* `@iris@15.0.0`
		* `@iris/components@15.0.0`
			* `@iris/components-modal@4.3.1`
* Vimeo keynote builder
* `@iris/color`
	* Advanced color API (chromajs)
* **Component Coverage:**
	* `@iris/components`
		* Blanket/Screen
		* Drop Zone
		* Rich Text Editor
		* Stepper
		* Search
			* Inline Search Tags
			* Typeahead
	* `@iris/layout`
		* Column View
		* Navs
			* Overflow Nav
			* Trees
		* Split View


<a id="faq" />

# FAQ 💬

### What if Iris doesn't have what I am looking for?

<b class="qa">Q:</b> <i>I need a component that does not currently exist in Iris, or, I need something slightly different but very similar to something in Iris. Can I has please?</i>

<b class="qa">A:</b> Yes, you can has! But first please make sure, at a minimum, that the designer you work with is aware of your request! After that, sync with someone on the Iris team. They often have information or context that will prove useful. Once everyone is in the loop, your first available course of action is to start a new branch on Iris and PR your changes. This is the fastest way to get your desired changed implemented. In some cases it will make more sense for an Iris engineer to complete the work. If so, work with them to plan and schedule the project, and to add it to the Iris backlog.

### Remember that thing we talked about a while ago? What's the status of the thing? Is it coming out soon?

<b class="qa">Q:</b> <i>A few days/weeks/months ago we discussed implementing a new feature, component, or some such item in Iris. What's the the deal with that? Can I has now please?</i>

<b class="qa">A:</b> I don't know! A good place to check on the status of something in Iris would be to consult its github issue! All issues are organized into minor version [milestones](https://github.vimeows.com/Vimeo/iris/milestones) with approximate release dates. If you need something to be expedited, please comment on the issue with further information before reaching out to an Iris engineer.

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

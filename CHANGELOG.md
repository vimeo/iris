## 7.0.3 (April 2, 2019)

### Misc
*   Updated readme
*   Added changelog, faq, and roadmap

## 7.0.2 (March 25, 2019)

### Updated Components
*   `autocomplete` prop disabled on `InputColorPicker` by default.
*   `VideoCard` now supports single thumbnail for albums.

### Misc
*   Iris is now exported as CommonJS targeting ES5.


## 7.0 (March 2019)

*   Migrated the styleguide and documentation to Storybook
*   Updated core dependencies
	*   React 16.8 (the one with hooks!)
	*   TypeScript 3.3
	*   styled-components 4.1
	*   polished 3.0
*   Reduced the total payload of Iris from 455.17KB (5.15.0) to  161.40KB (7.0.0).
	*   (current use of Iris in the app shell is ~90KB gzipped.)
*   Implemented code standards with Prettier and TSLint/ESLint
*   Significantly reduced the bundle size and restructured all exports to properly support tree-shaking out of the box
	*   🚨 All components are now named exports. You will need to convert any default imports to named imports upon upgrading.
*   Added CI check requirements to pull requests
*   Converted all SVG assets to React components
*   Removed most internal margins and layout logic from components.
*   Removed numerous large, abandoned, unruly, and problematic dependencies, often by rewriting their functionality as hooks.
	*   Removal of certain packages has improved SSR and react-native compatibility.
*   Rewritten many class components as function components.
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

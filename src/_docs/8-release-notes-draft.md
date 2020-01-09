# 8.0.0 (October 23, 2019)

### Dark Mode

#### Theme support


### 📐 Architecture

#### New Module Structure
- `@vimeo/iris/color`
- `@vimeo/iris/components`
- `@vimeo/iris/icons`
- `@vimeo/iris/illustration`
- `@vimeo/iris/motion`
- `@vimeo/iris/typography`
- `@vimeo/iris/util`

#### `Ref` support
#### `className` and `style` support

### :100: Updated Components
- lorem ipsum

### 🆕 New Components
- rewrites
    - button
    - colorselect
    - dateselect


### 🔻 New Icons
- lorem ipsum


### 🐛 Bugfixes
- lorem ipsum


### ✨ Misc
- update [roadmap](https://github.vimeows.com/Vimeo/iris/blob/master/ROADMAP.md)


### 📦 Dependencies
- upgraded
    - `react`: `16.10.2`
    - `polished`: `^3.4.1`
    - `storybook`: `^5.1.11`
    - `ts`-loader: `^6.2.0`
    - `eslint`: `^6.5.1`
    - `typescript`: `^3.6.4`
- removed
    - `moment`
    - `react-color`
    - `react-datetime`
    - `react-popper`
    - `react-swipe`
    - `react-swipeable`
    - `react-tether`
    - `react-transition-group`


----


## Color API

`import { ... } from '@vimeo/iris/color'`

### Color Functions
The following colors are functions that accept a `number` between `0` and `1000` and return a string representation of a color value in HEX format.
- `red`
- `yellow`
- `green`
- `blue`
- `slate`
- `grayscale`

**examples**
```tsx
const DarkRed = red(700);
```

```tsx
const warningText = styled.span`
  color: ${red(600)};
`;
```

```tsx
<div style={{ border: `1px solid ${black}`}} />
```

### Color Constants
The following colors are constants `#000000` and `#FFFFFF`
- `black`
- `white`


----


## Component API

`import { } from '@vimeo/iris/components'`

### The following components have been removed from Iris
| ❗️ Removed | ✅ Replacement |
| --- | --- |
| `AddNewItemCard` | `<NewItemCard />` |
| `ButtonFileUpload` | `<FileUpload><Button /></FileUpload>` |
| `ButtonIconOnly` | `<Button icon={} />` |
| `CircularButton` | `<Button circular />` |
| `Header1` | `<Header size="1" />` |
| `Header2` | `<Header size="2" />` |
| `Header3` | `<Header size="3" />` |
| `Header4` | `<Header size="4" />` |
| `Header5` | `<Header size="5" />` |
| `Header6` | `<Header size="6" />` |
| `HeaderAltSm` | `<Header size="5" format="alternative" />` |
| `HeaderPlusUltra` | `<Header size="plusUltra" />` |
| `InputCheckbox` | `<Checkbox />` |
| `InputColorPicker` | `<ColorSelect />` |
| `InputDatePicker` | `<DateSelect />` |
| `InputRadio` | `<Radio />` |
| `InputText` | `<Input />` |
| `InputToggle` | `<Toggle />` |
| `Notfication` | `<Notice />` |
| `Toastification` | `<Notfication />` |
|  |  |
| `SegmenetedButtonSet` | ‼️ **_REMOVED_** |
| `VideoCard` | ‼️ **_REMOVED_** |


----


## Common Props

### Format
primary blue

### Status
negative red
positive green

### Variant


### Size


----



## Diff
[7.9.0...8.0.0](
https://github.vimeows.com/Vimeo/iris/compare/7.9.0...8.0.0)
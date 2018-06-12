import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import VisaLogo from '../icons/third-party/cc-visa.svg';
import { Button, InputSelect, ParagraphMd, Header3 } from '../index';

const demoOptions = (
                    <optgroup label="Option Group">
                        <option value="" defaultValue disabled hidden>Select something...</option>
                        <option value="1">Value 1</option>
                        <option value="2">Value 2 has a long label</option>
                        <option value="3" disabled>Value 2 (Disabled)</option>
                    </optgroup>
                    );

const selectOptionsArray = [
    {
        value: '',
        label: 'Select this...',
    },
    {
        value: '1',
        label: 'This option is generated from an array.',
    },
    {
        value: '2',
        label: 'This one too!',
        disabled: 'disabled',
    },
];

const initialState = {
    errorProp: null,
    format: 'neutral',
    nextState: 'error',
};

class InputSelectDocs extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = initialState;
    }

    handleClick() {

        if (this.state.nextState === 'positive') {
            this.setState({
                errorProp: null,
                format: 'positive',
                nextState: 'neutral',
            });
        }
        else if (this.state.nextState === 'error') {
            this.setState({
                errorProp: (<ParagraphMd>This is a problem!</ParagraphMd>),
                format: 'negative',
                nextState: 'positive',
            });
        }
        else {
            this.setState(initialState);
        }


    }

    render() {
        return (
            <div className="Pattern__docs">
            <ParagraphMd>Our select menus are a theming of the native select menu component. <a href = "https://caniuse.com/#feat=css-appearance" target="_blank">Browsers that do not support the "Appearance" CSS property</a>, (specifically IE and Opera) will receive a slightly less styled component.</ParagraphMd>
                <div data-code>
                    <InputSelect
                        name="ExampleSelect1XL"
                        id="ExampleSelect1XL"
                        label="XL Select"
                        size="xl"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect1Large"
                        id="ExampleSelect1Large"
                        label="LG Select"
                        size="lg"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect1"
                        id="ExampleSelect1"
                        label="MD select (default)"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect1sm"
                        id="ExampleSelect1sm"
                        label="SM Select"
                        size="sm"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect2"
                        helperMsg = {<ParagraphMd>I am helpful text!</ParagraphMd>}
                        id="ExampleSelect2"
                        label="Default with Helper Text"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect2"
                        format="negative"
                        id="ExampleSelect2"
                        label="Negative"
                        errorMsg = {<ParagraphMd>This is a problem!</ParagraphMd>}
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect3"
                        format="positive"
                        id="ExampleSelect3"
                        label="Positive"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect4"
                        id="ExampleSelect4"
                        label="Disabled"
                        disabled
                    >
                        {demoOptions}
                    </InputSelect>

                    <InputSelect
                        name="ErrorStatesExample"
                        id="ExampleSelectErrors"
                        format = {this.state.format}
                        errorMsg = {this.state.errorProp}
                        label="Error States Example (medium)"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ErrorStatesExample"
                        id="ExampleSelectErrors"
                        format = {this.state.format}
                        errorMsg = {this.state.errorProp}
                        label="Error States Example (large)"
                        size="lg"
                    >
                        {demoOptions}
                    </InputSelect>
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>
                        Toggle Field State to "{this.state.nextState}"
                    </Button>
                </div>
                <div className="Pattern-DarkBlock">
                    <InputSelect
                        name="ExampleSelect2"
                        helperMsg = {<ParagraphMd>I am helpful text!</ParagraphMd>}
                        id="ExampleSelect2"
                        label="Default with Helper Text"
                        theme="dark"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect2"
                        format="negative"
                        id="ExampleSelect2"
                        label="Negative"
                        errorMsg = {<ParagraphMd>This is a problem!</ParagraphMd>}
                        theme="dark"
                    >
                        {demoOptions}
                    </InputSelect>
                    <InputSelect
                        name="ExampleSelect3"
                        format="positive"
                        id="ExampleSelect3"
                        label="Positive"
                        theme="dark"
                    >
                        {demoOptions}
                    </InputSelect>
                </div>

                <ExampleSource>
                    {`
const demoOptions = (
    <optgroup label="Option Group">
        <option value="" defaultValue disabled hidden>Select something...</option>
        <option value="1">Value 1</option>
        <option value="2">Value 2 has a long label</option>
        <option value="3" disabled>Value 2 (Disabled)</option>
    </optgrouParagraphMd>
);

<InputSelect
    name="ExampleSelect1XL"
    id="ExampleSelect1XL"
    label="XL Select"
    size="xl"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect1Large"
    id="ExampleSelect1Large"
    label="Large Select"
    size="lg"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect1"
    id="ExampleSelect1"
    label="Default (medium)"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect1sm"
    id="ExampleSelect1sm"
    label="SM Select"
    size="sm"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect2"
    helperMsg = {<ParagraphMd>I am helpful text!</ParagraphMd>}
    id="ExampleSelect2"
    label="Default with Helper Text"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect2"
    format="negative"
    id="ExampleSelect2"
    label="Negative"
    errorMsg = {<ParagraphMd>This is a problem!</ParagraphMd>}
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect3"
    format="positive"
    id="ExampleSelect3"
    label="Positive"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect4"
    id="ExampleSelect4"
    label="Disabled"
    disabled
>
    {demoOptions}
</InputSelect>

<InputSelect
    name="ErrorStatesExample"
    id="ExampleSelectErrors"
    format = {this.state.format}
    errorMsg = {this.state.errorProp}
    label="Error States Example (medium)"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ErrorStatesExample"
    id="ExampleSelectErrors"
    format = {this.state.format}
    errorMsg = {this.state.errorProp}
    label="Error States Example (large)"
    size="lg"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect2"
    helperMsg = {<ParagraphMd>I am helpful text!</ParagraphMd>}
    id="ExampleSelect2"
    label="Default with Helper Text"
    theme="dark"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect2"
    format="negative"
    id="ExampleSelect2"
    label="Negative"
    errorMsg = {<ParagraphMd>This is a problem!</ParagraphMd>}
    theme="dark"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="ExampleSelect3"
    format="positive"
    id="ExampleSelect3"
    label="Positive"
    theme="dark"
>
    {demoOptions}
</InputSelect>
                        `}
                </ExampleSource>
                <Header3>Adding an Inline Icon</Header3>
                <ParagraphMd>An inline icon can be added to a select by passing an icon to the <code>icon</code> prop. <strong>Note:</strong> This icon occupies the same area as the state-based icons (e.g. errors) so use of this field precludes the use of the error states.</ParagraphMd>
                <InputSelect
                    name="WithIconLg"
                    icon={<VisaLogo />}
                    id="ExampleSelectWithIconLg"
                    format="neutral"
                    label="Lg Select with Icon"
                    size="lg"
                >
                    {demoOptions}
                </InputSelect>
                <InputSelect
                    name="WithIconXL"
                    icon={<VisaLogo />}
                    id="ExampleSelectWithIconXL"
                    format="neutral"
                    label="XL Select with Icon"
                    size="xl"
                >
                    {demoOptions}
                </InputSelect>
                <ExampleSource>
                {`
<InputSelect
    name="WithIconLg"
    icon={<VisaLogo />}
    id="ExampleSelectWithIconLg"
    format="neutral"
    label="Lg Select with Icon"
    size="lg"
>
    {demoOptions}
</InputSelect>
<InputSelect
    name="WithIconXL"
    icon={<VisaLogo />}
    id="ExampleSelectWithIconXL"
    format="neutral"
    label="XL Select with Icon"
    size="xl"
>
    {demoOptions}
</InputSelect>
                    `}
                </ExampleSource>
                <Header3>Generating select options from an array (optional)</Header3>
                <ParagraphMd>You can pass an optional array of options to a select to have it print out option tags. <code>"text"</code> and <code>"value"</code> should be included for every option.</ParagraphMd>
                <ParagraphMd>If no options array is passed, the select menu will print out its child content.</ParagraphMd>
                <div data-code>
                    <InputSelect
                        name="ExampleSelect1Large"
                        id="ExampleSelect1Large"
                        label="Select from an Array"
                        options={selectOptionsArray}
                        size="lg"
                    />
                </div>

                <ExampleSource>
                    {`
const selectOptionsArray = [
    {
        value: '',
        label:'Select this...',
    },
    {
        value: '1',
        label:'This option is generated from an array.',
    },
    {
        value: '2',
        label:'This one too!',
        disabled: 'disabled',
    },
];

<InputSelect
    name="ExampleSelect1Large"
    id="ExampleSelect1Large"
    label="Select from an Array"
    options={selectOptionsArray}
    size="lg"
/>
                        `}
                    </ExampleSource>
            </div>
        );
    }
}

export default InputSelectDocs;

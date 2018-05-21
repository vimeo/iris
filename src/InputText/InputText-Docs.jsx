import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { Button, InputText, ParagraphMd, Header3 } from '../index';

const errorState = {
    errorProp: 'This is a problem!',
    format: 'negative',
    nextState: 'positive',
};

class InputTextDocs extends React.Component {
    // test handler for onDismiss event

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.state = errorState;
    }

    handleClick() {
        if (this.state.nextState === 'positive') {
            this.setState({
                format: 'positive',
                errorProp: null,
                nextState: 'neutral',
            });
        }
        else if (this.state.nextState === 'neutral') {
            this.setState({
                format: 'neutral',
                errorProp: null,
                nextState: 'negative',
            });
        }
        else {
            this.setState(errorState);
        }
    }


    render() {
        return (
            <div>
                <ParagraphMd>Input components provide text-like (text, email, phone, etc..) input fields for forms, including the label and error messaging. Inputs are <code>type="text"</code> by default.</ParagraphMd>
                <ParagraphMd>Inputs provide no logic for field valdation themselves but expose three modes through the <code>format</code> prop which should be changed through parent state. Any event handlers passed to the component will be attached to the input field itself.</ParagraphMd>
                <div data-code>
                    <InputText
                        name="foo"
                        id="foo"
                        label={'Default Input'}
                        placeholder="Placeholder Text"
                    />

                    <InputText
                        name="noPlace"
                        id="NoPlace"
                        label="No Placeholder"
                    />
                    <InputText
                        name="nice"
                        id="nice"
                        label="Positive Input"
                        format="positive"
                        placeholder="Placeholder Text"
                        defaultValue="Something is right!"
                    />
                    <InputText
                        name="helpful"
                        id="helpful"
                        label="Helpful Input"
                        placeholder="I have some helper text"
                        helperMsg = "See? I told you so. This is helper text to explain how to use this field."
                    />
                    <InputText
                        name="oops"
                        id="oops"
                        label="Errored Input"
                        format="negative"
                        errorMsg="This is a problem!"
                        placeholder="Placeholder Text"
                        defaultValue="Something is wrong!"
                    />
                    <InputText
                        name="bar"
                        id="bar"
                        label="Disabled Input"
                        disabled
                        placeholder="Placeholder Text"
                        defaultValue="I'm Disabled"
                    />

                </div>
                <div className="Pattern-DarkBlock">
                    <InputText
                        name="medInput"
                        id="medInputDark"
                        label="Input (medium)"
                        placeholder="I'm Medium!"
                        theme="dark"
                    />
                    <InputText
                        name="nice"
                        id="niceDark"
                        label="Positive Input"
                        format="positive"
                        placeholder="Placeholder Text"
                        defaultValue="Something is right!"
                        theme="dark"
                    />
                    <InputText
                        name="oops"
                        id="oopsDark"
                        label="Errored Input"
                        format="negative"
                        errorMsg = {<ParagraphMd>This is a problem!</ParagraphMd>}
                        placeholder="Placeholder Text"
                        defaultValue="Something is wrong!"
                        theme="dark"
                    />
                </div>

                <ExampleSource>
                    {`
<InputText
    name="foo"
    id="foo"
    label={'Default Input'}
    placeholder="Placeholder Text"
/>

<InputText
    name="noPlace"
    id="NoPlace"
    label="No Placeholder"
/>
<InputText
    name="nice"
    id="nice"
    label="Positive Input"
    format="positive"
    placeholder="Placeholder Text"
    defaultValue="Something is right!"
/>
<InputText
    name="helpful"
    id="helpful"
    label="Helpful Input"
    placeholder="I have some helper text"
    helperMsg = "See? I told you so."
/>
<InputText
    name="oops"
    id="oops"
    label="Errored Input"
    format="negative"
    errorMsg = "This is a problem!"
    placeholder="Placeholder Text"
    defaultValue="Something is wrong!"
/>
<InputText
    name="bar"
    id="bar"
    label="Disabled Input"
    disabled
    placeholder="Placeholder Text"
    defaultValue="I'm Disabled"
/>
<InputText
    name="medInput"
    id="medInputDark"
    label="Input (medium)"
    placeholder="I'm Medium!"
    theme="dark"
/>
<InputText
    name="nice"
    id="niceDark"
    label="Positive Input"
    format="positive"
    placeholder="Placeholder Text"
    defaultValue="Something is right!"
    theme="dark"
/>
<InputText
    name="oops"
    id="oopsDark"
    label="Errored Input"
    format="negative"
    errorMsg = {<ParagraphMd>This is a problem!</ParagraphMd>}
    placeholder="Placeholder Text"
    defaultValue="Something is wrong!"
    theme="dark"
/>
                    `}
                    </ExampleSource>
                    <Header3>Input Animation</Header3>
                    <ParagraphMd>When the props passed to the input by parent state change, the input field animates the transition.</ParagraphMd>
                    <InputText
                        name="betterNow"
                        id="betterNow"
                        label="Animate Input (Medium)"
                        format={this.state.format}
                        errorMsg = {this.state.errorProp}
                        placeholder="Placeholder Text"
                        defaultValue="Something is getting better!"
                    />
                    <InputText
                        name="betterNowLg"
                        id="betterNowLg"
                        label="Animate Input (Large)"
                        size="lg"
                        format={this.state.format}
                        errorMsg = {this.state.errorProp}
                        placeholder="Placeholder Text"
                        defaultValue="Something is getting better!"
                    />
                    <InputText
                        name="betterNowXL"
                        id="betterNowXL"
                        label="Animate Input (XL)"
                        size="xl"
                        format={this.state.format}
                        errorMsg = {this.state.errorProp}
                        placeholder="Placeholder Text"
                        defaultValue="Something is getting better!"
                    />
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Field State to "{this.state.nextState}"</Button>


                    <Header3>Hidden Labels</Header3>
                    <ParagraphMd>The label tag can be suppressed by setting <code>showLabel</code> to <code>false</code>.</ParagraphMd>
                    <ParagraphMd>In that case, an <code>aria-label</code> attribute will be added the input with the label text.</ParagraphMd>
                    <div data-code>
                        <InputText
                            name="hiddenLabel"
                            id="hiddenLabel"
                            label="Hidden Input"
                            showLabel={false}
                            placeholder="My Label is Hidden"
                        />
                    </div>

                <ExampleSource>
                    {`
 <InputText
    name="hiddenLabel"
    id="hiddenLabel"
    label="Hidden Input"
    showLabel={false}
    placeholder="My Label is Hidden"
/>
                        `}
                    </ExampleSource>
                <Header3>Input Sizes</Header3>
                <ParagraphMd>Inputs can also be medium or large and are sized to line up with the buttons of the same size prop.</ParagraphMd>
                <div data-code>
                    <InputText
                        name="medInput"
                        id="medInput"
                        label="Input (medium)"
                        placeholder="I'm Medium!"
                    />
                    <InputText
                        name="largeInput"
                        id="largeInput"
                        label="Input (Large)"
                        size="lg"
                        placeholder="I'm Large!"
                    />
                    <InputText
                        name="xlargeInput"
                        id="xlargeInput"
                        label="Input (XL)"
                        size="xl"
                        placeholder="I'm Extra Large!"
                    />
                </div>

                <ExampleSource>
                    {`
<InputText
    name="medInput"
    id="medInput"
    label="Default Input (medium)"
    placeholder="I'm Medium!"
/>
<InputText
    name="foo"
    id="foo"
    label="Default Input (Large)"
    size="lg"
    placeholder="Placeholder Text"
/>
<InputText
    name="xlargeInput"
    id="xlargeInput"
    label="Input (X-Large)"
    size="xl"
    placeholder="I'm Extra Large!"
/>
                        `}
                    </ExampleSource>
                    <Header3>Adding a Button</Header3>
                    <ParagraphMd>Buttons can be added to fields by passing a <code>ButtonInlineInputText</code> component to <code>inlineButton</code> prop</ParagraphMd>
                    <ParagraphMd>The following example shows how our <code>SearchField</code> component is made.</ParagraphMd>
                    <ExampleSource>
                    {`
const ButtonComponent = (
    <ButtonInlineInputText
        icon = {<SearchIcon />}
        format="subtle"
        size={size}
    />
);

return (
        <InputText
            {...filteredProps}
            showLabel={showLabel}
            inlineButton={ButtonComponent}
            isInline = {isInline}
            size={size}
        />
);
                        `}
                    </ExampleSource>

                    <Header3>Inline Fields</Header3>
                    <ParagraphMd>Fields have bottom margin by default. To suppress this margin (for instance in stand alone search field), use <code>isInline=true</code>. This will usually be used in tandem with the hidden field option above.</ParagraphMd>
                    <div data-code>
                        <InputText
                            name="inlineInput"
                            id="InlineInput"
                            isInline
                            label="Inline Input"
                            showLabel={false}
                            placeholder="My Label is Hidden"
                        />
                    </div>

                    <ExampleSource>
                        {`
  <InputText
    name="inlineInput"
    id="InlineInput"
    isInline
    label="Inline Input"
    showLabel={false}
    placeholder="My Label is Hidden"
/>
                            `}
                    </ExampleSource>
                </div>
        );
    }
}

export default InputTextDocs;

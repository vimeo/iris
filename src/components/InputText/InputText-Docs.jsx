import React from 'react';
import InputText from './InputText';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import Button from '../Button/Button';

const errorState = {
    errorProp: (<p>This is a problem!</p>),
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
                <p>Input components provide text-like (text, email, phone, etc..) input fields for forms, including the label and error messaging. Inputs are <code>type="text"</code> by default.</p>
                <p>Inputs provide no logic for field valdation themselves but expose three modes through the <code>format</code> prop which should be changed through parent state. Any event handlers passed to the component will be attached to the input field itself.</p>
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
                        helperMsg = {<p>See? I told you so.</p>}
                    />
                    <InputText
                        name="oops"
                        id="oops"
                        label="Errored Input"
                        format="negative"
                        errorMsg = {<p>This is a problem!</p>}
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

                <ExampleSource>
                    {`
 <InputText
    name="foo"
    id="foo"
    label="Default Input"
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
    helperMsg = {<p>See? I told you so.</p>}
/>
<InputText
    name="oops"
    id="oops"
    label="Errored Input"
    format="negative"
    errorMsg = {<p>This is a problem!</p>}
    placeholder="Placeholder Text"
    defaultValue="Something is wrong!"
/>
<InputText
    name="bar"
    id="bar"
    label="Disabled Input"
    disabled placeholder="Placeholder Text"
    defaultValue="I'm Disabled"
/>
                    `}
                    </ExampleSource>
                    <h3>Input Animation</h3>
                    <p>When the props passed to the input by parent state change, the input field animates the transition.</p>
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
                    <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Field State to "{this.state.nextState}"</Button>


                    <h3>Hidden Labels</h3>
                    <p>The label tag can be suppressed by setting <code>showLabel</code> to <code>false</code>.</p>
                    <p>In that case, an <code>aria-label</code> attribute will be added the input with the label text.</p>
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

                <h3>Input Sizes</h3>
                <p>Inputs can also be medium or large and are sized to line up with the buttons of the same size prop.</p>
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
                        `}
                    </ExampleSource>

                    <h3>Inline Fields</h3>
                    <p>Fields have bottom margin by default. To suppress this margin (for instance in stand alone search field), use <code>isInline=true</code>. This will usually be used in tandem with the hidden field option above.</p>
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

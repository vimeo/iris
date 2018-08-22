import React from 'react';
import {
    Button,
    TextArea,
 } from '../index';
import ExampleSource from '../../docs/layout/ExampleSource';

const initialState = {
    errorProp: null,
    format: 'neutral',
    nextState: 'error',
};

class TextAreaDocs extends React.Component {
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
                errorProp: 'This is a problem!',
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
                <div data-code>
                    <TextArea
                        name="fooTxt"
                        id="fooTxt"
                        label="Default TextArea"
                        placeholder="Placeholder Text"
                    />
                    <TextArea
                        name="oopsTxt"
                        id="oopsTxt"
                        label="Errored TextArea"
                        errorMsg = "I have a problem"
                        format = "negative"
                        placeholder="Placeholder Text"
                        defaultValue="Something is wrong!"
                    />
                    <TextArea
                        name="niceTxt"
                        id="niceTxt"
                        label="Positive TextArea"
                        format = "positive"
                        placeholder="Placeholder Text"
                        defaultValue="Something is right!"
                    />
                    <TextArea
                        name="barTxt"
                        id="barTxt"
                        label="Disabled TextArea"
                        disabled
                        placeholder="Placeholder Text"
                        defaultValue="I'm Disabled"
                    />
                    <TextArea
                        name="betterNowTextArea"
                        id="betterNowTextArea"
                        label="Resolved TextArea"
                        format = {this.state.format}
                        errorMsg = {this.state.errorProp}
                        placeholder="Placeholder Text"
                        defaultValue="My liege, and madam, to expostulate What majesty should be, what duty is, What day is day, night night, and time is time, were nothing but to waste night, day, and time; Therefore, since brevity is the soul of wit, And tediousness the limbs and outward flourishes I will be brief. Your noble son is mad."
                    />
                </div>
                <Button format="secondaryOutline" size="xs" onClick={this.handleClick}>Toggle Field State to "{this.state.nextState}"</Button>
                <div className="Pattern-DarkBlock">
                    <TextArea
                        name="fooTxt"
                        id="fooTxt"
                        label="Default TextArea"
                        placeholder="Placeholder Text"
                        theme="dark"
                    />
                    <TextArea
                        name="oopsTxt"
                        id="oopsTxt"
                        label="Errored TextArea"
                        errorMsg = "I have a problem"
                        format = "negative"
                        placeholder="Placeholder Text"
                        defaultValue="Something is wrong!"
                        theme="dark"
                    />
                    <TextArea
                        name="niceTxt"
                        id="niceTxt"
                        label="Positive TextArea"
                        format = "positive"
                        placeholder="Placeholder Text"
                        defaultValue="Something is right!"
                        theme="dark"
                    />
                </div>
                <ExampleSource>
                    {`
<TextArea
    name="fooTxt"
    id="fooTxt"
    label="Default TextArea"
    placeholder="Placeholder Text"
/>
<TextArea
    name="oopsTxt"
    id="oopsTxt"
    label="Errored TextArea"
    errorMsg = "I have a problem"
    format = "negative"
    placeholder="Placeholder Text"
    defaultValue="Something is wrong!"
/>
<TextArea
    name="niceTxt"
    id="niceTxt"
    label="Positive TextArea"
    format = "positive"
    placeholder="Placeholder Text"
    defaultValue="Something is right!"
/>
<TextArea
    name="barTxt"
    id="barTxt"
    label="Disabled TextArea"
    disabled
    placeholder="Placeholder Text"
    defaultValue="I'm Disabled"
/>
<TextArea
    name="betterNowTextArea"
    id="betterNowTextArea"
    label="Resolved TextArea"
    format = {this.state.format}
    errorMsg = {this.state.errorProp}
    placeholder="Placeholder Text"
    defaultValue="Something is getting better!"
/>
<TextArea
    name="fooTxt"
    id="fooTxt"
    label="Default TextArea"
    placeholder="Placeholder Text"
    theme="dark"
/>
<TextArea
    name="oopsTxt"
    id="oopsTxt"
    label="Errored TextArea"
    errorMsg = "I have a problem"
    format = "negative"
    placeholder="Placeholder Text"
    defaultValue="Something is wrong!"
    theme="dark"
/>
<TextArea
    name="niceTxt"
    id="niceTxt"
    label="Positive TextArea"
    format = "positive"
    placeholder="Placeholder Text"
    defaultValue="Something is right!"
    theme="dark"
/>
                    `}
                    </ExampleSource>
                </div>
        );
    }
}

export default TextAreaDocs;

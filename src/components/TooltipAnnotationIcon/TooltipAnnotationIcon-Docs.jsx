import React from 'react';
import TooltipAnnotationIcon from './TooltipAnnotationIcon';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, Header3, Header4 } from '../../../src/utility_components/Type/Type';
import InputText from '../InputText/InputText';
import InputToggle from '../InputToggle/InputToggle';
import InputCheckbox from '../InputCheckbox/InputCheckbox';

class TooltipAnnotationIconDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const FieldLabelWithTooltip = (
        <TooltipAnnotationIcon
            size="md"
            tooltipText="I am a medium tooltip"
            >
                <span>Annotated Input</span>
            </TooltipAnnotationIcon>
        );
        const FieldLabelWithTooltipTextBlock = (
            <TooltipAnnotationIcon
            size="md"
            labelType="textBlock"
            tooltipText="I am a medium tooltip"
            >
                <span>Annotated Input</span>
            </TooltipAnnotationIcon>
        );
        const FieldLabelWithTooltipLarge = (
            <TooltipAnnotationIcon
                size="lg"
                tooltipText="Cards and end screens let you link viewers to any destination from the embedded video."
            >
                <span>Annotated Input</span>
            </TooltipAnnotationIcon>
        );
        return (
            <div className="Pattern__docs">
                <ParagraphMd>
                The TooltipAnnotationIcon is a stand-alone icon button for annotating input labels with an "more info" icon which controls a tooltip. It comes in two sizes, use the size that matches the input's size prop.
                </ParagraphMd>
                <ParagraphMd>This component will appear to the right of the child component that it wraps.</ParagraphMd>
                <ParagraphMd>In order to have the tooltip line up with the different input styles there is a <code>labelType</code> prop. Use <code>inline</code> for inline labels (e.g. toggles, checkboxes, radios) and <code>textBlock</code> for labels on inputs where the label is above the field.
                </ParagraphMd>
                <ParagraphMd>
                All of the props passed available to the TooltipOverlay component can be passed to this component.
                </ParagraphMd>
                <div data-code>
                    <div style={{ position: 'relative' }}>

                        <TooltipAnnotationIcon
                            size="md"
                            tooltipText="I am a medium tooltip"
                        >
                            <Header4>Medium (size='md')</Header4>
                        </TooltipAnnotationIcon>

                    </div>
                    <div style={{ position: 'relative' }}>
                        <TooltipAnnotationIcon
                                size="lg"
                                tooltipText="I am a large tooltip"
                        >
                            <Header4>Large (size='lg')</Header4>
                        </TooltipAnnotationIcon>

                    </div>
                </div>

                <ExampleSource>
                    {`
<TooltipAnnotationIcon
    size="md"
    tooltipText="I am a medium tooltip"
>
    <Header4>Medium (size='md')</Header4>
</TooltipAnnotationIcon>
<TooltipAnnotationIcon
    size="lg"
    tooltipText="I am a large tooltip"
>
    <Header4>Large (size='lg')</Header4>
</TooltipAnnotationIcon>
                        `}
                </ExampleSource>

                <Header3>Use Cases</Header3>
                <div data-code>
                    <InputText
                    name="fooAnnotated"
                    id="fooAnnotated"
                    label={FieldLabelWithTooltipTextBlock}
                    placeholder="Placeholder Text"
                    />
                    <InputCheckbox
                    label={FieldLabelWithTooltip}
                    name="demoCheckboAnnotated"
                    id="CheckboxAnnotated"
                    value="2"
                    />
                    <InputToggle
                    label={FieldLabelWithTooltip}
                    name="demoToggleAnnotated"
                    id="ToggleAnnotated"
                    size="md"
                    value="42"
                    />
                    <InputToggle
                    label={FieldLabelWithTooltipLarge}
                    name="demoToggleAnnotatedLg"
                    id="ToggleAnnotatedLg"
                    size="lg"
                    value="42"
                    />
                </div>

                <ExampleSource>
                    {`
const FieldLabelWithTooltip = (
    <span>
    Annotated Input <TooltipAnnotationIcon
    size="md"
    tooltipText="I am a medium tooltip"
    />
    </span>
);
const FieldLabelWithTooltipTextBlock = (
    <span>
    Annotated Input <TooltipAnnotationIcon
    size="md"
    labelType="textBlock"
    tooltipText="I am a medium tooltip"
    />
    </span>
);
const FieldLabelWithTooltipLarge = (
    <span>
    Annotated Input <TooltipAnnotationIcon
    size="lg"
    tooltipText="Cards and end screens let you link viewers to any destination from the embedded video."
    />
    </span>   
);

<InputText
    name="fooAnnotated"
    id="fooAnnotated"
    label={FieldLabelWithTooltipTextBlock}
    placeholder="Placeholder Text"
/>
<InputCheckbox
    label={FieldLabelWithTooltip}
    name="demoCheckboAnnotated"
    id="CheckboxAnnotated"
    value="2"
/>
<InputToggle
    label={FieldLabelWithTooltip}
    name="demoToggleAnnotated"
    id="ToggleAnnotated"
    size="md"
    value="42"
/>
<InputToggle
    label={FieldLabelWithTooltipLarge}
    name="demoToggleAnnotatedLg"
    id="ToggleAnnotatedLg"
    size="lg"
    value="42"
/>
                        `}
                </ExampleSource>
            </div>
        );
    }
}

export default TooltipAnnotationIconDocs;

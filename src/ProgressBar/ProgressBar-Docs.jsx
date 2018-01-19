import React from 'react';
import ProgressBar from './ProgressBar';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../Type';

class ProgressBarDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>ProgressBar is used to show progress for processes like uploading a video.</ParagraphMd>
                <ParagraphMd>If both <code>"empty"</code> is selected for the <code>format</code> prop and the <code>animated</code> prop is passed, the progress bar will appear full-width visually but will still report the value passed to <code>currentValue</code> (probably 0 in most cases) to assistive technologies. This is used for the inital loading state that acknowledges that the process has begun but no progress has been made.</ParagraphMd>
                <div data-code>
                    <ProgressBar
                        currentValue={25}
                        format="neutral"
                        size="md"
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={33.33}
                        format="neutral"
                        size="md"
                        animated
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={0}
                        format="neutral"
                        size="lg"
                        animated
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={50}
                        format="neutral"
                        size="xl"
                        animated
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={0}
                        format="empty"
                        animated
                        size="md"
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={0}
                        format="empty"
                        animated
                        size="lg"
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={0}
                        format="empty"
                        animated
                        size="xl"
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={25}
                        format="warning"
                        size="md"
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={75}
                        format="warning"
                        size="lg"
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={60}
                        format="warning"
                        size="xl"
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={80}
                        format="alert"
                        size="xl"
                        style={{ marginBottom: '1em' }}
                    />
                    <ProgressBar
                        currentValue={25}
                        format="disabled"
                        size="lg"
                        style={{ marginBottom: '1em' }}
                    />
                </div>

                <ExampleSource>
                    {`
<ProgressBar
    currentValue={25}
    format="neutral"
    size="md"
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={33.33}
    format="neutral"
    size="md"
    animated
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={50}
    format="neutral"
    size="lg"
    animated
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={50}
    format="neutral"
    size="xl"
    animated
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={0}
    format="empty"
    animated
    size="md"
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={0}
    format="empty"
    animated
    size="lg"
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={0}
    format="empty"
    animated
    size="xl"
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={25}
    format="warning"
    size="md"
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={75}
    format="alert"
    size="lg"
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={60}
    format="warning"
    size="xl"
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
    currentValue={80}
    format="alert"
    size="xl"
    style={{ marginBottom: '1em' }}
/>
<ProgressBar
currentValue={25}
format="disabled"
size="lg"
style={{ marginBottom: '1em' }}
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ProgressBarDocs;

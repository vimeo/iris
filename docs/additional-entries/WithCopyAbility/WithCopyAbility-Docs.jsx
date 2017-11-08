import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import LinkText from '../../../src/LinkText';
import Button from '../../../src/Button/Button';
import {ParagraphMd} from '../../../src/Type';
import {List, ListItem} from '../../../src/List';
import withCopyAbility from '../../../src/withCopyAbility/withCopyAbility';
import ClipboardIcon from '../../../src/icons/clipboard.svg';

const WithCopyAbilityDocs = (props) => {

    const CopyButton = withCopyAbility(Button);
    const CopyLink = withCopyAbility(LinkText);

    return (
        <div className="Pattern__docs">
            <ParagraphMd>The <code>withCopyAbility</code> function provides a Higher-Order Component wrapper to add copy to clipboard ability to a button or link.</ParagraphMd>
            <ParagraphMd>To use the component import the helper and wrap a LinkText or one of our button components in <code>withCopyAbility()</code> and add the following props:</ParagraphMd>
            <List>
                <ListItem><code>stringToCopy</code> - a string that will be copied to the clipboard.</ListItem>
                <ListItem><code>successMessage</code> - a string that will show in the toastification upon a successful copy.</ListItem>
                <ListItem><code>onCopy</code> - (optional) a callback that fires when the copy button is clicked.</ListItem>
            </List>
            <div data-code>
                <CopyLink
                    successMessage="Copied from Link"
                    stringToCopy = "From a Link to your clipboard!"
                >
                    Click to Copy
                </CopyLink>
                <CopyButton
                    icon={<ClipboardIcon />}
                    successMessage="Copied from Button"
                    stringToCopy = "From a button to your clipboard!"
                >
                    Copy
                </CopyButton>
            </div>

         
            <ExampleSource>
                {`
import withCopyAbility from 'iris/WithCopyAbility';
import LinkText from 'iris/LinkText';
import Button from 'iris/Button';
const CopyButton = withCopyAbility(Button);
const CopyLink = withCopyAbility(LinkText);
<CopyLink
    successMessage="Copied from Link"
    stringToCopy = "From a Link to your clipboard!"
    >
    Click to Copy
</CopyLink>
<CopyButton
    icon={<ClipboardIcon />}
    successMessage="Copied from Button"
    stringToCopy = "From a button to your clipboard!"
>
    Copy
</CopyButton>
                    `}
                </ExampleSource>
            </div>
    );
};

export default WithCopyAbilityDocs;

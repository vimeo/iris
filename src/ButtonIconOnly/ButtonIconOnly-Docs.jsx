import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import SettingsIcon from '../icons/gear.svg';
import DownloadIcon from '../icons/download-arrow.svg';
import DeleteIcon from '../icons/trash.svg';
import { ButtonIconOnly, ParagraphMd, Header3 } from '../index';

const clickHandler = (event) => {
    console.log('clicked', event);
};

const ButtonIconOnlyDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <ParagraphMd>Icon Only Buttons are used when an icon needs to serve as a button element. These are generally used when a text label is not feasible due to spatial contraints.</ParagraphMd>
            <ParagraphMd><strong>Spacing Note:</strong> Icon Only buttons will receive automatic spacing if they are siblings in a node. Any other usage requires manual spacing.</ParagraphMd>
            <ParagraphMd><strong>Accessibility Note:</strong> You must include a useful title attribute on the icon svg.</ParagraphMd>
            <ParagraphMd><strong>Sizing Note:</strong> The icon size is the same for both <code>md</code> and <code>sm</code> sizes, but their box size varies to match the element with which it may be inlined.</ParagraphMd>
            <div style={{ 'padding': '1rem', 'width': '100%' }} data-code>
                <ButtonIconOnly
                    icon={<SettingsIcon />}
                    format="dark"
                    size="sm"
                    onClick={clickHandler}
                />
                <ButtonIconOnly
                    icon={<DownloadIcon title="Download" />}
                    format="primary"
                    size="sm"
                    onClick={clickHandler}
                />

                <ButtonIconOnly
                    icon={<SettingsIcon />}
                    format="midDark"
                    size="md"
                    onClick={clickHandler}
                />
            </div>
 <ParagraphMd>For buttons on image backgrounds we use the light formats. The <code>light</code> format is the standard, <code>lightWarning</code> is used for destructive actions.</ParagraphMd>
            <div style={{ 'padding': '1rem', 'width': '100%' }} data-code>
                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete"/>}
                    format="warning"
                    size="sm"
                    onClick={clickHandler}
                />
                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete"/>}
                    format="warning"
                    size="sm"
                    onClick={clickHandler}
                />

                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete"/>}
                    format="warning"
                    size="md"
                    onClick={clickHandler}
                />
                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete"/>}
                    format="warning"
                    size="md"
                    onClick={clickHandler}
                />
            </div>

            <div data-code style={{ 'backgroundColor': '#2E2E2E', 'padding': '1rem', 'width': '100%' }}>
                    <ButtonIconOnly
                        icon={<SettingsIcon title="Settings" />}
                        format="alternative"
                        size="sm"
                        onClick={clickHandler}
                    />

                    <ButtonIconOnly
                        icon={<DownloadIcon title="Download" />}
                        format="alternative"
                        size="sm"
                        onClick={clickHandler}
                    />
                     <ButtonIconOnly
                        icon={<SettingsIcon title="Settings" />}
                        format="alternative"
                         size="md"
                         onClick={clickHandler}
                    />

                    <ButtonIconOnly
                        icon={<DownloadIcon title="Download" />}
                        format="alternative"
                         size="md"
                         onClick={clickHandler}
                    />
                    <ButtonIconOnly
                        icon={<SettingsIcon title="Settings" />}
                        format="lightTransparent"
                        size="sm"
                        onClick={clickHandler}
                    />

                    <ButtonIconOnly
                        icon={<DownloadIcon title="Download" />}
                        format="lightTransparent"
                        size="sm"
                    />
                    <ButtonIconOnly
                        icon={<SettingsIcon title="Settings" />}
                        format="lightTransparent"
                        size="md"
                        onClick={clickHandler}
                    />
                    <ButtonIconOnly
                        icon={<DownloadIcon title="Download" />}
                        format="lightTransparent"
                        size="md"
                        onClick={clickHandler}
                    />

                    <ButtonIconOnly
                        icon={<SettingsIcon title="Settings" />}
                        format="secondaryDark"
                        size="sm"
                        onClick={clickHandler}
                    />

                    <ButtonIconOnly
                        icon={<DownloadIcon title="Download" />}
                        format="secondaryDark"
                        size="sm"
                        onClick={clickHandler}
                    />
                    <ButtonIconOnly
                        icon={<SettingsIcon title="Settings" />}
                        format="secondaryDark"
                        size="md"
                        onClick={clickHandler}
                    />
                    <ButtonIconOnly
                        icon={<DownloadIcon title="Download" />}
                        format="secondaryDark"
                        size="md"
                        onClick={clickHandler}
                    />
            </div>
            <div data-code style={{ 'backgroundImage': 'url(https://placekitten.com/1000/800)', 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'padding': '1rem', 'width': '100%' }}>
                <ButtonIconOnly
                    icon={<SettingsIcon title="Settings" />}
                    format="light"
                    size="sm"
                    onClick={clickHandler}
                />
                <ButtonIconOnly
                    icon={<DownloadIcon title="Download" />}
                    format="light"
                    size="md"
                    onClick={clickHandler}
                />

                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete" />}
                    format="lightWarning"
                    size="sm"
                    onClick={clickHandler}
                />
                <ButtonIconOnly
                    icon={<DeleteIcon title="Delete" />}
                    format="lightWarning"
                    size="md"
                    onClick={clickHandler}
                />
            </div>

            <ExampleSource>
                {`
// Dark
<ButtonIconOnly
    icon={<SettingsIcon title="Settings" />}
    format="dark"
    size="sm"
    onClick={clickHandler}
 />

 // Primary
 <ButtonIconOnly
    icon={<DownloadIcon title="Download" />}
    format="primary"
    size="sm"
    onClick={clickHandler}
/>

 // MidDark
 <ButtonIconOnly
    icon={<DownloadIcon title="Download" />}
    format="midDark"
    size="md"
    onClick={clickHandler}
/>

// secondaryDark
<ButtonIconOnly
    icon={<DownloadIcon title="Download" />}
    format="secondaryDark"
    size="md"
    onClick={clickHandler}
/>

 //Warning
 <ButtonIconOnly
    icon={<DeleteIcon title="Delete"/>}
    format="warning"
    size="sm"
    onClick={clickHandler}
/>
 // Alternative
 <ButtonIconOnly
    icon={<SettingsIcon title="Settings" />}
    format="alternative"
    size="sm"
    onClick={clickHandler}
/>

// LightTransparent
<ButtonIconOnly
    icon={<DownloadIcon title="Download" />}
    format="lightTransparent"
    size="md"
    onClick={clickHandler}
/>
// Light
 <ButtonIconOnly
    icon={<SettingsIcon title="Settings" />}
    format="light"
    size="sm"
    onClick={clickHandler}
/>
//lightWarning
 <ButtonIconOnly
    icon={<DeleteIcon title="Delete" />}
    format="lightWarning"
    size="md"
    onClick={clickHandler}
/>
                `}
                </ExampleSource>
                <Header3>Using with Anchor Tags</Header3>
                <ParagraphMd>If you need the button to serve as a link rather than an actual button set the <code>isButtonElement</code> prop to false. This will change the button element to a span element which can be legally wrapped in an anchor tag.</ParagraphMd>
                   <div data-code>
                <ButtonIconOnly
                    icon={<SettingsIcon title="Settings" />}
                    format="dark"
                    isButtonElement={false}
                />
                <ButtonIconOnly
                    icon={<DownloadIcon title="Download" />}
                    format="dark"
                    isButtonElement={false}
                />
                </div>
                            <ExampleSource>
                {`
<ButtonIconOnly
    icon={<SettingsIcon title="Settings" />}
    format="dark"
    isButtonElement={false}
/>
<ButtonIconOnly
    icon={<DownloadIcon title="Download" />}
    format="dark"
    isButtonElement={false}
/>
                `}
                </ExampleSource>
            </div>
    );
};

export default ButtonIconOnlyDocs;

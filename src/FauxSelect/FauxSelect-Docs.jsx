import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ExampleSource from '../../docs/layout/ExampleSource';
import {
    FauxSelect,
    List,
    ListItem,
    MenuPanel,
    MenuPanelList,
    NotificationNeutral,
    NotificationWarning,
    ParagraphMd,
    SelectWrapper,
} from '../index';
import { Header3 } from '../Type';

const TextWrapper = styled.div`
    padding: 1em;
`;

class FauxSelectDocs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 'This is the initial value',
            menuOpen: false,
        };
    }
    _;
    _handleOptionClick = event => {
        event.preventDefault();
        const target = ReactDOM.findDOMNode(event.currentTarget);
        const newLabel = target && target.getAttribute('data-label');

        this.setState({
            currentValue: newLabel || '',
            menuOpen: false,
        });
    };

    _openMenuOnSelectClick = () => {
        this.setState({
            menuOpen: true,
        });
    };

    _resetFocusToFauxSelect1 = () => {
        const fauxSelectInstance = document.querySelector(
            '[data-fauxSelectDemo1]',
        );
        if (fauxSelectInstance instanceof HTMLButtonElement) {
            fauxSelectInstance.focus({ preventScroll: true });
        }
    };

    _resetFocusToFauxSelect2 = () => {
        const fauxSelectInstance = document.querySelector(
            '[data-fauxSelectDemo2]',
        );
        if (fauxSelectInstance instanceof HTMLButtonElement) {
            fauxSelectInstance.focus({ preventScroll: true });
        }
    };

    render() {
        return (
            <div className="Pattern__docs">
                <NotificationWarning>
                    <ParagraphMd>
                        This approach should only be used if absolutely
                        necessary (usually because you need HTML in the option
                        list). It is far less friendly than a native select from
                        an accesibility and UX perspective.
                    </ParagraphMd>
                </NotificationWarning>
                <NotificationNeutral headerText="Accessibility Notes">
                    <List>
                        <ListItem>
                            Be sure to mimic native select key commands.
                            Pressing the down arrow (KeyCode = 40) on a focused
                            select should open it and scroll through the option.
                            Hitting return on an option should set the faux
                            select's "value".
                        </ListItem>
                        <ListItem>
                            Make sure to programtically return focus to the
                            FauxSelect button when you close the menu panel.
                        </ListItem>
                        <ListItem>
                            Make the text string you pass to{' '}
                            <code>a11yLabel</code> sufficently descriptive for
                            the user to understand what will happen when the
                            click the button. Rember that the button label may
                            have a value in it that has no meaning about its
                            action
                        </ListItem>
                    </List>
                </NotificationNeutral>
                <ParagraphMd>
                    The FauxSelect exists to emulate a select menu visually but
                    provide a non-native alternative for when we need to do
                    something in the "drop-down" that is not natively supported.
                </ParagraphMd>
                <ParagraphMd>
                    This component does not provide an HTML input element to
                    store and send the value in a form. This should be handled
                    through other means.
                </ParagraphMd>
                <div data-code>
                    <SelectWrapper
                        id="FauxSelectExample1"
                        label="Faux Select Label"
                    >
                        <MenuPanel
                            alignment="left"
                            hideOutline
                            isFluid
                            isShowing={this.state.menuOpen}
                            onClose={this._resetFocusToFauxSelect1}
                            shouldRefocusTriggerOnClose={false}
                            menuContent={
                                <div>
                                    <TextWrapper>
                                        <ParagraphMd noMargin>
                                            Here is some arbitrary HTML that is
                                            necessitating this.
                                        </ParagraphMd>
                                    </TextWrapper>
                                    <MenuPanelList
                                        hasDivider
                                        menuItems={[
                                            {
                                                'data-label': 'Choice 1',
                                                label: 'Choice 1',
                                                href: '#',
                                                onClick: this
                                                    ._handleOptionClick,
                                            },
                                            {
                                                'data-label': 'Choice 2',
                                                label: 'Choice 2',
                                                href: '#',
                                                onClick: this
                                                    ._handleOptionClick,
                                            },
                                        ]}
                                    />
                                </div>
                            }
                            size="lg"
                        >
                            <FauxSelect
                                aria-label="Click to see options"
                                data-fauxSelectDemo1
                                onClick={this._openMenuOnSelectClick}
                            >
                                {this.state.currentValue}
                            </FauxSelect>
                        </MenuPanel>
                    </SelectWrapper>
                </div>

                <ExampleSource>
                    {`
import {
    FauxSelect,
    MenuPanel,
    MenuPanelList,
    SelectWrapper,
} from '@vimeo/iris';

_handleOptionClick=()=> {
    // ... something that sets the state that is the children prop of FauxSelect
};

<SelectWrapper
    id="FauxSelectExample1"
    label="Faux Select Label"
>
    <MenuPanel
        alignment="left"
        hideOutline
        onClose={this._resetFocusToFauxSelect}
        shouldRefocusTriggerOnClose={false}
        isFluid
        isShowing={this.state.menuOpen}
        menuContent={(
            <div>
                <TextWrapper>
                    <ParagraphMd noMargin>Here is some arbitrary HTML that is causeing us to need this.</ParagraphMd>
                </TextWrapper>
                <MenuPanelList
                    hasDivider
                    menuItems = {[
                        {
                            'data-label': 'Choice 1',
                            label: 'Choice 1',
                            href: '#',
                            onClick: this._handleOptionClick,

                        },
                        {
                            'data-label': 'Choice 2',
                            label: 'Choice 2',
                            href: '#',
                            onClick: this._handleOptionClick,
                        },
                    ]}
                />
            </div>
        )}
        size="lg"
    >
        <FauxSelect
            aria-label="Click to see options"
            data-fauxSelectDemo
            onClick={this._openMenuOnSelectClick}
            ref={button => this.fauxSelectInstance = button}
        >
            {this.state.currentValue}
        </FauxSelect>
    </MenuPanel>
</SelectWrapper>
                        `}
                </ExampleSource>
                <Header3>Dark Theme </Header3>
                <List>
                    <ListItem>
                        Set <code>theme="dark"</code> on SelectWrapper (note
                        this one also has <code>showLabel=false"</code>)
                    </ListItem>
                    <ListItem>
                        Set <code>theme="dark"</code> on MenuPanel
                    </ListItem>
                    <ListItem>
                        Set <code>theme="dark"</code> on MenuPanelList
                    </ListItem>
                </List>
                <div className="Pattern-DarkBlock">
                    <SelectWrapper
                        id="FauxSelectExample1"
                        label="Faux Select Label"
                        showLabel={false}
                        theme="dark"
                    >
                        <MenuPanel
                            alignment="left"
                            theme="dark"
                            hideOutline
                            isFluid
                            isShowing={this.state.menuOpen}
                            onClose={this._resetFocusToFauxSelect2}
                            shouldRefocusTriggerOnClose={false}
                            menuContent={
                                <div>
                                    <TextWrapper>
                                        <ParagraphMd format="light" noMargin>
                                            Here is some arbitrary HTML that is
                                            necessitating this.
                                        </ParagraphMd>
                                    </TextWrapper>
                                    <MenuPanelList
                                        hasDivider
                                        menuItems={[
                                            {
                                                'data-label': 'Choice 1',
                                                label: 'Choice 1',
                                                href: '#',
                                                onClick: this
                                                    ._handleOptionClick,
                                            },
                                            {
                                                'data-label': 'Choice 2',
                                                label: 'Choice 2',
                                                href: '#',
                                                onClick: this
                                                    ._handleOptionClick,
                                            },
                                        ]}
                                        theme="dark"
                                    />
                                </div>
                            }
                            size="lg"
                        >
                            <FauxSelect
                                aria-label="Click to see options"
                                data-fauxSelectDemo2
                                theme="dark"
                                onClick={this._openMenuOnSelectClick}
                            >
                                {this.state.currentValue}
                            </FauxSelect>
                        </MenuPanel>
                    </SelectWrapper>
                </div>
                <ExampleSource>
                    {`
<SelectWrapper
    id="FauxSelectExample1"
    label="Faux Select Label"
    showLabel={false}
    theme="dark"
>
    <MenuPanel
        alignment="left"
        theme="dark"
        hideOutline
        isFluid
        isShowing={this.state.menuOpen}
        onClose={this._resetFocusToFauxSelect2}
        shouldRefocusTriggerOnClose={false}
        menuContent={(
            <div>
                <TextWrapper>
                    <ParagraphMd format="light" noMargin>Here is some arbitrary HTML that is necessitating this.</ParagraphMd>
                </TextWrapper>
                <MenuPanelList
                    hasDivider
                    menuItems = {[
                        {
                            'data-label': 'Choice 1',
                            label: 'Choice 1',
                            href: '#',
                            onClick: this._handleOptionClick,

                        },
                        {
                            'data-label': 'Choice 2',
                            label: 'Choice 2',
                            href: '#',
                            onClick: this._handleOptionClick,
                        },
                    ]}
                    theme="dark"
                />
            </div>
        )}
        size="lg"
    >
        <FauxSelect
            aria-label="Click to see options"
            data-fauxSelectDemo2
            theme="dark"
            onClick={this._openMenuOnSelectClick}
        >
            {this.state.currentValue}
        </FauxSelect>
    </MenuPanel>
</SelectWrapper>
                    `}
                </ExampleSource>
                <Header3>Putting it all together</Header3>
                <ParagraphMd>
                    The FauxSelect approach combines three components to provide
                    this effect:
                </ParagraphMd>
                <List>
                    <ListItem>
                        <strong>FauxSelect</strong> provides a button that looks
                        like our styling of the native select menu. This should
                        trigger the MenuPanel and have its label (which is its
                        children prop) set by state to the currently selected
                        option. See below for the prop API
                    </ListItem>
                    <ListItem>
                        The <strong>MenuPanel</strong> component which should
                        wrap the FauxSelect and contain option elements that
                        control the Faux Select. (See API Below).{' '}
                        <strong>Note:</strong> because the FauxSelect has its
                        own focus state, use the <code>hideOutline</code> flag
                        to suppress the focus outline on the menu panel trigger,
                        also set <code>shouldRefocusTriggerOnClose</code> to
                        false.
                    </ListItem>
                    <ListItem>
                        The <strong>SelectWrapper</strong> component which
                        provides the label, input field messages, and some of
                        the select menu styling. This should wrap the MenuPanel
                        and FauxSelect.(See API Below)
                    </ListItem>
                </List>
                <Header3>Select Menu Wrapper</Header3>
                <ParagraphMd>
                    The select menu wrapper should only be used in the context
                    of a FauxSelect instance.
                </ParagraphMd>
            </div>
        );
    }
}

export default FauxSelectDocs;

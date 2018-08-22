import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import { ButtonLoadingState, ParagraphMd } from '../index';
import SettingsIcon from '../icons/gear.svg';

class ButtonLoadingStateDocs extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
        };
    }

    _handleClick = () => {
        this.setState({
            isLoading: !this.state.isLoading,
        });
    };
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>The ButonLoadingState component adds the ability to toggle a loading state with the <code>isLoading</code> prop. All other props are sent to the Iris Button so the same API can be used.</ParagraphMd>
                <div data-code>
                    <ButtonLoadingState
                        isLoading={!this.state.isLoading}
                        onClick={this._handleClick}
                        size="lg"
                    >
                        Click Me
                    </ButtonLoadingState>
                    <ButtonLoadingState
                        icon={<SettingsIcon />}
                        isLoading={this.state.isLoading}
                        onClick={this._handleClick}
                        format="primaryOutline"
                        size="md"
                    >
                        Click Me
                    </ButtonLoadingState>
                    <ButtonLoadingState
                        icon={<SettingsIcon />}
                        isLoading={!this.state.isLoading}
                        onClick={this._handleClick}
                        format="success"
                        size="sm"
                    >
                        Click Me
                    </ButtonLoadingState>
                    <ButtonLoadingState
                        isLoading={this.state.isLoading}
                        onClick={this._handleClick}
                        format="secondary"
                        size="xs"
                    >
                        Click Me
                    </ButtonLoadingState>
                </div>

                <ExampleSource>
                    {`
<ButtonLoadingState
    isLoading={!this.state.isLoading}
    onClick={this._handleClick}
    size="lg"
>
    Click Me
</ButtonLoadingState>
<ButtonLoadingState
    icon={<SettingsIcon />}
    isLoading={this.state.isLoading}
    onClick={this._handleClick}
    format="primaryOutline"
    size="md"
>
    Click Me
</ButtonLoadingState>
<ButtonLoadingState
    icon={<SettingsIcon />}
    isLoading={!this.state.isLoading}
    onClick={this._handleClick}
    format="success"
    size="sm"
>
    Click Me
</ButtonLoadingState>
<ButtonLoadingState
    isLoading={this.state.isLoading}
    onClick={this._handleClick}
    format="secondary"
    size="xs"
>
    Click Me
</ButtonLoadingState>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ButtonLoadingStateDocs;

import React from 'react';
import ButtonToggleState from './ButtonToggleState';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../Type';

import PlusIcon from '../icons/plus.svg';
import CheckIcon from '../icons/checkmark.svg';
import DeleteIcon from '../icons/dismiss-x.svg';
class ButtonToggleStateDocs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            following: false,
            connected: true,
        };
        this.followToggle = this.followToggle.bind(this);
        this.connectToggle = this.connectToggle.bind(this);
    }

    followToggle() {
        this.setState({
            following: !this.state.following,
        });
    }

    connectToggle() {
        this.setState({
            connected: !this.state.connected,
        });
    }

    render() {

        const followText = 'Follow';
        const unfollowText = 'Unfollow';
        const followingText = 'Following';

        const connectText = 'Connect';
        const disconnectText = 'Disconnect';
        const connectedText = 'Connected';

        return (
            <div className="Pattern__docs">
            <ParagraphMd>The Toggle State Button wraps the Button component in behaviors and configurations for buttons that represent a Toggled state like the Vimeo Follow Button or App Connector</ParagraphMd>
            <ParagraphMd>Icons for each state should be passed to their corresponding icon prop (see example).</ParagraphMd>
            <ParagraphMd>The button is available in two formats named after their intial state when they are in "off" (e.g. "+ follow") mode.</ParagraphMd>
            <ParagraphMd>The buttons will switch to a special "turnOffAction" text (e.g 'x unfollow') state on hover unless the user has not yet triggered a 'mouseleave' event after clicking the button from "follow" to "following", in the example of the follow button.</ParagraphMd>
            <ParagraphMd>The button keeps no internal state of whether or not it is currently active or not. This is controlled by the <code>isActive</code> boolean prop.</ParagraphMd>
            <ParagraphMd>The button also does not manage the business logic intiating or reacting to a request, for instance,  to follow or unfollow, a function that does this should be passed to <code>onClick</code>.</ParagraphMd>
                <div data-code>
                    <ButtonToggleState
                        format="primaryOutline"
                        isActive={this.state.following}
                        offIcon={<PlusIcon />}
                        offStateText={followText}
                        onIcon={<CheckIcon />}
                        onStateText={followingText}
                        onClick={this.followToggle}
                        turnOffActionText={unfollowText}
                        turnOffIcon = {<DeleteIcon />}
                    />
                    <ButtonToggleState
                        format="primary"
                        isActive={this.state.following}
                        offIcon={<PlusIcon />}
                        offStateText={followText}
                        onIcon={<CheckIcon />}
                        onStateText={followingText}
                        onClick={this.followToggle}
                        turnOffActionText={unfollowText}
                        turnOffIcon = {<DeleteIcon />}
                    />
                      <ButtonToggleState
                        format="primaryOutline"
                        isActive={this.state.connected}
                        offIcon={<PlusIcon />}
                        offStateText={connectText}
                        onIcon={<CheckIcon />}
                        onStateText={connectedText}
                        onClick={this.connectToggle}
                        turnOffActionText={disconnectText}
                        turnOffIcon = {<DeleteIcon />}
                    />
                    <ButtonToggleState
                        format="primary"
                        isActive={this.state.connected}
                        offIcon={<PlusIcon />}
                        offStateText={connectText}
                        onIcon={<CheckIcon />}
                        onStateText={connectedText}
                        onClick={this.connectToggle}
                        turnOffActionText={disconnectText}
                        turnOffIcon = {<DeleteIcon />}
                    />
                </div>

                <ExampleSource>
                    {`
<ButtonToggleState
    format="primaryOutline"
    isActive={this.state.following}
    offStateText={followText}
    onStateText={followingText}
    onClick={this.followToggle}
    turnOffActionText={unfollowText}
/>
<ButtonToggleState
    format="primary"
    isActive={this.state.following}
    offStateText={followText}
    onStateText={followingText}
    onClick={this.followToggle}
    turnOffActionText={unfollowText}
/>
    <ButtonToggleState
    format="primaryOutline"
    isActive={this.state.connected}
    offStateText={connectText}
    onStateText={connectedText}
    onClick={this.connectToggle}
    turnOffActionText={disconnectText}
/>
<ButtonToggleState
    format="primary"
    isActive={this.state.connected}
    offStateText={connectText}
    onStateText={connectedText}
    onClick={this.connectToggle}
    turnOffActionText={disconnectText}
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default ButtonToggleStateDocs;

// @flow
import React from 'react';

type Props = {
    children: React$Element<*>,
};
class VerticalMenuItemLink extends React.Component {

    props: Props;

    render() {
        return (
            <a {...this.props}>{this.props.children}</a>
        );
    }
}

export default VerticalMenuItemLink;


// @flow
/* this component is borrowed from https://github.com/elementalui/elemental */
import React from 'react';
import classNames from 'classnames';
import Prism from 'prismjs';
type Props = {
    children: React$Element<*>,
    language: string,
};
class ExampleSource extends React.Component<Props> {
     static defaultProps = {
        language: 'markup',
    };
    constructor(props: Props) {
        super(props);
    }

    componentDidMount () {
        this.highlight();
    }

    componentDidUpdate () {
        this.highlight();
    }

    props: Props;

    highlight () {
        Prism.highlightElement(this.refs.code, true);
    }

    fixIndentation (children: React$Element<*>) {
        if (typeof children !== 'string') return children;
        var lines = children.split('\n').filter(l => l);
        if (!lines.length) return children;
        var indent = /^\t+/.exec(lines[0]);
        if (indent) {
            indent = indent[0].length;
            lines = lines.map(s => s.substr(indent));
        }
        return lines.join('\n');
    }

    render () {
        var codeClass = classNames('sg-JSX-example code-example__code', (
            'language-' + this.props.language
        ));
        return (
            <pre className="code-example__pre">
                <code ref="code" className={codeClass}>
                    {this.fixIndentation(this.props.children)}
                </code>
            </pre>
        );
    }

};


export default ExampleSource;

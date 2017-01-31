import * as React from 'react';
import classNames from 'classnames';
import styles from './{{pascalCase name}}.css';

const displayName = '{{pascalCase name}}';



const propTypes =  {

};

const defaultProps = {

};

class {{pascalCase name}} extends React.Component {

  render () {
    // className builder
    const componentClass = classNames(
      styles.{{pascalCase name}},
      this.props.className
    );

    // filter out presentational props from this.props and store the rest as "filteredProps" to be printed into the component as properties (e.g. HTML attribute pass-through, event handlers)
    const {
      className,
      filteredProps
    } = this.props;

    return (
      <div
        {...filteredProps}
        className={componentClass}
      >
        {this.props.children}
      </div>
    );
  }

};

{{pascalCase name}}.displayName = displayName;

{{pascalCase name}}.propTypes = propTypes;

{{pascalCase name}}.defaultProps = defaultProps;

export default {{pascalCase name}};

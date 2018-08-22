import React from 'react';
var data = require('json-loader!../../data/componentAPITransformed.json');


const ApiSingleRow = (props) => (
    <tr>
        <td>{props.thisProp}</td>
        <td>{props.thisPropTypeName}</td>
        <td>{props.thisDefaultValue}</td>
        <td>{props.thesePropValues}</td>
        <td>{props.thisPropRequired}</td>
    </tr>
);

const apiRows = (propName) => {
    const theseProps = data[propName].props;
    let apiRows = [];

    Object.keys(theseProps).map((key, i) => {
        const thisPropData = theseProps[key];
        const thisDefaultValue = thisPropData.defaultValue
            ? thisPropData.defaultValue.value
            : 'none';
        const thisPropRequired = thisPropData.required
            ? 'required'
            : 'optional';
        
        let thesePropValues = '';
        let thisPropTypeName;
        
        //  React with proptypes
        if(thisPropData.type) {
            thisPropTypeName = thisPropData.type.name;
            
            if (thisPropTypeName === 'enum') {
                Object.keys(thisPropData.type.value).map(function(key2, i) {
                    thesePropValues += thisPropData.type.value[key2].value + ' | ';
                });
                thesePropValues = thesePropValues.slice(0, -2);
            } else {
                thesePropValues = "valid " + thisPropTypeName;
            }
            
            //  React with Flow
        } else if (thisPropData.flowType) {
            thisPropTypeName = thisPropData.flowType.name;
            
            if (thisPropTypeName === 'union') {
                thesePropValues = thisPropData.flowType.raw
            } else {
                thesePropValues = "valid " + thisPropTypeName;
            }
            
        }

        apiRows.push(
            <ApiSingleRow
                thisProp={key}
                thisPropTypeName={thisPropTypeName}
                thisDefaultValue={thisDefaultValue}
                thesePropValues={thesePropValues}
                thisPropRequired={thisPropRequired}
                key={i}
            />
        );
    });

    return apiRows;
};

const propsTable = (propName) => (
    <div>
        <h3>Props API for {propName} Component</h3>
        <table className ="ApiTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default Value</th>
                    <th>Available Values</th>
                    <th>Required?</th>
                </tr>
            </thead>
            <tbody>
                {apiRows(propName)}
            </tbody>
        </table>
    </div>
);

const noData = (
    <p>No component data found! Make sure the component has props and that its displayName matches the components name.</p>
);

const ApiTable = (props) => data[props.name]
    ? propsTable(props.name)
    : noData;

export default ApiTable;

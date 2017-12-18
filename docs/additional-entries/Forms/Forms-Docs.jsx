import React from 'react';
import AddressFormDemo from '../../demoComponents/AddressFormDemo/AddressFormDemo';
import { ParagraphMd, Header3 } from '../../../src/Type';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';


const FormsDocs = (props) => {
    return (
        <div className="Pattern__docs">
            <Header3>Basic Form Example</Header3>
            <ParagraphMd>Here is an example form using the <code>formColumn</code> mode of the grid</ParagraphMd>
            <div data-code>
                <AddressFormDemo />
            </div>
        </div>
    );
};

export default FormsDocs;

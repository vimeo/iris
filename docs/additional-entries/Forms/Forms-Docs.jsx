import React from 'react';
import Button from '../../../src/Button/Button';
import { GridBlock, GridCol, Grid } from '../../../src/Grid';
import InputSelect from '../../../src/InputSelect/InputSelect';
import InputText from '../../../src/InputText/InputText';
import InputRadioSet from '../../../src/InputRadioSet/InputRadioSet';
import InputCheckbox from '../../../src/InputCheckbox/InputCheckbox';
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

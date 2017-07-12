import React from 'react';
import { GridBlock, GridCol, Grid } from '../../../src/components/Grid/Grid.jsx';
import Button from '../../../src/components/Button/Button';
import InputSelect from '../../../src/components/InputSelect/InputSelect';
import InputText from '../../../src/components/InputText/InputText';
import InputRadioSet from '../../../src/components/InputRadioSet/InputRadioSet';
import InputCheckbox from '../../../src/components/InputCheckbox/InputCheckbox';
import FieldSet from '../../../src/components/FieldSet/FieldSet';

const displayName = 'AddressFormDemo';

const AddressFormDemo = () => {

    return (
        <FieldSet
            label = 'Your Address'
        >
                <Grid>
                    <GridBlock>
                        <GridCol
                            mdSpan={12}
                            formColumn
                        >
                            <InputText
                                name="formExampleFirstName"
                                id="formExampleFirstName"
                                label="First Name"
                            />
                        </GridCol>
                        <GridCol
                            mdSpan={12}
                            formColumn
                        >
                            <InputText
                                name="formExampleLastName"
                                id="formExampleLastName"
                                label="Last Name"
                            />
                        </GridCol>
                        <GridCol
                            formColumn
                        >
                            <InputText
                                name="formExampleAddress"
                                id="formExampleAddress"
                                label="Address"
                            />
                        </GridCol>
                        <GridCol
                            formColumn
                        >
                            <InputText
                                name="formExampleAddress2"
                                id="formExampleAddress2"
                                label="Address 2"
                                placeholder="Additional address information"
                            />
                        </GridCol>
                        <GridCol
                            mdSpan={12}
                            formColumn
                        >
                            <InputText
                                name="formExampleCity"
                                id="formExampleCity"
                                label="City"
                            />
                        </GridCol>
                        <GridCol
                            mdSpan={6}
                            formColumn
                        >
                            <InputSelect
                                name="formStateSelect"
                                id="formStateSelect"
                                label="State"
                            >
                                <option value="" defaultValue disabled hidden>Select a State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </InputSelect>
                        </GridCol>
                        <GridCol
                            mdSpan={6}
                            formColumn
                        >
                            <InputText
                                name="formExampleZip"
                                id="formExampleZip"
                                label="Zip Code"
                            />
                        </GridCol>
                    </GridBlock>
                    <GridBlock>
                        <GridCol
                            formColumn
                        >
                            <InputRadioSet
                                label="I am..."
                                id="RadioSet2"
                                name="radioSet2"
                                radios = {[
                                    {
                                        label: '...an Animal',
                                        id: 'RadioForm1',
                                        value: '1',
                                    },
                                    {
                                        label: '...a Vegetable',
                                        id: 'RadioForm2',
                                        value: '2',
                                    },
                                    {
                                        label: '...a Mineral',
                                        id: 'RadioForm3',
                                        value: '3',
                                    },

                                ]}
                            />
                        </GridCol>
                    </GridBlock>
                    <GridBlock>
                        <GridCol
                            formColumn
                        >
                            <InputCheckbox
                                label="Yes! I'd like to receive emails."
                                name="emailCheckbox"
                                id="emailCheckbox"
                                value="1"
                            />
                            <InputCheckbox
                                label="I agree to the terms and conditions."
                                name="termsCheckbox"
                                id="termsCheckbox"
                                value="1"
                            />
                        </GridCol>
                    </GridBlock>
                    <GridBlock>
                    <GridCol
                            mdSpan={6}
                            mdOffset={12}
                            formColumn
                        >
                            <Button autoWidth="fluid">Submit</Button>
                        </GridCol>
                        <GridCol
                            mdSpan={6}
                            formColumn
                        >
                            <Button format="secondary" autoWidth="fluid">Cancel</Button>
                        </GridCol>
                    </GridBlock>
                </Grid>
            </FieldSet>
    );
};

AddressFormDemo.displayName = displayName;

export default AddressFormDemo;

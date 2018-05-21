import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { InputDatePicker, List, ListItem, Header3, ParagraphMd } from '../index';

const InputDatePickerDocs = (props) => {

    const isWeekday = (current) => {
        return current.day() !== 0 && current.day() !== 6;
    };


    return (
        <div className="Pattern__docs">
            <ParagraphMd>The date picker is used to select a date from a calendar.</ParagraphMd>
            <Header3>Prop Notes</Header3>
            <List>
                <ListItem><code>dateFormatting(dateObject)</code> takes a function that will turn the date object it provides as an argument and return a string of the formatted date for display in the input.</ListItem>
                <ListItem><code>initialDate</code> shoud be a Date object indicating the starting date, defaults to client-side today.</ListItem>
                <ListItem><code>onChangeDate(dateObject)</code> fires whenever the date changes and sends a Date object representing the current selection.</ListItem>
                <ListItem><code>dateTimeOptions</code> is an Object of props that are passed to the DateTime component. See <a href="https://github.com/YouCanBookMe/react-datetime" target= "_blank">DateTime docs</a> for information. </ListItem>
            </List>

            <div data-code>
                <InputDatePicker
                    label="Pick a Date"
                    id="SampleDatePicker"
                />
                <InputDatePicker
                    initialDate = {new Date('11/3/2020')}
                    label="Pick a Date (Weekday Only)"
                    id="SampleDatePicker2"
                    datePickerOptions = {{
                        isValidDate: isWeekday,
                    }}
                />
            </div>

            <ExampleSource>
                {`
const isWeekday = (current) => {
    return current.day() !== 0 && current.day() !== 6
}


<InputDatePicker
    label="Pick a Date"
    id="SampleDatePicker"
/>
<InputDatePicker
    initialDate = {new Date('11/3/2020')}
    label="Pick a Date (Weekday Only)"
    id="SampleDatePicker2"
    datePickerOptions = {{
        isValidDate: isWeekday,
    }}
/>
                    `}
            </ExampleSource>
        </div>
    );
};

export default InputDatePickerDocs;

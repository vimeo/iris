import React from 'react';
import SearchField from './SearchField';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../Type';

class SearchFieldDocs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>The Search field component provides a field and button combination for use in search forms. Any props passed to the component which are not part of the component API will be passed to the input field. The <code>buttonProps</code> prop can take a set of props to be passed to the button part of the component (for instance, event handlers).</ParagraphMd>

                <ParagraphMd><code>buttonLabel</code> is required and will label the button icon button with a title attribute. Generally whatever text you would have included as the label of normal button would suffice. For example "Search" or "Click to Search"</ParagraphMd>
                <ParagraphMd><code>fieldLabel</code> is required and will label the input itself. Generally whatever text you would have included as the label of the input if the label was showing would suffice. For example "Search" or "Search This Channel". <strong>Note:</strong> placeholder text is not a substitute for a label.</ParagraphMd>
                <div data-code>
                    <SearchField
                        buttonLabel="submit"
                        buttonProps= {{
                            'data-foo': 'bar',
                        }}
                        fieldLabel="Search"
                        id="exampleSearchField1"
                        placeholder="Search our videos"
                        size="md"
                    />
                      <SearchField
                        buttonLabel="submit"
                        fieldLabel="Search"
                        id="exampleSearchField2"
                        placeholder="Search our videos"
                        size="lg"
                    />
                </div>

                <ExampleSource>
                    {`
<SearchField
    buttonLabel="submit"
    buttonProps= {{
        'data-foo': 'bar',
    }}
    id="exampleSearchField1"
    fieldLabel="Search"
    placeholder="Search our videos"
/>
<SearchField
    buttonLabel="submit"
    fieldLabel="Search"
    id="exampleSearchField2"
    placeholder="Search our videos"
    size="lg"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default SearchFieldDocs;

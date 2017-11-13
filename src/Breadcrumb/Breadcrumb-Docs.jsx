import React from 'react';
import Breadcrumb from './Breadcrumb';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd } from '../Type';

class BreadcrumbDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>Breadcrumbs help orient the user within an page flow.</ParagraphMd>
                <div data-code>
                    <Breadcrumb
                        crumbs = {[
                            {
                                label: 'Breadcrumb Item 1 is Pretty Long So Cut it Off',
                                to: '#',
                            },
                            {
                                label: 'Breadcrumb Item 2',
                                to: '#',
                            },
                        ]}
                        currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
                    />
                </div>

                <ExampleSource>
                    {`
                        <Breadcrumb />
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default BreadcrumbDocs;

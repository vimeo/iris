import React from 'react';
import Breadcrumb from './Breadcrumb';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { ParagraphMd, ParagraphAltMd } from '../Type';

class BreadcrumbDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>Breadcrumbs help orient the user within an page flow.</ParagraphMd>
                <ParagraphMd>"Crumb" links are passed as an array of object to <code>crumbs</code> and the current page label should be passed to <code>currentPageLabel</code> as a string.</ParagraphMd>

                <div data-code>
                    <Breadcrumb
                        crumbs = {[
                            {
                                label: 'Breadcrumb Item 1 is Pretty Long So Cut it Off',
                                to: '#',
                                onClick: ()=>{
                                    console.log('click');
                                },
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
<Breadcrumb
    crumbs = {[
        {
            label: 'Breadcrumb Item 1 is Pretty Long So Cut it Off',
            to: '#',
            onClick: ()=>{console.log('click')}
        },
        {
            label: 'Breadcrumb Item 2',
            to: '#',
        },
    ]}
    currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default BreadcrumbDocs;

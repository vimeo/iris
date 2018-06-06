import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import {
    Breadcrumb,
    BreadcrumbLink,
    BreadcrumbLinkReactRouter,
    ParagraphMd,
    Header3,
} from '../index';

class BreadcrumbDocs extends React.Component {
    render() {
        return (
            <div className="Pattern__docs">
                <ParagraphMd>Breadcrumbs help orient the user within an page flow.</ParagraphMd>
                <ParagraphMd>"Crumb" links are passed to <code>crumbs</code> as an array of either <code>BreadcrumbLink</code> or <code>BreadcrumbLinkReactRouter</code> components that should be imported as needed. These components take all the props a regular anchor link or React Router Link can take.</ParagraphMd>
                <ParagraphMd>Below our medium breakpoint only the current page label will show, but there will be a linked arrow that will get link properties from the last breadcrumb in the <code>crumbs</code> array.</ParagraphMd>

                <div data-code>
                    <Breadcrumb
                        crumbs = {[
                            (<BreadcrumbLink
                                href="#"
                            >
                                Breadcrumb Item 1 is Pretty Long So Cut it Off
                            </BreadcrumbLink>
                            ),
                            (
                            <BreadcrumbLinkReactRouter
                                        to="#"
                                        onClick = {(e) => {
                                            e.preventDefault();
                                            console.log('click');
                                        }}
                                    >
                                        Breadcrumb Item 2
                                </BreadcrumbLinkReactRouter>
                            ),
                        ]}
                        currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
                    />

                    <Header3>Dark Theme</Header3>
                    <ParagraphMd>To use the Breadcrumb in a darh theme setting. Apply <code>format="darkTheme"</code> to <strong>both</strong> <code>Breadcrumb</code> and the Breadcrumb link component you are passing to <code>crumbs</code>.</ParagraphMd>
                    <div className="Pattern-DarkBlock">
                        <Breadcrumb
                            crumbs = {[
                                (<BreadcrumbLink
                                    format="darkTheme"
                                    href="#"
                                >
                                    Breadcrumb Item 1 is Pretty Long So Cut it Off
                                </BreadcrumbLink>
                                ),
                                (
                                <BreadcrumbLinkReactRouter
                                            to="#"
                                            format="darkTheme"
                                            onClick = {(e) => {
                                                e.preventDefault();
                                                console.log('click');
                                            }}
                                        >
                                            Breadcrumb Item 2
                                    </BreadcrumbLinkReactRouter>
                                ),
                            ]}
                            currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
                            format="darkTheme"
                        />
                    </div>
                </div>

                <ExampleSource>
                    {`
import {Breadcrumb, BreadcrumbLink, BreadcrumbLinkReactRouter} from '@vimeo/iris';
<Breadcrumb
    crumbs = {[
        (<BreadcrumbLink
            href="#"
        >
            Breadcrumb Item 1 is Pretty Long So Cut it Off
        </BreadcrumbLink>
        ),
        (
        <BreadcrumbLinkReactRouter
                    to="#"
                    onClick = {(e) => {
                        e.preventDefault();
                        console.log('click');
                    }}
                >
                    Breadcrumb Item 2
            </BreadcrumbLinkReactRouter>
        ),
    ]}
    currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
/>

<Breadcrumb
    crumbs = {[
        (<BreadcrumbLink
            format="darkTheme"
            href="#"
        >
            Breadcrumb Item 1 is Pretty Long So Cut it Off
        </BreadcrumbLink>
        ),
        (
        <BreadcrumbLinkReactRouter
                    to="#"
                    format="darkTheme"
                    onClick = {(e) => {
                        e.preventDefault();
                        console.log('click');
                    }}
                >
                    Breadcrumb Item 2
            </BreadcrumbLinkReactRouter>
        ),
    ]}
    currentPageLabel="Current Page Label is Pretty Long So Cut it Off"
    format="darkTheme"
/>
                        `}
                    </ExampleSource>
                </div>
        );
    }
}

export default BreadcrumbDocs;

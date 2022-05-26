import { Header, Paragraph, Text } from '@vimeo/iris/typography';

import { Page } from '../../src/pages/Page';
import { Sidebar } from '../../src/components/Sidebar'
import { GuidanceCard } from '../../src/components/GuidanceCard';

import { sections } from './'


export default function Component({ component, themeSet, ...props }) {
    return (
        <Page themeSet={themeSet}>
            <div
                css={`
                    display: flex;
                `}
            >
                <Sidebar header="Content" items={sections} active="Word list" />
                <div
                    css={`
                        margin: var(--space-400) auto;
                        max-width: var(--layout-site-width);
                        padding: 0 var(--space-300);
                    `}
                >
                    <Header css={`margin-bottom: var(--space-400);`}>Word list</Header>
                </div>   
            </div>         
        </Page>
    );
}

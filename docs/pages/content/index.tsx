import { Header, Paragraph, Text } from '@vimeo/iris/typography';
import * as COMPONENTS from '@vimeo/iris/components';

import { Page } from '../../src/pages/Page';
import { CardAlt } from '../../src/components/CardAlt';
import { Sidebar } from '../../src/components/Sidebar'

const { Tag } = COMPONENTS;

export default function Component({ component, themeSet, ...props }) {

    return (
        <Page themeSet={themeSet}>
            <div
                css={`
                    display: flex;
                `}
            >
                <Sidebar header="Content" items={sections} active="" />
                <div
                    css={`
                        margin: var(--space-400) auto;
                        max-width: var(--layout-site-width);
                        padding: 0 var(--space-300);
                    `}
                >
                    <Header>Content</Header>
                    <Paragraph size="1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto deleniti omnis fugiat officia qui nobis error
                        distinctio quam dignissimos ad quos eum reiciendis
                        consequatur ipsam accusamus animi sequi, magni inventore
                        ratione ipsum!
                    </Paragraph>
                    <div
                        css={`
                        display: grid;
                        gap: 2rem;
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-template-rows: auto;
                        max-width: var(--layout-site-width);
                        margin: 1rem auto;
                        `}
                    >
                        {sections.map((section) => (
                        <CardAlt
                            name={section.name}
                            path="/content"
                        />
                        ))}
                    </div>
                </div> 
            </div>
        </Page>
    );
}

export const sections = [
    {
        name: 'Voice',
        path: '/content/voice'
    },
    {
        name: 'Style',
        path: '/content/style'
    },
    {
        name: 'Addressing users',
        path: '/content/addressing-users'
    },
    {
        name: 'Grammar and usage',
        path: '/content/grammar-and-usage'
    },
    {
        name: 'Content patterns',
        path: '/content/content-patterns'
    },
    {
        name: 'Word list',
        path: '/content/word-list'
    },
] as const;

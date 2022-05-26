import { Header, Paragraph, Text } from '@vimeo/iris/typography';

import { Page } from '../../src/pages/Page';
import { Sidebar } from '../../src/components/Sidebar'

import { sections } from './'

export default function Component({ component, themeSet, ...props }) {

    return (
        <Page themeSet={themeSet}>
            <div
                css={`
                    display: flex;
                `}
            >
                <Sidebar header="Content" items={sections} active="Voice" />

                <div
                    css={`
                        margin: var(--space-400) auto;
                        max-width: var(--layout-site-width);
                        padding: 0 var(--space-300);
                    `}
                >
                    <Header css={`margin-bottom: var(--space-400);`}>Voice</Header>
                    
                    <Header size="2" element="h2">Friendly, respectful, and user-focused</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Text should complement its design: clear, casual, and trustworthy. Write from the user’s experience, not ours.
                    </Paragraph>

                    <Header size="2" element="h2">Encouraging</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Focus on the benefits of each feature. Omit implementation details, caveats, and upsells when describing Vimeo’s features.
                    </Paragraph>

                    <Header size="2" element="h2">Positive</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Explain information positively to create a reassuring sense of helpfulness. Avoid calling out restrictions and errors before they are directly relevant to the experience, or without offering a solution.
                    </Paragraph>

                    <Header size="2" element="h2">Essential</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Most users don’t read carefully. When they do, it’s after they couldn’t figure out the design. Ask yourself, “What do we need to say right now?” Keep it to essential, relevant details, so that users can focus on their own work. Sometimes the best text is no text at all.
                    </Paragraph>
                    
                </div>   
            </div>         
        </Page>
    );
}

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
                <Sidebar header="Content" items={sections} active="Addressing users" />

                <div
                    css={`
                        margin: var(--space-400) auto;
                        max-width: var(--layout-site-width);
                        padding: 0 var(--space-300);
                    `}
                >
                    <Header css={`margin-bottom: var(--space-400);`}>Addressing users</Header>
                    
                    <Header size="2" element="h2">Second person “you” or “your”</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Use this conversational style for most situations, as though the app is speaking directly to the user. Keep in mind that “your” can be inferred, and avoid labeling things as the user’s when it’s clearly no one else’s.
                    </Paragraph>

                    <Header size="2" element="h2">First person “I” or “my”</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        In some cases, you may need to use this form of address to emphasize the user's ownership of content or actions (e.g., a checkbox that says “I agree to these Terms and Conditions,” written in the first person to emphasize the user’s choice). Avoid when there are multiple possible user perspectives, like a button on a user’s public profile that can be clicked by the user, or a public viewer.
                    </Paragraph>

                    <Header size="2" element="h2">Avoid mixing "me"/"my" with "you"/"your”</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        It’s confusing to see different perspectives used to reference the same user, because it shifts who the implied “owner” of the product is.
                    </Paragraph>
                    <div css={` display: flex; gap: var(--space-200); `}>
                        <GuidanceCard type="positive">
                            “Recent videos” shows your latest uploads.
                        </GuidanceCard>
                        <GuidanceCard type="negative">
                            “My recent videos” shows your latest uploads.
                        </GuidanceCard>
                    </div>

                    <Header size="2" element="h2">Avoid references to Vimeo, and the pronoun “we”</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Focus on the user and what they can do with Vimeo, not what Vimeo is doing for the user.
                    </Paragraph>
                    <div css={` display: flex; gap: var(--space-200); `}>
                        <GuidanceCard type="positive">
                            New homepage experience: stats, recent videos, and Staff Picks live in the same place.
                        </GuidanceCard>
                        <GuidanceCard type="negative">
                            We updated the Vimeo homepage! Our new design brings stats, recent videos, and Staff Picks together.
                        </GuidanceCard>
                    </div>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        There are exceptions, like when Vimeo controls an action initiated by the user (e.g., error messages, technical statuses like transcoding, pending legal approval, responding to suggestions), when complexity makes it easier for us to take responsibility, or personal contexts like release notes.
                    </Paragraph>

                    <Header size="2" element="h2">Avoid possessive pronouns in labels, categories, and product names</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        It’s clearly implied that the user owns their content, and that every interaction they take is from their own perspective. 
                    </Paragraph>
                    <div css={` display: flex; gap: var(--space-200); `}>
                        <GuidanceCard type="positive">
                            Recent videos
                        </GuidanceCard>
                        <GuidanceCard type="negative">
                            My recent videos
                        </GuidanceCard>
                    </div>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        An exception: when possession is a necessary distinction among accounts, team members, or videos.
                    </Paragraph>
                    
                </div>   
            </div>         
        </Page>
    );
}

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
                <Sidebar header="Content" items={sections} active="Style" />

                <div
                    css={`
                        margin: var(--space-400) auto;
                        max-width: var(--layout-site-width);
                        padding: 0 var(--space-300);
                    `}
                >
                    <Header css={`margin-bottom: var(--space-400);`}>Style</Header>
                    
                    <Header size="2" element="h2">Be concise</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Write in small, skimmable segments to facilitate navigation and discovery. Keep sentences and phrases short, with as few concepts as possible.
                    </Paragraph>
                    <div css={` display: flex; gap: var(--space-200); `}>
                        <GuidanceCard type="positive">
                            Use review tools to collaborate with your team.
                        </GuidanceCard>
                        <GuidanceCard type="negative">
                            Use private video review pages’ time-coded notes to collaborate with your team.
                        </GuidanceCard>
                    </div>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Remember that UX copy is translated, which can increase the copy length by 50–100%.
                    </Paragraph>

                    <Header size="2" element="h2">Be simple and direct</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Use language that is easy for users to understand. Avoid introductory phrases like “Hey there!” when space is limited.
                    </Paragraph>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Keep in mind that Vimeo’s UX is only translated into 6 languages, so many users are reading in their second or third language. Pick common words that are clear to both beginning and advanced English readers.
                    </Paragraph>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Avoid industry-specific jargon or names invented for UX features. Exceptions include when an invented name is self-explanatory, or the easiest way to explain how the user should interact.
                    </Paragraph>

                    <Header size="2" element="h2">Write in the present</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        Use the present tense to describe product behavior. Avoid using the future tense to describe the way a product always acts. When you need to write in the past or future (e.g., upload errors) use simple verb forms.
                    </Paragraph>
                    <div css={` display: flex; gap: var(--space-200); `}>
                        <GuidanceCard type="positive">
                            This event repeats every Wednesday.
                        </GuidanceCard>
                        <GuidanceCard type="negative">
                            This event will repeat every Wednesday.
                        </GuidanceCard>
                    </div>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        One exception is when writing about what happens after the user takes an irreversible action (e.g., If you delete this album, your videos will still be available in “All videos.”).
                    </Paragraph>

                    <Header size="2" element="h2">Start with the objective</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        If you need to describe both an objective, and the action required to complete that objective, start the sentence with the objective.
                    </Paragraph>
                    <div css={` display: flex; gap: var(--space-200); `}>
                        <GuidanceCard type="positive">
                            To create a new album, click “+ New album”
                        </GuidanceCard>
                        <GuidanceCard type="negative">
                            Click “+New album” to create a new album.
                        </GuidanceCard>
                    </div>

                    <Header size="2" element="h2">Reveal detail as needed</Header>
                    <Paragraph 
                        size="1"
                        css={` 
                            display: block;
                            margin-bottom: var(--space-400); 
                        `}>
                        You don’t need to describe every detail in the first interaction. Reveal increasing detail about features as the user explores them and needs the information.
                    </Paragraph>
                    <div css={` display: flex; gap: var(--space-200); `}>
                        <GuidanceCard type="positive">
                            Adjust this video’s privacy in the settings.
                        </GuidanceCard>
                        <GuidanceCard type="negative">
                            Open your settings to adjust privacy, view your version history, and control where your video can be embedded.
                        </GuidanceCard>
                    </div>
                    
                </div>   
            </div>         
        </Page>
    );
}

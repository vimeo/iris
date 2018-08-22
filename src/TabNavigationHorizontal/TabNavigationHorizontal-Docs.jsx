import React from 'react';
import ExampleSource from '../../docs/layout/ExampleSource';
import {
    Header2,
    Header3,
    LinkText,
    List,
    ListItem,
    NotificationNeutral,
    ParagraphMd,
    TabNavigationHorizontal,
} from '../index';

class TabNavigationHorizontalDocs extends React.Component {

    render() {

        const tab1Content = (
            <div>
                <Header2>I am Tab 1</Header2>
                <ParagraphMd>I don't have much content.</ParagraphMd>
                <img src="http://placekitten.com/1000/400" width="100%" />
            </div>
        );

        const tab2Content = (
            <div>
                <Header2>I am Tab 2</Header2>
                <ParagraphMd>`Twas brillig, and the slithy toves Did gyre and gimble in the wabe: All mimsy were the borogoves, And the mome raths outgrabe.</ParagraphMd>
                <ParagraphMd>"Beware the Jabberwock, my son! The jaws that bite, the claws that catch! Beware the Jubjub bird, and shun The frumious Bandersnatch!"</ParagraphMd>
                <img src="http://fillmurray.com/600/200" width="100%" />
            </div>
        );

        const tab3Content = (
            <div>
                <Header2>I am Tab 3</Header2>
                <ParagraphMd>My liege, and madam, to expostulate What majesty should be, what duty is, What day is day, night night, and <LinkText href="https://en.wikipedia.org/wiki/Hamlet" target="_blank">time is time</LinkText>, Were nothing but to waste night, day, and time; Therefore, since <LinkText href="https://en.wikipedia.org/wiki/William_Shakespeare" target="_blank">brevity is the soul of wit</LinkText>, And tediousness the limbs and outward flourishes, I will be brief. Your noble son is mad</ParagraphMd>
                <img src="http://placecage.com/1000/400" width="100%" />
            </div>
        );

        const showTestAlert = () => {
            console.log('you clicked option 3!'); // eslint-disable-line no-alert
        };

        const panels = [
            {
                label: 'Option 1',
                tabId: 'option-1',
                content: tab1Content,
            },
            {
                label: 'Option 2',
                tabId: 'option-2',
                content: tab2Content,
            },
            {
                label: 'Option 3',
                tabId: 'option-3',
                content: tab3Content,
                'data-foo': 'bar',
                onClick: showTestAlert,
            },

        ];

        return (
            <div className="Pattern__docs">
                <ParagraphMd>TabNavigationHorizontal provides a set of navigation elements for tabbed interfaces</ParagraphMd>
                <div data-code>
                    <TabNavigationHorizontal
                        activeTabIndex={1}
                        panels={panels}
                    />
                </div>

                <ExampleSource>
                    {`

// see below for the shape of the panels prop.
<TabNavigationHorizontal
    activeTabIndex={1}
    panels={panels}
/>
                        `}
                </ExampleSource>
                <Header3>The Panels Object</Header3>
                <ParagraphMd>The <code>panels</code> prop takes an array of objects which provides this component with information about the tabs. There will be one tab for each item in the array and the tabs will display in the order they are listed in the array.</ParagraphMd>
                <List>
                    <ListItem><code>label</code> is a string that will become the text of the navigation button.</ListItem>
                    <ListItem><code>tabId</code> is a string that will be used to identify the tab, for ARIA properties and the id provided to the tab panel.</ListItem>
                    <ListItem><code>content</code> should be a React element that will be the contents of the tab panel. This will often be another imported component. </ListItem>
                    <ListItem>Any other props passed to this object will be spread to the anchor tag that wraps the navigation items. This can be used to attach event handlers or data attributes to that navigation choice. See "Option 3" in the example above.</ListItem>
                </List>
                <ExampleSource>
                {`
const panels = [
    {
        label: 'Option 1',
        tabId: 'option-1',
        content: tab1Content,
    },
    {
        label: 'Option 2',
        tabId: 'option-2',
        content: tab2Content,
    },
    {
        label: 'Option 3',
        tabId: 'option-3',
        content: tab3Content,
        'data-foo': 'bar',
        onClick: () => console.log('you clicked option 3!'),
    },

];
                `}
                </ExampleSource>
                <Header3>Implementation Notes</Header3>
                <List>
                    <ListItem>Additional props passed to the TabNavigationHorizontal component will be spread to the containing div.</ListItem>
                    <ListItem>The <code>activeTabIndex</code> prop is a <strong>zero-index</strong> indication of which tab you want to be open (in order of the tab's presence in the <code>panels</code> prop).</ListItem>
                </List>
                <NotificationNeutral
                    headerText="Margins and Height Animation"
                >
                    <ParagraphMd>If the content of the panel has a margin-bottom on the last element, the height animation may seem a little jittery, to keep it smooth it is recommended to remove any margin-bottom on the last element.</ParagraphMd>
                </NotificationNeutral>
            </div>
        );
    }
}

export default TabNavigationHorizontalDocs;

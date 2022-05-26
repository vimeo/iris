import { Header, Paragraph } from '@vimeo/iris/typography';
import { Page } from '../../src/pages/Page';

export default function Component({ component, themeSet, ...props }) {

  return (
    <Page themeSet={themeSet}>
      <div
        css={`
          margin: var(--space-400) auto;
          max-width: var(--layout-site-width);
          padding: var(--space-300);
        `}
      >
        <div>
          <div css={` margin-bottom: var(--space-800); `}>
            <h1 
              css={`
                font-size: 3rem;
                line-height: 1.25;
                margin-bottom: var(--space-200);
              `}>
                Design Principles
            </h1>
            <p 
              css={`
                font-size: 2re,;
                line-height: 1.25;
              `}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div
          css={`
            display: grid;
            grid-gap: var(--space-600) var(--space-300);
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          `}
        >
          {principlesContent.map((principle) => (
            <div>
              <img src={principle.imageUrl} alt={principle.imageAltText || principle.headerText} />
                <div css={` margin-top: var(--space-100); `}>
                  <Header size="3" element="h2">{principle.headerText}</Header>
                  <Paragraph size="1">
                    {principle.bodyText}
                  </Paragraph>
                </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

export const principlesContent = [
  {
    imageUrl: "https://fakeimg.pl/640x360",
    imageAltText: "Description of image",
    headerText: "Put people first",
    bodyText: "When we meet people’s needs, the business succeeds. We listen to users, learn from them, and deliver value that exceeds their expectations."
  },
  {
    imageUrl: "https://fakeimg.pl/640x360",
    imageAltText: "Description of image",
    headerText: "Make it easy",
    bodyText: "We design products and features that are easy to use. We make them as simple as possible for people to master — fast."
  },
  {
    imageUrl: "https://fakeimg.pl/640x360",
    imageAltText: "Description of image",
    headerText: "Meet people where they are",
    bodyText: "Video is for everyone, everywhere. We design inclusive and accessible experiences for all people, no matter their context, location, or ability."
  },
  {
    imageUrl: "https://fakeimg.pl/640x360",
    imageAltText: "Description of image",
    headerText: "Be human",
    bodyText: "We want people to feel welcome using our products. We create personable and empowering experiences that inspire confidence and trust."
  },
  {
    imageUrl: "https://fakeimg.pl/640x360",
    imageAltText: "Description of image",
    headerText: "Tell a story",
    bodyText: "Our users are storytellers, and so are we. We use visual, motion, and language cues to inspire and guide them as they work."
  },
  {
    imageUrl: "https://fakeimg.pl/640x360",
    imageAltText: "Description of image",
    headerText: "Make it seamless",
    bodyText: "No matter where users are in their journey, their experience feels connected and cohesive. People recognize all of our offerings as part of one clear and familiar ecosystem."
  },
]

import styled, { css } from 'styled-components';

const flexVertical = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Layout = {
  StoryVertical: styled.div`
    ${flexVertical};
    padding: 0.5rem 0;

    > * {
      display: block;
      margin: 0.5rem 1rem;
    }
  `,
};

// function VerticalStory({ kind = null }) {
//   return (
//     kind === 'verticalStory' &&
//     css`
//       padding: 0.5rem 0;

//       > * {
//         display: block;
//         margin: 0.5rem 1rem;
//       }
//     `
//   );
// }

// function PortalStory({ kind = null }) {
//   return (
//     kind === 'portalStory' &&
//     css`
//       padding: 10rem 5rem;
//       max-width: 66.667%;
//       margin: 0 auto;

//       > * {
//         display: block;
//         margin: 1rem 2rem;
//       }
//     `
//   );
// }

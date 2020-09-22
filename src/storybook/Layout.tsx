import styled, { css } from 'styled-components';

export const Layout = {
  StoryVertical: styled.div<{ center?: boolean }>`
    ${flexVertical};

    padding: 0.5rem 0;
    padding: ${p => (p.center ? '4rem' : '0.5rem 0')};

    > * {
      display: block;
      margin: 0.5rem 1rem;
      min-width: 20rem;
    }
  `,
  StoryPadded: styled.div<{ center?: boolean }>`
    margin: 0 2rem;
    padding: 0.5rem 0;
  `,
};

function flexVertical({ center = false }) {
  return css`
    display: flex;
    flex-direction: column;
    align-items: ${center ? 'center' : 'flex-start'};
  `;
}

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

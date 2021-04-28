// import React, { useLayoutEffect, useRef } from 'react';
// import styled from 'styled-components';

// import { Button } from '../../components';
// import { PopOut } from '../../icons';
// import { Panel, Tabs } from '../../layout';
// import { Header, Paragraph } from '../../typography';

// export default { title: 'Labs/CCPanel/Virutalize2' };

// export function Common() {
//   return (
//     // <Panel
//     //   active
//     //   content={<CCPanel data={data} />}
//     //   style={{ padding: '0rem', minWidth: '20rem' }}
//     // >
//     //   <div />
//     // </Panel>
//     <div
//       style={{
//         height: '75vh',
//         border: '2px solid pink',
//         padding: '1rem',
//       }}
//     >
//       <CaptionList data={data} />
//     </div>
//   );
// }

// function CaptionList({ data = null, virtual = false, ...props }) {
//   if (!data) return <div>error</div>;
//   if (!virtual) {
//     const children = data.map((segment) => (
//       <CaptionSegment>{segment}</CaptionSegment>
//     ));

//     return <List>{children}</List>;
//   }
//   // if (!virtual)
//   //   return (
//   //     <ObservableList
//   //       data={data}
//   //       render={(segment) => (
//   //         <CaptionSegment {...props}>{segment}</CaptionSegment>
//   //       )}
//   //     />
//   //   );
//   return (
//     <VirtualList
//       data={data}
//       render={(segment) => (
//         <CaptionSegment {...props}>{segment}</CaptionSegment>
//       )}
//     />
//   );
// }

// function List({ children, ...props }) {
//   return <Container>{children}</Container>;
// }

// function ObservableList({ data, render, ...props }) {
//   const ref = useRef<HTMLDivElement>();

//   useLayoutEffect(() => {
//     const target = ref?.current;
//     const children = [...target.children];

//     const callback = (entries) => {
//       entries.map(({ isIntersecting, target }) => {
//         if (isIntersecting)
//           target.style.contentVisibility = 'visible';
//         else target.style.contentVisibility = 'hidden';
//       });
//     };

//     const options = { root: ref?.current };
//     const observer = new IntersectionObserver(callback, options);
//     children.map((child) => observer.observe(child));

//     return () => {
//       children.map((child) => observer.unobserve(child));
//     };
//   }, []);

//   return (
//     <Container ref={ref} {...props}>
//       {data.map(render)}
//     </Container>
//   );
// }

// function VirtualList({ data, render }) {
//   const ref = useRef<HTMLDivElement>();

//   useLayoutEffect(() => {
//     console.log(ref.current);

//     const handleScroll = () => console.log(ref?.current?.scrollTop);

//     ref.current.addEventListener('scroll', handleScroll);
//     return () => {
//       ref.current.removeEventListener('scroll', handleScroll);
//     };
//   });

//   const currentItems = data;
//   return <Container ref={ref}>{currentItems.map(render)}</Container>;
// }

// const Container = styled.div`
//   border: 2px solid blue;
//   overflow: scroll;
//   height: 100%;
//   position: relative;
// `;

// function CaptionSegment({ children, ...props }) {
//   return (
//     <div
//       style={{ padding: '0.5rem 0', containIntrinsicSize: '68px' }}
//     >
//       <CaptionSegmentStyled {...props}>
//         {children}
//       </CaptionSegmentStyled>
//     </div>
//   );
// }

// const CaptionSegmentStyled = styled.div`
//   /* content-visibility: hidden; */
//   padding: 1rem;
//   border-radius: 0.5rem;
//   border: 1px solid rgba(0, 0, 0, 0.2);
// `;

// const data = [...new Array(500)].map((_, i) => 'string ' + i);

// const items = {};

// function CCPanel({ data, ...props }) {
//   return (
//     <div style={{ padding: '1rem' }}>
//       <Header size="5">Closed captions</Header>
//       <Tabs
//         style={{
//           // border: '2px solid purple',
//           height: 'calc(100vh - 4rem)',
//           position: 'relative',
//         }}
//       >
//         <Tabs.Panel
//           label="Transcript"
//           onActivate={() => null}
//           style={{
//             // border: '2px solid green',
//             position: 'relative',
//             height: 'calc(100% - 4rem)',
//           }}
//         >
//           <CaptionList data={data} />
//         </Tabs.Panel>
//         <Tabs.Panel label="Settings " onActivate={() => null}>
//           <Paragraph
//             size="2"
//             style={{ margin: '1.5rem 0', display: 'block' }}
//           >
//             Helpful copy to let users know that at the moment they can
//             manage their captions elsewhere.
//           </Paragraph>
//           <Button
//             icon={<PopOut />}
//             iconPosition="right"
//             fluid
//             style={{ margin: '1.5rem 0' }}
//           >
//             Caption settings
//           </Button>
//         </Tabs.Panel>
//       </Tabs>
//     </div>
//   );
// }

// function withAnalytics({
//   $$iris: iris,
//   props: { onClick, href, ...props },
// }) {
//   if (!onClick && !href) return props;
//   else {
//     const clickWithAnalytics = event => {
//       const DOMEvent = extractAnalytics(event);
//       const timestamp = Date.now().toString();

//       console.log({
//         DOMEvent,
//         iris,
//         timestamp,
//         props,
//       });

//       onClick && onClick(event);
//     };
//     const propsWithAnalytics = {
//       ...props,
//       href,
//       onClick: clickWithAnalytics,
//     };

//     return propsWithAnalytics;
//   }
// }

// function extractAnalytics({
//   altKey,
//   clientX,
//   clientY,
//   ctrlKey,
//   currentTarget,
//   defaultPrevented,
//   isTrusted,
//   layerX,
//   layerY,
//   metaKey,
//   movementX,
//   movementY,
//   nativeEvent,
//   offsetX,
//   offsetY,
//   pageX,
//   pageY,
//   region,
//   relatedTarget,
//   returnValue,
//   screenX,
//   screenY,
//   shiftKey,
//   sourceCapabilities,
//   srcElement,
//   target,
//   timeStamp,
//   toElement,
//   type,
//   x,
//   y,
// }) {
//   const extractedNative =
//     nativeEvent && extractAnalytics(nativeEvent);

//   return {
//     altKey,
//     clientX,
//     clientY,
//     ctrlKey,
//     currentTarget,
//     defaultPrevented,
//     isTrusted,
//     layerX,
//     layerY,
//     metaKey,
//     movementX,
//     movementY,
//     nativeEvent: extractedNative,
//     offsetX,
//     offsetY,
//     pageX,
//     pageY,
//     region,
//     relatedTarget,
//     returnValue,
//     screenX,
//     screenY,
//     shiftKey,
//     sourceCapabilities,
//     srcElement,
//     target,
//     timeStamp,
//     toElement,
//     type,
//     x,
//     y,
//   };
// }

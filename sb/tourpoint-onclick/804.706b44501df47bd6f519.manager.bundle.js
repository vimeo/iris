/*! For license information please see 804.706b44501df47bd6f519.manager.bundle.js.LICENSE.txt */
(self.webpackChunk_vimeo_iris=self.webpackChunk_vimeo_iris||[]).push([[804],{8887:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Wrapper=exports.Icon=void 0;const react_1=__importDefault(__webpack_require__(67294)),styled_components_1=__importDefault(__webpack_require__(32678));exports.Icon=function Icon({svg,theme:{name}}){return svg?react_1.default.createElement(IconStyled,{dangerouslySetInnerHTML:svg}):name};const IconStyled=styled_components_1.default.div`
  svg {
    width: 1.25rem;
    height: 1.25rem;
    opacity: 0.75;
    * {
      fill: ${({theme})=>theme.textColor};
    }
  }
`;exports.Wrapper=styled_components_1.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: ${({theme})=>theme.textColor};
  font-size: 0.667rem;
  font-weight: 800;
  line-height: 0.667rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
import React from 'react';
import { css } from 'styled-components';

export function Player({ id, ...props }) {
  const src = `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&controls=false`;

  const CSS = css`
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding-bottom: 50%;
    border-radius: 0.5rem;
    background: black;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    transition: 120ms ease-in-out;

    &:hover {
      box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.4);
      transform: scale(1.015);
    }
  `;

  const iframeCSS = css`
    cursor: pointer;
    display: block;
    position: absolute;
    width: 120%;
    height: 120%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  `;

  return (
    <div {...props} css={CSS}>
      <iframe src={src} css={iframeCSS} />
    </div>
  );
}

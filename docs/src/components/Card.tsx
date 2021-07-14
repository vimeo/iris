import { core } from '@vimeo/iris/tokens';

export function Card({ children, ...props }) {
  return (
    <div
      css={`
        min-width: 12rem;
        aspect-ratio: 12 / 10;
        padding: 1rem;
        font-size: 1.5rem;
        background: ${core.color.background(300)};
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        ${core.edge(400)};
      `}
      {...props}
    >
      {children}
    </div>
  );
}

import { core } from '@vimeo/iris/tokens';

export function Card({ children, ...props }) {
  return (
    <div
      {...props}
      css={`
        width: 12rem;
        height: 10rem;
        padding: 1rem;
        font-size: 1.5rem;
        background: ${core.color.background(300)};
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {children}
    </div>
  );
}

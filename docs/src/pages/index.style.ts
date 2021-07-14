import styled from 'styled-components';
import { rgba } from 'polished';
import { black } from '@vimeo/iris/color';

export const Nav = styled.nav`
  padding: 1rem 3rem;
  display: flex;
  background: ${rgba(black, 0.1)};
  width: 100%;

  > a,
  > span {
    font-size: 1rem;
    line-height: 2rem;
    padding: 0 1rem;
  }
`;

export const Hero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 30rem;
  background: radial-gradient(
      110.88% 79.69% at 47.77% 151.82%,
      #ffec45 0%,
      rgba(255, 236, 69, 0.3) 54.92%,
      rgba(255, 236, 69, 0) 96.11%
    ),
    radial-gradient(
      50% 68.23% at 98.21% 96.61%,
      #41d1b7 0%,
      rgba(65, 209, 183, 0.35) 49.27%,
      rgba(65, 209, 183, 0) 100%
    ),
    radial-gradient(
      83.71% 75.52% at -10.04% 2.86%,
      #8263db 0%,
      rgba(129, 114, 218, 0.26) 56.87%,
      rgba(129, 114, 218, 0) 100%
    ),
    linear-gradient(180deg, #58ccdc 0%, rgba(88, 204, 220, 0) 100%),
    linear-gradient(
      81.23deg,
      #ff557e 21.4%,
      rgba(255, 85, 85, 0) 84.87%
    ),
    #f2f5fa;
  background-blend-mode: normal, normal, darken, normal, normal,
    normal;
  filter: blur(40px);
`;

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(p) => p.theme.content.background};
  color: ${(p) => p.theme.content.color};

  a {
    color: ${(p) => p.theme.formats.primary};
  }
`;

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Code = styled.code`
  background: ${(p) => rgba(p.theme.content.color, 0.125)};
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${(p) => rgba(p.theme.content.color, 0.5)};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: ${(p) => p.theme.formats.primary};
    border-color: ${(p) => p.theme.formats.primary};
  }

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${(p) => rgba(p.theme.content.color, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

import { useRouter } from 'next/router';
import { parseToRgb, parseToHsl } from 'polished';

import { Header } from '@vimeo/iris/typography';
import { blue } from '@vimeo/iris/color';

import { Page } from '../../src/pages/Page';

export default function Token({ themeSet, ...props }) {
  const router = useRouter();
  const { token } = router.query;

  const tokenName = (token as string[])?.join('-') || null;

  const tokenData = useToken(tokenName);
  console.log(tokenData);

  if (!tokenData) {
    return (
      <>
        <Header>Token not found!</Header>
      </>
    );
  }

  return (
    <Page themeSet={themeSet}>
      <div
        css={`
          padding: 2rem;
        `}
      >
        <Header>{tokenName}</Header>
        <div
          css={`
            width: 12rem;
            height: 12rem;
            border-radius: 0.5rem;
            background: ${blue(500)};
          `}
        ></div>
        <Header size="3">{blue(500)}</Header>
        <Header size="3">
          {JSON.stringify(parseToRgb(blue(500)))}
        </Header>
        <Header size="3">
          {JSON.stringify(parseToHsl(blue(500)))}
        </Header>
      </div>
    </Page>
  );
}

function useToken(tokenName) {
  const match = findTokenData(tokenName);
  if (match) return match;
  return false;
}

function findTokenData(tokenName) {
  switch (tokenName) {
    case 'core-color-blue':
      return { name: tokenName, type: 'color' };
    case 'core-color-blue-500':
      return { name: tokenName, type: 'color' };
    default:
      return false;
  }
}
